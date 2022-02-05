import {Component, Element, h, Host, Prop, State} from "@stencil/core";
import {logService} from "../../../shared/logger";
import {Post} from "../../shared/fetcher";
import {Subscription} from "rxjs";
import {PipeOperators} from "../../shared/PipeOperators";
import {NewsArticle} from "./honey-news-article";
import {newsService} from "./news-service";

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
    logService.toggleLogging(this.verbose);
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
