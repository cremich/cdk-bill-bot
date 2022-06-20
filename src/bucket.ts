import { aws_s3 as s3, aws_iam as iam, Stack } from "aws-cdk-lib";
import { Construct } from "constructs";

/**
 * Properties for creating an Amazon S3 bucket for cost and usage reports
 */
export interface CURBucketProps extends s3.BucketProps {}

/**
 * A new Amazon S3 bucket for cost and usage reports
 */
export class CURBucket extends s3.Bucket {
  /**
   * The region this bucket is provisioned
   */
  public readonly region: string;

  constructor(scope: Construct, id: string, props: CURBucketProps = {}) {
    super(scope, id, {
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
      ...props,
    });

    this.region = Stack.of(this).region;

    this.grantBillingPermisions();
  }

  /**
   * Allos AWS Billing access to export CUR files into this bucket.
   * @see https://docs.aws.amazon.com/cur/latest/userguide/cur-s3.html
   */
  private grantBillingPermisions() {
    const readPolicy = new iam.PolicyStatement({
      actions: ["s3:GetBucketAcl", "s3:GetBucketPolicy"],
      resources: [this.bucketArn],
      principals: [new iam.ServicePrincipal("billingreports.amazonaws.com")],
      conditions: {
        StringEquals: {
          "aws:SourceArn": `arn:aws:cur:us-east-1:${
            Stack.of(this).account
          }:definition/*`,

          "aws:SourceAccount": Stack.of(this).account,
        },
      },
    });

    const writePolicy = new iam.PolicyStatement({
      actions: ["s3:PutObject"],
      resources: [`${this.bucketArn}/*`],
      principals: [new iam.ServicePrincipal("billingreports.amazonaws.com")],
      conditions: {
        StringEquals: {
          "aws:SourceArn": `arn:aws:cur:us-east-1:${
            Stack.of(this).account
          }:definition/*`,
          "aws:SourceAccount": Stack.of(this).account,
        },
      },
    });

    this.addToResourcePolicy(readPolicy);
    this.addToResourcePolicy(writePolicy);
  }
}
