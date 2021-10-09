import {e as Host, g as getElement, h, r as registerInstance} from './index-570c9000.js';
import {c as catchError, E as EMPTY, f as from, s as switchMap, t as timer} from './index-9062878f.js';
import './index-bc416a54.js';
import {l as loadFeedRanking} from './fetch-es6.worker-46eecd27.js';

class StatisticLoader {
  subscribeStatistiken() {
    return timer(0, 60000 * 10)
      .pipe(switchMap(() => from(loadFeedRanking("https://huluvu424242.herokuapp.com/feeds")).pipe(catchError(() => EMPTY))));
  }
}

const honeyNewsStatisticCss = "td,th{border:1px solid black}";

const HoneyNewsStatistic = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.statisticLoader = new StatisticLoader();
    /**
     * enable console logging
     */
    this.verbose = false;
  }
  connectedCallback() {
    // States initialisieren
    this.ident = this.hostElement.id ? this.hostElement.id : Math.random().toString(36).substring(7);
    this.statisticSubscription = this.subscribeStatistics();
  }
  disconnectedCallback() {
    this.statisticSubscription.unsubscribe();
  }
  subscribeStatistics() {
    return this.statisticLoader.subscribeStatistiken()
      .subscribe((statisticDatas) => this.statistic = [...statisticDatas]);
  }
  render() {
    var _a;
    return (h(Host, null, h("honey-apply-style", null), h("div", null, h("honey-table", null, h("thead", null, h("tr", null, h("th", null, "Score"), h("th", null, "Url"), h("th", null, "Angefragt"), h("th", null, "Kontaktiert"), h("th", null, "Geantwortet"))), h("tbody", null, (_a = this.statistic) === null || _a === void 0 ? void 0 : _a.map((item) => h("tr", null, h("td", null, item.score), h("td", null, h("a", { href: item.url, target: "_blank" }, item.url)), h("td", null, item.countRequested), h("td", null, item.countContacted), h("td", null, item.countResponseOK))))))));
  }
  get hostElement() { return getElement(this); }
};
HoneyNewsStatistic.style = honeyNewsStatisticCss;

export { HoneyNewsStatistic as honey_news_statistic };
