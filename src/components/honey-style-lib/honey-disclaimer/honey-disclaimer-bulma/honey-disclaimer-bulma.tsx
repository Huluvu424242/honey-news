import {Component, h, Host, State} from '@stencil/core';
import {honeyDisclaimerState} from "../honey-disclaimer-state";


@Component({
  tag: "honey-disclaimer-bulma",
  shadow: true
})
export class HoneyDisclaimerBulma {


  // @State needed for rerendering by state change
  @State() showed = { state: honeyDisclaimerState};


  commitReading() {
    this.showed.state.setToUserHasRead();
    // change the ref to trigger rerendering
    this.showed = { state: honeyDisclaimerState};
  }

  render() {


    return (
      <Host>
        <honey-apply-style/>

        {!this.showed.state.wasDisclaimerRead() ?
          <article class="message is-warning has-background-warning-light">
            <div class="message-header">
              <slot name="slot1">
                placeholder title
              </slot>
              <button class="delete" aria-label="delete" onClick={this.commitReading.bind(this)} />
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
