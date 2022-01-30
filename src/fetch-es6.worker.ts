import {Feed} from "feedme/dist/feedme";
import {FeedItem} from "feedme/dist/parser";
import {EMPTY, from, lastValueFrom, Observable} from "rxjs";
import {catchError, filter, map, mergeMap, switchMap, tap, toArray} from "rxjs/operators";
import {Logger} from "./shared/logger";
import {StatisticData} from "@huluvu424242/liona-feeds/dist/esm/feeds/statistic";
import {PipeOperators} from "./shared/PipeOperators";
import {networkService} from "./components/shared/network";
import {AxiosResponse} from "axios";

const LIONA_FEEDS_API = {url: "https://huluvu424242.herokuapp.com/feed"};

export async function changeLionaFeedsAPIUrlTo(url: string): Promise<void> {
  LIONA_FEEDS_API.url = url;
}


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

export interface BackendResponse {
  fetchResponse: Response;
  axiosResponse: AxiosResponse;

  getStatus(): number;

  getStatusText(): string;

  getData(): Promise<any>;
}




export async function loadFeedRanking(url: string): Promise<StatisticData[]> {
  return await lastValueFrom(from(networkService.fetchData(url))
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

function loadFeedDataInternal(url: string, withStatistic: boolean): Observable<FeedData> {
  let queryUrl: string;
  console.log("### API URL" + LIONA_FEEDS_API.url);
  if (withStatistic) {
    queryUrl = LIONA_FEEDS_API.url + "?url=" + url + "&statistic=true";
  } else {
    queryUrl = LIONA_FEEDS_API.url + "?url=" + url;
  }
  Logger.debugMessage("###query url " + queryUrl);
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

export async function getFeedsSingleCall(feedURLs: string[], withStatistic: boolean): Promise<Post[]> {
  return lastValueFrom(from(feedURLs).pipe(
    mergeMap(
      (url: string) => {
        Logger.debugMessage("### frage url " + url);
        return loadFeedDataInternal(url, withStatistic).pipe(catchError(() => EMPTY));
      }
    ),
    mergeMap(
      (feedData: FeedData) => {
        Logger.debugMessage("### aktualisiere url " + feedData.url);
        return PipeOperators.mapItemsToPost(feedData).pipe(catchError(() => EMPTY));
      }
    ),
    tap(
      (post: Post) => Logger.debugMessage("### filter: " + post.item.title)
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
  ));
}

