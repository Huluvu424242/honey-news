import { r as registerInstance, h } from './index-a218ef3e.js';

let HoneyInfobar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("honey-styled-component", { themeprefix: "honey-infobar", slotNames: "slot1" }, h("slot", { slot: "slot1" })));
  }
};

export { HoneyInfobar as honey_infobar };
