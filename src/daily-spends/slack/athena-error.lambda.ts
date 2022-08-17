// import { IncomingWebhook } from "@slack/webhook";

import { Block } from "@slack/types";
import { IncomingWebhook, IncomingWebhookResult } from "@slack/webhook";
import { ErrorMessage } from "./error-message";

const webhook = new IncomingWebhook(process.env.WEBHOOK_URL || "");

/**
 * An event containing the result location of an athena query.
 */
export interface ErrorEvent {
  readonly cause: string;
}

/**
 * This lambda function reads and transforms the results from the daily spends query to send
 * a slack message to the target webhook url.
 *
 * @param event The incoming even containing the result location of the daily spends query.
 * @return the response from the slack webhook.
 */
export const handler = async (event: ErrorEvent) => {
  const parsedErrorState = JSON.parse(event.cause).QueryExecution.Status;
  const prettyError = JSON.stringify(parsedErrorState, null, 2);
  const slackMessage = new ErrorMessage(prettyError).buildSlackMessage();

  const response = await sendSlackMessage(slackMessage);
  return {
    webhookResult: response.text,
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
