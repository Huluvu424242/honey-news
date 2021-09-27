import {Component, h, Host} from '@stencil/core';


@Component({
  tag: "honey-disclaimer-bootstrap",
  shadow: true
})
export class HoneyDisclaimerBootstrap {


  async connectedCallback() {

  }

  disconnectedCallback() {
  }

  render() {
    return (
      <Host>
        <honey-apply-style/>
        <p>
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
                  aria-expanded="false" aria-controls="collapseWidthExample">
            Toggle width collapse
          </button>
        </p>
        <div>
          <div class="collapse collapse-horizontal" id="collapseWidthExample">
            <div class="card card-body">
              This is some placeholder content for a horizontal collapse. It's hidden by default and shown when
              triggered.
            </div>
          </div>
        </div>
      </Host>
    )
  }
}
