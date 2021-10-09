import {Component, h, State} from '@stencil/core';


@Component({
  tag: "honey-about",
  shadow: true
})
export class HoneyAbout {

  /**
   * tagName of honey style sheet to apply e.g. 'honey-papercss-style'
   */
  @State() theme: string;

  render() {
    return (
      <honey-styled-component themeprefix="honey-about" slotNames="slot1">
        <slot name="content" slot="slot1"/>
      </honey-styled-component>
    )
  }
}
