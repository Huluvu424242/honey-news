import {e as Host, h, r as registerInstance} from './index-570c9000.js';

const HoneyTableBulma = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("div", { class: "table-container" }, h("table", { class: "table is-bordered is-striped is-hoverable is-fullwidth" }, h("slot", { name: "slot1" })))));
  }
};

export { HoneyTableBulma as honey_table_bulma };
