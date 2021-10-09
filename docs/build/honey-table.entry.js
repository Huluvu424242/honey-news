import {h, r as registerInstance} from './index-570c9000.js';

const HoneyTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("honey-styled-component", { themeprefix: "honey-table" }, h("slot", { slot: "slot1" })));
  }
};

export { HoneyTable as honey_table };
