# honey-news



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description                     | Type         | Default     |
| ------------ | --------- | ------------------------------- | ------------ | ----------- |
| `feedLoader` | --        | Hilfsklasse zum Laden der Daten | `NewsLoader` | `undefined` |
| `verbose`    | `verbose` | enable console logging          | `boolean`    | `false`     |


## Methods

### `updateOptions(options: NewsOptions) => Promise<void>`

Update honey-news options

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [honey-news](..)

### Depends on

- [honey-infobar](../../honey-style-lib/honey-infobar)
- [honey-news-article](.)
- [honey-notification](../../honey-style-lib/honey-notification)
- [honey-apply-style](../../honey-style-it/honey-apply-style)

### Graph
```mermaid
graph TD;
  honey-news-feed --> honey-infobar
  honey-news-feed --> honey-news-article
  honey-news-feed --> honey-notification
  honey-news-feed --> honey-apply-style
  honey-infobar --> honey-styled-component
  honey-news-article --> honey-styled-component
  honey-notification --> honey-styled-component
  honey-news --> honey-news-feed
  style honey-news-feed fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)* by Huluvu424242
