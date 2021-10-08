import {Component, h, Host} from '@stencil/core';


@Component({
  tag: "honey-notification-papercss",
  shadow: true
})
export class HoneyNotificationPapercss {

  render() {
    return (
      <Host>
        <honey-apply-style/>

        <div class="row flex-spaces">
          <input class="alert-state" id="alert0" type="checkbox"/>
          <div class="alert alert-primary dismissible">
            <slot name="slot1"/>
            <label class="btn-close" htmlFor="alert0">X</label>
          </div>
        </div>

      </Host>
    )
  }
}
