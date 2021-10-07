import {Component, h, Host, Prop} from '@stencil/core';


@Component({
  tag: "honey-article-bulma",
  shadow: true
})
export class HoneyArticleBulma {

  @Prop() argumentlist;

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
    console.log("#### args: " + this.argumentlist);
    return (
      <Host>
        <honey-apply-style/>

        {/*<article class="box">*/}
        {/*  <slot name="slot1"/>*/}
        {/*</article>*/}

        {this.argumentlist ?
          <div class="card">

            <div class="card-content">
              <div class="subtitle">
                {this.argumentlist.pubdate} auf {this.argumentlist.feedtitle}
              </div>
              <div class="title">
                <a href={this.getPostLink(this.argumentlist.item)}>{this.argumentlist.item.title}</a>
              </div>
            </div>
          </div>

          : ""
        }
      </Host>
    )
  }
}
