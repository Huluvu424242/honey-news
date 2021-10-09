import {e as Host, h, r as registerInstance} from './index-570c9000.js';

const HoneyInfobarBulma = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("div", { class: "notification is-info" }, h("slot", { name: "slot1" }))));
  }
};

export { HoneyInfobarBulma as honey_infobar_bulma };
