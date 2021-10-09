import {e as Host, h, r as registerInstance} from './index-570c9000.js';

const HoneyArticlePapercss = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("div", { class: "card" }, h("div", { class: "card-body" }, h("div", { class: "card-title" }, h("slot", { name: "slot1" })), h("div", { class: "card-subtitle" }, h("slot", { name: "slot2" })), h("div", { class: "card-text" }, h("slot", { name: "slot3" }))))));
  }
};

export { HoneyArticlePapercss as honey_article_papercss };
