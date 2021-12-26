import { r as registerInstance, h, e as Host } from './index-6cdc66d3.js';

let HoneyTablePapercss = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("table", { class: "table table-hover table-alternating" }, h("slot", { name: "slot1" }))));
  }
};

export { HoneyTablePapercss as honey_table_papercss };
