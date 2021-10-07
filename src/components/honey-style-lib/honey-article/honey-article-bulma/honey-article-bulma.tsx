import {Component, h, Host} from '@stencil/core';


@Component({
  tag: "honey-article-bulma",
  shadow: true
})
export class HoneyArticleBulma {

  render() {
    return (
      <Host>
        <honey-apply-style/>

        <div class="card">

          <div class="card-content">
            <div class="subtitle">
              <slot name="slot2"/>
            </div>
            <div class="title">
              <slot name="slot1"/>
            </div>
          </div>
        </div>
      </Host>
    )
  }
}
