// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for AthenaErrorFunction
 */
export interface AthenaErrorFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/daily-spends/slack/athena-error.
 */
export class AthenaErrorFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: AthenaErrorFunctionProps) {
    super(scope, id, {
      description: 'src/daily-spends/slack/athena-error.lambda.ts',
      ...props,
      runtime: new lambda.Runtime('nodejs14.x', lambda.RuntimeFamily.NODEJS),
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../../assets/daily-spends/slack/athena-error.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}