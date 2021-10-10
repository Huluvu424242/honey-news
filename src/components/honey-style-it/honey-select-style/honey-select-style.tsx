import {Component, Element, h, Host, Prop} from '@stencil/core';
import {printWarning} from "../../shared/helper";

@Component({
  tag: 'honey-select-style',
  shadow: true
})
export class HoneySelectStyle {

  @Element() host: HTMLElement;

  /**
   * Name des zu setzenden Theme z.B. honey-papercss-style
   */
  @Prop({attribute: "theme"}) themeName;

  private changeTheme = () => {
    if (this.themeName && this.themeName.length > 0) {
      const elem = document.getElementsByTagName("honey-define-style")[0];
      const replacement = document.createElement(this.themeName);
      elem.replaceChild(replacement, elem.children[0]);
      elem.recomputeTheme();
    } else {
      printWarning("No theme attribute defined for button");
    }
  };

  render() {
    return (
      <Host>
        <honey-apply-style />
        <button onClick={this.changeTheme}><slot/></button>
      </Host>
    );
  }
}
