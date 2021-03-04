import { describe, it, expect } from "@playwright/test";
import dotenv from "dotenv";
import {
  ChromiumBrowser,
  FirefoxBrowser,
  Page,
  WebKitBrowser,
} from "playwright";
dotenv.config();

let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
let page: Page;

describe("advanced search", () => {
  it(
    "is able to filter issue or repo",
    (test) => {
      test.slow("This increases test timeout 3x.");
      test.slow("This increases test timeout 3x.");
    },
    async ({ page }) => {
      await page.setDefaultTimeout(100000);
      await page.goto(process.env.MAIN_PAGE);


      const inputBox = await page.waitForSelector(
        '//div/input[@type="text"]'
      );
      expect(inputBox).toBeTruthy();
      await inputBox.click();
      await inputBox.fill("jambo_sms");

    }
  );
});
