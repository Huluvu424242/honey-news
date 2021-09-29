import {Component, h, Host} from '@stencil/core';


@Component({
  tag: "honey-disclaimer-papercss",
  shadow: true
})
export class HoneyDisclaimerPapercss {


  async connectedCallback() {

  }

  disconnectedCallback() {
  }

  render() {
    return (
      <Host>
        <honey-apply-style/>

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

      </Host>
    )
  }
}
