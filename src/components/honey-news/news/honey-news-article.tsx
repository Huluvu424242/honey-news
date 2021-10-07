import {Component, Element, h, Host, Prop, State} from '@stencil/core';
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
    console.log("##### post: "+this.post);
    return (
      <Host>
        {this.post ?
          <honey-article>
            <slot name="content" slot="title">
              <a href={this.getPostLink(this.post.item)}>{this.post.item.title}</a>
            </slot>
            <slot name="content" slot="subtitle">
              {this.post.pubdate} auf {this.post.feedtitle}
            </slot>
          </honey-article>
          : ""
        }
      </Host>
    )
  }
}