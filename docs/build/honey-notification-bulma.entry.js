import {e as Host, h, r as registerInstance} from './index-570c9000.js';

const HoneyNotificationBulma = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showed = true;
  }
  commitReading() {
    this.showed = false;
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), this.showed === true ?
      h("div", { class: "notification is-primary" }, h("button", { class: "delete", onClick: this.commitReading.bind(this) }), h("slot", { name: "slot1" }))
      : ""));
  }
};

export { HoneyNotificationBulma as honey_notification_bulma };
