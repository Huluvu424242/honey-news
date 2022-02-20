import {Component, Element, h, Host, Prop, State} from "@stencil/core";
import {logService} from "../../../shared/log-service";
import {Subscription} from "rxjs";
import {PipeOperators} from "./pipe-operators";
import {NewsArticle} from "./honey-news-article";
import {newsService} from "./news-service";
import {Post} from "./news-fetcher";

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

  feedsSubscription: Subscription;

  lastUpdate: Date = null;

  @State() feeds: Post[] = [];


  /**
   * enable console logging
   */
  @Prop() verbose: boolean = false;

  public connectedCallback() {
    // States initialisieren
    this.ident = this.hostElement.id ? this.hostElement.id : Math.random().toString(36).substring(7);
    // Properties auswerten
    this.feedsSubscription = this.subscribeFeeds();
    logService.setLogging(this.verbose);
  }

  public disconnectedCallback() {
    this.feedsSubscription.unsubscribe();
  }

  public async componentWillLoad() {
    const feeds: string[] = newsService.getFeedURLs();
    const posts: Post[] = await newsService.ladePostsFrom(feeds[0]);
    this.lastUpdate = posts[0]?.exaktdate || this.lastUpdate;
    this.feeds = [...posts]
  }


  public subscribeFeeds(): Subscription {
    return newsService.getFeedsPeriodicObservable$().subscribe((posts: Post[]) => {
      this.lastUpdate = posts[0]?.exaktdate || this.lastUpdate;
      this.feeds = [...posts]
    });
  }


  protected initialisiereUrls() {
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
    from(predefinedURLs).pipe(
      tap(
        url => this.feedLoader.addFeedUrl(url)
      )
    ).subscribe();
  }

  lastHour: Date = null;

  getUeberschrift(post: Post) {
    this.lastHour = this.lastHour || post.exaktdate;
    const hour: Date = post.exaktdate;
    if (PipeOperators.compareDates(this.lastUpdate, post.exaktdate) < 0) {
      this.lastUpdate = post.exaktdate;
    }
    if (hour && hour.getUTCHours() != this.lastHour.getUTCHours()) {
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
