import { Construct } from "constructs";
import { SlackFunction } from "./slack-function";

/**
 * Properties for creating AWS resources to send notifications
 */
export interface NotificationsProps {
  /**
   * The slack webhook url where notifications via slack are sent to.
   * In order to get a webhook url, please have a look at the official
   * documentation @see https://api.slack.com/messaging/webhooks
   */
  readonly slackWebhookUrl?: string;
}

/**
 * A new set of resources to send notifications about costs and usage
 */
export class Notifications extends Construct {
  constructor(scope: Construct, id: string, props: NotificationsProps = {}) {
    super(scope, id);

    if (props.slackWebhookUrl) {
      new SlackFunction(this, "slack-notifier", {
        environment: {
          WEBHOOK_URL: props.slackWebhookUrl,
        },
      });
    }
  }
}
