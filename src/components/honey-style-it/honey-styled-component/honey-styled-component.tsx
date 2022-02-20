import {Component, h, JSX, Prop, State} from '@stencil/core';
import {HoneyDefineStyle, ThemeListener} from "../honey-define-style/honey-define-style";
import {EMPTY, Subscription} from "rxjs";
import {logService} from "../../../shared/log-service";

@Component({
  tag: "honey-styled-component",
  shadow: true
})
export class HoneyStyledComponent {

  /**
   * themeprefix of theme name e.g. honey when honey-papercss-style
   */
  @Prop() themeprefix: string = "honey";

  /**
   * themepostfix of theme name e.g. style when honey-papercss-style
   */
  @Prop() themepostfix: string = " ";

  /**
   * Komma separierte Liste von Namen der zu erzeugenden Slots
   */
  @Prop() slotNames: string;


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
      complete: () => logService.debugMessage("subcription <honey-styled-component> completed")
    };
    return listener;
  }


  getTheme(): string {
    if (!this.styleName) return "honey-default-style";

    const nameParts: string[] = this.styleName.split("-");
    let themeName = "";
    themeName += this.themeprefix + (this.themeprefix.trim().length > 0 ? "-" : "");
    themeName += nameParts.slice(1, -1).join("-");
    themeName += (this.themepostfix.trim().length > 0 ? "-" : "") + this.themepostfix;
    return themeName.trim();
  }

  getSlotlist(): JSX.Element[] {
    if (!this.slotNames || this.slotNames.trim().length < 1) {
      return ([<slot/>]);
    } else {
      let tags: JSX.Element[] = [];
      this.slotNames.split(",").map((slotName) =>
        tags.push(<slot name={slotName} slot={slotName}>placeholder {slotName}</slot>)
      );
      return tags;
    }
  }

  render() {
    const TagName: string = this.getTheme();
    const slotElements: JSX.Element[] = this.getSlotlist();
    // Grossbuchstabe für Variable notwendig für JSX
    return (
      <TagName>
        {slotElements}
      </TagName>
    )
  }
}
