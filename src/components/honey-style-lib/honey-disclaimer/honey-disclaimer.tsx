import {Component, h} from '@stencil/core';


@Component({
  tag: "honey-disclaimer",
  shadow: true
})
export class HoneyDisclaimer {

  render() {
    return (
      <honey-styled-component themeprefix="honey-disclaimer" slotNames="slot1,slot2">
        <slot name="title" slot="slot1"/>
        <slot name="body" slot="slot2"/>
      </honey-styled-component>
    )
  }
}
