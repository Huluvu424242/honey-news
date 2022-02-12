import path from "path";
import {fetchService} from "../../../src/components/shared/fetcher";
import {MatchersV3, PactV3, PactV3Options} from "@pact-foundation/pact/v3";
import {V3MockServer} from "@pact-foundation/pact/src/v3/pact";
import {StatisticData} from "@huluvu424242/liona-feeds/dist/esm/feeds/statistic";
import {ENDPOINT_STATISTIC} from "../../../src/components/honey-news/statistic/statistic-service";
import {Endpunkt} from "../../../src/components/shared/endpunkt";

const {
  eachLike,
  atLeastLike,
  integer,
  timestamp,
  boolean,
  string,
  regex,
  like,
} = MatchersV3;

/**
 * @jest-environment jsdom
 */
describe('@huluvu424242/honey-feeds prüfe contracts gegen', () => {

  const OPTIONS: PactV3Options = {
    // port: 1234, wird dynamisch vom server ermittelt
    dir: path.resolve(process.cwd(), "contracts"),
    //   log: path.resolve(process.cwd(), "logs", "mockserver-integration.log"),
    consumer: "honey-news#",
    provider: "#liona-feeds",
  };

  const provider: PactV3 = new PactV3(OPTIONS);

  const ACCEPT_HEADER: string = MatchersV3.like(
    "application/json",
    "application/rss+xml",
    "application/xml",
    "application/xhtml+xml",
    "text/xtml")

  const RESPONSE_3 = [
    {
      "url": "https://www.presseportal.de/rss/presseportal.rss2",
      "countRequested": 4,
      "countContacted": 0,
      "countResponseOK": 1
    },
    {
      "url": "https://www.tagesschau.de/xml/atom/",
      "countRequested": 4,
      "countContacted": 1,
      "countResponseOK": 1,
      "score": 0
    },
    {
      "url": "https://dev.to/feed/",
      "countRequested": 4,
      "countContacted": 1,
      "countResponseOK": 1,
      "score": 4
    }
  ];


  describe("@huluvu424242/liona-feeds", () => {

    it("Abruf der Statistik zu den Feeds", () => {

      // Vorbedingung herstellen (Contract definieren)
      // PACT Matchers verwenden
      provider
        .given("Frage Statistik ab")
        .uponReceiving("Zu allen Feeds:")
        .withRequest({
          method: "GET",
          path: ENDPOINT_STATISTIC.getPath(),
          headers: {
            Accept: ACCEPT_HEADER
          }
        })
        .willRespondWith({
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: RESPONSE_3,
        });

      // Test ausführen
      // JEST Matchers verwenden
      return provider.executeTest(async (mockServer: V3MockServer) => {
        console.log("######### P O R T:" + mockServer.port);
        console.log("######### U R L:" + mockServer.url);
        console.log("######### I D:" + mockServer.id);

        const ENDPOINT: Endpunkt = ENDPOINT_STATISTIC.replaceBase(mockServer.url, mockServer.port);

        const statisticData: StatisticData[] = await fetchService.loadFeedRanking(ENDPOINT);
        const statisticExample = [
          {
            "url": "https://www.presseportal.de/rss/presseportal.rss2",
            "countRequested": 4,
            "countContacted": 0,
            "countResponseOK": 1,
            "score": undefined // TODO in Zukunft 0
          },
          {
            "url": "https://www.tagesschau.de/xml/atom/",
            "countRequested": 4,
            "countContacted": 1,
            "countResponseOK": 1,
            "score": 0
          },
          {
            "url": "https://dev.to/feed/",
            "countRequested": 4,
            "countContacted": 1,
            "countResponseOK": 1,
            "score": 4
          }
        ];
        expect(statisticData).toStrictEqual(statisticExample);
      });


    });
  });

})
;
