# honey-news

<!-- Auto Generated Below -->


## Properties

| Property             | Attribute        | Description                                                                        | Type                        | Default     |
| -------------------- | ---------------- | ---------------------------------------------------------------------------------- | --------------------------- | ----------- |
| `feedAdministration` | --               | Feeds Administration Komponente                                                    | `HTMLHoneyNewsFeedsElement` | `undefined` |
| `localBasePath`      | `local-basepath` | base of local site                                                                 | `any`                       | `undefined` |
| `newsFeed`           | --               | News reader Komponente                                                             | `HTMLHoneyNewsFeedElement`  | `undefined` |
| `siteBasePath`       | `site-basepath`  | base of remote site                                                                | `any`                       | `undefined` |
| `themeId`            | `theme-id`       | theme to use for styling e.g. 'honey-papercss-style' (Default)  Not changeable !!! | `string`                    | `undefined` |
| `verbose`            | `verbose`        | enable console logging                                                             | `boolean`                   | `false`     |


## Dependencies

### Depends on

- [honey-apply-style](honey-apply-style)
- [honey-news-header](header)
- [honey-news-feed](news)
- [honey-news-feeds](feeds)
- [honey-news-statistic](statistic)

### Graph
```mermaid
graph TD;
  honey-news --> honey-apply-style
  honey-news --> honey-news-header
  honey-news --> honey-news-feed
  honey-news --> honey-news-feeds
  honey-news --> honey-news-statistic
  honey-news-header --> honey-apply-style
  honey-news-feed --> honey-apply-style
  honey-news-feeds --> honey-apply-style
  honey-news-statistic --> honey-apply-style
  style honey-news fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)* by Huluvu424242
