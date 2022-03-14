import {Component, h, Host} from '@stencil/core';


@Component({
  tag: "honey-about-papercss",
  shadow: true
})
export class HoneyAboutPapercss {


  render() {
    return (
      <Host>
        <honey-apply-style/>

        <article>
          <slot name="slot1"/>
        </article>
      </Host>
    )
  }
}
