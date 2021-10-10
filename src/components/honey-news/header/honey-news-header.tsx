import {Component, h, Host} from '@stencil/core';

@Component({
  tag: "honey-news-header",
  shadow: true
})
export class HoneyNewsHeader {

  render() {
    return (
      <Host>
        <honey-navbar/>

        <honey-select-style themeName="honey-bulma-style">Bulma Style</honey-select-style>
        <honey-select-style themeName="honey-papercss-style">PaperCSS Style</honey-select-style>

        <honey-disclaimer>
          <p slot="title">!!! Das ist eine Demo Seite welche alle Feature der App zeigen soll - aus
            diesem Grund ist auch die Statistik eingeschaltet !!!</p>
          <div slot="body">
            <p>
              Es werden nur Daten zu den abgerufenen Feeds gespeichert (in memory) wie: URL, Anzahl der
              Abfragen und Anzahl valider Anworten.</p><p>
            Sollten Sie die Speicherung nicht wünschen - dann geben Sie bitte keinen neuen Feed ein.
          </p>

            <p>
              Vielen Dank für Ihr Verständnis.</p>
          </div>
        </honey-disclaimer>


      </Host>
    );
  }
}
