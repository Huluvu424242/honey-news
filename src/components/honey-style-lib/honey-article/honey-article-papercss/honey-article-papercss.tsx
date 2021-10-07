import {Component, h, Host, Prop} from '@stencil/core';


@Component({
  tag: "honey-article-papercss",
  shadow: true
})
export class HoneyArticlePapercss {

  @Prop() post;


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
      <Host>
        <honey-apply-style/>

        <div class="card">
          <div class="card-body">
            <div class="card-title">{this.post.pubdate}</div>
            <div class="card-subtitle">{this.post.feedtitle}</div>
            <div class="card-text"><a href={this.getPostLink(this.post.item)} target="_blank">{this.post.item.title}</a></div>
          </div>
        </div>
      </Host>
    )
  }
}
