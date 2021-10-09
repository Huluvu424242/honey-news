import {e as Host, h, r as registerInstance} from './index-570c9000.js';
import {L as Logger} from './logger-d9d7f6da.js';
import {f as from} from './index-9062878f.js';
import {g as getFeedsSingleObserver} from './fetch-es6.worker-46eecd27.js';

const HoneyNewsFeeds = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  addUrl(event) {
    event = event;
    if (!this.feedLoader)
      return;
    const url = this.inputNewUrl.value;
    if (!this.feedLoader.getFeedURLs().includes(url)) {
      this.feedLoader.addFeedUrl(url);
      from(getFeedsSingleObserver([url], true)).subscribe();
    }
  }
  render() {
    Logger.debugMessage('##RENDER##');
    return (h(Host, null, h("honey-apply-style", null), h("div", { class: "form-group" }, h("h2", null, "Verwaltung"), h("div", { class: "row" }, h("label", { class: "col border label", htmlFor: "newurl" }, "Feed URL:"), h("input", { id: "newurl", class: "col-fill col", type: "text", ref: (el) => this.inputNewUrl = el }), h("button", { id: "addurl", class: "col paper-btn btn-primary", onClick: (event) => this.addUrl(event) }, "Add Feed URL")))));
  }
};

export { HoneyNewsFeeds as honey_news_feeds };
