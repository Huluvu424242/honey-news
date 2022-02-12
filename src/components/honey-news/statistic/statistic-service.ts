import {EMPTY, from, Observable, timer} from "rxjs";
import {catchError, switchMap} from "rxjs/operators";
import {fetchService} from "../../shared/fetcher";
import {StatisticData} from "@huluvu424242/liona-feeds/dist/esm/feeds/statistic";
import {Endpunkt, Method} from "../../shared/endpunkt";

export class StatisticService {

  protected STATISTIC_PATH: string = "/feeds";

  protected statisticEndpunkt: Endpunkt = new Endpunkt(Method.GET, "https://huluvu424242.herokuapp.com", null, this.STATISTIC_PATH, {});

  public subscribeStatistiken(): Observable<StatisticData[]> {
    return timer(0, 60000 * 10)
      .pipe(
        switchMap(
          () => from(this.ladeStatistiken()).pipe(catchError(() => EMPTY))
        )
      );
  }

  // Fachlich relevant für CDC
  public async ladeStatistiken(host?: string, port?: number): Promise<StatisticData[]> {
    const endpunkt: Endpunkt = this.statisticEndpunkt.replaceEndpunktBaseIfGiven(host, port);
    console.log("Statistik Endpunkt:" + endpunkt.toUrl());
    return await fetchService.loadFeedRanking(endpunkt.toUrl());
  }

  public getRoute(): string {
    return this.statisticEndpunkt.path;
  }

}

export const statisticService = new StatisticService();


