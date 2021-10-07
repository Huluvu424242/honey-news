import {Component, Element, h, Host, Prop, State} from '@stencil/core';
import {Post} from "../../../fetch-es6.worker";


@Component({
  tag: "honey-article",
  shadow: true
})
export class HoneyArticle {

  @Element() hostElement;

  honeyStyledComponent: HTMLHoneyStyledComponentElement;

  @Prop() post: Post;

  /**
   * tagName of honey style sheet to apply e.g. 'honey-papercss-style'
   */
  @State() theme: string;

  render() {
    console.log("##### post: "+this.post);
    return (
      <Host>
        {this.post ?
          <honey-styled-component themeprefix="honey-article" ref={(el) => {
            this.honeyStyledComponent = el as HTMLHoneyStyledComponentElement
            this.honeyStyledComponent.parameterlist = this.post;
          }}>
            <slot name="content" slot="slot1"/>
          </honey-styled-component>
          : ""
        }
      </Host>
    )
  }
}
