import {Component, Element, h, Prop, State} from '@stencil/core';
import {Post} from "../../../fetch-es6.worker";


@Component({
  tag: "honey-news-article",
  shadow: true
})
export class HoneyArticle {

  @Element() hostElement;

  @Prop() post: Post;

  /**
   * tagName of honey style sheet to apply e.g. 'honey-papercss-style'
   */
  @State() theme: string;

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
    console.log("##### post: " + this.post);
    return (
      <honey-styled-component themeprefix="honey-article">
        <a slot="slot1" href={this.getPostLink(this.post.item)} target="_blank">{this.post.item.title}</a>
        <span slot="slot2">
            {this.post.pubdate} auf {this.post.feedtitle}
          </span>
        <span slot="slot3"/>
      </honey-styled-component>
    )
  }
}
