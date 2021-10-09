import {e as Host, h, r as registerInstance} from './index-570c9000.js';

const HoneyDisclaimerPapercss = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("div", { class: "row flex-spaces" }, h("input", { class: "alert-state", id: "alert-1", type: "checkbox" }), h("div", { class: "alert alert-danger dismissible row" }, h("div", null, h("slot", { name: "slot1" })), h("div", { class: "background-warning" }, h("slot", { name: "slot2" })), h("label", { class: "paper-btn btn-close", htmlFor: "alert-1" }, "X")))));
  }
};

export { HoneyDisclaimerPapercss as honey_disclaimer_papercss };
