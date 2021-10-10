import {Component, Element, h, Host, Method, Prop, State} from "@stencil/core";
import {Logger} from "../../../shared/logger";
import {NewsOptions} from "./NewsOptions";
import {NewsLoader} from "./NewsLoader";
import {getFeedsSingleCall, Post} from "../../../fetch-es6.worker";
import {from, Subscription} from "rxjs";
import {PipeOperators} from "../../../shared/PipeOperators";
import {NewsArticle} from "./honey-news-article";

@Component({
  tag: "honey-news-feed",
  shadow: true
})
export class HoneyNewsFeed {

  /**
   * Host Element
   */
  @Element() hostElement: HTMLElement;

  /**
   * Id des Host Elements, falls nicht verfügbar wird diese generiert
   */
  ident: string;

  /**
   * initiale class from host tag
   */
  initialHostClass: string;

  /**
   * true wenn das Tag ohne alt Attribute deklariert wurde
   */
  createAriaLabel: boolean = false;

  /**
   * true wenn das Tag ohne title Attribut deklariert wurde
   */
  createTitleText: boolean = false;

  /**
   * initial computed taborder
   */
  taborder: string = "0";

  /**
   * Hilfsklasse zum Laden der Daten
   */
  @Prop({mutable: true}) feedLoader: NewsLoader;

  @State() feeds: Post[] = [];
  feedsSubscription: Subscription;

  lastUpdate: Date = null;

  @State() options: NewsOptions = {
    disabledHostClass: "honey-news-feed-disabled",
    enabledHostClass: "honey-news-feed-enabled",
    disabledTitleText: "Noch keine News verfügbar",
    titleText: "Aktuelle News aus den Feeds",
    ariaLabel: "Neuigkeiten der abonierten Feeds",
  };

  /**
   * enable console logging
   */
  @Prop() verbose: boolean = false;

  public connectedCallback() {
    // States initialisieren
    this.ident = this.hostElement.id ? this.hostElement.id : Math.random().toString(36).substring(7);
    this.initialHostClass = this.hostElement.getAttribute("class") || null;
    this.createTitleText = !this.hostElement.title;
    this.createAriaLabel = !this.hostElement["aria-label"];
    this.taborder = this.hostElement.getAttribute("tabindex") ? (this.hostElement.tabIndex + "") : "0";
    this.initialisiereUrls();
    // Properties auswerten
    this.feedsSubscription = this.subscribeFeeds();
    Logger.toggleLogging(this.verbose);
  }

  public disconnectedCallback() {
    this.feedsSubscription.unsubscribe();
  }

  public async componentWillLoad() {
    const posts: Post[] = await getFeedsSingleCall(this.feedLoader.getFeedURLs(), false);
    this.lastUpdate = posts[0].exaktdate || this.lastUpdate;
    this.feeds = [...posts]
  }


  public subscribeFeeds(): Subscription {
    return this.feedLoader.getFeedsPeriodicObservable$().subscribe((posts: Post[]) => {
      this.lastUpdate = posts[0].exaktdate || this.lastUpdate;
      this.feeds = [...posts]
    });
  }


  protected initialisiereUrls() {
    const predefinedURLs: string[] = [
      "https://www.presseportal.de/rss/presseportal.rss2",
      "https://www.tagesschau.de/xml/atom/",
      "https://www.zdf.de/rss/zdf/nachrichten",
      "https://kenfm.de/feed/",
      "https://dev.to/feed/",
      "https://media.ccc.de/c/wikidatacon2019/podcast/webm-hq.xml",
      "https://media.ccc.de/updates.rdf",
      "https://www.deutschlandfunk.de/die-nachrichten.353.de.rss",
      "https://rss.dw.com/xml/rss-de-all",
      "http://newsfeed.zeit.de",
      "http://www.stern.de/feed/standard/all",
      "https://www.spiegel.de/international/index.rss",
      "https://rss.golem.de/rss.php",
      "https://www.heise.de/rss/heise.rdf",
      "https://codepen.io/spark/feed",
      "https://www.hongkiat.com/blog/feed/",
      "https://www.tagesspiegel.de/contentexport/feed/home"
    ];
    from(predefinedURLs).subscribe((url) => this.feedLoader.addFeedUrl(url));
  }


  /**
   * Update honey-news options
   * @param options : NewsOptions plain object to set the options
   */
  @Method()
  public async updateOptions(options: NewsOptions) {
    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        this.options[prop] = options[prop];
      }
    }
    this.options = {...this.options};
  }


  protected hasNoFeeds(): boolean {
    return (!this.feeds || this.feeds.length < 1);
  }

  protected createNewTitleText(): string {
    if (this.hasNoFeeds()) {
      return this.options.disabledTitleText;
    } else {
      return this.options.titleText;
    }
  }

  protected getTitleText(): string {
    if (this.createTitleText) {
      return this.createNewTitleText();
    } else {
      return this.hostElement.title;
    }
  }

  protected createNewAltText(): string {
    return this.options.ariaLabel;
  }

  protected getAltText(): string {
    if (this.createAriaLabel) {
      return this.createNewAltText();
    } else {
      return this.hostElement.getAttribute("aria-label");
    }
  }

  protected getHostClass(): string {
    let hostClass = this.initialHostClass;
    if (this.hasNoFeeds()) {
      return hostClass + " " + this.options.disabledHostClass;
    } else {
      return hostClass + " " + this.options.enabledHostClass;
    }
  }

  lastHour: Date = null;

  getUeberschrift(post: Post) {
    this.lastHour = this.lastHour || post.exaktdate;
    const hour: Date = post.exaktdate;
    if (PipeOperators.compareDates(this.lastUpdate, post.exaktdate) < 0) {
      this.lastUpdate = post.exaktdate;
    }
    if (hour.getUTCHours() != this.lastHour.getUTCHours()) {
      this.lastHour = hour;
      return <honey-infobar>{post.exaktdate.toLocaleDateString() + " " + this.lastHour.getHours()} Uhr</honey-infobar>;
    } else {
      return;
    }
  }

  getPostLink(item): string {
    if (typeof item.link === "string") {
      return item.link;
    }
    if (typeof (item.link.href == "string")) {
      return item.link.href;
    }
    return null
  }

  getPostEntry(post: Post) {
    if (!post) return;
    const article: NewsArticle = {
      title: post.item.title + "",
      subtitle: post.pubdate + " über " + post.feedtitle,
      text: "",
      link: this.getPostLink(post.item)
    }
    return (
      <honey-news-article article={article}/>
    );
  }

  getNeuesteMeldung() {
    if (this.lastUpdate) {
      return (
        <honey-notification>
          <div>
            <p>Neueste Meldung</p>
            <p>{this.lastUpdate?.toLocaleDateString() + "  " + this.lastUpdate?.toLocaleTimeString()}</p>
          </div>
        </honey-notification>
      );
    }
  }

  public render() {
    return (
      <Host>
        <honey-apply-style/>
        {
          this.getNeuesteMeldung()
        }
        {this.feeds.map((post) => [
            this.getUeberschrift(post),
            this.getPostEntry(post)
          ]
        )}
      </Host>
    );
  }
}
