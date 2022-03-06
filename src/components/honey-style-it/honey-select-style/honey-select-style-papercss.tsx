import {Component, Element, h, Host, Prop} from '@stencil/core';
import {logService} from "../../../shared/log-service";
import {HoneyDefineStyle} from "@huluvu424242/honey-style-it/dist/components/honey-define-style";

@Component({
  tag: 'honey-select-style-papercss',
  shadow: true
})
export class HoneySelectStyle {

  @Element() host: HTMLElement;

  dropdown: HTMLSelectElement;

  /**
   * Name des zu setzenden Theme z.B. honey-papercss-style
   */
  @Prop({attribute: "theme"}) themeName;

  /**
   * Text der anzuzeigenden Auswahloption
   */
  @Prop() optionText;

  private changeTheme = () => {
    console.log("### papercss changeTheme");
    if (this.themeName && this.themeName.length > 0) {
      const elem: HoneyDefineStyle = document.getElementsByTagName("honey-define-style")[0] as HoneyDefineStyle;
      elem.setNewTheme(this.themeName);
    } else {
      logService.warnMessage("No theme attribute defined for button");
    }
  };


  render() {
    return (
      <Host>
        <honey-apply-style/>
        <select id="paperSelects1" ref={el => this.dropdown = el as HTMLSelectElement} onChange={this.changeTheme}>
          <option value="1">{this.optionText}</option>
          <option disabled={true} value="2" selected>PaperCSS Style</option>
        </select>

      </Host>
    );
  }
}
