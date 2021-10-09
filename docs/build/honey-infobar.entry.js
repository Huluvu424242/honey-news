import {h, r as registerInstance} from './index-570c9000.js';

const HoneyInfobar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("honey-styled-component", { themeprefix: "honey-infobar" }, h("slot", { slot: "slot1" })));
  }
};

export { HoneyInfobar as honey_infobar };
