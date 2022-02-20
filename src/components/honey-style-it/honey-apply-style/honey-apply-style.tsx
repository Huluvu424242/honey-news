import {Component, h, State} from '@stencil/core';
import {HoneyDefineStyle, ThemeListener} from "../honey-define-style/honey-define-style";
import {EMPTY, Subscription} from "rxjs";
import {logService} from "../../../shared/log-service";

@Component({
  tag: 'honey-apply-style',
})
export class HoneyApplyStyle {

  styleNameSubscription: Subscription;

  /**
   * tagName of honey style sheet to apply e.g. 'honey-papercss-style'
   */
  @State() styleName: string;

  connectedCallback() {
    this.styleNameSubscription = EMPTY.subscribe(this.createStyleNameChangeListener());
  }

  disconnectedCallback() {
    this.styleNameSubscription.unsubscribe();
  }

  async componentWillLoad() {
    try {
      await customElements.whenDefined('honey-define-style');
      const styleElements: HoneyDefineStyle = document.querySelector('honey-define-style') as unknown as HoneyDefineStyle;
      this.styleNameSubscription.unsubscribe();
      this.styleNameSubscription = await styleElements.subscribeThemeChangeListener(this.createStyleNameChangeListener());
    } catch (error) {
      this.styleName = 'honey-default-style';
    }
  }

  createStyleNameChangeListener() {
    const listener: ThemeListener = {
      next: (styleName: string) => this.styleName = styleName,
      error: (error) => logService.errorMessage(error),
      complete: () => logService.debugMessage("subcription <honey-apply-style> completed")
    };
    return listener;
  }

  render() {

    // Grossbuchstabe für Variable notwendig für JSX
    const TagName = this.styleName;
    return (<TagName/>)
  }
}
