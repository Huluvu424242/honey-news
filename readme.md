[![Build Status](https://app.travis-ci.com/Huluvu424242/honey-news.svg?branch=master)](https://app.travis-ci.com/Huluvu424242/honey-news)
![Github CI](https://github.com/Huluvu424242/honey-news/workflows/Github%20CI/badge.svg)
[![npm](https://img.shields.io/npm/v/@huluvu424242/honey-news.svg)](https://www.npmjs.com/package/@huluvu424242/honey-news)
[![npm](https://img.shields.io/npm/dy/@huluvu424242/honey-news.svg)](https://www.npmjs.com/package/@huluvu424242/honey-news)
[![npm](https://img.shields.io/npm/dm/@huluvu424242/honey-news.svg)](https://www.npmjs.com/package/@huluvu424242/honey-news)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@huluvu424242/honey-news)
[![Donate with paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://paypal.me/huluvu424242)
![Keybase BTC](https://img.shields.io/keybase/btc/huluvu424242)
# honey-news 
This project contains web components to build an news feed reader at an web site.
(currently under development - unready and unstable)

## installation

npm install --save @huluvu424242/honey-news

## usage

```html
<script 
    type="module" 
    src='https://unpkg.com/@huluvu424242/honey-news@0.0.7/dist/honey-news/honey-news.esm.js'>
</script>
<script 
    nomodule 
    src='https://unpkg.com/@huluvu424242/honey-news@0.0.7/dist/honey-news/honey-news.js'>
</script>
```
To the [demo site](https://huluvu424242.github.io/honey-news/index.html)

[Vision of API (under construction)](src/components/honey-news/readme.md)

## demo

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="docs/index.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<head>
  <title>Honey-HoneyNewsFeed Feed Reader</title>
  <script type="module"
          src="https://unpkg.com/@huluvu424242/honey-style-it@0.0.5/dist/honey-style-it/honey-style-it.esm.js"></script>
  <script nomodule
          src="https://unpkg.com/@huluvu424242/honey-style-it@0.0.5/dist/honey-style-it/honey-style-it.js"></script>
  <!-- style module -->
  <script type="module"
          src="https://unpkg.com/@huluvu424242/honey-papercss-style@0.0.2/dist/honey-papercss-style/honey-papercss-style.esm.js"></script>
  <script nomodule
          src="https://unpkg.com/@huluvu424242/honey-papercss-style@0.0.2/dist/honey-papercss-style/honey-papercss-style.js"></script>
  <base href="/honey-news">
</head>
<body id="seite">

<h1>Nutzung der honey-news Komponente</h1>
<span class="wichtig">!!!</span> Das ist eine Demo Seite welche alle Feature der App zeigen soll - aus diesem Grund ist auch die Statistik eingeschaltet <span class="wichtig">!!!</span><br>
Es werden nur Daten zu den abgerufenen HoneyFeedVerwaltung gespeichert (in memory) wie: url, anzahl der abfragen, anzahl valider responses<br>
Sollten Sie die Speicherung nicht wünschen - dann geben Sie bitte keinen neuen HoneyNewsFeed ein.<br>
Vielen Dank für Ihr Verständnis. <br>
<hr>

<honey-define-style>
  <honey-papercss-style/>
</honey-define-style>

<honey-news site-basepath="/honey-news" local-basepath="/"/>


</body>
```
To the [live demo](https://huluvu424242.github.io/honey-news/index.html)

## become an supporter

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## releaselog

see [CHANGELOG.md](./CHANGELOG.md)

## warranty

no warranty

## license

MIT License, see [LICENSE](./LICENSE)

## technology used

* [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
* [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements)
* [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
* [Shadow Parts](https://developer.mozilla.org/de/docs/Web/CSS/::part)


## browser support

Generell

* [Can I use with browsers?](https://caniuse.com/#feat=speech-synthesis)

### Custom Elements

* [Can I use with browsers?](https://caniuse.com/#feat=mdn-api_window_customelements)

### CSS Custom Properties

* [Can I use with browsers?](https://caniuse.com/#search=css%20custom%20properties)

### Shadow Parts

Firefox

Maybe you must via about:config set the layout.css.shadow-parts.enabled to true.

Generell 

* [Can I use with browsers?](https://caniuse.com/#feat=mdn-css_selectors_part)

# Credits

Thanks to: 

* [Github](https://github.com) for hosting of this project and support the source code management and build pipelines
* [JetBrains](https://account.jetbrains.com/) to provide all JetBrains IDEs for project main developers with
  an free license to use it in none commercial open source projects.
* [Travis CI](https://www.travis-ci.com/) for providing container builds
* [Npmjs](https://npmjs.com) for delivery of this project world wide

[![JetBrains](./sponsors/jb_beam.svg)](https://jb.gg/OpenSourceSupport)
 
  