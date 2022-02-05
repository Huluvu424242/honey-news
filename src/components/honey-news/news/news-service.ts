import {EMPTY, from, Observable, timer} from "rxjs";
import {fetchService, Post} from "../../shared/fetcher";
import {catchError, mergeMap} from "rxjs/operators";
import {Endpunkt} from "../../shared/endpunkt";
import {logService} from "../../../shared/logger";

export class NewsService {

  protected newsEndpunkt: Endpunkt = new Endpunkt("https://huluvu424242.herokuapp.com", null, "/feed", "&statistic=true");


  constructor() {
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
    logService.logMessage("Lade Posts Endpunkt:" + endpunkt.toUrl());
    return await fetchService.getFeedsSingleCall(endpunkt, this.feedURLs);
  }

  public async ladePostsFrom(url: string, host?: string, port?: number): Promise<Post[]> {
    const endpunkt: Endpunkt = this.newsEndpunkt.replaceEndpunktBaseIfGiven(host, port);
    logService.logMessage("Lade Posts From Endpunkt:" + endpunkt.toUrl());
    return await fetchService.getFeedsSingleCall(endpunkt, [url]);
  }

  public getRoute(): string {
    return this.newsEndpunkt.path;
  }


}


export const newsService: NewsService = new NewsService();




