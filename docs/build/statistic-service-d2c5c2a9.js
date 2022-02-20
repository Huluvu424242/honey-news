import { l as lastValueFrom, f as from, c as catchError, E as EMPTY, s as switchMap, d as filter, m as map, e as timer } from './index-d3934a4e.js';
import { E as Endpunkt, M as Method, a as FEEDS_PATH, n as networkService } from './network-service-84df6987.js';
import { l as logService } from './log-service-a3857a70.js';

const ENDPOINT_STATISTIC = new Endpunkt("statistic", Method.GET, "https://huluvu424242.herokuapp.com", null, FEEDS_PATH, {}).register();
/**
 * Formuliert fachliche Requests für Statistiken
 */
class StatisticFetcher {
  /**
   * Privater Konstruktor um Factory Pattern zu realisieren
   *
   * @param statisticEndpoint zu nutzender Endpunkt
   */
  constructor(statisticEndpoint) {
    this._statisticEndpunkt = statisticEndpoint;
  }
  get statisticEndpunkt() {
    return this._statisticEndpunkt;
  }
  /**
   * Default Factory Method
   */
  static newStatisticFetcher() {
    logService.logMessage("Define statistik endpunkt:" + ENDPOINT_STATISTIC.toUrl());
    return new StatisticFetcher(ENDPOINT_STATISTIC);
  }
  /**
   * Factory Method for Testing
   *
   * @param host protocol, host and optional port
   * @param port port
   */
  static newStatisticFetcherFor(host, port) {
    const endpunkt = ENDPOINT_STATISTIC.replaceBase(host, port);
    logService.logMessage("Define statistik endpunkt:" + endpunkt.toUrl());
    return new StatisticFetcher(endpunkt);
  }
  async loadFeedRanking() {
    logService.logMessage("Used statistik endpunkt:" + this._statisticEndpunkt.toUrl());
    return await lastValueFrom(from(networkService.fetchData(this._statisticEndpunkt))
      .pipe(catchError(() => EMPTY), switchMap((response) => from(response.getData()).pipe(catchError(() => EMPTY))), filter((rawData) => Array.isArray(rawData)), map((items) => {
      const statistics = [];
      items.forEach((item) => {
        const statistic = {
          score: item === null || item === void 0 ? void 0 : item.score,
          url: item === null || item === void 0 ? void 0 : item.url,
          countRequested: item === null || item === void 0 ? void 0 : item.countRequested,
          countContacted: item === null || item === void 0 ? void 0 : item.countContacted,
          countResponseOK: item === null || item === void 0 ? void 0 : item.countResponseOK
        };
        statistics.push(statistic);
      });
      return statistics;
    })));
  }
}

class StatisticService {
  constructor(statisticFetcher) {
    if (statisticFetcher) {
      this.statisticFetcher = statisticFetcher;
    }
    else {
      this.statisticFetcher = StatisticFetcher.newStatisticFetcher();
    }
  }
  subscribeStatistiken() {
    return timer(0, 60000 * 10)
      .pipe(switchMap(() => from(this.ladeStatistiken()).pipe(catchError(() => EMPTY))));
  }
  /**
   * Lade aktuelle Statistiken
   */
  async ladeStatistiken() {
    return await this.statisticFetcher.loadFeedRanking();
  }
  /**
   * Gibt die Route zur Abfrage der Statistiken zurück
   */
  getRoute() {
    return this.statisticFetcher.statisticEndpunkt.path;
  }
}
const statisticService = new StatisticService();

export { statisticService as s };
