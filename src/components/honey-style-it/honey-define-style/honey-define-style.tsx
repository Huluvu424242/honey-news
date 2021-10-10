import {Component, Element, h, Host, Method} from '@stencil/core';
import {Observer, ReplaySubject, Subject, Subscription} from "rxjs";
import {printWarning} from "../../shared/helper";

@Component({
  tag: 'honey-define-style',
})
export class HoneyDefineStyle {

  @Element() host: HTMLElement;

  protected styleName: Subject<string> = new ReplaySubject<string>(1);

  protected computeTheme() {
    const children: HTMLCollection = this.host.children;
    const tagName: string = children.item(0).tagName;
    if (tagName) {
      this.styleName.next(tagName.toLowerCase());
    }
  }

  async componentWillLoad() {
    try {
      await this.computeTheme();
    } catch (error) {
      printWarning(error);
    }
  }

  /**
   * Get the current theme as string in lowercase of tag name.
   */
  @Method()
  async subscribeThemeChangeListener(observer: Observer<string>): Promise<Subscription> {
    return await this.styleName.subscribe(observer);
  }

  @Method()
  async getStyleSubject(): Promise<Subject<string>> {
    return this.styleName;
  }

  /**
   * Trigger recompute theme style.
   */
  @Method()
  async recomputeTheme() {
    this.computeTheme();
  }

  render() {
    return (
      <Host>

      </Host>
    );
  }
}
