import {e as Host, h, r as registerInstance} from './index-570c9000.js';

const HoneyTablePapercss = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("table", { class: "table table-hover table-alternating" }, h("slot", { name: "slot1" }))));
  }
};

export { HoneyTablePapercss as honey_table_papercss };
