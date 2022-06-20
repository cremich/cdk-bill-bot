import { Stack, assertions, aws_s3 as s3 } from "aws-cdk-lib";
import { Match } from "aws-cdk-lib/assertions";
import { CURBucket } from "../src/bucket";

let stack: Stack;

describe("CUR Bucket", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  test("Bucket props can be overwritten", () => {
    new CURBucket(stack, "bucket", {
      encryption: s3.BucketEncryption.UNENCRYPTED,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::S3::Bucket", {
      BucketEncryption: Match.absent(),
    });
  });

  test("Bucket is encrypted with S3 managed encryption by default", () => {
    new CURBucket(stack, "bucket", {});

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::S3::Bucket", {
      BucketEncryption: {
        ServerSideEncryptionConfiguration: [
          {
            ServerSideEncryptionByDefault: {
              SSEAlgorithm: "AES256",
            },
          },
        ],
      },
    });
  });

  test("Public access is blocked by default", () => {
    new CURBucket(stack, "bucket", {});

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::S3::Bucket", {
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });
  });

  test("Bucket forces communication via SSL", () => {
    new CURBucket(stack, "bucket", {});

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::S3::BucketPolicy", {
      PolicyDocument: {
        Statement: Match.arrayWith([
          {
            Action: "s3:*",
            Condition: {
              Bool: {
                "aws:SecureTransport": "false",
              },
            },
            Effect: "Deny",
            Principal: {
              AWS: "*",
            },
            Resource: [
              {
                "Fn::GetAtt": ["bucket43879C71", "Arn"],
              },
              {
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
            ],
          },
        ]),
      },
    });
  });

  test("Bucket policy grants putObject to AWS Billing", () => {
    new CURBucket(stack, "bucket", {});

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::S3::BucketPolicy", {
      PolicyDocument: {
        Statement: Match.arrayWith([
          {
            Action: "s3:PutObject",
            Condition: {
              StringEquals: {
                "aws:SourceArn": {
                  "Fn::Join": [
                    "",
                    [
                      "arn:aws:cur:us-east-1:",
                      {
                        Ref: "AWS::AccountId",
                      },
                      ":definition/*",
                    ],
                  ],
                },
                "aws:SourceAccount": {
                  Ref: "AWS::AccountId",
                },
              },
            },
            Effect: "Allow",
            Principal: {
              Service: "billingreports.amazonaws.com",
            },
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
        ]),
      },
    });
  });

  test("Bucket policy grants getBucketACL and getBucketPolicy to AWS Billing", () => {
    new CURBucket(stack, "bucket", {});

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::S3::BucketPolicy", {
      PolicyDocument: {
        Statement: Match.arrayWith([
          {
            Action: ["s3:GetBucketAcl", "s3:GetBucketPolicy"],
            Condition: {
              StringEquals: {
                "aws:SourceArn": {
                  "Fn::Join": [
                    "",
                    [
                      "arn:aws:cur:us-east-1:",
                      {
                        Ref: "AWS::AccountId",
                      },
                      ":definition/*",
                    ],
                  ],
                },
                "aws:SourceAccount": {
                  Ref: "AWS::AccountId",
                },
              },
            },
            Effect: "Allow",
            Principal: {
              Service: "billingreports.amazonaws.com",
            },
            Resource: {
              "Fn::GetAtt": ["bucket43879C71", "Arn"],
            },
          },
        ]),
      },
    });
  });
});
