import fs from "fs";
import path from "path";
import { parse } from "csv-parse";
import { DailySpendsReport } from "../../src/daily-spends/report";
const csvParser = parse({
  delimiter: ",",
  columns: true,
});

const reportRows = [
  {
    usage_start_date: "2022-07-21",
    bill_type: "Anniversary",
    service_name: "Amazon Simple Storage Service",
    region: "EU (Frankfurt)",
    usage_description: "$0.0043 per 10,000 GET and all other requests",
    total_usage: "3.00000000",
    total_costs: "1.00000129",
    payer_account_id: "123456789",
    usage_account_id: "987654321",
  },
  {
    usage_start_date: "2022-07-21",
    bill_type: "Anniversary",
    service_name: "Amazon Simple Storage Service",
    region: "US East (N. Virginia)",
    usage_description: "$0.023 per GB - first 50 TB / month of storage used",
    total_usage: "0.00034942",
    total_costs: "2.00000804",
    payer_account_id: "123456789",
    usage_account_id: "987654321",
  },
];

describe("Daily spends report", () => {
  test("Report can be created from stream", async () => {
    const dailySpends = fs
      .createReadStream(path.resolve(__dirname, "./daily-spends.csv"))
      .pipe(csvParser);
    const report = await DailySpendsReport.read(dailySpends);
    expect(report.isEmpty()).toBeFalsy();
  });

  test("Default report is empty", () => {
    const report = new DailySpendsReport([]);
    expect(report.isEmpty()).toBeTruthy();
  });

  test("Default report is not public", () => {
    const report = new DailySpendsReport([]);
    expect(report.isPublic()).toBeFalsy();
  });

  test("Report is made public", () => {
    const report = new DailySpendsReport([]);
    report.makePublic("https://www.public.url");
    expect(report.isPublic()).toBeTruthy();
  });

  test("Report with data is not empty", () => {
    const report = new DailySpendsReport(reportRows);
    expect(report.isEmpty()).toBeFalsy();
  });

  test("Usage date is available", () => {
    const report = new DailySpendsReport(reportRows);
    expect(report.usageDate()).toEqual(new Date("2022-07-21T00:00:00.000Z"));
  });
  test("Usage date is not available in empty report", () => {
    const report = new DailySpendsReport([]);
    expect(() => report.usageDate()).toThrowError(
      "usage date not available. Report is empty."
    );
  });
  test("Payer account id is available", () => {
    const report = new DailySpendsReport(reportRows);
    expect(report.payerAccountId()).toEqual("123456789");
  });
  test("Payer account id is not available in empty report", () => {
    const report = new DailySpendsReport([]);
    expect(() => report.payerAccountId()).toThrow(
      "payer account not available. Report is empty."
    );
  });
  test("Total costs are summed", () => {
    const report = new DailySpendsReport(reportRows);
    expect(report.totalCosts()).toEqual(3.00000933);
  });
  test("Total costs are 0 for empty report", () => {
    const report = new DailySpendsReport([]);
    expect(report.totalCosts()).toEqual(0);
  });
});
