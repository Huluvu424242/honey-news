import {Component, h, Host, State} from '@stencil/core';
import {honeyDisclaimerState} from "../honey-disclaimer-state";


@Component({
  tag: "honey-disclaimer-papercss",
  shadow: true
})
export class HoneyDisclaimerPapercss {

  // @State needed for rerendering by state change
  @State() showed = {state: honeyDisclaimerState};

  commitReading() {
    this.showed.state.setToUserHasRead();
    // change the ref to trigger rerendering
    this.showed = {state: honeyDisclaimerState};
  }

  render() {
    return (
      <Host>
        <honey-apply-style/>

        {!this.showed.state.wasDisclaimerRead() ?
          <div class="row flex-spaces">
            <input class="alert-state" id="alert-1" type="checkbox"/>
            <div class="alert alert-danger dismissible row">
              <div>
                <slot name="slot1"/>
              </div>
              <div class="background-warning">
                <slot name="slot2"/>
              </div>
              <label class="paper-btn btn-close" htmlFor="alert-1">X</label>
            </div>
          </div>
          : ""}
      </Host>
    )
  }
}
