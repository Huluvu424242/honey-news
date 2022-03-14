import {Component, h, Host} from '@stencil/core';


@Component({
  tag: "honey-about-bulma",
  shadow: true
})
export class HoneyAboutBulma {


  render() {
    return (
      <Host>
        <honey-apply-style/>

        <article class="box">
          <slot name="slot1"/>
        </article>
      </Host>
    )
  }
}
