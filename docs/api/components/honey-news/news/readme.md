# honey-news-feed



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description            | Type      | Default |
| --------- | --------- | ---------------------- | --------- | ------- |
| `verbose` | `verbose` | enable console logging | `boolean` | `false` |


## Dependencies

### Used by

 - [honey-news](..)

### Depends on

- [honey-infobar](../../honey-style-lib/honey-infobar)
- [honey-news-article](.)
- [honey-notification](../../honey-style-lib/honey-notification)

### Graph
```mermaid
graph TD;
  honey-news-feed --> honey-infobar
  honey-news-feed --> honey-news-article
  honey-news-feed --> honey-notification
  honey-news-article --> honey-article
  honey-news --> honey-news-feed
  style honey-news-feed fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)* by Huluvu424242
