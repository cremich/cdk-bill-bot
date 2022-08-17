import { Readable } from "stream";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Block } from "@slack/types";
import { IncomingWebhook, IncomingWebhookResult } from "@slack/webhook";
import { parse } from "csv-parse";
import { DailySpendsReport } from "../report";
import { DailySpendsDigestMessage } from "./digest-message";

const s3Client = new S3Client({});
const webhook = new IncomingWebhook(process.env.WEBHOOK_URL || "");

/**
 * An event containing the result location of an athena query.
 */
export interface QueryResultEvent {
  readonly resultLocation: string;
}

/**
 * Result data from athena as readable stream along a presigned url for download purposes.
 */
export interface AthenaResult {
  stream: Readable;
  preSignedUrl: string;
}

/**
 * This lambda function reads and transforms the results from the daily spends query to send
 * a slack message to the target webhook url.
 *
 * @param event The incoming even containing the result location of the daily spends query.
 * @return the response from the slack webhook.
 */
export const handler = async (event: QueryResultEvent) => {
  const athenaCSVParser = parse({
    delimiter: ",",
    columns: true,
  });

  let s3Object = await getS3Object(event.resultLocation);
  const csvSteam = s3Object.stream.pipe(athenaCSVParser);

  const report = await DailySpendsReport.read(csvSteam);
  report.makePublic(s3Object.preSignedUrl);

  const slackMessage = new DailySpendsDigestMessage(report).buildSlackMessage();

  const response = await sendSlackMessage(slackMessage);
  return {
    webhookResult: response.text,
  };
};

const getS3Object = async (resultLocation: string): Promise<AthenaResult> => {
  const s3Url = new URL(resultLocation);
  const getObjectCommand = new GetObjectCommand({
    Bucket: s3Url.host,
    Key: s3Url.pathname.slice(1),
  });
  const getObjectOutput = await s3Client.send(getObjectCommand);
  const preSignedUrl = await getSignedUrl(s3Client, getObjectCommand);

  return {
    stream: getObjectOutput.Body as Readable,
    preSignedUrl,
  };
};

const sendSlackMessage = async (
  blocks: Block[]
): Promise<IncomingWebhookResult> => {
  return webhook.send({
    blocks,
    icon_emoji: ":robot:",
    username: "Bill (Bot)",
  });
};
