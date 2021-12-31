import {Component, h} from '@stencil/core';


@Component({
  tag: "honey-article",
  shadow: true
})
export class HoneyArticle {

  render() {
    return (
      <honey-styled-component themeprefix="honey-article" slotNames="slot1,slot2,slot3">
        <slot name="title" slot="slot1"/>
        <slot name="subtitle" slot="slot2"/>
        <slot name="text" slot="slot3"/>
      </honey-styled-component>
    )
  }
}
