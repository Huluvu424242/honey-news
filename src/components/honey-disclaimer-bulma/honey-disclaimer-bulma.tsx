import {Component, h, Host, State} from '@stencil/core';


@Component({
  tag: "honey-disclaimer-bulma",
  shadow: true
})
export class HoneyDisclaimerBulma {


  @State() showed = true;


  async connectedCallback() {

  }

  disconnectedCallback() {
  }

  commitReading() {
    this.showed = false;
  }

  render() {


    return (
      <Host>
        <honey-apply-style/>

        {this.showed === true ?
          <article class="message is-warning">
            <div class="message-header">
              <p>!!! Das ist eine Demo Seite welche alle Feature der App zeigen soll - aus
                diesem Grund ist auch die Statistik eingeschaltet !!!</p>
              <button class="delete" aria-label="delete" onClick={this.commitReading.bind(this)}></button>
            </div>
            <div class="message-body">
              <p>
              Es werden nur Daten zu den abgerufenen Feeds gespeichert (in memory) wie: URL, Anzahl der
              Abfragen und Anzahl valider Anworten.</p><p>
              Sollten Sie die Speicherung nicht wünschen - dann geben Sie bitte keinen neuen Feed ein.
            </p><p>
              Vielen Dank für Ihr Verständnis.</p>
            </div>
          </article>
          : ""}
      </Host>

    )
  }
}
