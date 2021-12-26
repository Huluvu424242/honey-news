import { r as registerInstance, h } from './index-6cdc66d3.js';

let HoneyArticle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("honey-styled-component", { themeprefix: "honey-article", slotNames: "slot1,slot2,slot3" }, h("slot", { name: "title", slot: "slot1" }), h("slot", { name: "subtitle", slot: "slot2" }), h("slot", { name: "text", slot: "slot3" })));
  }
};

export { HoneyArticle as honey_article };
