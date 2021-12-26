import { r as registerInstance, h, e as Host } from './index-6cdc66d3.js';
import { g as getFeedsSingleCall } from './fetch-es6.worker-9fb2fb85.js';

let HoneyNewsVerwaltung = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async addUrl() {
    if (!this.feedLoader)
      return;
    const url = this.inputNewUrl.value;
    if (!this.feedLoader.getFeedURLs().includes(url)) {
      this.feedLoader.addFeedUrl(url);
      await getFeedsSingleCall([url], true);
    }
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("div", { class: "form-group" }, h("h2", null, "Verwaltung"), h("div", { class: "row" }, h("label", { class: "col border label", htmlFor: "newurl" }, "Feed URL:"), h("input", { id: "newurl", class: "col-fill col", type: "text", ref: (el) => this.inputNewUrl = el }), h("button", { id: "addurl", class: "col paper-btn btn-primary", onClick: this.addUrl.bind(this) }, "Add Feed URL")))));
  }
};

export { HoneyNewsVerwaltung as honey_news_verwaltung };
