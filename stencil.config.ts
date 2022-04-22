import {Config} from '@stencil/core';
import nodePolyfills from "rollup-plugin-node-polyfills"

export const config: Config = {
  namespace: 'honey-news',
  globalStyle: 'src/global/variables.default.css',
  globalScript: 'src/global/app.ts',
  rollupPlugins: {
    after: [
      nodePolyfills(),
    ]
  },
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
      dir: 'docs/api',
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


