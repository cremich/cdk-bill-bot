import {
  Block,
  HeaderBlock,
  ContextBlock,
  SectionBlock,
  DividerBlock,
} from "@slack/types";
import { DailySpendsReport } from "../report";

/**
 * A new digest slack notification for your associated daily spends report.
 */
export class DailySpendsDigestMessage {
  /**
   * The daily spends report that the message is created for
   */
  private readonly report: DailySpendsReport;

  /**
   * The header block of the slack message
   */
  private readonly headerBlock: HeaderBlock = {
    type: "header",
    text: {
      type: "plain_text",
      text: ":moneybag: Your daily AWS spends",
    },
  };

  /**
   * A slack divider block
   */
  private readonly dividerBlock: DividerBlock = {
    type: "divider",
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

  constructor(report: DailySpendsReport) {
    this.report = report;
  }

  /**
   * Builds the slack message. If the report does not contain any usage data, this method
   * will render a different message compared to if the report contains usage data.
   *
   * @returns a list of blocks to be rendered in the slack message
   */
  public buildSlackMessage(): Block[] {
    return this.report.isEmpty() ? this.emptyReportMessage() : this.digest();
  }

  private digest(): Block[] {
    const blocks: Block[] = [];

    let usageDate = this.report.usageDate();
    let payerAccountId = this.report.payerAccountId();

    const formattedDate = new Date(usageDate).toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    blocks.push(this.headerBlock);
    blocks.push(this.createDigestContextBlock(formattedDate, payerAccountId));
    blocks.push(this.dividerBlock);
    blocks.push(this.totalCostsBlock(formattedDate));
    if (this.report.isPublic()) {
      blocks.push(this.downloadReportBlock());
    }
    blocks.push(this.dividerBlock);
    blocks.push(this.footnoteBlock);

    return blocks;
  }

  private emptyReportMessage(): Block[] {
    const blocks: Block[] = [];

    const emptyReport: SectionBlock = {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "I tried to analyze your AWS Service usage, but your daily report did not contain any data. This could be valid because you don't had any AWS service usage at all.",
      },
    };

    blocks.push(this.headerBlock);
    blocks.push(this.dividerBlock);
    blocks.push(emptyReport);
    blocks.push(this.dividerBlock);
    blocks.push(this.footnoteBlock);

    return blocks;
  }

  private downloadReportBlock(): SectionBlock {
    return {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `You want more details about your daily spends? Please download your <${this.report.url}|daily spends report>. This link will automatically expire in 15 minutes.`,
      },
    };
  }

  private totalCostsBlock(formattedDate: string): SectionBlock {
    return {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `I analyzed your AWS service usage for ${formattedDate}. On this day you spend *$ ${this.report
          .totalCosts()
          .toFixed(2)}* in total.`,
      },
    };
  }

  private createDigestContextBlock(
    formattedDate: string,
    payerAccountId: string
  ): ContextBlock {
    return {
      type: "context",
      elements: [
        {
          text: `:date:  *${formattedDate}*  |  :cloud:  AWS Payer Account ${payerAccountId}`,
          type: "mrkdwn",
        },
      ],
    };
  }
}
