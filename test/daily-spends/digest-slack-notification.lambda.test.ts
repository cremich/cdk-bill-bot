import fs from "fs";
import path from "path";

jest.mock("@aws-sdk/s3-request-presigner");

import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { IncomingWebhook } from "@slack/webhook";
import { mockClient } from "aws-sdk-client-mock";
import * as lambda from "../../src/daily-spends/digest-slack-notification.lambda";

const s3Mock = mockClient(S3Client);

const queryResultEvent: lambda.QueryResultEvent = {
  resultLocation: "s3://bucket/path/to/query/result",
};

describe("Daily spends slack notification lambda handler", () => {
  beforeAll(() => {
    jest
      .spyOn(IncomingWebhook.prototype, "send")
      .mockImplementation(() => Promise.resolve({ text: "ok" }));
  });
  beforeEach(() => {
    delete process.env.WEBHOOK_URL;
  });

  test("Slack message was sent", async () => {
    s3Mock.on(GetObjectCommand).resolves({
      Body: fs.createReadStream(path.resolve(__dirname, "./daily-spends.csv")),
    });

    const sendMock = jest.fn();
    IncomingWebhook.prototype.send = sendMock;
    sendMock.mockReturnValue(Promise.resolve({ text: "ok" }));

    const webhookUrl =
      "https://hooks.slack.com/services/WORKSPACE/CHANNEL/ran0omI3";
    process.env.WEBHOOK_URL = webhookUrl;
    const expectedResult = { webhookResult: "ok" };
    const result = await lambda.handler(queryResultEvent);
    expect(result).toEqual(expectedResult);
  });
});
