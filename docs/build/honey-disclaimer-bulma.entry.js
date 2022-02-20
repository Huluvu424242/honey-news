import { r as registerInstance, h, e as Host } from './index-a218ef3e.js';
import { h as honeyDisclaimerState } from './honey-disclaimer-state-4b014b63.js';

let HoneyDisclaimerBulma = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // @State needed for rerendering by state change
    this.showed = { state: honeyDisclaimerState };
  }
  commitReading() {
    this.showed.state.setToUserHasRead();
    // change the ref to trigger rerendering
    this.showed = { state: honeyDisclaimerState };
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), !this.showed.state.wasDisclaimerRead() ?
      h("article", { class: "message is-warning has-background-warning-light" }, h("div", { class: "message-header" }, h("slot", { name: "slot1" }, "placeholder title"), h("button", { class: "delete", "aria-label": "delete", onClick: this.commitReading.bind(this) })), h("div", { class: "message-body" }, h("slot", { name: "slot2" }, "placeholder body")))
      : ""));
  }
};

export { HoneyDisclaimerBulma as honey_disclaimer_bulma };
