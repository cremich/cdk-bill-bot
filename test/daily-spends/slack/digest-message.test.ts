import { DailySpendsReport } from "../../../src/daily-spends/report";
import { DailySpendsDigestSlackNotification } from "../../../src/daily-spends/slack/digest-message";

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

describe("Digest slack notification", () => {
  test("Verify digest message for non public report", async () => {
    const expectedBlocks = [
      {
        text: { text: ":moneybag: Your daily AWS spends", type: "plain_text" },
        type: "header",
      },
      {
        elements: [
          {
            text: ":date:  *Thu, July 21, 2022*  |  :cloud:  AWS Payer Account 123456789",
            type: "mrkdwn",
          },
        ],
        type: "context",
      },
      { type: "divider" },
      {
        text: {
          text: "I analyzed your AWS service usage for Thu, July 21, 2022. On this day you spend *$ 3.00* in total.",
          type: "mrkdwn",
        },
        type: "section",
      },
      { type: "divider" },
      {
        elements: [
          {
            text: ":love_letter: *Want to provide feedback?* Open an issue on <https://github.com/cremich/cdk-bill-bot>",
            type: "mrkdwn",
          },
        ],
        type: "context",
      },
    ];

    const report = new DailySpendsReport(reportRows);
    const message = new DailySpendsDigestSlackNotification(report);
    expect(message.buildSlackMessage()).toEqual(expectedBlocks);
  });

  test("Verify empty report message", () => {
    const expectedBlocks = [
      {
        text: { text: ":moneybag: Your daily AWS spends", type: "plain_text" },
        type: "header",
      },
      { type: "divider" },
      {
        text: {
          text: "I tried to analyze your AWS Service usage, but your daily report did not contain any data. This could be valid because you don't had any AWS service usage at all.",
          type: "mrkdwn",
        },
        type: "section",
      },
      { type: "divider" },
      {
        elements: [
          {
            text: ":love_letter: *Want to provide feedback?* Open an issue on <https://github.com/cremich/cdk-bill-bot>",
            type: "mrkdwn",
          },
        ],
        type: "context",
      },
    ];

    const report = new DailySpendsReport([]);
    const message = new DailySpendsDigestSlackNotification(report);
    expect(message.buildSlackMessage()).toEqual(expectedBlocks);
  });

  test("Verify digest message for public report", () => {
    const expectedBlocks = [
      {
        text: { text: ":moneybag: Your daily AWS spends", type: "plain_text" },
        type: "header",
      },
      {
        elements: [
          {
            text: ":date:  *Thu, July 21, 2022*  |  :cloud:  AWS Payer Account 123456789",
            type: "mrkdwn",
          },
        ],
        type: "context",
      },
      { type: "divider" },
      {
        text: {
          text: "I analyzed your AWS service usage for Thu, July 21, 2022. On this day you spend *$ 3.00* in total.",
          type: "mrkdwn",
        },
        type: "section",
      },
      {
        text: {
          text: "You want more details about your daily spends? Please download your <https://my.public-url.com|daily spends report>. This link will automatically expire in 15 minutes.",
          type: "mrkdwn",
        },
        type: "section",
      },
      { type: "divider" },
      {
        elements: [
          {
            text: ":love_letter: *Want to provide feedback?* Open an issue on <https://github.com/cremich/cdk-bill-bot>",
            type: "mrkdwn",
          },
        ],
        type: "context",
      },
    ];

    const report = new DailySpendsReport(reportRows);
    report.makePublic("https://my.public-url.com");
    const message = new DailySpendsDigestSlackNotification(report);
    expect(message.buildSlackMessage()).toEqual(expectedBlocks);
  });
});
