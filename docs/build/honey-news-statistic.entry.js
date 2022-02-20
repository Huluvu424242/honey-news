import { r as registerInstance, h, e as Host } from './index-a218ef3e.js';
import { s as statisticService } from './statistic-service-d2c5c2a9.js';
import './index-d3934a4e.js';
import './network-service-84df6987.js';
import './log-service-a3857a70.js';

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
    return statisticService.subscribeStatistiken()
      .subscribe((statisticDatas) => this.statistic = [...statisticDatas]);
  }
  render() {
    var _a;
    return (h(Host, null, h("honey-apply-style", null), h("div", null, h("honey-table", null, h("thead", null, h("tr", null, h("th", null, "Score"), h("th", null, "Url"), h("th", null, "Angefragt"), h("th", null, "Kontaktiert"), h("th", null, "Geantwortet"))), h("tbody", null, (_a = this.statistic) === null || _a === void 0 ? void 0 : _a.map((item) => h("tr", null, h("td", null, item.score), h("td", null, h("a", { href: item.url, target: "_blank", rel: "noopener noreferrer" }, item.url)), h("td", null, item.countRequested), h("td", null, item.countContacted), h("td", null, item.countResponseOK))))))));
  }
};
HoneyNewsStatistic.style = honeyNewsStatisticCss;

export { HoneyNewsStatistic as honey_news_statistic };
