import { r as registerInstance, h } from './index-6cdc66d3.js';

let HoneyTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("honey-styled-component", { themeprefix: "honey-table", slotNames: "slot1" }, h("slot", { slot: "slot1" })));
  }
};

export { HoneyTable as honey_table };
