import { r as registerInstance, h, e as Host, g as getElement } from './index-a218ef3e.js';
import { l as logService } from './log-service-a3857a70.js';
import { f as from, t as tap } from './index-d3934a4e.js';
import { r as router } from './SimpleRouter-98abf0a5.js';
import { n as newsService } from './news-service-5f6a039d.js';
import { s as statisticService } from './statistic-service-d2c5c2a9.js';
import './network-service-84df6987.js';

let HoneyNews = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.routerSubscription = null;
    this.route = "";
    /**
     * enable console logging
     */
    this.verbose = false;
  }
  connectedCallback() {
    // attribute initialisieren wenn defaults notwendig
    this.localBasePath = this.hostElement.getAttribute("local-basepath") || "/";
    this.siteBasePath = this.hostElement.getAttribute("site-basepath") || "/";
    /// base initialisieren
    const curLocation = window.location.origin;
    const isLocal = curLocation.startsWith("http://localhost") || curLocation.startsWith("https://localhost");
    const basePath = isLocal ? this.localBasePath : this.siteBasePath;
    router.setRoutenPrefix(basePath);
    // route initialisieren
    if (basePath === "/") {
      this.route = window.location.pathname;
    }
    else {
      this.route = window.location.pathname.replace(basePath, "");
    }
    this.ident = this.hostElement.id ? this.hostElement.id : Math.random().toString(36).substring(7);
    this.routerSubscription = router.getRouteListener().subscribe({
      next: (route) => this.route = route,
      error: (err) => console.error(err),
      complete: () => console.info("Router Subject' complete")
    });
    // Properties auswerten
    logService.setLogging(this.verbose);
    logService.logMessage("Logging: " + this.verbose);
  }
  componentWillLoad() {
    const feedURLListSubscription = this.subscribeFeedURLList();
    if (feedURLListSubscription) {
      if (this.feedURLListSubscription) {
        this.feedURLListSubscription.unsubscribe();
      }
      this.feedURLListSubscription = feedURLListSubscription;
    }
  }
  disconnectedCallback() {
    this.routerSubscription.unsubscribe();
  }
  subscribeFeedURLList() {
    // http://kenfm.de/feed/ -> https://apolut.net/feed/
    const predefinedURLs = [
      "https://www.presseportal.de/rss/presseportal.rss2",
      "https://www.tagesschau.de/xml/atom/",
      "https://www.zdf.de/rss/zdf/nachrichten",
      "http://newsrss.bbc.co.uk/rss/newsonline_uk_edition/england/london/rss.xml",
      "https://tass.ru/en/rss/v2.xml",
      "https://de.rt.com/feeds/news/",
      "https://dev.to/feed/",
      "https://blog.malwarebytes.com/feed/",
      "https://media.ccc.de/news.atom",
      "https://media.ccc.de/updates.rdf",
      "https://media.ccc.de/c/wikidatacon2019/podcast/webm-hq.xml",
      "https://media.ccc.de/podcast-hq.xml",
      "https://www.deutschlandfunk.de/die-nachrichten.353.de.rss",
      "https://rss.dw.com/xml/rss-de-all",
      "http://newsfeed.zeit.de",
      "http://www.stern.de/feed/standard/all",
      "https://www.spiegel.de/international/index.rss",
      "https://rss.golem.de/rss.php",
      "https://www.heise.de/rss/heise.rdf",
      "https://codepen.io/spark/feed",
      "https://www.hongkiat.com/blog/feed/",
      "https://www.tagesspiegel.de/contentexport/feed/home",
      "https://apolut.net/feed/"
    ];
    return from(predefinedURLs).pipe(tap(url => newsService.addFeedUrl(url))).subscribe();
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("honey-news-header", null), !this.route || this.route === "/" || this.route === "/index.html" || this.route === "/news" ?
      h("honey-news-feed", null) : null, this.route === statisticService.getRoute() ? h("honey-news-verwaltung", null) : null, this.route === "/statistic" ? h("honey-news-statistic", null) : null, this.route === "/about" ? h("honey-news-about", null) : null));
  }
  get hostElement() { return getElement(this); }
};

export { HoneyNews as honey_news };
