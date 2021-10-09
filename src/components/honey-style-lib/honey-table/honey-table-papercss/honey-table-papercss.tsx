import {Component, h, Host} from '@stencil/core';


@Component({
  tag: "honey-table-papercss",
  shadow: true
})
export class HoneyTablePapercss {

  render() {
    return (
      <Host>
        <honey-apply-style/>

        <table class="table table-hover table-alternating">
          <slot name="slot1"/>
        </table>

      </Host>
    )
  }
}
