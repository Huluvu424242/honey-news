import { r as registerInstance, h, e as Host } from './index-6cdc66d3.js';

let HoneyInfobarPapercss = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("div", { class: "row flex-spaces" }, h("div", { class: "alert alert-secondary" }, h("slot", { name: "slot1" })))));
  }
};

export { HoneyInfobarPapercss as honey_infobar_papercss };
