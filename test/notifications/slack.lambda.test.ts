import { SNSEvent } from "aws-lambda";
import nock from "nock";
import * as lambda from "../../src/notifications/slack.lambda";

const snsEvent: SNSEvent = {
  Records: [
    {
      EventSource: "aws:sns",
      EventVersion: "1.0",
      EventSubscriptionArn: "arn:aws:sns:us-east-1::ExampleTopic",
      Sns: {
        Type: "Notification",
        MessageId: "95df01b4-ee98-5cb9-9903-4c221d41eb5e",
        TopicArn: "arn:aws:sns:us-east-1:123456789012:ExampleTopic",
        Subject: "example subject",
        Message: "example message",
        Timestamp: "1970-01-01T00:00:00.000Z",
        SignatureVersion: "1",
        Signature: "EXAMPLE",
        SigningCertUrl: "EXAMPLE",
        UnsubscribeUrl: "EXAMPLE",
        MessageAttributes: {
          Test: {
            Type: "String",
            Value: "TestString",
          },
          TestBinary: {
            Type: "Binary",
            Value: "TestBinary",
          },
        },
      },
    },
  ],
};

describe("Slack notification lambda handler", () => {
  beforeEach(() => {
    delete process.env.WEBHOOK_URL;
  });

  test("Error is thrown on non existing webhook url", async () => {
    await expect(lambda.handler(snsEvent)).rejects.toThrow();
  });

  test("Error is thrown on non existing webhook url", async () => {
    process.env.WEBHOOK_URL = "https://some.invalid-url.com/webhook";
    await expect(lambda.handler(snsEvent)).rejects.toThrow();
  });

  test("Valid message ", async () => {
    nock("https://hooks.slack.com")
      .post("/services/WORKSPACE/CHANNEL/ran0omI3")
      .reply(200, "ok");

    const webhookUrl =
      "https://hooks.slack.com/services/WORKSPACE/CHANNEL/ran0omI3";
    process.env.WEBHOOK_URL = webhookUrl;
    const expectedResult = { statusCode: 200, body: "ok" };
    const result = await lambda.handler(snsEvent);

    expect(result).toEqual(expectedResult);
  });

  test("Invalid message", async () => {
    nock("https://hooks.slack.com")
      .post("/services/WORKSPACE/CHANNEL/ran0omI3")
      .reply(400, "invalid_payload");

    const webhookUrl =
      "https://hooks.slack.com/services/WORKSPACE/CHANNEL/ran0omI3";
    process.env.WEBHOOK_URL = webhookUrl;
    const expectedResult = { statusCode: 400, body: "invalid_payload" };
    const result = await lambda.handler(snsEvent);

    expect(result).toEqual(expectedResult);
  });

  test("Invalid webhook token", async () => {
    nock("https://hooks.slack.com")
      .post("/services/WORKSPACE/CHANNEL/invalid")
      .reply(403, "invalid_token");

    const webhookUrl =
      "https://hooks.slack.com/services/WORKSPACE/CHANNEL/invalid";
    process.env.WEBHOOK_URL = webhookUrl;
    const expectedResult = { statusCode: 403, body: "invalid_token" };
    const result = await lambda.handler(snsEvent);

    expect(result).toEqual(expectedResult);
  });

  test("Invalid channel", async () => {
    nock("https://hooks.slack.com")
      .post("/services/WORKSPACE/CHANNEL/invalid")
      .reply(404, "no_service");

    const webhookUrl =
      "https://hooks.slack.com/services/WORKSPACE/CHANNEL/invalid";
    process.env.WEBHOOK_URL = webhookUrl;
    const expectedResult = { statusCode: 404, body: "no_service" };
    const result = await lambda.handler(snsEvent);

    expect(result).toEqual(expectedResult);
  });

  test("Invalid workspace", async () => {
    nock("https://hooks.slack.com")
      .post("/services/WORKSPACE/CHANNEL/invalid")
      .reply(404, "no_team");

    const webhookUrl =
      "https://hooks.slack.com/services/WORKSPACE/CHANNEL/invalid";
    process.env.WEBHOOK_URL = webhookUrl;
    const expectedResult = { statusCode: 404, body: "no_team" };
    const result = await lambda.handler(snsEvent);

    expect(result).toEqual(expectedResult);
  });
});
