import { r as registerInstance, h, e as Host } from './index-a218ef3e.js';
import { h as honeyDisclaimerState } from './honey-disclaimer-state-4b014b63.js';

let HoneyDisclaimerPapercss = class {
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
      h("div", { class: "row flex-spaces" }, h("input", { class: "alert-state", id: "alert-1", type: "checkbox" }), h("div", { class: "alert alert-danger dismissible row" }, h("div", null, h("slot", { name: "slot1" })), h("div", { class: "background-warning" }, h("slot", { name: "slot2" })), h("label", { class: "paper-btn btn-close", htmlFor: "alert-1", onClick: this.commitReading.bind(this) }, "X")))
      : ""));
  }
};

export { HoneyDisclaimerPapercss as honey_disclaimer_papercss };
