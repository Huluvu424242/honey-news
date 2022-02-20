import { r as registerInstance, h, e as Host, g as getElement } from './index-a218ef3e.js';
import { l as logService } from './log-service-a3857a70.js';

let HoneySelectStyle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changeTheme = () => {
      console.log("### papercss changeTheme");
      if (this.themeName && this.themeName.length > 0) {
        const elem = document.getElementsByTagName("honey-define-style")[0];
        elem.setNewTheme(this.themeName);
      }
      else {
        logService.warnMessage("No theme attribute defined for button");
      }
    };
  }
  render() {
    return (h(Host, null, h("honey-apply-style", null), h("select", { id: "paperSelects1", ref: el => this.dropdown = el, onChange: this.changeTheme }, h("option", { value: "1" }, this.optionText), h("option", { disabled: true, value: "2", selected: true }, "PaperCSS Style"))));
  }
  get host() { return getElement(this); }
};

export { HoneySelectStyle as honey_select_style_papercss };
