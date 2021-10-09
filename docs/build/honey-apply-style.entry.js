import {h, r as registerInstance} from './index-570c9000.js';
import {a as printError, b as printDebug} from './helper-0a8dbea8.js';

const HoneyApplyStyle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  render() {
    // Grossbuchstabe für Variable notwendig für JSX
    const TagName = this.theme;
    return (h(TagName, null));
  }
};

export { HoneyApplyStyle as honey_apply_style };
