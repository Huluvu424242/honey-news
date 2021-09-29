import {Component, h, Host, State} from '@stencil/core';


@Component({
  tag: "honey-disclaimer-bulma",
  shadow: true
})
export class HoneyDisclaimerBulma {


  @State() showed = true;


  commitReading() {
    this.showed = false;
  }

  render() {


    return (
      <Host>
        <honey-apply-style/>

        {this.showed === true ?
          <article class="message is-danger has-background-danger-light">
            <div class="message-header">
              <slot name="slot1">
                placeholder title
              </slot>
              <button class="delete" aria-label="delete" onClick={this.commitReading.bind(this)}></button>
            </div>
            <div class="message-body">
              <slot name="slot2">
                placeholder body
              </slot>
            </div>
          </article>
          : ""}
      </Host>

    )
  }
}
