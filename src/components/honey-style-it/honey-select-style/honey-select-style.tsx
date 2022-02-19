import {Component, Element, h, Host, Prop} from '@stencil/core';
import {Components} from "../../../components";
import HoneyDefineStyle = Components.HoneyDefineStyle;
import {logService} from "../../../shared/log-service";

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
      const elem: HoneyDefineStyle = document.getElementsByTagName("honey-define-style")[0] as HoneyDefineStyle;
      elem.setNewTheme(this.themeName);
    } else {
      logService.warnMessage("No theme attribute defined for button");
    }
  };

  render() {
    return (
      <Host>
        <honey-apply-style />
        <a class="navbar-item button is-rounded is-success" onClick={this.changeTheme}><slot/></a>
      </Host>
    );
  }
}
