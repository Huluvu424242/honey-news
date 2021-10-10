import {Component, h, Prop, State} from '@stencil/core';
import {Subscription} from "rxjs";
import {printDebug, printError, ThemeListener} from "../../shared/helper";
import {HoneyDefineStyle} from "../honey-define-style/honey-define-style";

@Component({
  tag: "honey-styled-paracomponent",
  shadow: true
})
export class HoneyStyledParacomponent {

  themeSubscription: Subscription;

  tagElement: HTMLElement;

  @Prop({mutable: false}) parameterlist;

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

  getTheme(): string {
    if (!this.theme) return "honey-default-style";

    const nameParts: string[] = this.theme.split("-");
    let themeName = "";
    themeName += this.themeprefix + (this.themeprefix.trim().length > 0 ? "-" : "");
    themeName += nameParts.slice(1, -1).join("-");
    themeName += (this.themepostfix.trim().length > 0 ? "-" : "") + this.themepostfix;
    return themeName.trim();
  }

  render() {
    // Grossbuchstabe für Variable notwendig für JSX
    const TagName = this.getTheme();
    return (
      <TagName ref={(el) => {
        this.tagElement = el
        this.tagElement["argumentlist"] = this.parameterlist;
      }}>
        <slot name="slot1" slot="slot1">placeholder slot 1</slot>
        <slot name="slot2" slot="slot2">placeholder slot 2</slot>
        <slot name="slot3" slot="slot3">placeholder slot 3</slot>
        <slot name="slot4" slot="slot4">placeholder slot 4</slot>
        <slot name="slot5" slot="slot5">placeholder slot 5</slot>
        <slot name="slot6" slot="slot6">placeholder slot 6</slot>
        <slot name="slot7" slot="slot7">placeholder slot 7</slot>
        <slot name="slot8" slot="slot8">placeholder slot 8</slot>
        <slot name="slot9" slot="slot9">placeholder slot 9</slot>
        <slot name="slot10" slot="slot10">placeholder slot 10</slot>
      </TagName>
    )
  }
}
