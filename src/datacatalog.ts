import {
  aws_glue as glue,
  aws_iam as iam,
  aws_s3 as s3,
  aws_athena as athena,
  Names,
} from "aws-cdk-lib";
import { Construct } from "constructs";

/**
 * Properties for creating an AWS Cost and Usage data catalog
 */
export interface CostAndUsageDataCatalogProps {
  readonly curBucket: s3.IBucket;
}

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

    this.crawler = new glue.CfnCrawler(this, "crawler", {
      role: glueRole.roleArn,
      name: Names.uniqueId(this),
      targets: {
        s3Targets: [
          {
            path: `s3://${this.curBucket.bucketName}`,
            exclusions: [
              "**.json",
              "**.yml",
              "**.sql,",
              "**.csv",
              "**.gz",
              "**.zip",
              "**/cost_and_usage_data_status/*",
            ],
          },
        ],
      },
      databaseName: "db_" + Names.uniqueId(this),
      schemaChangePolicy: {
        updateBehavior: "UPDATE_IN_DATABASE",
        deleteBehavior: "LOG",
      },
      configuration: JSON.stringify({
        Version: 1.0,
        CrawlerOutput: { Tables: { AddOrUpdateBehavior: "MergeNewColumns" } },
        Grouping: { TableGroupingPolicy: "CombineCompatibleSchemas" },
      }),
    });

    this.athenaBucket = new s3.Bucket(this, "athena-results", {
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    this.athenaWorkgroup = new athena.CfnWorkGroup(this, "workgroup", {
      name: Names.uniqueId(this),
      description: "Workgroup for Bill bot queries",
      state: "ENABLED",
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
