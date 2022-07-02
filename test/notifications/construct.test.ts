import { Stack, assertions } from "aws-cdk-lib";
import { Notifications } from "../../src/notifications/construct";
let stack: Stack;

describe("Notifications", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  test("Slack notifier lambda subscription is created", () => {
    const slackWebhookUrl = "https://hooks.slack.com/services/";
    new Notifications(stack, "bill-bot-notifications", {
      slackWebhookUrl,
    });

    const assert = assertions.Template.fromStack(stack);
    assert.hasResourceProperties("AWS::Lambda::Function", {
      Description: "src/notifications/slack.lambda.ts",
      Environment: {
        Variables: {
          WEBHOOK_URL: slackWebhookUrl,
          AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
        },
      },
    });
  });
});
