import {e as Host, g as getElement, h, r as registerInstance} from './index-570c9000.js';
import {L as Logger} from './logger-d9d7f6da.js';
import {r as router} from './SimpleRouter-05438908.js';
import {c as catchError, E as EMPTY, f as from, m as mergeMap, t as timer} from './index-9062878f.js';
import {g as getFeedsSingleObserver} from './fetch-es6.worker-46eecd27.js';
import './index-bc416a54.js';

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
  getFeedsPeriodicObserver() {
    return timer(0, 60000 * 5).pipe(mergeMap(() => from(getFeedsSingleObserver(this.feedURLs, true)).pipe(catchError(() => EMPTY))));
  }
}

const HoneyNews = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * true wenn das Tag ohne alt Attribute deklariert wurde
     */
    this.createAriaLabel = false;
    /**
     * true wenn das Tag ohne title Attribut deklariert wurde
     */
    this.createTitleText = false;
    /**
     * initial computed taborder
     */
    this.taborder = "0";
    this.routerSubscription = null;
    this.route = "";
    this.options = {
      disabledHostClass: "honey-news-disabled",
      enabledHostClass: "honey-news",
      disabledTitleText: "News Reader nicht verfügbar",
      titleText: "News Reader",
      ariaLabel: "Neuigkeiten der abonierten Feeds",
    };
    /**
     * enable console logging
     */
    this.verbose = false;
    /**
     * Shared State of AppShell
     */
    this.feedLoader = new NewsLoader([]);
  }
  newsWatcher(newValue, oldValue) {
    oldValue = oldValue;
    if (newValue) {
      if (this.newsFeed) {
        this.newsFeed.feedLoader = this.feedLoader;
      }
    }
  }
  feedWatcher(newValue, oldValue) {
    oldValue = oldValue;
    if (newValue) {
      if (this.feedAdministration) {
        this.feedAdministration.feedLoader = this.feedLoader;
      }
    }
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
    this.initialHostClass = this.hostElement.getAttribute("class") || null;
    this.createTitleText = !this.hostElement.title;
    this.createAriaLabel = !this.hostElement["aria-label"];
    this.taborder = this.hostElement.getAttribute("tabindex") ? (this.hostElement.tabIndex + "") : "0";
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
  createNewTitleText() {
    // if (this.) {
    //   return this.options.disabledTitleText;
    // } else {
    return this.options.titleText;
    // }
  }
  getTitleText() {
    if (this.createTitleText) {
      return this.createNewTitleText();
    }
    else {
      return this.hostElement.title;
    }
  }
  getAriaLabel() {
    if (this.createAriaLabel) {
      return this.options.ariaLabel;
    }
    else {
      return this.hostElement.getAttribute("aria-label");
    }
  }
  getHostClass() {
    return this.initialHostClass;
  }
  render() {
    return (h(Host, { title: this.getTitleText(), "aria-label": this.getAriaLabel() }, h("honey-apply-style", null), h("honey-news-header", null), !this.route || this.route === "/" || this.route === "/index.html" || this.route === "/news" ?
      h("honey-news-feed", { ref: (el) => {
          this.newsFeed = el;
        } }) : null, this.route === "/feeds" ? h("honey-news-feeds", { ref: (el) => {
        this.feedAdministration = el;
      } }) : null, this.route === "/statistic" ? h("honey-news-statistic", null) : null, this.route === "/about" ? h("honey-news-about", null) : null));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "newsFeed": ["newsWatcher"],
    "feedAdministration": ["feedWatcher"]
  }; }
};

export { HoneyNews as honey_news };
