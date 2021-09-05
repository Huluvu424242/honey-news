import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'honey-news-style',
  styleUrl: 'honey-news-style.css',
})
export class HoneyNewsStyle {

  /**
   * tagName of honey style sheet to apply e.g. 'honey-papercss-style'
   */
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
