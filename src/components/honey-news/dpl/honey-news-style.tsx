import {Component, h, Prop} from '@stencil/core';
import {Components} from "@huluvu424242/honey-papercss-style";

@Component({
  tag: 'honey-news-style',
  styleUrl: 'honey-news-style.css',
})
export class HoneyNewsStyle {

  /**
   * tagName of honey style sheet to apply e.g. 'honey-papercss-style'
   */
  @Prop() theme: string;

  async componentWillLoad() {
    try {
      await customElements.whenDefined('honey-style');
      const styleElements: Components.HoneyStyle = document.querySelector('honey-style') as Components.HoneyStyle;
      this.theme = await styleElements.getTheme();
    } catch (error) {
      this.theme = 'honey-default-style';
    }
  }

  render() {
    // Grossbuchstabe für Variable notwendig für JSX
    const TagName = this.theme;
    return (<TagName/>)
  }
}
