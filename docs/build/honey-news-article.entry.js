import { r as registerInstance, h } from './index-a218ef3e.js';

let HoneyNewsArticle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("honey-article", null, h("a", { slot: "title", href: this.article.link, target: "_blank", rel: "noopener noreferrer" }, this.article.title), h("span", { slot: "subtitle" }, this.article.subtitle), h("span", { slot: "text" }, this.article.text)));
  }
};

export { HoneyNewsArticle as honey_news_article };
