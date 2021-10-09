import {Component, h} from '@stencil/core';


@Component({
  tag: "honey-table",
  shadow: true
})
export class HoneyTable {

  render() {
    return (
      <honey-styled-component themeprefix="honey-table">
        <slot slot="slot1"/>
      </honey-styled-component>
    )
  }
}
