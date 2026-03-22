import { expect } from "@playwright/test";
/** @typedef {import('playwright').Page} Page */

/**
 * @param {Page} page
 */
export async function assertGoogleTitle(page) {
  await page.goto("https://www.google.com/", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveTitle(/Google/i);
}
