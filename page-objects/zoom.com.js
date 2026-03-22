import { expect } from "@playwright/test";
/** @typedef {import('playwright').Page} Page */

/**
 * @param {Page} page
 */
export async function assertZoomTitle(page) {
  await page.goto("https://www.zoom.com/", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveTitle(/Zoom/i);
}
