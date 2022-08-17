import {
  aws_stepfunctions as sfn,
  aws_stepfunctions_tasks as tasks,
  aws_iam as iam,
  aws_athena as athena,
  aws_events as events,
  aws_events_targets as targets,
  Stack,
  Names,
} from "aws-cdk-lib";
import { Construct } from "constructs";
import { CostAndUsageDataCatalog } from "..";
import { AthenaErrorFunction } from "./slack/athena-error-function";
import { DigestNotificationFunction } from "./slack/digest-notification-function";
import { YesterdayFunction } from "./yesterday-function";

/**
 * Properties for creating AWS resources to provide a daily spends digest analysis.
 */
export interface DailySpendsDigestProps {
  /**
   * A reference to your cost and usage data catalog.
   */
  readonly datacatalog: CostAndUsageDataCatalog;

  /**
   * The Slack webhook URL to send report results to. If this url is empty or invalid,
   * the construct creation will fail with an error.
   */
  readonly slackWebHookUrl: string;
}

/**
 * A new set of resources to provide a daily spends digest.
 */
export class DailySpendsDigest extends Construct {
  readonly stateMachine: sfn.StateMachine;
  readonly preparedStatement: athena.CfnPreparedStatement;

  constructor(scope: Construct, id: string, props: DailySpendsDigestProps) {
    super(scope, id);
    if (
      !process.env.BILL_DEFAULT_TEMPLATE_SYNTH_MODE &&
      !this.isSlackWebHookValid(props.slackWebHookUrl)
    ) {
      throw Error(`slack webhook url ${props.slackWebHookUrl} is invalid`);
    }

    this.preparedStatement = new athena.CfnPreparedStatement(
      this,
      "daily-spends",
      {
        statementName: Names.uniqueId(this),
        queryStatement: this.getDailySpendsQuery(
          props.datacatalog.glueTableName
        ),
        workGroup: props.datacatalog.athenaWorkgroup.name,
      }
    );
    this.preparedStatement.addDependsOn(props.datacatalog.athenaWorkgroup);

    this.stateMachine = this.createStateMachine(props, this.preparedStatement);
  }

  private createStateMachine(
    props: DailySpendsDigestProps,
    preparedStatement: athena.CfnPreparedStatement
  ): sfn.StateMachine {
    const yesterdayFunction = new YesterdayFunction(this, "yesterday");
    const athenaErrorFunction = new AthenaErrorFunction(this, "athena-error", {
      environment: {
        WEBHOOK_URL: props.slackWebHookUrl,
      },
    });

    const slackMessageFunction = new DigestNotificationFunction(
      this,
      "digest-slack-message",
      {
        environment: {
          WEBHOOK_URL: props.slackWebHookUrl,
        },
      }
    );
    props.datacatalog.athenaBucket.grantRead(slackMessageFunction);

    const getYesterday = new tasks.LambdaInvoke(this, "Get yesterday's date", {
      lambdaFunction: yesterdayFunction,
    });

    const catchAthenaError = new tasks.LambdaInvoke(
      this,
      "Send athena error slack message",
      {
        lambdaFunction: athenaErrorFunction,
        payload: sfn.TaskInput.fromObject({
          cause: sfn.JsonPath.stringAt("$.Cause"),
        }),
      }
    );

    const startQueryExecution = new tasks.AthenaStartQueryExecution(
      this,
      "Start Athena Query",
      {
        integrationPattern: sfn.IntegrationPattern.RUN_JOB,
        queryString: sfn.JsonPath.stringAt(
          "States.Format('EXECUTE bill_daily_spends USING \\'{}\\'', $.Payload)".replace(
            "bill_daily_spends",
            preparedStatement.statementName
          )
        ),
        workGroup: props.datacatalog.athenaWorkgroup.name,
        queryExecutionContext: {
          databaseName: props.datacatalog.glueDatabase.ref,
        },
      }
    );

    startQueryExecution.addCatch(catchAthenaError);

    const buildSlackMessage = new tasks.LambdaInvoke(
      this,
      "Build slack message",
      {
        lambdaFunction: slackMessageFunction,
        payload: sfn.TaskInput.fromObject({
          resultLocation: sfn.JsonPath.stringAt(
            "$.QueryExecution.ResultConfiguration.OutputLocation"
          ),
        }),
      }
    );

    const stateMachine = new sfn.StateMachine(this, "workflow", {
      definition: getYesterday
        .next(startQueryExecution)
        .next(buildSlackMessage),
    });

    stateMachine.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ["athena:GetPreparedStatement"],
        resources: [
          Stack.of(this).formatArn({
            service: "athena",
            resource: "workgroup",
            resourceName: props.datacatalog.athenaWorkgroup.name,
          }),
        ],
      })
    );

    const rule = new events.Rule(this, "schedule", {
      schedule: events.Schedule.cron({ minute: "0", hour: "8" }),
    });
    rule.addTarget(new targets.SfnStateMachine(stateMachine));

    return stateMachine;
  }

  private getDailySpendsQuery(tableName: string): string {
    return `SELECT 
    DATE_FORMAT((line_item_usage_start_date),'%Y-%m-%d') AS usage_start_date,
    bill_bill_type as bill_type,
    CASE
      WHEN (line_item_line_item_type = 'Usage' AND product_product_family = 'Data Transfer') THEN CONCAT('DataTransfer - ',product_product_name) 
      ELSE product_product_name
    END AS service_name,
    product_location as region,
    line_item_line_item_description as usage_description,
    SUM(CAST(line_item_usage_amount AS DECIMAL(16,8))) AS total_usage,
    SUM(CAST(line_item_unblended_cost AS DECIMAL(16,8))) AS total_costs,
    bill_payer_account_id as payer_account_id,
    line_item_usage_account_id as usage_account_id
  FROM 
      "${tableName.replace(/-/g, "_")}"
  WHERE
    DATE_FORMAT((line_item_usage_start_date),'%Y-%m-%d') = ? AND
    line_item_line_item_type  LIKE '%Usage%'
  GROUP BY
    1,
    2,
    3,
    4,
    5,
    8,
    9
  HAVING SUM(CAST(line_item_unblended_cost AS DECIMAL(16,8))) > 0.00000000
  ORDER BY 
    7`;
  }

  private isSlackWebHookValid(webhookUrl: string) {
    return /https:\/\/hooks.slack.com\/services\/[A-Z0-9]*\/[A-Z0-9]*\/[A-Za-z0-9]*/gm.test(
      webhookUrl
    );
  }
}
