import {Component, h} from '@stencil/core';


@Component({
  tag: "honey-infobar",
  shadow: true
})
export class HoneyInfobar {

  render() {
    return (
      <honey-styled-component themeprefix="honey-infobar">
        <slot  slot="slot1"/>
      </honey-styled-component>
    )
  }
}
