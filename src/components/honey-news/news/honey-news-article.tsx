import {Component, h, Prop} from '@stencil/core';

export interface NewsArticle {
  title: string;
  subtitle: string;
  text: string;
  link: string;
}


@Component({
  tag: "honey-news-article",
  shadow: true
})
export class HoneyNewsArticle {

  @Prop() article: NewsArticle;

  render() {
    return (
      <honey-article>
        <a slot="title" href={this.article.link} target="_blank">{this.article.title}</a>
        <span slot="subtitle">
            {this.article.subtitle}
          </span>
        <span slot="text">{this.article.text}</span>
      </honey-article>
    )
  }
}
