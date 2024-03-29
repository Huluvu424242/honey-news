import path from "path";
import {MatchersV3, PactV3, PactV3Options} from "@pact-foundation/pact/v3";
import {V3MockServer} from "@pact-foundation/pact/src/v3/pact";
import {ENDPOINT_NEWS, NewsFetcher} from "../../../src/components/honey-news/news/news-fetcher";
import {Endpunkt} from "../../../src/components/shared/endpunkt";
import {NewsService} from "../../../src/components/honey-news/news/news-service";
import {Post} from "../../../dist/types/components/honey-news/news/news-fetcher";


const {
  // eachLike,
  // atLeastLike,
  // integer,
  // timestamp,
  // boolean,
  string,
  // url,
  // datetime,
  // regex,
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

  // const ACCEPT_HEADER: string[] =[
  //   "application/json",
  //   "application/rss+xml",
  //   "application/xml",
  //   "application/xhtml+xml",
  //   "text/xtml"];

  const RESPONSE_RSS2_0 = like({
    "type": "rss 2.0",
    "title": string("Deutschlandfunk - Fortlaufende Nachrichten vom 04. Januar 2022"),
    "link": "https://www.deutschlandfunk.de/nachrichten-index-22904.html",
    "atom:link": {
      "rel": "self",
      "type": "application/rss+xml",
      "href": "https://www.deutschlandfunk.de/nachrichten-index-22904.rss"
    },
    "description": ">",
    "category": "Info",
    "copyright": "Deutschlandradio - deutschlandradio.de",
    "ttl": "60",
    "language": "de-DE",
    "pubdate": string("Tue, 04 Jan 2022 19:56:16 +0100"),
    "lastbuilddate": "Tue, 04 Jan 2022 19:56:16 +0100",
    "image": {
      "url": string("https://assets.deutschlandfunk.de/FALLBACK-IMAGE/1920x1920.png?t=1600291117115"),
      "title": "Deutschlandfunk - Fortlaufende Nachrichten vom 04. Januar 2022",
      "link": "https://www.deutschlandfunk.de/nachrichten-index-22904.html"
    },
    "items": [
      {
        "title": "Nachts im Norden meist trocken, sonst Regen und Schnee",
        "link": "https://www.deutschlandfunk.de/nachts-im-norden-meist-trocken-sonst-regen-und-schnee-100.html",
        "description": "<img src=\"https://assets.deutschlandfunk.de/25d736b4-a415-463b-a4fe-35a5ac44acdc/1920x1920.jpg?t=1639821123437\" alt=\"Sternenhimmel über einer verschneiten Landschaft\" title=\"Sternenhimmel über einer verschneiten Landschaft\" width=\"1920\" height=\"1920\" border=\"0\" align=\"left\" hspace=\"4\" vspace=\"4\"/>Der Wetterbericht, die Lage: Am Rand eines Tiefdruckkomplexes über Nordeuropa wird zunächst milde und feuchte Atlantikluft herangeführt. Von Norden greift eine Kaltfront mit polarer Meeresluft über.<br clear=\"all\"/><br/><p><br/></p>",
        "guid": {
          "ispermalink": string("false"),
          "text": "nachts-im-norden-meist-trocken-sonst-regen-und-schnee-100"
        },
        "pubdate": "Tue, 04 Jan 2022 23:59:00 +0100",
        "text": "\n"
      }
    ]
  });


  describe("@huluvu424242/liona-feeds", () => {

    it("Abruf eines RSS 2.0 Feeds", () => {

      // Vorbedingung herstellen (Contract definieren)
      // PACT Matchers verwenden
      provider
        .given("Frage News Feeds ab")
        .uponReceiving("Alle News mit eingeschalteter Statistic")
        .withRequest({
          method: "GET",
          path: ENDPOINT_NEWS.getPath(),

          query: {url: "https://www.deutschlandfunk.de/die-nachrichten.353.de.rss", statistic: "true"},
          headers: {
            Accept: "application/json"
          }
        })
        .willRespondWith({
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: RESPONSE_RSS2_0,
        });

      // Test ausführen
      // JEST Matchers verwenden
      return provider.executeTest(async (mockServer: V3MockServer) => {
        console.log("######### P O R T:" + mockServer.port);
        console.log("######### U R L:" + mockServer.url);
        console.log("######### I D:" + mockServer.id);

        const ENDPOINT: Endpunkt = ENDPOINT_NEWS.replaceBase(mockServer.url, mockServer.port);
        const newsFetcher: NewsFetcher = NewsFetcher.newNewsFetcherFor(mockServer.url, mockServer.port);
        const newsService: NewsService = new NewsService(newsFetcher);

        // const posts: Post[] = await fetchService.getFeedsSingleCall(new Endpunkt(Method.GET, mockServer.url,null, FEED_PATH, {statistic:true}), ["https://www.deutschlandfunk.de/die-nachrichten.353.de.rss"]);
        const posts: Post[] = await newsService.ladePostsFrom("https://www.deutschlandfunk.de/die-nachrichten.353.de.rss");
        const feedExample = [
          {
            "hashcode": expect.any(String), //"acf94c55f3a08700fcf31074290c5b46fde03b1f",
            "queryurl": ENDPOINT.addQueryPart("url", "https://www.deutschlandfunk.de/die-nachrichten.353.de.rss").toUrl(),
            "feedtitle": "\"Deutschlandfunk - Fortlaufende Nachrichten vom 04. Januar 2022\"",
            "exaktdate": expect.any(Date), //2022-01-04T22:59:00.000Z,
            "sortdate": "2022#01#04#22#0#Nachts im Norden meist trocken, sonst Regen und Schnee",
            "pubdate": expect.any(String), //"4.1.2022, 23:59",
            "item": {
              "description": "<img src=\"https://assets.deutschlandfunk.de/25d736b4-a415-463b-a4fe-35a5ac44acdc/1920x1920.jpg?t=1639821123437\" alt=\"Sternenhimmel über einer verschneiten Landschaft\" title=\"Sternenhimmel über einer verschneiten Landschaft\" width=\"1920\" height=\"1920\" border=\"0\" align=\"left\" hspace=\"4\" vspace=\"4\"/>Der Wetterbericht, die Lage: Am Rand eines Tiefdruckkomplexes über Nordeuropa wird zunächst milde und feuchte Atlantikluft herangeführt. Von Norden greift eine Kaltfront mit polarer Meeresluft über.<br clear=\"all\"/><br/><p><br/></p>",
              "guid": {
                "ispermalink": "false",
                "text": "nachts-im-norden-meist-trocken-sonst-regen-und-schnee-100"
              },
              "link": "https://www.deutschlandfunk.de/nachts-im-norden-meist-trocken-sonst-regen-und-schnee-100.html",
              "pubdate": "Tue, 04 Jan 2022 23:59:00 +0100",
              "text": "\n",
              "title": "Nachts im Norden meist trocken, sonst Regen und Schnee"
            }
          }
        ];
        expect(posts).toStrictEqual(feedExample);
      });


    });
  });

})
;
