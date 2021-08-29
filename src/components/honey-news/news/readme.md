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

- [honey-news-style](../dpl)

### Graph
```mermaid
graph TD;
  honey-news-feed --> honey-news-style
  honey-news --> honey-news-feed
  style honey-news-feed fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)* by Huluvu424242
