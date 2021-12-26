import { r as registerInstance, h } from './index-6cdc66d3.js';

let HoneyNewsArticle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("honey-article", null, h("a", { slot: "title", href: this.article.link, target: "_blank" }, this.article.title), h("span", { slot: "subtitle" }, this.article.subtitle), h("span", { slot: "text" }, this.article.text)));
  }
};

export { HoneyNewsArticle as honey_news_article };
