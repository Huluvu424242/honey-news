import {Component, h, Host} from '@stencil/core';


@Component({
  tag: "honey-infobar-papercss",
  shadow: true
})
export class HoneyInfobarPapercss {

  render() {
    return (
      <Host>
        <honey-apply-style/>

        <div class="row flex-spaces">
          <div class="alert alert-secondary">
            <slot name="slot1"/>
          </div>
        </div>
      </Host>
    )
  }
}
