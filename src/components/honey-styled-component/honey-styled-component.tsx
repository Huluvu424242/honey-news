import {Component, h, Prop, State} from '@stencil/core';
import {HoneyDefineStyle} from "@huluvu424242/honey-style-it/dist/types/components/honey-define-style/honey-define-style";
import {Subscription} from "rxjs";
import {consoleDebug, consoleError} from "../../shared/helper";
import {ThemeListener} from "@huluvu424242/honey-style-it/dist/types/shared/helper";

@Component({
  tag: "honey-styled-component",
  shadow: true
})
export class HoneyStyledComponent {

  themeSubscription: Subscription;

  /**
   * prefix of theme name e.g. honey when honey-papercss-style
   */
  @Prop({attribute: "prefix"}) componentPrefix: string = "honey";


  /**
   * postfix of theme name e.g. style when honey-papercss-style
   */
  @Prop({attribute: "postfix"}) componentPostfix: string = "style";

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
        error: (error) => consoleError(error),
        complete: () => consoleDebug("subcription completed")
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
    if (!this.theme) return "default";
    const nameParts: string[] = this.theme.split("-");
    let themeName = "";
    if (nameParts[0]) {
      themeName += nameParts[0] + "-";
    }
    themeName += this.theme;
    if (nameParts.length > 2 && nameParts[nameParts.length - 1]) {
      themeName += "-" + nameParts[nameParts.length - 1];
    }
    return themeName;
  }

  render() {
    // Grossbuchstabe für Variable notwendig für JSX
    const TagName = this.getTheme();
    return (<TagName/>)
  }
}
