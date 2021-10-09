import {h, r as registerInstance} from './index-570c9000.js';

const HoneyArticle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("honey-styled-component", { themeprefix: "honey-article" }, h("slot", { name: "title", slot: "slot1" }), h("slot", { name: "subtitle", slot: "slot2" }), h("slot", { name: "text", slot: "slot3" })));
  }
};

export { HoneyArticle as honey_article };
