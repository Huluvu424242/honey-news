import { r as registerInstance, h } from './index-a218ef3e.js';

let HoneyDisclaimer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("honey-styled-component", { themeprefix: "honey-disclaimer", slotNames: "slot1,slot2" }, h("slot", { name: "title", slot: "slot1" }), h("slot", { name: "body", slot: "slot2" })));
  }
};

export { HoneyDisclaimer as honey_disclaimer };
