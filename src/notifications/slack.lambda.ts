import * as https from "https";
import { SNSEvent } from "aws-lambda";

const getWebHookUrl = () => {
  return process.env.WEBHOOK_URL ? process.env.WEBHOOK_URL : "";
};

const isWebHookUrlValid = (webhookUrl: string) => {
  return /https:\/\/hooks.slack.com\/services\/[A-Z0-9]*\/[A-Z0-9]*\/[A-Za-z0-9]*/gm.test(
    webhookUrl
  );
};

const sendMessage = async (
  payload: string,
  webhookUrl: string
): Promise<any> => {
  const parsedWebhookUrl = new URL(webhookUrl);

  const requestOptions = {
    hostname: parsedWebhookUrl.hostname,
    path: parsedWebhookUrl.pathname,
    method: "POST",
    port: 443,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(requestOptions, (res) => {
      let body = "";

      res.on("data", (chunk) => {
        body += chunk;
      });

      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          body,
        });
      });
    });

    req.on("error", (err: any) => {
      reject(new Error(err));
    });

    req.write(JSON.stringify(payload));
    req.end();
  });
};

export const handler = async (event: SNSEvent) => {
  const webhookUrl = getWebHookUrl();
  if (!isWebHookUrlValid(webhookUrl)) {
    throw new Error("webhook url invalid");
  }

  const message = event.Records[0].Sns.Message;
  return sendMessage(message, webhookUrl);
};
