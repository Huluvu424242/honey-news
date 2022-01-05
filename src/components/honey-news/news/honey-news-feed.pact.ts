import {Interaction, Pact} from "@pact-foundation/pact"
import {eachLike} from "@pact-foundation/pact/src/dsl/matchers";
import path from "path";
import {fetchData} from "../../../fetch-es6.worker";

/**
 * @jest-environment jsdom
 */
describe('CDC with Feed API', () => {


  const url = "http://localhost";
  let port;


  const provider = new Pact({
    // port,
    log: path.resolve(process.cwd(), "logs", "mockserver-integration.log"),
    dir: path.resolve(process.cwd(), "pacts"),
    spec: 2,
    consumer: "@huluvu424242/honey-news",
    provider: "@huluvu424242/lione-feeds",
  })

  const responseExample = {
    "type": "rss 2.0",
    "title": "Deutschlandfunk - Fortlaufende Nachrichten vom 04. Januar 2022",
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
    "pubdate": "Tue, 04 Jan 2022 19:56:16 +0100",
    "lastbuilddate": "Tue, 04 Jan 2022 19:56:16 +0100",
    "image": {
      "url": "https://assets.deutschlandfunk.de/FALLBACK-IMAGE/1920x1920.png?t=1600291117115",
      "title": "Deutschlandfunk - Fortlaufende Nachrichten vom 04. Januar 2022",
      "link": "https://www.deutschlandfunk.de/nachrichten-index-22904.html"
    },
    "items": [
      {
        "title": "Nachts im Norden meist trocken, sonst Regen und Schnee",
        "link": "https://www.deutschlandfunk.de/nachts-im-norden-meist-trocken-sonst-regen-und-schnee-100.html",
        "description": "<img src=\"https://assets.deutschlandfunk.de/25d736b4-a415-463b-a4fe-35a5ac44acdc/1920x1920.jpg?t=1639821123437\" alt=\"Sternenhimmel über einer verschneiten Landschaft\" title=\"Sternenhimmel über einer verschneiten Landschaft\" width=\"1920\" height=\"1920\" border=\"0\" align=\"left\" hspace=\"4\" vspace=\"4\"/>Der Wetterbericht, die Lage: Am Rand eines Tiefdruckkomplexes über Nordeuropa wird zunächst milde und feuchte Atlantikluft herangeführt. Von Norden greift eine Kaltfront mit polarer Meeresluft über.<br clear=\"all\"/><br/><p><br/></p>",
        "guid": {
          "ispermalink": "false",
          "text": "nachts-im-norden-meist-trocken-sonst-regen-und-schnee-100"
        },
        "pubdate": "Tue, 04 Jan 2022 23:59:00 +0100",
        "text": "\n"
      }
    ]
  };
  const EXPECTED_BODY = eachLike(responseExample);

  beforeAll(() =>
    provider.setup().then(opts => {
      port = opts.port;
    })
  )

  afterEach(() => provider.verify())

  afterAll(() => provider.finalize());

  describe("get https://huluvu424242.herokuapp.com/feed?url=https://www.deutschlandfunk.de/die-nachrichten.353.de.rss&statistic=true from backend", () => {

    beforeAll(() => {
      const interaction = new Interaction()
        .given("Frage Deutschlandfunk News ab")
        .uponReceiving("mit einem Request für alle News und eingeschalteter Statistic")
        .withRequest({
          method: "GET",
          path: "/feed",
          query: "url=https://www.deutschlandfunk.de/die-nachrichten.353.de.rss&statistic=true",
          headers: {
            Accept: "application/json",
          },
        })
        .willRespondWith({
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: EXPECTED_BODY,
        })
      return provider.addInteraction(interaction);
    });

    it("returns the correct response", done => {
      fetchData(url + ":" + port + "/feed?url=https://www.deutschlandfunk.de/die-nachrichten.353.de.rss&statistic=true").then((response) => {
        expect(response.getData()).toStrictEqual(responseExample);
        done();
      }, done)
    });
  });

});
