import {Component, h, State} from '@stencil/core';
import {HoneyDefineStyle} from "../honey-define-style/honey-define-style";
import {Subject} from "rxjs";

@Component({
  tag: 'honey-apply-style',
})
export class HoneyApplyStyle {

  theme$: Subject<string>;


  /**
   * tagName of honey style sheet to apply e.g. 'honey-papercss-style'
   */
  @State() theme: string;

  async componentWillLoad() {
    try {
      await customElements.whenDefined('honey-define-style');
      const styleElements: HoneyDefineStyle = document.querySelector('honey-define-style') as unknown as HoneyDefineStyle;
      this.theme$ = await styleElements.getStyleSubject();
      this.theme$.subscribe((styleName: string) => this.theme = styleName);
      // const listener: ThemeListener = {
      //   next: (styleName: string) => this.theme = styleName,
      //   error: (error) => printError(error),
      //   complete: () => printDebug("subcription completed")
      // };
    } catch (error) {
      this.theme = 'honey-default-style';
    }
  }


  render() {

    // Grossbuchstabe für Variable notwendig für JSX
    const TagName = this.theme;
    return (<TagName/>)
  }
}
