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
  devDeps: [
    "@commitlint/cli@17.0.2",
    "@commitlint/config-conventional@17.0.2",
    "cz-conventional-changelog@3.3.0",
    "husky@8.0.1",
    "lint-staged@13.0.1",
    "@types/jest@^27.5.2",
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
  prerelease: "alpha",
  prettier: true,
  repositoryUrl: "https://github.com/cremich/cdk-bill-bot.git",
  scripts: {
    precommit: "lint-staged",
    prepush: "npm run test",
    prepare: "husky install",
  },
});
project.synth();
