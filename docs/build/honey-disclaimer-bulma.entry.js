import { r as registerInstance, h, e as Host } from './index-6cdc66d3.js';

let HoneyDisclaimerBulma = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showed = true;
  }
  commitReading() {
    this.showed = false;
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), this.showed === true ?
      h("article", { class: "message is-warning has-background-warning-light" }, h("div", { class: "message-header" }, h("slot", { name: "slot1" }, "placeholder title"), h("button", { class: "delete", "aria-label": "delete", onClick: this.commitReading.bind(this) })), h("div", { class: "message-body" }, h("slot", { name: "slot2" }, "placeholder body")))
      : ""));
  }
};

export { HoneyDisclaimerBulma as honey_disclaimer_bulma };
