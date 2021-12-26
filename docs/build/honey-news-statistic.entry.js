import { r as registerInstance, h, e as Host } from './index-6cdc66d3.js';

const honeyNewsStatisticCss = "td,th{border:1px solid black}";

let HoneyNewsStatistic = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  connectedCallback() {
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
};
HoneyNewsStatistic.style = honeyNewsStatisticCss;

export { HoneyNewsStatistic as honey_news_statistic };
