import { Readable } from "stream";

/**
 * Represents a row of a daily spends report
 */
export interface DailySpendsRow {
  usage_start_date: string;
  bill_type: string;
  service_name: string;
  region: string;
  usage_description: string;
  total_usage: string;
  total_costs: string;
  payer_account_id: string;
  usage_account_id: string;
}

/**
 * A daily spends report that can be created from a readable stream.
 */
export class DailySpendsReport {
  public static async read(readable: Readable): Promise<DailySpendsReport> {
    return new Promise((resolve, reject) => {
      const report = new DailySpendsReport([]);
      readable.on("data", (chunk) => report.addRow(chunk));
      readable.on("error", reject);
      readable.on("end", () => resolve(report));
    });
  }

  private readonly rows: DailySpendsRow[] = [];
  public url: string = "";

  constructor(rows: DailySpendsRow[]) {
    this.rows = rows;
  }

  public isPublic() {
    return this.url ? true : false;
  }

  public isEmpty() {
    return this.rows.length === 0 ? true : false;
  }

  public makePublic(url: string) {
    this.url = url;
  }

  usageDate(): Date | never {
    if (this.isEmpty()) {
      throw Error("usage date not available. Report is empty.");
    }
    return new Date(this.rows[0].usage_start_date);
  }

  payerAccountId(): string {
    return this.rows[0].payer_account_id;
  }

  totalCosts(): number {
    let totalCosts = 0.0;
    this.rows.forEach((usage) => {
      totalCosts += parseFloat(usage.total_costs);
    });
    return totalCosts;
  }

  private addRow(row: DailySpendsRow) {
    this.rows.push(row);
  }
}
