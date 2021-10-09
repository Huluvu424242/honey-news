import {e as Host, h, r as registerInstance} from './index-570c9000.js';

const HoneyNotificationPapercss = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("div", { class: "row flex-spaces" }, h("input", { class: "alert-state", id: "alert0", type: "checkbox" }), h("div", { class: "alert alert-primary dismissible" }, h("slot", { name: "slot1" }), h("label", { class: "btn-close", htmlFor: "alert0" }, "X")))));
  }
};

export { HoneyNotificationPapercss as honey_notification_papercss };