import { r as registerInstance, h } from './index-6cdc66d3.js';
import { E as EMPTY } from './index-d9553567.js';
import { a as printError, b as printDebug } from './helper-1aab0fc5.js';

let HoneyStyledComponent = class {
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
  connectedCallback() {
    this.styleNameSubscription = EMPTY.subscribe(this.createStyleNameChangeListener());
  }
  disconnectedCallback() {
    this.styleNameSubscription.unsubscribe();
  }
  async componentWillLoad() {
    try {
      await customElements.whenDefined('honey-define-style');
      const styleElements = document.querySelector('honey-define-style');
      this.styleNameSubscription.unsubscribe();
      this.styleNameSubscription = await styleElements.subscribeThemeChangeListener(this.createStyleNameChangeListener());
    }
    catch (error) {
      this.styleName = 'honey-default-style';
    }
  }
  createStyleNameChangeListener() {
    const listener = {
      next: (styleName) => this.styleName = styleName,
      error: (error) => printError(error),
      complete: () => printDebug("subcription <honey-styled-component> completed")
    };
    return listener;
  }
  getTheme() {
    if (!this.styleName)
      return "honey-default-style";
    const nameParts = this.styleName.split("-");
    let themeName = "";
    themeName += this.themeprefix + (this.themeprefix.trim().length > 0 ? "-" : "");
    themeName += nameParts.slice(1, -1).join("-");
    themeName += (this.themepostfix.trim().length > 0 ? "-" : "") + this.themepostfix;
    return themeName.trim();
  }
  getSlotlist() {
    if (!this.slotNames || this.slotNames.trim().length < 1) {
      return (h("slot", null));
    }
    else {
      let tags = [];
      this.slotNames.split(",").map((slotName) => tags.push(h("slot", { name: slotName, slot: slotName }, "placeholder ", slotName)));
      return tags;
    }
  }
  render() {
    const TagName = this.getTheme();
    const slotElements = this.getSlotlist();
    // Grossbuchstabe für Variable notwendig für JSX
    return (h(TagName, null, slotElements));
  }
};

export { HoneyStyledComponent as honey_styled_component };
