import { r as registerInstance, h } from './index-a218ef3e.js';
import { E as EMPTY } from './index-d3934a4e.js';
import { l as logService } from './log-service-a3857a70.js';

let HoneyApplyStyle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      error: (error) => logService.errorMessage(error),
      complete: () => logService.debugMessage("subcription <honey-apply-style> completed")
    };
    return listener;
  }
  render() {
    // Grossbuchstabe für Variable notwendig für JSX
    const TagName = this.styleName;
    return (h(TagName, null));
  }
};

export { HoneyApplyStyle as honey_apply_style };
