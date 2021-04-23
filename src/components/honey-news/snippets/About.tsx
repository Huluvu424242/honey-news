import {FunctionalComponent, h} from '@stencil/core';

interface AboutProps {
  // hier könnten properties für Parameterübergaben rein
}

export const About: FunctionalComponent<AboutProps> = () => ([
  <p>
    Eine SPA auf Basis mehrerer Webkomponenten, gebaut mit Stencil und styled by papercss.
  </p>,
  <p>
    Das nicht minifizierte Stylesheet von PaperCSS wurde über den assets Folder für alle Komponenten zugänglich gemacht.
    Es wurde dann pro Komponente per @import url(...) importiert - was eigentlich ein AntiPattern ist aber ich habe
    aktuell nix besseres gefunden. Daher - warten auf ConstructedStyleSheets Spec ...
    Beim @import url(...) hat sich herausgestellt, dass die CSS Properties (Variablen) nicht mit geladen wurden.
    Daher hab ich diese herausgezogen und unter global/varibales.css eingebunden.
    Dadurch wird in der index.html folgender Eintrag notwendig:
    <pre>
                &lt; link rel="stylesheet" href="/build/honey-news.css"/&gt;
                </pre>
  </p>,
  <p>
    Das Routing der SPA wurde versucht über stencil-router sowie stencil-router-v2 zu realisieren. Leider konnte dies
    nicht erfolgreich durchgeführt werden. Daher wurde begonnen einen eigenen Hilfsrouter zu schreiben.

    Mein besonderer Dank gilt hier Bryan Manuele (Fermi Dirak) dessen
    <a href="https://medium.com/@bryanmanuele/how-i-implemented-my-own-spa-routing-system-in-vanilla-js-49942e3c4573">
      Artikel
    </a> und <a href="https://github.com/FermiDirak/fermidirak.github.io">Projekt</a> mit halfen den Router
    zu implementieren.
  </p>,
  <p>
    Für das Backend wurde ein nodejs express server verwendet und auf heroku deployed. Ein separates Backend war
    leider auf Grund der üblcihen CORS Problematiken notwendig (CORS-PROXY im Service Worker habe ich leider nicht
    realisiert bekommen - da hat halt der Browser strikt was dagegen).
  </p>,
  <p>
  Mein weiterer Dank gilt allen Plattformen, welche sich intensiv um die Unterstützung von Open Source Projekten bemühen.
    <ul>
      <li><a href="https://heroku.com">Heroku.com</a></li>
      <li><a href="https://github.com">Github.com</a></li>
      <li><a href="https://travis-ci.com">Travis-ci.com</a></li>
      <li><a href="https://bintray.com">Bintray.com</a></li>
      <li><a href="https://sourceforge.net/">Sourceforge.net</a></li>
      <li><a href="https://www.openhub.net//">Ohloh (openhub.net)</a></li>
    <li> und viele weitere</li>
    </ul>
  </p>
]);
