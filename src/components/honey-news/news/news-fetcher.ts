import {Endpunkt, Method} from "../../shared/endpunkt";
import {FEED_PATH} from "../../../global/constants";
import {logService} from "../../../shared/log-service";
import {EMPTY, from, lastValueFrom, Observable} from "rxjs";
import {BackendResponse, networkService} from "../../shared/network-service";
import {catchError, filter, map, mergeMap, switchMap, tap, toArray} from "rxjs/operators";
import {Feed} from "feedme";
import {PipeOperators} from "./pipe-operators";
import {FeedItem} from "feedme/dist/parser";

export const ENDPOINT_NEWS: Endpunkt = new Endpunkt("news", Method.GET, "https://huluvu424242.herokuapp.com", null, FEED_PATH, {statistic: true}).register();

export interface Post {
  hashcode: string;
  queryurl: string;
  feedtitle: string;
  exaktdate: Date;
  sortdate: string
  pubdate: string,
  item: FeedItem;
}

export interface FeedData {
  url: string;
  status: number;
  statusText: string;
  feedtitle: string;
  items: FeedItem[];
}


/**
 * Formuliert fachliche Requests für Statistiken
 */
export class NewsFetcher {

  private readonly _newsEndpunkt: Endpunkt;

  /**
   * Privater Konstruktor um Factory Pattern zu realisieren
   *
   * @param newsEndpunkt zu nutzender Endpunkt
   */
  private constructor(newsEndpunkt: Endpunkt) {
    this._newsEndpunkt = newsEndpunkt;
  }

  public get newsEndpunkt() {
    return this._newsEndpunkt;
  }

  /**
   * Default Factory Method
   */
  public static newNewsFetcher(): NewsFetcher {
    logService.logMessage("Define news endpunkt:" + ENDPOINT_NEWS.toUrl());
    return new NewsFetcher(ENDPOINT_NEWS);
  }

  /**
   * Factory Method for Testing
   *
   * @param host protocol, host and optional port
   * @param port port
   */
  public static newNewsFetcherFor(host: string, port: number): NewsFetcher {
    const endpunkt: Endpunkt = ENDPOINT_NEWS.replaceBase(host, port);
    logService.logMessage("Define news endpunkt:" + endpunkt.toUrl());
    return new NewsFetcher(endpunkt);

  }


  protected loadFeedDataInternal(endpunkt: Endpunkt): Observable<FeedData> {
    const data: FeedData = {
      status: null, url: null, statusText: null, feedtitle: null, items: null
    };
    const fetch$ = from(networkService.fetchData(endpunkt));
    return fetch$.pipe(
      tap(
        (response: BackendResponse) => {
          data.status = response.getStatus();
          data.statusText = response.getStatusText();
          data.url = endpunkt.toUrl();
        }
      ),
      switchMap(
        (response: BackendResponse) => from(response.getData()).pipe(catchError(() => EMPTY))
      ),
      map(
        (feed: Feed) => {
          data.feedtitle = JSON.stringify(feed.title);
          data.items = feed.items;
          return data;
        }
      )
    );
  }

  public async getFeedsSingleCall(feedURLs: string[]): Promise<Post[]> {
    if (!this._newsEndpunkt) {
      logService.logMessage("## KEIN Endpunkt");
    }
    logService.logMessage("#### ENDPOINT: " + this._newsEndpunkt.toUrl());
    const news$: Observable<Post[]> = from(feedURLs).pipe(
      mergeMap(
        (url: string) => {
          logService.logMessage("### frage url " + url);
          return this.loadFeedDataInternal(this._newsEndpunkt.addQueryPart("url", url)).pipe(catchError(() => EMPTY));
        }
      ),
      mergeMap(
        (feedData: FeedData) => {
          logService.debugMessage("### aktualisiere url " + feedData.url);
          return PipeOperators.mapItemsToPost(feedData).pipe(catchError(() => EMPTY));
        }
      ),
      tap(
        (post: Post) => logService.debugMessage("### filter: " + post.item.title)
      ),
      filter(
        (post: Post) => PipeOperators.compareDates(post.exaktdate, new Date()) < 1
      ),
      toArray<Post>(),
      switchMap(
        // entferne doppelte Einträge mit gleichem hashkode
        (posts: Post[]) => PipeOperators.removeDuplicates(posts)
      ),
      map(
        (posts: Post[]) => PipeOperators.sortArray(posts)
      )
    );
    return lastValueFrom(news$);
  }
}



