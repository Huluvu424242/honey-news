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
   * themeprefix of theme name e.g. honey when honey-papercss-style
   */
  @Prop() themeprefix: string = "honey";

  /**
   * themepostfix of theme name e.g. style when honey-papercss-style
   */
  @Prop() themepostfix: string = " ";

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
    let themeName = "";
    themeName += this.themeprefix + (this.themeprefix.trim().length>0? "-":"");
    themeName += nameParts.slice(1, -1).join("-");
    themeName += (this.themepostfix.trim().length>0? "-":"")+ this.themepostfix;
    return themeName.trim();
  }

  render() {
    // Grossbuchstabe für Variable notwendig für JSX
    const TagName = this.getTheme();
    return (<TagName/>)
  }
}
