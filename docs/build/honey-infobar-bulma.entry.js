import { r as registerInstance, h, e as Host } from './index-a218ef3e.js';

let HoneyInfobarBulma = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("div", { class: "notification is-info" }, h("slot", { name: "slot1" }))));
  }
};

export { HoneyInfobarBulma as honey_infobar_bulma };
