import { test, expect } from "@playwright/test";

// besser in einer env variable aufgehoben
const TEST_URL = "http://localhost:3333";

test.describe("Lucky Path Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_URL);
  });

  test("should check the first page", async ({ page }) => {
    const locator = page.locator("h1");
    await expect(locator).toContainText("Kuba-Home");
  });
});



// import {HoneyNewsFeed} from "./honey-news-feed";
//
// describe('Unit test: honey-news satisfy', () => {
//
//   it('should init the feedLoader variable', () => {
//     const component = new HoneyNewsFeed();
//
//     expect(component.feedLoader).not.toBeNull();
//   });
//
//
// });
//
//
//
