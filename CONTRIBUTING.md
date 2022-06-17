# Contributing Guide

First off, thank you for considering contributing to the Amazon Personalize CDK Construct Library. It’s people like you that make a difference. Pull requests are welcome. For major changes, please open an [issue](https://github.com/cremich/cdk-bill-bot/issues) first to discuss what you would like to change.

## Pull Requests

We use the [GitHub flow](https://guides.github.com/introduction/flow/) as main versioning workflow. In a nutshell:

1. Fork this repository
2. Create a new branch for each feature, fix or improvement
3. Send a pull request from each feature branch to the **main** branch

## Git Commit Guidelines

We have rules over how our git commit messages must be formatted. Please ensure to
[squash](https://help.github.com/articles/about-git-rebase/#commands-available-while-rebasing) unnecessary commits so that your commit history is clean.

If the commit only involves documentation changes you can skip the continuous integration pipelines using `[ci skip]` or `[skip ci]` in your commit message header.

All commits SHOULD adhere to the [Conventional Commits specification](https://conventionalcommits.org/). Depending on the type of your change, please choose one of the following to give your commit some more semantic context:

- **feat:** A new feature
- **fix:** A bug fix
- **docs:**: Documentation only changes
- **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **perf:** A code change that improves performance
- **test:** Adding missing tests or correcting existing tests
- **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci:** Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **chore:** Other changes that don't modify src or test files
- **revert:** Reverts a previous commit

In addition to the specification we use tooling to ensure the proper use.

- [Commitizen](https://commitizen-tools.github.io/commitizen/)
- [Commitlint](https://commitlint.js.org)
- [Husky](https://typicode.github.io/husky)
