import {EMPTY, from, Observable, timer} from "rxjs";
import {catchError, mergeMap} from "rxjs/operators";
import {NewsFetcher, Post} from "./news-fetcher";


export class NewsService {

  protected readonly newsFetcher: NewsFetcher;

  /**
   * urls to request the news feeds
   */
  protected feedURLs: string[] = [];

  public constructor(newsFetcher?: NewsFetcher) {
    if (newsFetcher) {
      this.newsFetcher = newsFetcher;
    } else {
      this.newsFetcher = NewsFetcher.newNewsFetcher();
    }
  }


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
  public async ladePosts(): Promise<Post[]> {
    return await this.newsFetcher.getFeedsSingleCall(this.feedURLs);
  }

  public async ladePostsFrom(url: string): Promise<Post[]> {
    return await this.newsFetcher.getFeedsSingleCall([url]);
  }

  public getRoute(): string {
    return this.newsFetcher.newsEndpunkt.path;
  }


}


export const newsService: NewsService = new NewsService();




