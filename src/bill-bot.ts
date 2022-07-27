import { Construct } from "constructs";
import { DailySpendsDigest } from "./daily-spends/digest";
import { CostAndUsageDataCatalog } from "./datacatalog";
import { CostAndUsageReport, Compression, Format, TimeUnit } from "./report";

/**
 * Properties for creating Bill - the serverless cost optimization bot
 */
export interface BillProps {
  /**
   * The URL of your Slack Webhook where Bill sends messages to.
   */
  readonly slackWebHookUrl: string;
}

/**
 * L3 construct to create a new Bill Bot
 */
export class BillTheBot extends Construct {
  public readonly report: CostAndUsageReport;
  public readonly datacatalog: CostAndUsageDataCatalog;
  public readonly dailySpendsDigest: DailySpendsDigest;

  constructor(scope: Construct, id: string, props: BillProps) {
    super(scope, id);

    this.report = new CostAndUsageReport(this, "costs-report", {
      compression: Compression.PARQUET,
      format: Format.PARQUET,
      timeUnit: TimeUnit.HOURLY,
      refreshClosedReports: true,
    });

    this.datacatalog = this.report.addDataCatalog();

    this.dailySpendsDigest = new DailySpendsDigest(
      this,
      "daily-spends-digest",
      {
        datacatalog: this.datacatalog,
        slackWebHookUrl: props.slackWebHookUrl,
      }
    );
  }
}
