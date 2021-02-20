
import { describe, it, expect } from "@playwright/test";

import dotenv from 'dotenv';
dotenv.config();

describe("landing page", () => {
    it("check if home page is loading", async ({ page }) => {
        await page.goto(process.env.MAIN_PAGE)
        
       
    });
});