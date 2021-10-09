import {g as getElement, h, r as registerInstance} from './index-570c9000.js';

const HoneyArticle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getPostLink(item) {
    if (typeof item.link === "string") {
      return item.link;
    }
    if (typeof (item.link.href == "string")) {
      return item.link.href;
    }
    return null;
  }
  render() {
    console.log("##### post: " + this.post);
    return (h("honey-styled-component", { themeprefix: "honey-article" }, h("a", { slot: "slot1", href: this.getPostLink(this.post.item), target: "_blank" }, this.post.item.title), h("span", { slot: "slot2" }, this.post.pubdate, " auf ", this.post.feedtitle), h("span", { slot: "slot3" })));
  }
  get hostElement() { return getElement(this); }
};

export { HoneyArticle as honey_news_article };
