import { r as registerInstance, h, e as Host } from './index-a218ef3e.js';

let HoneyNotificationBulma = class {
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
