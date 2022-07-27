import * as lambda from "../../src/daily-spends/yesterday.lambda";

describe("Yesterday Lambda function", () => {
  test("Lambda returns yesterdays date", async () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const year = yesterday.getFullYear();
    const month = ("0" + (yesterday.getMonth() + 1)).slice(-2);
    const day = ("0" + yesterday.getDate()).slice(-2);

    const result = await lambda.handler();
    expect(result).toBe(`${year}-${month}-${day}`);
  });
});
