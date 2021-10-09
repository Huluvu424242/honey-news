import {e as Host, h, r as registerInstance} from './index-570c9000.js';

const HoneyArticleBulma = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("div", { class: "card" }, h("div", { class: "card-content" }, h("div", { class: "subtitle" }, h("slot", { name: "slot2" })), h("div", { class: "title" }, h("slot", { name: "slot1" })), h("div", { class: "content" }, h("slot", { name: "slot3" }))))));
  }
};

export { HoneyArticleBulma as honey_article_bulma };