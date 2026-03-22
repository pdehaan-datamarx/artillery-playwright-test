import { expect } from "@playwright/test";
/** @typedef {import('playwright').Page} Page */

/**
 * @param {Page} page
 */
export async function assertSlackTitle(page) {
  await page.goto("https://slack.com/", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveTitle(/Slack/i);
}
