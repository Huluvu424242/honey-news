import {h, r as registerInstance} from './index-570c9000.js';

const HoneyAbout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("honey-styled-component", { themeprefix: "honey-about" }, h("slot", { name: "content", slot: "slot1" })));
  }
};

export { HoneyAbout as honey_about };
