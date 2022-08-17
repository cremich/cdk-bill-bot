import { Stack, aws_s3 as s3, assertions } from "aws-cdk-lib";
import { DailySpendsDigest } from "../../src/daily-spends/digest";
import { CostAndUsageDataCatalog } from "../../src/datacatalog";

let stack: Stack;

describe("Daily spends digest", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  test("Verify prepared statement with custom report prefix", async () => {
    const datacatalog = new CostAndUsageDataCatalog(
      stack,
      "bill-bot-cur-catalog",
      {
        curBucket: new s3.Bucket(stack, "bucket"),
        reportPathPrefix: "cdk-bill-bot",
      }
    );

    new DailySpendsDigest(stack, "daily-spends-digest", {
      datacatalog: datacatalog,
      slackWebHookUrl:
        "https://hooks.slack.com/services/WORKSPACE/CHANNEL/ran0omI3",
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Athena::PreparedStatement", {
      QueryStatement:
        "SELECT \n    DATE_FORMAT((line_item_usage_start_date),'%Y-%m-%d') AS usage_start_date,\n    bill_bill_type as bill_type,\n    CASE\n      WHEN (line_item_line_item_type = 'Usage' AND product_product_family = 'Data Transfer') THEN CONCAT('DataTransfer - ',product_product_name) \n      ELSE product_product_name\n    END AS service_name,\n    product_location as region,\n    line_item_line_item_description as usage_description,\n    SUM(CAST(line_item_usage_amount AS DECIMAL(16,8))) AS total_usage,\n    SUM(CAST(line_item_unblended_cost AS DECIMAL(16,8))) AS total_costs,\n    bill_payer_account_id as payer_account_id,\n    line_item_usage_account_id as usage_account_id\n  FROM \n      \"cdk_bill_bot\"\n  WHERE\n    DATE_FORMAT((line_item_usage_start_date),'%Y-%m-%d') = ? AND\n    line_item_line_item_type  LIKE '%Usage%'\n  GROUP BY\n    1,\n    2,\n    3,\n    4,\n    5,\n    8,\n    9\n  HAVING SUM(CAST(line_item_unblended_cost AS DECIMAL(16,8))) > 0.00000000\n  ORDER BY \n    7",
      StatementName: "dailyspendsdigest",
      WorkGroup: "billbotcurcatalog",
    });
  });

  test("Verify prepared statement is created", async () => {
    const datacatalog = new CostAndUsageDataCatalog(
      stack,
      "bill-bot-cur-catalog",
      {
        curBucket: new s3.Bucket(stack, "bucket"),
      }
    );

    new DailySpendsDigest(stack, "daily-spends-digest", {
      datacatalog: datacatalog,
      slackWebHookUrl:
        "https://hooks.slack.com/services/WORKSPACE/CHANNEL/ran0omI3",
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Athena::PreparedStatement", {
      QueryStatement: {
        "Fn::Join": [
          "",
          [
            "SELECT \n    DATE_FORMAT((line_item_usage_start_date),'%Y-%m-%d') AS usage_start_date,\n    bill_bill_type as bill_type,\n    CASE\n      WHEN (line_item_line_item_type = 'Usage' AND product_product_family = 'Data Transfer') THEN CONCAT('DataTransfer - ',product_product_name) \n      ELSE product_product_name\n    END AS service_name,\n    product_location as region,\n    line_item_line_item_description as usage_description,\n    SUM(CAST(line_item_usage_amount AS DECIMAL(16,8))) AS total_usage,\n    SUM(CAST(line_item_unblended_cost AS DECIMAL(16,8))) AS total_costs,\n    bill_payer_account_id as payer_account_id,\n    line_item_usage_account_id as usage_account_id\n  FROM \n      \"",
            {
              Ref: "AWS::AccountId",
            },
            "_cur\"\n  WHERE\n    DATE_FORMAT((line_item_usage_start_date),'%Y-%m-%d') = ? AND\n    line_item_line_item_type  LIKE '%Usage%'\n  GROUP BY\n    1,\n    2,\n    3,\n    4,\n    5,\n    8,\n    9\n  HAVING SUM(CAST(line_item_unblended_cost AS DECIMAL(16,8))) > 0.00000000\n  ORDER BY \n    7",
          ],
        ],
      },
      StatementName: "dailyspendsdigest",
      WorkGroup: "billbotcurcatalog",
    });
  });

  test("Verify state machine definition", () => {
    const datacatalog = new CostAndUsageDataCatalog(
      stack,
      "bill-bot-cur-catalog",
      {
        curBucket: new s3.Bucket(stack, "bucket"),
      }
    );

    new DailySpendsDigest(stack, "daily-spends-digest", {
      datacatalog: datacatalog,
      slackWebHookUrl:
        "https://hooks.slack.com/services/WORKSPACE/CHANNEL/ran0omI3",
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::StepFunctions::StateMachine", {
      RoleArn: {
        "Fn::GetAtt": ["dailyspendsdigestworkflowRoleDFC1C66D", "Arn"],
      },
      DefinitionString: {
        "Fn::Join": [
          "",
          [
            '{"StartAt":"Get yesterday\'s date","States":{"Get yesterday\'s date":{"Next":"Start Athena Query","Retry":[{"ErrorEquals":["Lambda.ServiceException","Lambda.AWSLambdaException","Lambda.SdkClientException"],"IntervalSeconds":2,"MaxAttempts":6,"BackoffRate":2}],"Type":"Task","Resource":"arn:',
            {
              Ref: "AWS::Partition",
            },
            ':states:::lambda:invoke","Parameters":{"FunctionName":"',
            {
              "Fn::GetAtt": ["dailyspendsdigestyesterday8824FADC", "Arn"],
            },
            '","Payload.$":"$"}},"Start Athena Query":{"Next":"Build slack message","Catch":[{"ErrorEquals":["States.ALL"],"Next":"Send athena error slack message"}],"Type":"Task","Resource":"arn:',
            {
              Ref: "AWS::Partition",
            },
            ':states:::athena:startQueryExecution.sync","Parameters":{"QueryString.$":"States.Format(\'EXECUTE dailyspendsdigest USING \\\\\'{}\\\\\'\', $.Payload)","QueryExecutionContext":{"Database":"',
            {
              Ref: "billbotcurcatalogdatabase633FC613",
            },
            '"},"ResultConfiguration":{},"WorkGroup":"billbotcurcatalog"}},"Build slack message":{"End":true,"Retry":[{"ErrorEquals":["Lambda.ServiceException","Lambda.AWSLambdaException","Lambda.SdkClientException"],"IntervalSeconds":2,"MaxAttempts":6,"BackoffRate":2}],"Type":"Task","Resource":"arn:',
            {
              Ref: "AWS::Partition",
            },
            ':states:::lambda:invoke","Parameters":{"FunctionName":"',
            {
              "Fn::GetAtt": [
                "dailyspendsdigestdigestslackmessage8D36F160",
                "Arn",
              ],
            },
            '","Payload":{"resultLocation.$":"$.QueryExecution.ResultConfiguration.OutputLocation"}}},"Send athena error slack message":{"End":true,"Retry":[{"ErrorEquals":["Lambda.ServiceException","Lambda.AWSLambdaException","Lambda.SdkClientException"],"IntervalSeconds":2,"MaxAttempts":6,"BackoffRate":2}],"Type":"Task","Resource":"arn:',
            {
              Ref: "AWS::Partition",
            },
            ':states:::lambda:invoke","Parameters":{"FunctionName":"',
            {
              "Fn::GetAtt": ["dailyspendsdigestathenaerror639F33D8", "Arn"],
            },
            '","Payload":{"cause.$":"$.Cause"}}}}}',
          ],
        ],
      },
    });
  });

  test("Verify state machine has policy to", () => {
    const datacatalog = new CostAndUsageDataCatalog(
      stack,
      "bill-bot-cur-catalog",
      {
        curBucket: new s3.Bucket(stack, "bucket"),
      }
    );

    new DailySpendsDigest(stack, "daily-spends-digest", {
      datacatalog: datacatalog,
      slackWebHookUrl:
        "https://hooks.slack.com/services/WORKSPACE/CHANNEL/ran0omI3",
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::IAM::Policy", {
      Roles: [
        {
          Ref: "dailyspendsdigestworkflowRoleDFC1C66D",
        },
      ],
      PolicyName: "dailyspendsdigestworkflowRoleDefaultPolicy42E4124B",
      PolicyDocument: {
        Statement: assertions.Match.arrayWith([
          {
            Action: "athena:GetPreparedStatement",
            Effect: "Allow",
            Resource: {
              "Fn::Join": [
                "",
                [
                  "arn:",
                  {
                    Ref: "AWS::Partition",
                  },
                  ":athena:",
                  {
                    Ref: "AWS::Region",
                  },
                  ":",
                  {
                    Ref: "AWS::AccountId",
                  },
                  ":workgroup/billbotcurcatalog",
                ],
              ],
            },
          },
        ]),
      },
    });
  });

  test("Construct creation failes if webhook is empty", () => {
    const datacatalog = new CostAndUsageDataCatalog(
      stack,
      "bill-bot-cur-catalog",
      {
        curBucket: new s3.Bucket(stack, "bucket"),
      }
    );

    expect(
      () =>
        new DailySpendsDigest(stack, "daily-spends-digest", {
          datacatalog: datacatalog,
          slackWebHookUrl: "",
        })
    ).toThrow("slack webhook url  is invalid");
  });

  test("Construct creation failes if webhook is invalid", () => {
    const datacatalog = new CostAndUsageDataCatalog(
      stack,
      "bill-bot-cur-catalog",
      {
        curBucket: new s3.Bucket(stack, "bucket"),
      }
    );

    expect(
      () =>
        new DailySpendsDigest(stack, "daily-spends-digest", {
          datacatalog: datacatalog,
          slackWebHookUrl: "this-is-invalid",
        })
    ).toThrow(`slack webhook url this-is-invalid is invalid`);
  });

  test("Webhook url is not validated in default template synth mode", () => {
    process.env.BILL_DEFAULT_TEMPLATE_SYNTH_MODE = "true";
    const datacatalog = new CostAndUsageDataCatalog(
      stack,
      "bill-bot-cur-catalog",
      {
        curBucket: new s3.Bucket(stack, "bucket"),
      }
    );

    expect(
      () =>
        new DailySpendsDigest(stack, "daily-spends-digest", {
          datacatalog: datacatalog,
          slackWebHookUrl: "invalid-url",
        })
    ).not.toThrow("slack webhook url invalid-url is invalid");
    delete process.env.BILL_DEFAULT_TEMPLATE_SYNTH_MODE;
  });

  test("Workflow is triggered once a day at 8am", async () => {
    const datacatalog = new CostAndUsageDataCatalog(
      stack,
      "bill-bot-cur-catalog",
      {
        curBucket: new s3.Bucket(stack, "bucket"),
      }
    );

    new DailySpendsDigest(stack, "daily-spends-digest", {
      datacatalog: datacatalog,
      slackWebHookUrl:
        "https://hooks.slack.com/services/WORKSPACE/CHANNEL/ran0omI3",
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Events::Rule", {
      ScheduleExpression: "cron(0 8 * * ? *)",
      State: "ENABLED",
      Targets: [
        {
          Arn: {
            Ref: "dailyspendsdigestworkflow5F358DD4",
          },
          Id: "Target0",
          RoleArn: {
            "Fn::GetAtt": [
              "dailyspendsdigestworkflowEventsRole7FD06A6B",
              "Arn",
            ],
          },
        },
      ],
    });
  });
});
