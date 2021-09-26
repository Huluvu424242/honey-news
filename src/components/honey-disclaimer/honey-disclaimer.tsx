import {Component,  h,  State} from '@stencil/core';


@Component({
  tag: "honey-disclaimer",
  shadow: true
})
export class HoneyDisclaimer {

  /**
   * tagName of honey style sheet to apply e.g. 'honey-papercss-style'
   */
  @State() theme: string;

  async connectedCallback() {

  }

  disconnectedCallback() {
  }

  render() {
    return (
      <honey-styled-component themeprefix="honey-disclaimer" />
      )
  }
}
