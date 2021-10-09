import {Component, h, Host} from '@stencil/core';


@Component({
  tag: "honey-table-bulma",
  shadow: true
})
export class HoneyTableBulma {

  render() {
    return (
      <Host>
        <honey-apply-style/>

        <div class="table-container">
          <table class="table is-bordered is-striped is-hoverable is-fullwidth">
            <slot name="slot1"/>
          </table>
        </div>
      </Host>
    )
  }
}
