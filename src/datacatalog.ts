import {
  aws_glue as glue,
  aws_iam as iam,
  aws_s3 as s3,
  aws_athena as athena,
  Names,
  Stack,
} from "aws-cdk-lib";
import { Construct } from "constructs";

/**
 * Properties for creating an AWS Cost and Usage data catalog
 */
export interface CostAndUsageDataCatalogProps {
  /**
   * The S3 bucket that contains the cost and usage report
   */
  readonly curBucket: s3.IBucket;

  /**
   * The S3 report path prefix. If not provided, we will fallback to a default of <account_id>_cur.
   * This value will influence where to crawl the data to prevent creating too many tables as well as
   * the final name of the Glue table that is created
   *
   * @see https://docs.aws.amazon.com/cur/latest/userguide/cur-create.html
   */
  readonly reportPathPrefix?: string;
}

/**
 * A new cost and usage data catalog containing
 * - an AWS Glue crawler
 * - an Amazon Athena workgroup to query data
 * - an S3 Bucket where Amazon Athena can write the results into.
 */
export class CostAndUsageDataCatalog extends Construct {
  /**
   * The bucket where AWS delivers the report
   */
  public readonly curBucket: s3.IBucket;

  /**
   * The bucket where Amazon Athena writes query results
   */
  public readonly athenaBucket: s3.IBucket;

  /**
   * The name of the AWS Glue crawler that creates the data catalog
   */
  public readonly crawler: glue.CfnCrawler;

  /**
   * The name of the Amazon Athena workgroup to query the data catalog
   */
  public readonly athenaWorkgroup: athena.CfnWorkGroup;

  /**
   * The name of the AWS Glue database for your cost and usage data
   */
  public readonly glueDatabase: glue.CfnDatabase;

  /**
   * The name of the AWS Glue table to query your cost and usage data
   */
  public readonly glueTableName: string;

  constructor(
    scope: Construct,
    id: string,
    props: CostAndUsageDataCatalogProps
  ) {
    super(scope, id);
    this.curBucket = props.curBucket;

    const glueRole = new iam.Role(this, "glue-role", {
      assumedBy: new iam.ServicePrincipal("glue.amazonaws.com"),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          "service-role/AWSGlueServiceRole"
        ),
      ],
      inlinePolicies: {
        curDataBucketAccess: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              resources: [`${this.curBucket.bucketArn}/*`],
              actions: ["s3:GetObject", "s3:PutObject"],
            }),
          ],
        }),
      },
    });

    this.glueDatabase = new glue.CfnDatabase(this, "database", {
      catalogId: Stack.of(this).account,
      databaseInput: {},
    });

    const prefix = props.reportPathPrefix
      ? props.reportPathPrefix
      : `${Stack.of(this).account}-cur`;

    this.crawler = new glue.CfnCrawler(this, "crawler", {
      role: glueRole.roleArn,
      name: Names.uniqueId(this),
      targets: {
        s3Targets: [
          {
            path: `s3://${this.curBucket.bucketName}/${prefix}/`,
            exclusions: [
              "**.json",
              "**.yml",
              "**.sql,",
              "**.csv",
              "**.gz",
              "**.zip",
              "**/cost_and_usage_data_status/*",
              "**test-object",
            ],
          },
        ],
      },
      databaseName: this.glueDatabase.ref,
      schemaChangePolicy: {
        updateBehavior: "UPDATE_IN_DATABASE",
        deleteBehavior: "LOG",
      },
      configuration: JSON.stringify({
        Version: 1.0,
        CrawlerOutput: { Tables: { AddOrUpdateBehavior: "MergeNewColumns" } },
        Grouping: { TableGroupingPolicy: "CombineCompatibleSchemas" },
      }),
      schedule: {
        scheduleExpression: "cron(0 7 * * ? *)",
      },
    });

    this.glueTableName = prefix;

    this.athenaBucket = new s3.Bucket(this, "athena-results", {
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    this.athenaWorkgroup = new athena.CfnWorkGroup(this, "workgroup", {
      name: Names.uniqueId(this),
      description: "Workgroup for Bill bot queries",
      state: "ENABLED",
      recursiveDeleteOption: true,
      workGroupConfiguration: {
        resultConfiguration: {
          encryptionConfiguration: {
            encryptionOption: "SSE_S3",
          },
          outputLocation: `s3://${this.athenaBucket.bucketName}/`,
        },
      },
    });
  }
}
