import {Component, h, Host} from '@stencil/core';


@Component({
  tag: "honey-article-papercss",
  shadow: true
})
export class HoneyArticlePapercss {

  render() {
    return (
      <Host>
        <honey-apply-style/>

        <div class="card">
          <div class="card-body">
            <div class="card-title">
              <slot name="slot1"/>
            </div>
            <div class="card-subtitle">
              <slot name="slot2"/>
            </div>
            <div class="card-text">
              <slot name="slot3"/>
            </div>
          </div>
        </div>
      </Host>
    )
  }
}
