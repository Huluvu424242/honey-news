import {Component, h, Host, State} from '@stencil/core';


@Component({
  tag: "honey-notification-bulma",
  shadow: true
})
export class HoneyNotificationBulma {

  @State() showed = true;


  commitReading() {
    this.showed = false;
  }


  render() {
    return (
      <Host>
        <honey-apply-style/>

        {this.showed === true ?
          <div class="notification is-primary">
            <button class="delete" onClick={this.commitReading.bind(this)}/>
            <slot name="slot1"/>
          </div>
          : ""}
      </Host>
    )
  }
}
