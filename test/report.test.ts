import { Stack, assertions } from "aws-cdk-lib";
import { CURBucket } from "../src/bucket";
import {
  Compression,
  CostAndUsageReport,
  Format,
  TimeUnit,
  Versioning,
} from "../src/report";

let stack: Stack;

describe("Report", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  test("Bucket is created if none provided", () => {
    new CostAndUsageReport(stack, "Cur", {
      compression: Compression.PARQUET,
      format: Format.PARQUET,
      name: "Cur",
      timeUnit: TimeUnit.DAILY,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.resourceCountIs("AWS::S3::Bucket", 1);
  });

  test("Cur is created with defaults", () => {
    new CostAndUsageReport(stack, "Cur", {
      compression: Compression.PARQUET,
      format: Format.PARQUET,
      name: "Cur",
      timeUnit: TimeUnit.DAILY,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::CUR::ReportDefinition", {
      Compression: "Parquet",
      Format: "Parquet",
      RefreshClosedReports: false,
      ReportName: "Cur",
      ReportVersioning: "OVERWRITE_REPORT",
      TimeUnit: "DAILY",
    });
  });

  test("Cur report versioning is set", () => {
    new CostAndUsageReport(stack, "Cur", {
      compression: Compression.PARQUET,
      format: Format.PARQUET,
      name: "Cur",
      timeUnit: TimeUnit.DAILY,
      versioning: Versioning.CREATE_NEW_REPORT,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::CUR::ReportDefinition", {
      ReportVersioning: "CREATE_NEW_REPORT",
    });
  });

  test("Cur report refresh closed reports is set", () => {
    new CostAndUsageReport(stack, "Cur", {
      compression: Compression.PARQUET,
      format: Format.PARQUET,
      name: "Cur",
      timeUnit: TimeUnit.DAILY,
      refreshClosedReports: true,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::CUR::ReportDefinition", {
      RefreshClosedReports: true,
    });
  });

  test("Cur report time unit is set", () => {
    new CostAndUsageReport(stack, "Cur", {
      compression: Compression.PARQUET,
      format: Format.PARQUET,
      name: "Cur",
      timeUnit: TimeUnit.HOURLY,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::CUR::ReportDefinition", {
      TimeUnit: "HOURLY",
    });
  });

  test("Cur report is connected to default bucket if none provided", () => {
    new CostAndUsageReport(stack, "Cur", {
      compression: Compression.PARQUET,
      format: Format.PARQUET,
      name: "Cur",
      timeUnit: TimeUnit.DAILY,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::CUR::ReportDefinition", {
      S3Bucket: {
        Ref: "CurbucketDC19903D",
      },
      S3Prefix: "cur",
      S3Region: {
        Ref: "AWS::Region",
      },
    });
  });

  test("Cur report is connected to external managed bucket", () => {
    const bucket = new CURBucket(stack, "bucket");
    new CostAndUsageReport(stack, "Cur", {
      compression: Compression.PARQUET,
      format: Format.PARQUET,
      name: "Cur",
      timeUnit: TimeUnit.DAILY,
      bucket,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::CUR::ReportDefinition", {
      S3Bucket: {
        Ref: "bucket43879C71",
      },
      S3Prefix: "cur",
      S3Region: {
        Ref: "AWS::Region",
      },
    });
  });
});
