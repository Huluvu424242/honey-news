import { r as registerInstance, h, e as Host, g as getElement } from './index-a218ef3e.js';
import { l as logService } from './log-service-a3857a70.js';
import { n as newsService, P as PipeOperators } from './news-service-5f6a039d.js';
import './index-d3934a4e.js';
import './network-service-84df6987.js';

let HoneyNewsFeed = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.lastUpdate = null;
    this.feeds = [];
    /**
     * enable console logging
     */
    this.verbose = false;
    this.lastHour = null;
  }
  connectedCallback() {
    // States initialisieren
    this.ident = this.hostElement.id ? this.hostElement.id : Math.random().toString(36).substring(7);
    // Properties auswerten
    this.feedsSubscription = this.subscribeFeeds();
    logService.setLogging(this.verbose);
  }
  disconnectedCallback() {
    this.feedsSubscription.unsubscribe();
  }
  async componentWillLoad() {
    var _a;
    const feeds = newsService.getFeedURLs();
    const posts = await newsService.ladePostsFrom(feeds[0]);
    this.lastUpdate = ((_a = posts[0]) === null || _a === void 0 ? void 0 : _a.exaktdate) || this.lastUpdate;
    this.feeds = [...posts];
  }
  subscribeFeeds() {
    return newsService.getFeedsPeriodicObservable$().subscribe((posts) => {
      var _a;
      this.lastUpdate = ((_a = posts[0]) === null || _a === void 0 ? void 0 : _a.exaktdate) || this.lastUpdate;
      this.feeds = [...posts];
    });
  }
  getUeberschrift(post) {
    this.lastHour = this.lastHour || post.exaktdate;
    const hour = post.exaktdate;
    if (PipeOperators.compareDates(this.lastUpdate, post.exaktdate) < 0) {
      this.lastUpdate = post.exaktdate;
    }
    if (hour && hour.getUTCHours() != this.lastHour.getUTCHours()) {
      this.lastHour = hour;
      return h("honey-infobar", null, post.exaktdate.toLocaleDateString() + " " + this.lastHour.getHours(), " Uhr");
    }
    else {
      return;
    }
  }
  getPostLink(item) {
    if (typeof item.link === "string") {
      return item.link;
    }
    if (typeof (item.link.href == "string")) {
      return item.link.href;
    }
    return null;
  }
  getPostEntry(post) {
    if (!post)
      return;
    const article = {
      title: post.item.title + "",
      subtitle: post.pubdate + " über " + post.feedtitle,
      text: "",
      link: this.getPostLink(post.item)
    };
    return (h("honey-news-article", { article: article }));
  }
  getNeuesteMeldung() {
    var _a, _b;
    if (this.lastUpdate) {
      return (h("honey-notification", null, h("div", null, h("p", null, "Neueste Meldung"), h("p", null, ((_a = this.lastUpdate) === null || _a === void 0 ? void 0 : _a.toLocaleDateString()) + "  " + ((_b = this.lastUpdate) === null || _b === void 0 ? void 0 : _b.toLocaleTimeString())))));
    }
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), this.getNeuesteMeldung(), this.feeds.map((post) => [
      this.getUeberschrift(post),
      this.getPostEntry(post)
    ])));
  }
  get hostElement() { return getElement(this); }
};

export { HoneyNewsFeed as honey_news_feed };
