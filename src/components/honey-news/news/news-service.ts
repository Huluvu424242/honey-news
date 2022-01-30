import {EMPTY, from, Observable, Subscription, timer} from "rxjs";
import {getFeedsSingleCall, Post} from "../../../fetch-es6.worker";
import {catchError, mergeMap, tap} from "rxjs/operators";
import {Endpunkt} from "../../shared/endpunkt";

export class NewsService {

  protected newsEndpunkt: Endpunkt = new Endpunkt("https://huluvu424242.herokuapp.com", null, "/feed", "&statistic=true");

  protected newsSubscription: Subscription;

  constructor() {
    this.newsSubscription = initialisiereUrls();
  }


  /**
   * texte to speech out
   */
  protected feedURLs: string[] = [];

  public getFeedURLs(): string[] {
    return [...this.feedURLs];
  }

  public addFeedUrl(feedURL: string) {
    this.feedURLs.push(feedURL);
  }


  public getFeedsPeriodicObservable$(): Observable<Post[]> {
    return timer(0, 60000 * 5).pipe(
      mergeMap(
        () => from(this.ladePosts()).pipe(catchError(() => EMPTY))
      )
    )
  }

  // Fachlich relevant für CDC
  public async ladePosts(host?: string, port?: number): Promise<Post[]> {
    const endpunkt: Endpunkt = this.newsEndpunkt.replaceEndpunktBaseIfGiven(host, port);
    console.log("Posts Endpunkt:" + endpunkt.toUrl());
    return await getFeedsSingleCall(endpunkt, this.feedURLs);
  }

  public async ladePostsFrom(url: string, host?: string, port?: number): Promise<Post[]> {
    const endpunkt: Endpunkt = this.newsEndpunkt.replaceEndpunktBaseIfGiven(host, port);
    console.log("Posts Endpunkt:" + endpunkt.toUrl());
    return await getFeedsSingleCall(endpunkt, [url]);
  }

  public getRoute(): string {
    return this.newsEndpunkt.path;
  }


}


export const newsService: NewsService = new NewsService();


function initialisiereUrls(): Subscription {
  // http://kenfm.de/feed/ -> https://apolut.net/feed/
  const predefinedURLs: string[] = [
    "https://www.presseportal.de/rss/presseportal.rss2",
    "https://www.tagesschau.de/xml/atom/",
    "https://www.zdf.de/rss/zdf/nachrichten",
    "http://newsrss.bbc.co.uk/rss/newsonline_uk_edition/england/london/rss.xml",
    "https://tass.ru/en/rss/v2.xml",
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



