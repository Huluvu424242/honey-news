import { r as registerInstance, h } from './index-6cdc66d3.js';

let HoneyAbout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("honey-styled-component", { themeprefix: "honey-about", slotNames: "slot1" }, h("slot", { name: "content", slot: "slot1" })));
  }
};

export { HoneyAbout as honey_about };
