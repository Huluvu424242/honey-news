import {Component, h, Prop, State} from '@stencil/core';
import {Subscription} from "rxjs";
import {printDebug, printError, ThemeListener} from "../../shared/helper";
import {HoneyDefineStyle} from "../honey-define-style/honey-define-style";

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

  @Prop() slotNames: string;


  /**
   * tagName of honey style sheet to apply e.g. 'honey-papercss-style'
   */
  @State() theme: string;

  async componentWillLoad() {
    try {
      await customElements.whenDefined('honey-define-style');
      const styleElements: HoneyDefineStyle = document.querySelector('honey-define-style') as unknown as HoneyDefineStyle;

      const listener: ThemeListener = {
        next: (styleName: string) => {
          this.theme = styleName;
        },
        error: (error) => printError(error),
        complete: () => printDebug("subcription completed")
      };
      this.themeSubscription = await styleElements.subscribeThemeChangeListener(listener);
    } catch (error) {
      this.theme = 'honey-default-style';
    }
  }


  getTheme(): string {
    if (!this.theme) return "honey-default-style";

    const nameParts: string[] = this.theme.split("-");
    let themeName = "";
    themeName += this.themeprefix + (this.themeprefix.trim().length > 0 ? "-" : "");
    themeName += nameParts.slice(1, -1).join("-");
    themeName += (this.themepostfix.trim().length > 0 ? "-" : "") + this.themepostfix;
    return themeName.trim();
  }

  getSlotlist(): HTMLSlotElement[] {
    if (!this.slotNames || this.slotNames.trim().length < 1) {
      return (<slot/>);
    } else {
      let tags: HTMLSlotElement[] = [];
      this.slotNames.split(",").map((slotName) =>
        tags.push(<slot name={slotName} slot={slotName}>placeholder {slotName}</slot>)
      );
      return tags;
    }
  }

  render() {
    const TagName: string = this.getTheme();
    const slotElements: HTMLSlotElement[] = this.getSlotlist();
    // Grossbuchstabe für Variable notwendig für JSX
    return (
      <TagName>
        {slotElements}
      </TagName>
    )
  }
}
