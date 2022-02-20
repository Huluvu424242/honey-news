import {EMPTY, from, Observable, timer} from "rxjs";
import {catchError, switchMap} from "rxjs/operators";
import {StatisticData} from "@huluvu424242/liona-feeds/dist/esm/feeds/statistic";
import {StatisticFetcher} from "./statistic-fetcher";


export class StatisticService {

  protected readonly statisticFetcher: StatisticFetcher;

  constructor(statisticFetcher?: StatisticFetcher) {
    if (statisticFetcher) {
      this.statisticFetcher = statisticFetcher;
    } else {
      this.statisticFetcher = StatisticFetcher.newStatisticFetcher();
    }
  }

  public subscribeStatistiken(): Observable<StatisticData[]> {
    return timer(0, 60000 * 10)
      .pipe(
        switchMap(
          () => from(this.ladeStatistiken()).pipe(catchError(() => EMPTY))
        )
      );
  }

  /**
   * Lade aktuelle Statistiken
   */
  public async ladeStatistiken(): Promise<StatisticData[]> {
    return await this.statisticFetcher.loadFeedRanking();
  }

  /**
   * Gibt die Route zur Abfrage der Statistiken zurück
   */
  public getRoute(): string {
    return this.statisticFetcher.statisticEndpunkt.path;
  }

}

export const statisticService = new StatisticService();


