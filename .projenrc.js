const { awscdk } = require("projen");
const { NpmAccess } = require("projen/lib/javascript");

const project = new awscdk.AwsCdkConstructLibrary({
  author: "Christian Bonzelet",
  authorEmail: "christian.bonzelet@gmail.com",
  authorUrl: "https://www.linkedin.com/in/christian-bonzelet/",
  authorOrganization: false,
  bugsUrl: "https://github.com/cremich/cdk-bill-bot/issues",
  cdkVersion: "2.1.0",
  constructsVersion: "10.1.42",
  codeCov: true,
  defaultReleaseBranch: "main",
  description: "The serverless cost optimization bot",
  bundledDeps: ["csv-parse@5.3.0", "@slack/webhook@6.1.0", "@slack/types"],
  devDeps: [
    "@aws-sdk/client-s3@3.131.0",
    "@aws-sdk/s3-request-presigner@3.135.0",
    "@commitlint/cli@17.0.2",
    "@commitlint/config-conventional@17.0.2",
    "cz-conventional-changelog@3.3.0",
    "husky@8.0.1",
    "lint-staged@13.0.1",
    "@types/jest@^27.5.2",
    "@types/aws-lambda@8.10.101",
    "aws-sdk-client-mock@1.0.0",
  ],
  eslintOptions: {
    prettier: true,
  },
  keywords: [
    "aws",
    "cdk",
    "costs",
    "cost-optimization",
    "billing",
    "cur",
    "slack",
    "bot",
    "serverless",
  ],
  name: "@cremich/cdk-bill-bot",
  npmAccess: NpmAccess.PUBLIC,
  majorVersion: 1,
  prettier: true,
  repositoryUrl: "https://github.com/cremich/cdk-bill-bot.git",
  scripts: {
    precommit: "lint-staged",
    prepush: "npm run test",
    prepare: "husky install",
  },
  gitignore: ["src/dev", "cdk.out"],
});
project.synth();
