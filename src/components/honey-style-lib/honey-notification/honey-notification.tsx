import {Component, h} from '@stencil/core';


@Component({
  tag: "honey-notification",
  shadow: true
})
export class HoneyNotification {

  render() {
    return (
      <honey-styled-component themeprefix="honey-notification">
        <slot  slot="slot1"/>
      </honey-styled-component>
    )
  }
}
