import { r as registerInstance, h, e as Host, g as getElement } from './index-6cdc66d3.js';
import { L as Logger } from './index-fbf84784.js';
import { r as router } from './SimpleRouter-85633630.js';
import { t as timer, m as mergeMap, f as from, c as catchError, E as EMPTY, s as switchMap } from './index-d9553567.js';
import { g as getFeedsSingleCall, l as loadFeedRanking } from './fetch-es6.worker-9fb2fb85.js';

class NewsLoader {
  constructor(feedURLs) {
    /**
     * texte to speech out
     */
    this.feedURLs = [];
    this.feedURLs = feedURLs || [];
  }
  getFeedURLs() {
    return [...this.feedURLs];
  }
  addFeedUrl(feedURL) {
    this.feedURLs.push(feedURL);
  }
  getFeedsPeriodicObservable$() {
    return timer(0, 60000 * 5).pipe(mergeMap(() => from(getFeedsSingleCall(this.feedURLs, true)).pipe(catchError(() => EMPTY))));
  }
}

class StatisticLoader {
  subscribeStatistiken() {
    return timer(0, 60000 * 10)
      .pipe(switchMap(() => from(loadFeedRanking("https://huluvu424242.herokuapp.com/feeds")).pipe(catchError(() => EMPTY))));
  }
}

let HoneyNews = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.routerSubscription = null;
    this.route = "";
    /**
     * enable console logging
     */
    this.verbose = false;
    /**
     * Shared State of AppShell
     */
    this.feedLoader = new NewsLoader([]);
    this.statisticLoader = new StatisticLoader();
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
    this.routerSubscription = router.getRouteListener().subscribe((route) => {
      this.route = route;
    }, (error) => {
      console.error(error);
    }, () => {
      console.info("Router Subject' complete");
    });
    // Properties auswerten
    Logger.toggleLogging(this.verbose);
  }
  disconnectedCallback() {
    this.routerSubscription.unsubscribe();
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("honey-news-header", null), !this.route || this.route === "/" || this.route === "/index.html" || this.route === "/news" ?
      h("honey-news-feed", { feedLoader: this.feedLoader }) : null, this.route === "/feeds" ? h("honey-news-verwaltung", { feedLoader: this.feedLoader }) : null, this.route === "/statistic" ? h("honey-news-statistic", { statisticLoader: this.statisticLoader }) : null, this.route === "/about" ? h("honey-news-about", null) : null));
  }
  get hostElement() { return getElement(this); }
};

export { HoneyNews as honey_news };
