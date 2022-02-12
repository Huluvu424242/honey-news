import {Feed} from "feedme/dist/feedme";
import {FeedItem} from "feedme/dist/parser";
import {EMPTY, from, lastValueFrom, Observable} from "rxjs";
import {catchError, filter, map, mergeMap, switchMap, tap, toArray} from "rxjs/operators";
import {logService} from "../../shared/logger";
import {StatisticData} from "@huluvu424242/liona-feeds/dist/esm/feeds/statistic";
import {PipeOperators} from "./PipeOperators";
import {BackendResponse, networkService} from "./network-service";
import {Endpunkt} from "./endpunkt";

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

export class FetchService {

  public async loadFeedRanking(endpunkt: Endpunkt): Promise<StatisticData[]> {
    return await lastValueFrom(from(networkService.fetchData(endpunkt.toUrl()))
      .pipe(
        catchError(() => EMPTY),
        switchMap(
          (response: BackendResponse) => from(response.getData()).pipe(catchError(() => EMPTY))
        ),
        filter(
          (rawData: any) => Array.isArray(rawData)
        ),
        map(
          (items: any[]) => {
            const statistics: StatisticData[] = [];
            items.forEach(
              (item) => {
                const statistic: StatisticData = {
                  score: item?.score,
                  url: item?.url,
                  countRequested: item?.countRequested,
                  countContacted: item?.countContacted,
                  countResponseOK: item?.countResponseOK
                };
                statistics.push(statistic);
              }
            );
            return statistics;
          }),
      ));
  }

  loadFeedDataInternal(endpunkt: Endpunkt): Observable<FeedData> {
    const queryUrl: string = endpunkt.toUrl();
    logService.debugMessage("### query url " + queryUrl);
    const data: FeedData = {
      status: null, url: null, statusText: null, feedtitle: null, items: null
    };
    const fetch$ = from(networkService.fetchData(queryUrl));
    return fetch$.pipe(
      tap(
        (response: BackendResponse) => {
          data.status = response.getStatus();
          data.statusText = response.getStatusText();
          data.url = queryUrl;
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

  public async getFeedsSingleCall(endpunkt: Endpunkt, feedURLs: string[]): Promise<Post[]> {
    if (!endpunkt) {
      logService.logMessage("## KEIN Endpunkt");
    }
    logService.logMessage("#### ENDPOINT: " + endpunkt.toUrl());
    const news$: Observable<Post[]> = from(feedURLs).pipe(
      mergeMap(
        (url: string) => {
          logService.logMessage("### frage url " + url);
          return this.loadFeedDataInternal(endpunkt.addQueryPart("url", url)).pipe(catchError(() => EMPTY));
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

export const fetchService = new FetchService();
