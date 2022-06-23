import { aws_cur as cur, Names, Stack } from "aws-cdk-lib";
import { Construct } from "constructs";
import { CURBucket } from "./bucket";

/**
 * The compression format that AWS uses for the report.
 */
export enum Compression {
  /**
   * Zip compression
   */
  ZIP = "ZIP",

  /**
   * Gzip compression
   */
  GZIP = "GZIP",

  /**
   * Parquet compression
   */
  PARQUET = "Parquet",
}

/**
 * The format that AWS saves the report in.
 */
export enum Format {
  /**
   * Text or CSV format
   */
  TEXT_OR_CSV = "textORcsv",

  /**
   * Parquet format
   */
  PARQUET = "Parquet",
}

/**
 * Whether you want AWS to overwrite the previous version of each report or to deliver the
 * report in addition to the previous versions.
 */
export enum Versioning {
  /**
   * Create a new report version
   */
  CREATE_NEW_REPORT = "CREATE_NEW_REPORT",

  /**
   * Overwrite existing report
   */
  OVERWRITE_REPORT = "OVERWRITE_REPORT",
}

/**
 * The length of time covered by the report.
 */
export enum TimeUnit {
  /**
   * Time covered per hour
   */
  HOURLY = "HOURLY",

  /**
   * Time covered per day
   */
  DAILY = "DAILY",

  /**
   * Time covered per month
   */
  MONTHLY = "MONTHLY",
}

/**
 * Properties for creating an AWS Cost and Usage Report
 */
export interface CostAndUsageReportProps {
  readonly bucket?: CURBucket;
  readonly compression: Compression;
  readonly format: Format;
  readonly refreshClosedReports?: boolean;
  readonly versioning?: Versioning;
  readonly timeUnit: TimeUnit;
}

export class CostAndUsageReport extends Construct {
  /**
   * The bucket where AWS delivers the report
   */
  public readonly bucket: CURBucket;

  /**
   * The name of the cost and usage report
   */
  public readonly name: string;

  constructor(scope: Construct, id: string, props: CostAndUsageReportProps) {
    super(scope, id);

    this.bucket = props.bucket ? props.bucket : new CURBucket(this, "bucket");

    const report = new cur.CfnReportDefinition(this, "report", {
      compression: props.compression.toString(),
      format: props.format.toString(),
      refreshClosedReports: props.refreshClosedReports
        ? props.refreshClosedReports
        : false,
      reportName: Names.uniqueId(this),
      reportVersioning: props.versioning
        ? props.versioning.toString()
        : Versioning.OVERWRITE_REPORT,
      s3Bucket: this.bucket.bucketName,
      s3Prefix: `${Stack.of(this).account}-cur`,
      s3Region: this.bucket.region,
      timeUnit: props.timeUnit.toString(),
    });

    this.name = report.ref;
  }
}
