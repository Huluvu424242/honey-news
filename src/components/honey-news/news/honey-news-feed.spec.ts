import { test, expect } from "@playwright/test";

test.describe("Prüfe Startseite", () => {
  test.beforeEach(async ({ baseURL,page }) => {
    await page.goto(baseURL);
  });

  test('Aussehen ist gleich geblieben @local', async ({baseURL,page}) => {
    await page.goto(baseURL);
    expect(await page.screenshot()).toMatchSnapshot('./test/resources/startseite-bulma.png');
  });

  test("Disclaimer wird angezeigt.", async ({  page }) => {
    const locator = page.locator("honey-disclaimer");
    await expect(locator).toContainText("!!! Das ist eine Demo Seite welche alle Feature der App zeigen soll - aus diesem Grund ist auch die Statistik eingeschaltet !!!Es werden nur Daten zu den abgerufenen Feeds gespeichert (in memory) wie: URL, Anzahl der Abfragen und Anzahl valider Anworten.Sollten Sie die Speicherung nicht wünschen - dann geben Sie bitte keinen neuen Feed ein.Vielen Dank für Ihr Verständnis.");
  });
});
