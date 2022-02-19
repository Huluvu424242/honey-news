import {Component, Element, h, Host, Prop, State} from "@stencil/core";
import {logService} from "../../shared/logger-service";
import {from, Subscription} from "rxjs";
import {router} from "./routing/SimpleRouter";
import {newsService} from "./news/news-service";
import {statisticService} from "./statistic/statistic-service";
import {tap} from "rxjs/operators";

@Component({
  tag: "honey-news",
  shadow: true
})
export class HoneyNews {

  /**
   * Host Element
   */
  @Element() hostElement: HTMLElement;


  /**
   * Id des Host Elements, falls nicht verfügbar wird diese generiert
   */
  ident: string;

  feedURLListSubscription: Subscription;

  //
  // Routing
  //

  /**
   * base of remote site
   */
  @Prop({reflect: true, attribute: "site-basepath", mutable: true}) siteBasePath;
  /**
   * base of local site
   */
  @Prop({reflect: true, attribute: "local-basepath", mutable: true}) localBasePath;
  routerSubscription: Subscription = null;
  @State() route: string = "";

  /**
   * enable console logging
   */
  @Prop() verbose: boolean = false;

  public connectedCallback() {
    // attribute initialisieren wenn defaults notwendig
    this.localBasePath = this.hostElement.getAttribute("local-basepath") || "/";
    this.siteBasePath = this.hostElement.getAttribute("site-basepath") || "/";
    /// base initialisieren
    const curLocation: string = window.location.origin;
    const isLocal: boolean = curLocation.startsWith("http://localhost") || curLocation.startsWith("https://localhost");
    const basePath = isLocal ? this.localBasePath : this.siteBasePath;
    router.setRoutenPrefix(basePath);
    // route initialisieren
    if (basePath === "/") {
      this.route = window.location.pathname;
    } else {
      this.route = window.location.pathname.replace(basePath, "");
    }

    this.ident = this.hostElement.id ? this.hostElement.id : Math.random().toString(36).substring(7);
    this.routerSubscription = router.getRouteListener().subscribe(
      {
        next: (route: string) => this.route = route,
        error: (err) => console.error(err),
        complete: () => console.info("Router Subject' complete")
      }
    );

    // Properties auswerten
    logService.setLogging(this.verbose);
    logService.logMessage("Logging: "+this.verbose);
  }

  public componentWillLoad() {
    const feedURLListSubscription: Subscription = this.subscribeFeedURLList();
    if (feedURLListSubscription) {
      if (this.feedURLListSubscription) {
        this.feedURLListSubscription.unsubscribe();
      }
      this.feedURLListSubscription = feedURLListSubscription;
    }
  }

  public disconnectedCallback() {
    this.routerSubscription.unsubscribe();
  }


  subscribeFeedURLList(): Subscription {
    // http://kenfm.de/feed/ -> https://apolut.net/feed/
    const predefinedURLs: string[] = [
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
    return from(predefinedURLs).pipe(
      tap(
        url => newsService.addFeedUrl(url)
      )
    ).subscribe();
  }

  public render() {
    return (
      <Host>
        <honey-apply-style/>

        <honey-news-header/>

        {!this.route || this.route === "/" || this.route === "/index.html" || this.route === "/news" ?
          <honey-news-feed/> : null}
        {this.route === statisticService.getRoute() ? <honey-news-verwaltung/> : null}
        {this.route === "/statistic" ? <honey-news-statistic/> : null}
        {this.route === "/about" ? <honey-news-about/> : null}

      </Host>
    );
  }
}
