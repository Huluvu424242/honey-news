import {Component, h, State} from '@stencil/core';


@Component({
  tag: "honey-navbar",
  shadow: true
})
export class HoneyNavbar {

  /**
   * tagName of honey style sheet to apply e.g. 'honey-papercss-style'
   */
  @State() theme: string;

  render() {
    return (
      <honey-styled-component themeprefix="honey-navbar">
       <slot name="title" slot="slot1"/>
       <slot name="body" slot="slot2"/>
      </honey-styled-component>
    )
  }
}
