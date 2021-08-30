import {Component, getAssetPath, h} from '@stencil/core';

@Component({
  tag: 'honey-news-style',
  styleUrl: 'Style.css',
  assetsDirs: ['assets']
})
export class Style {

  render() {
    const stylePath: string = getAssetPath('./assets/paper.min-1.8.2.css');
    console.log("###DPL Path:" + stylePath);
    return <link rel="stylesheet" href={stylePath}/>
  }
}
