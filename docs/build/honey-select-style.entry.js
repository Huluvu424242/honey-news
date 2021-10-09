import {e as Host, g as getElement, h, r as registerInstance} from './index-570c9000.js';
import {p as printWarning} from './helper-0a8dbea8.js';

const HoneySelectStyle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changeTheme = () => {
      if (this.themeName && this.themeName.length > 0) {
        const elem = document.getElementsByTagName("honey-define-style")[0];
        const replacement = document.createElement(this.themeName);
        elem.replaceChild(replacement, elem.children[0]);
        elem.recomputeTheme();
      }
      else {
        printWarning("No theme attribute defined for button");
      }
    };
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("button", { onClick: this.changeTheme }, h("slot", null))));
  }
  get host() { return getElement(this); }
};

export { HoneySelectStyle as honey_select_style };
