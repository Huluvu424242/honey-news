import {Component, h, Host, State} from '@stencil/core';


@Component({
  tag: "honey-article",
  shadow: true
})
export class HoneyArticle {

  /**
   * tagName of honey style sheet to apply e.g. 'honey-papercss-style'
   */
  @State() theme: string;

  render() {
    return (
      <Host>
        <honey-styled-component themeprefix="honey-article">
          <slot name="title" slot="slot1"/>
          <slot name="subtitle" slot="slot2"/>
          <slot name="text" slot="slot3"/>
        </honey-styled-component>
      </Host>
    )
  }
}
