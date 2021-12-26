import { r as registerInstance, h } from './index-6cdc66d3.js';

let HoneyNotification = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("honey-styled-component", { themeprefix: "honey-notification", slotNames: "slot1" }, h("slot", { slot: "slot1" })));
  }
};

export { HoneyNotification as honey_notification };
