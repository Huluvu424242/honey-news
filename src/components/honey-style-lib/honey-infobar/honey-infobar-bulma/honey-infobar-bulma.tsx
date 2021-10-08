import {Component, h, Host} from '@stencil/core';


@Component({
  tag: "honey-infobar-bulma",
  shadow: true
})
export class HoneyInfobarBulma {

  render() {
    return (
      <Host>
        <honey-apply-style/>

        <div class="notification is-info">
          <slot name="slot1"/>
        </div>
      </Host>
    )
  }
}
