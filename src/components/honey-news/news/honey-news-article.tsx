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
      <honey-article>
        <a slot="title" href={this.getPostLink(this.post.item)} target="_blank">{this.post.item.title}</a>
        <span slot="subtitle">
            {this.post.pubdate} auf {this.post.feedtitle}
          </span>
        <span slot="text"/>
      </honey-article>
    )
  }
}
