import {h, r as registerInstance} from './index-570c9000.js';

const HoneyDisclaimer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("honey-styled-component", { themeprefix: "honey-disclaimer" }, h("slot", { name: "title", slot: "slot1" }), h("slot", { name: "body", slot: "slot2" })));
  }
};

export { HoneyDisclaimer as honey_disclaimer };
