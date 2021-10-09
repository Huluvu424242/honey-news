import {h, r as registerInstance} from './index-570c9000.js';

const HoneyNotification = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("honey-styled-component", { themeprefix: "honey-notification" }, h("slot", { slot: "slot1" })));
  }
};

export { HoneyNotification as honey_notification };
