import { ErrorSlackNotification } from "../../../src/daily-spends/slack/error-message";

describe("Digest error notification", () => {
  test("Verify error message", async () => {
    const expectedBlocks = [
      {
        text: {
          text: "Ooops...something went wrong. :cry:",
          type: "plain_text",
        },
        type: "header",
      },
      { type: "divider" },
      {
        text: {
          text: "I am sorry to say this, but I was not able to analyze your daily spends. Here is the error I got:",
          type: "mrkdwn",
        },
        type: "section",
      },
      {
        text: {
          text: "> line 12:3: Table awsdatacatalog.curcatalogdatabase.table does not exist",
          type: "mrkdwn",
        },
        type: "section",
      },
      {
        text: {
          text: "Please keep in mind, it can take up to *24 hours* for AWS to start delivering data to for your cost and usage reports. After delivery starts, AWS updates the AWS Cost and Usage Reports files at least once a day.",
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

    const error = new ErrorSlackNotification(
      "line 12:3: Table awsdatacatalog.curcatalogdatabase.table does not exist"
    );
    expect(error.buildSlackMessage()).toEqual(expectedBlocks);
  });
});
