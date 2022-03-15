import {Endpunkt, Method} from "../../shared/endpunkt";
import {FEEDS_PATH} from "../../honey-config/constants";
import {StatisticData} from "@huluvu424242/liona-feeds/dist/esm/feeds/statistic";
import {EMPTY, from, lastValueFrom} from "rxjs";
import {BackendResponse, networkService} from "../../shared/network-service";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {logService} from "../../../shared/log-service";

export const ENDPOINT_STATISTIC: Endpunkt = new Endpunkt("statistic", Method.GET, "https://huluvu424242.herokuapp.com", null, FEEDS_PATH, {}).register();

/**
 * Formuliert fachliche Requests für Statistiken
 */
export class StatisticFetcher {

  private readonly _statisticEndpunkt: Endpunkt;

  /**
   * Privater Konstruktor um Factory Pattern zu realisieren
   *
   * @param statisticEndpoint zu nutzender Endpunkt
   */
  private constructor(statisticEndpoint: Endpunkt) {
    this._statisticEndpunkt = statisticEndpoint;
  }

  public get statisticEndpunkt() {
    return this._statisticEndpunkt;
  }

  /**
   * Default Factory Method
   */
  public static newStatisticFetcher(): StatisticFetcher {
    logService.logMessage("Define statistik endpunkt:" + ENDPOINT_STATISTIC.toUrl());
    return new StatisticFetcher(ENDPOINT_STATISTIC);
  }

  /**
   * Factory Method for Testing
   *
   * @param host protocol, host and optional port
   * @param port port
   */
  public static newStatisticFetcherFor(host: string, port: number): StatisticFetcher {
    const endpunkt: Endpunkt = ENDPOINT_STATISTIC.replaceBase(host, port);
    logService.logMessage("Define statistik endpunkt:" + endpunkt.toUrl());
    return new StatisticFetcher(endpunkt);

  }


  public async loadFeedRanking(): Promise<StatisticData[]> {
    logService.logMessage("Used statistik endpunkt:" + this._statisticEndpunkt.toUrl());
    return await lastValueFrom(from(networkService.fetchData(this._statisticEndpunkt))
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


}
