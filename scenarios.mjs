import * as google from "./page-objects/google.com.js";
import * as slack from "./page-objects/slack.com.js";
import * as zoom from "./page-objects/zoom.com.js";

export async function assertGoogleTitle(page) {
  await google.assertGoogleTitle(page);
}

export async function assertSlackTitle(page) {
  await slack.assertSlackTitle(page);
}

export async function assertZoomTitle(page) {
  await zoom.assertZoomTitle(page);
}
