import {Component, h, Prop, State} from '@stencil/core';
import {HoneyDefineStyle} from "@huluvu424242/honey-style-it/dist/types/components/honey-define-style/honey-define-style";
import {Subscription} from "rxjs";
import * as util from "@huluvu424242/honey-style-it/dist/types/shared/helper";

@Component({
  tag: "honey-styled-component",
  shadow: true
})
export class HoneyStyledComponent {

  themeSubscription: Subscription;

  /**
   * prefix of theme name e.g. honey when honey-papercss-style
   */
  @Prop() themeprefix: string = "honey";


  /**
   * postfix of theme name e.g. style when honey-papercss-style
   */
  @Prop() themepostfix: string = "style";

  /**
   * tagName of honey style sheet to apply e.g. 'honey-papercss-style'
   */
  @State() theme: string;

  async connectedCallback() {
    try {
      await customElements.whenDefined('honey-define-style');
      const styleElements: HoneyDefineStyle = document.querySelector('honey-define-style') as unknown as HoneyDefineStyle;
      const listener: util.ThemeListener = {
        next: (styleName: string) => this.theme = styleName,
        error: (error) => util.printError(error),
        complete: () => util.printDebug("subcription completed")
      };
      this.themeSubscription = await styleElements.subscribeThemeChangeListener(listener);
    } catch (error) {
      this.theme = 'honey-default-style';
    }
  }

  disconnectedCallback() {
    this.themeSubscription.unsubscribe();
  }

  getTheme(): string {
    if (!this.theme) return "honey-default-style";

    const nameParts: string[] = this.theme.split("-");

    if (this.themeprefix && this.themepostfix) {
      return this.themeprefix + "-" + nameParts.slice(1, -1).join("-") + "-" + this.themepostfix
    }

    if (this.themeprefix && !this.themepostfix) {
      return this.themeprefix + "-" + nameParts.slice(1).join("-");
    }

    if (!this.themeprefix && this.themepostfix) {
      return nameParts.slice(0, -1).join("-") + "-" + this.themepostfix;
    }

    return this.theme;
  }

  render() {
    // Grossbuchstabe für Variable notwendig für JSX
    const TagName = this.getTheme();
    return (<TagName/>)
  }
}
