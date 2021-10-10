import {Component, h, State} from '@stencil/core';
import {HoneyDefineStyle} from "../honey-define-style/honey-define-style";
import {Subscription} from "rxjs";
import {printDebug, printError, ThemeListener} from "../../shared/helper";

@Component({
  tag: 'honey-apply-style',
})
export class HoneyApplyStyle {

  themeSubscription: Subscription;


  /**
   * tagName of honey style sheet to apply e.g. 'honey-papercss-style'
   */
  @State() theme: string;

  async connectedCallback() {
    try {
      await customElements.whenDefined('honey-define-style');
      const styleElements: HoneyDefineStyle = document.querySelector('honey-define-style') as unknown as HoneyDefineStyle;
      const listener: ThemeListener = {
        next: (styleName: string) => this.theme = styleName,
        error: (error) => printError(error),
        complete: () => printDebug("subcription completed")
      };
      this.themeSubscription = await styleElements.subscribeThemeChangeListener(listener);
    } catch (error) {
      this.theme = 'honey-default-style';
    }
  }

  disconnectedCallback() {
    this.themeSubscription.unsubscribe();
  }

  render() {
    // Grossbuchstabe für Variable notwendig für JSX
    const TagName = this.theme;
    return (<TagName/>)
  }
}
