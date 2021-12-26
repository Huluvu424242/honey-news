import { r as registerInstance, h } from './index-6cdc66d3.js';
import { a as printError, b as printDebug } from './helper-1aab0fc5.js';

let HoneyStyledParacomponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * themeprefix of theme name e.g. honey when honey-papercss-style
     */
    this.themeprefix = "honey";
    /**
     * themepostfix of theme name e.g. style when honey-papercss-style
     */
    this.themepostfix = " ";
  }
  async connectedCallback() {
    try {
      await customElements.whenDefined('honey-define-style');
      const styleElements = document.querySelector('honey-define-style');
      const listener = {
        next: (styleName) => this.theme = styleName,
        error: (error) => printError(error),
        complete: () => printDebug("subcription completed")
      };
      this.themeSubscription = await styleElements.subscribeThemeChangeListener(listener);
    }
    catch (error) {
      this.theme = 'honey-default-style';
    }
  }
  disconnectedCallback() {
    this.themeSubscription.unsubscribe();
  }
  getTheme() {
    if (!this.theme)
      return "honey-default-style";
    const nameParts = this.theme.split("-");
    let themeName = "";
    themeName += this.themeprefix + (this.themeprefix.trim().length > 0 ? "-" : "");
    themeName += nameParts.slice(1, -1).join("-");
    themeName += (this.themepostfix.trim().length > 0 ? "-" : "") + this.themepostfix;
    return themeName.trim();
  }
  render() {
    // Grossbuchstabe für Variable notwendig für JSX
    const TagName = this.getTheme();
    return (h(TagName, { ref: (el) => {
        this.tagElement = el;
        this.tagElement["argumentlist"] = this.parameterlist;
      } }, h("slot", { name: "slot1", slot: "slot1" }, "placeholder slot 1"), h("slot", { name: "slot2", slot: "slot2" }, "placeholder slot 2"), h("slot", { name: "slot3", slot: "slot3" }, "placeholder slot 3"), h("slot", { name: "slot4", slot: "slot4" }, "placeholder slot 4"), h("slot", { name: "slot5", slot: "slot5" }, "placeholder slot 5"), h("slot", { name: "slot6", slot: "slot6" }, "placeholder slot 6"), h("slot", { name: "slot7", slot: "slot7" }, "placeholder slot 7"), h("slot", { name: "slot8", slot: "slot8" }, "placeholder slot 8"), h("slot", { name: "slot9", slot: "slot9" }, "placeholder slot 9"), h("slot", { name: "slot10", slot: "slot10" }, "placeholder slot 10")));
  }
};

export { HoneyStyledParacomponent as honey_styled_paracomponent };
