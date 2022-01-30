import {EMPTY, from, Observable, timer} from "rxjs";
import {catchError, switchMap} from "rxjs/operators";
import {loadFeedRanking} from "../../../fetch-es6.worker";
import {StatisticData} from "@huluvu424242/liona-feeds/dist/esm/feeds/statistic";
import {Endpunkt} from "../../shared/endpunkt";

export class StatisticLoader {

  protected statisticEndpunkt: Endpunkt = new Endpunkt("https://huluvu424242.herokuapp.com", null, "/feeds", "");

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
    const endpunkt: Endpunkt = (host || port) ?
      this.statisticEndpunkt.replaceEndpunktBaseIfGiven(host, port)
      :
      this.statisticEndpunkt
    ;
    console.log("Statistik Endpunkt:"+endpunkt.toUrl());
    return await loadFeedRanking(endpunkt.toUrl());
  }


}


