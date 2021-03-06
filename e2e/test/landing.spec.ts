import { describe, it, expect, folio } from "@playwright/test";

import dotenv from "dotenv";
dotenv.config();

describe("landing page", () => {
  it("check if home page is loading",  test => {
    test.slow('This increases test timeout 3x.');
    test.slow('This increases test timeout 3x.');
  },async ({ page }) => {
    await page.setDefaultTimeout(100000);
    await page.goto(process.env.MAIN_PAGE);
     const header = await page.$('//div/span');
     expect(header !== null).toBeTruthy();
    // Check:
     const about = await page.waitForSelector(
       '//div/span[contains("About")]'
     );
     expect(about).toBeTruthy();
     const logoImg = await page.$('img[alt="logo"]');
     expect(logoImg).toBeTruthy();
  });
});
