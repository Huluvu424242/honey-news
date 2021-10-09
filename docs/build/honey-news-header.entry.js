import {e as Host, h, r as registerInstance} from './index-570c9000.js';

const HoneyNewsHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("honey-navbar", null), h("honey-select-style", { theme: "honey-bulma-style" }, "Bulma Style"), h("honey-select-style", { theme: "honey-papercss-style" }, "PaperCSS Style"), h("honey-disclaimer", null, h("p", { slot: "title" }, "!!! Das ist eine Demo Seite welche alle Feature der App zeigen soll - aus diesem Grund ist auch die Statistik eingeschaltet !!!"), h("div", { slot: "body" }, h("p", null, "Es werden nur Daten zu den abgerufenen Feeds gespeichert (in memory) wie: URL, Anzahl der Abfragen und Anzahl valider Anworten."), h("p", null, "Sollten Sie die Speicherung nicht w\u00FCnschen - dann geben Sie bitte keinen neuen Feed ein."), h("p", null, "Vielen Dank f\u00FCr Ihr Verst\u00E4ndnis.")))));
  }
};

export { HoneyNewsHeader as honey_news_header };
