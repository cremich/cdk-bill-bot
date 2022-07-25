import { Stack, assertions, aws_s3 as s3 } from "aws-cdk-lib";
import { CostAndUsageDataCatalog } from "../src/datacatalog";
let stack: Stack;

describe("Report data catalog", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  test("Glue crawler is created", () => {
    new CostAndUsageDataCatalog(stack, "bill-bot-cur-catalog", {
      curBucket: new s3.Bucket(stack, "bucket"),
    });
    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Glue::Crawler", {
      Role: {
        "Fn::GetAtt": ["billbotcurcataloggluerole50C049D8", "Arn"],
      },
      Targets: {
        S3Targets: [
          {
            Exclusions: [
              "**.json",
              "**.yml",
              "**.sql,",
              "**.csv",
              "**.gz",
              "**.zip",
              "**/cost_and_usage_data_status/*",
            ],
            Path: {
              "Fn::Join": [
                "",
                [
                  "s3://",
                  {
                    Ref: "bucket43879C71",
                  },
                ],
              ],
            },
          },
        ],
      },
      Configuration:
        '{"Version":1,"CrawlerOutput":{"Tables":{"AddOrUpdateBehavior":"MergeNewColumns"}},"Grouping":{"TableGroupingPolicy":"CombineCompatibleSchemas"}}',
      DatabaseName: {
        Ref: "billbotcurcatalogdatabase633FC613",
      },
      Name: "billbotcurcatalog",
      SchemaChangePolicy: {
        DeleteBehavior: "LOG",
        UpdateBehavior: "UPDATE_IN_DATABASE",
      },
    });
  });

  test("Glue IAM role is created", () => {
    new CostAndUsageDataCatalog(stack, "bill-bot-cur-catalog", {
      curBucket: new s3.Bucket(stack, "bucket"),
    });
    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::IAM::Role", {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: "sts:AssumeRole",
            Effect: "Allow",
            Principal: {
              Service: "glue.amazonaws.com",
            },
          },
        ],
        Version: "2012-10-17",
      },
      ManagedPolicyArns: [
        {
          "Fn::Join": [
            "",
            [
              "arn:",
              {
                Ref: "AWS::Partition",
              },
              ":iam::aws:policy/service-role/AWSGlueServiceRole",
            ],
          ],
        },
      ],
      Policies: [
        {
          PolicyDocument: {
            Statement: [
              {
                Action: ["s3:GetObject", "s3:PutObject"],
                Effect: "Allow",
                Resource: {
                  "Fn::Join": [
                    "",
                    [
                      {
                        "Fn::GetAtt": ["bucket43879C71", "Arn"],
                      },
                      "/*",
                    ],
                  ],
                },
              },
            ],
            Version: "2012-10-17",
          },
          PolicyName: "curDataBucketAccess",
        },
      ],
    });
  });

  test("Athena workgroup is created", () => {
    new CostAndUsageDataCatalog(stack, "bill-bot-cur-catalog", {
      curBucket: new s3.Bucket(stack, "bucket"),
    });
    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Athena::WorkGroup", {
      Name: "billbotcurcatalog",
      Description: "Workgroup for Bill bot queries",
      State: "ENABLED",
      WorkGroupConfiguration: {
        ResultConfiguration: {
          EncryptionConfiguration: {
            EncryptionOption: "SSE_S3",
          },
          OutputLocation: {
            "Fn::Join": [
              "",
              [
                "s3://",
                {
                  Ref: "billbotcurcatalogathenaresults9DD894FC",
                },
                "/",
              ],
            ],
          },
        },
      },
    });
  });
});
