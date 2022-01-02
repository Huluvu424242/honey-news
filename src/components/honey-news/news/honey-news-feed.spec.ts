import { test, expect } from "@playwright/test";

// besser in einer env variable aufgehoben
const TEST_URL = "http://localhost:3333";

test.describe("Lucky Path Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_URL);
  });

  test("should check the first page", async ({ page }) => {
    const locator = page.locator("honey-disclaimer");
    await expect(locator).toContainText("!!! Das ist eine Demo Seite welche alle Feature der App zeigen soll - aus diesem Grund ist auch die Statistik eingeschaltet !!!Es werden nur Daten zu den abgerufenen Feeds gespeichert (in memory) wie: URL, Anzahl der Abfragen und Anzahl valider Anworten.Sollten Sie die Speicherung nicht wünschen - dann geben Sie bitte keinen neuen Feed ein.Vielen Dank für Ihr Verständnis.");
  });
});
