import { r as registerInstance, h, e as Host, g as getElement } from './index-6cdc66d3.js';
import { R as ReplaySubject } from './index-d9553567.js';
import { p as printWarning } from './helper-1aab0fc5.js';

let HoneyDefineStyle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.styleName$ = new ReplaySubject(1);
  }
  computeTheme() {
    const children = this.host.children;
    const tagName = children.item(0).tagName;
    if (tagName) {
      this.styleName$.next(tagName.toLowerCase());
    }
  }
  async componentWillLoad() {
    try {
      await this.computeTheme();
    }
    catch (error) {
      printWarning(error);
    }
  }
  /**
   * Get the current theme as string in lowercase of tag name.
   */
  async subscribeThemeChangeListener(observer) {
    return await this.styleName$.subscribe(observer);
  }
  async getStyleName$() {
    return this.styleName$.asObservable();
  }
  /**
   * Trigger recompute theme style.
   */
  async recomputeTheme() {
    this.computeTheme();
  }
  render() {
    return (h(Host, null));
  }
  get host() { return getElement(this); }
};

export { HoneyDefineStyle as honey_define_style };
