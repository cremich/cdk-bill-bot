import { Stack, assertions } from "aws-cdk-lib";
import { BillTheBot } from "../src/bill-bot";

let stack: Stack;

describe("Bill the bot", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  test("Snapshot is compatible", () => {
    new BillTheBot(stack, "bill-the-bot", {
      slackWebHookUrl:
        "https://hooks.slack.com/services/WORKSPACE/CHANNEL/secret",
    });

    const template = assertions.Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });
});
