import {
  Block,
  HeaderBlock,
  ContextBlock,
  DividerBlock,
  SectionBlock,
} from "@slack/types";

export class ErrorSlackNotification {
  private readonly cause: string;

  private readonly headerBlock: HeaderBlock = {
    type: "header",
    text: {
      type: "plain_text",
      text: "Ooops...something went wrong. :cry:",
    },
  };

  /**
   * A slack divider block
   */
  private readonly dividerBlock: DividerBlock = {
    type: "divider",
  };

  private readonly causePreBlock: SectionBlock = {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "I am sorry to say this, but I was not able to analyze your daily spends. Here is the error I got:",
    },
  };

  private readonly causeInfoBlock: SectionBlock = {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "Please keep in mind, it can take up to *24 hours* for AWS to start delivering data to for your cost and usage reports. After delivery starts, AWS updates the AWS Cost and Usage Reports files at least once a day.",
    },
  };

  /**
   * The footnote of the slack message
   */
  private readonly footnoteBlock: ContextBlock = {
    type: "context",
    elements: [
      {
        text: `:love_letter: *Want to provide feedback?* Open an issue on <https://github.com/cremich/cdk-bill-bot>`,
        type: "mrkdwn",
      },
    ],
  };

  constructor(cause: string) {
    this.cause = cause;
  }

  /**
   * Builds the slack message. If the report does not contain any usage data, this method
   * will render a different message compared to if the report contains usage data.
   *
   * @returns a list of blocks to be rendered in the slack message
   */
  public buildSlackMessage(): Block[] {
    return this.errorMessage();
  }

  private errorMessage(): Block[] {
    const blocks: Block[] = [];

    blocks.push(this.headerBlock);
    blocks.push(this.dividerBlock);
    blocks.push(this.causePreBlock);
    blocks.push(this.causeBlock());
    blocks.push(this.causeInfoBlock);
    blocks.push(this.dividerBlock);
    blocks.push(this.footnoteBlock);

    return blocks;
  }

  private causeBlock(): SectionBlock {
    return {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `> ${this.cause}`,
      },
    };
  }
}
