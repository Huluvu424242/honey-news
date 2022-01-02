import {Config} from '@stencil/core';

export const config: Config = {
  namespace: 'honey-news',
  globalStyle: 'src/global/variables.default.css',
  // globalScript: 'src/global/app.ts',
  // testing: {
  //   /**
  //    * Gitlab CI doesn't allow sandbox, therefor this parameters must be passed to your Headless Chrome
  //    * before it can run your tests
  //    */
  //   browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  // },
  devServer: {
    reloadStrategy: 'pageReload',
    port: 3333,
    openBrowser: false
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
      strict: true,
      footer: '*Built with [StencilJS](https://stenciljs.com/)* by Huluvu424242'
    },
    {
      type: 'docs-json',
      file: 'src/components/custom-elements.json'
    },
    {
      type: 'www',
      dir: 'docs',
      copy: [
        {src: "demo.html"},
        {src: "404.html"},
        {src: "redirect.js"},
        {src: "resources"}
      ],
    }
  ]
};


