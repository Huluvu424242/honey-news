import { r as registerInstance, h, e as Host, g as getElement } from './index-a218ef3e.js';
import { R as ReplaySubject } from './index-d3934a4e.js';
import { l as logService } from './log-service-a3857a70.js';

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
      logService.warnMessage(error);
    }
  }
  /**
   * Get the current theme as string in lowercase of tag name.
   */
  async subscribeThemeChangeListener(observer) {
    return await this.styleName$.subscribe(observer);
  }
  /**
   * Referenz auf das Replay Subject als Observable
   */
  async getStyleName$() {
    return this.styleName$.asObservable();
  }
  /**
   * Trigger recompute theme style.
   */
  async recomputeTheme() {
    this.computeTheme();
  }
  /**
   * Setzt den neuen Theme und wechselt entsprechend das Child Element aus.
   * @param themeName Name des Themes
   */
  async setNewTheme(themeName) {
    const replacement = document.createElement(themeName);
    this.host.replaceChild(replacement, this.host.children[0]);
    await this.recomputeTheme();
  }
  render() {
    return (h(Host, null));
  }
  get host() { return getElement(this); }
};

export { HoneyDefineStyle as honey_define_style };
