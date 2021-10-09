import {Component, h, Prop} from '@stencil/core';
import {Post} from "../../../fetch-es6.worker";


@Component({
  tag: "honey-news-article",
  shadow: true
})
export class HoneyArticle {

  @Prop() post: Post;

  getPostLink(item): string {
    if (typeof item.link === "string") {
      return item.link;
    }
    if (typeof (item.link.href == "string")) {
      return item.link.href;
    }
    return null
  }


  render() {
    return (
      <honey-styled-component themeprefix="honey-article" slotNames="slot1,slot2,slot3">
        <a slot="slot1" href={this.getPostLink(this.post.item)} target="_blank">{this.post.item.title}</a>
        <span slot="slot2">
            {this.post.pubdate} auf {this.post.feedtitle}
          </span>
        <span slot="slot3"/>
      </honey-styled-component>
    )
  }
}
