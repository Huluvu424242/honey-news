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
          <input id="disclaimer" role="button" type="checkbox" class="alert-state btn btn-primary"
                 data-bs-toggle="collapse" data-bs-target="#disclaimer-text"/>
          <div id="disclaimer-text" class="alert alert-danger dismissible collapse show">
            <div class="row">
              <h3>!!! Das ist eine Demo Seite welche alle Feature der App zeigen soll - aus
                diesem Grund ist auch die Statistik eingeschaltet !!!
              </h3>
              <div class="background-warning">
                <p>
                  Es werden nur Daten zu den abgerufenen Feeds gespeichert (in memory) wie: URL, Anzahl der
                  Abfragen und Anzahl valider Anworten.
                  Sollten Sie die Speicherung nicht wünschen - dann geben Sie bitte keinen neuen Feed ein.
                  Vielen Dank für Ihr Verständnis.
                </p>
              </div>
            </div>
            <label class="paper-btn" title="Hinweis Ausblenden" htmlFor="disclaimer">X</label>
          </div>
        </div>
      </Host>
    )
  }
}
