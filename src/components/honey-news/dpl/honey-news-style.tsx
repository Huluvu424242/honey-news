import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'honey-news-style',
  styleUrl: 'honey-news-style.css',
})
export class HoneyNewsStyle {

  @Prop() theme:string;

  connectedCallback(){
    this.theme = this.theme || 'honey-papercss-style';
  }

  render() {
      // Grossbuchstabe für Variable notwendig für JSX
      const TagName = this.theme;
      return ( <TagName /> )
  }
}
