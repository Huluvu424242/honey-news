/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "000e42b6b0b988c46c215d5813cdf333"
  },
  {
    "url": "demo.html",
    "revision": "d166af2bad1a5668da118a84aa0ac84c"
  },
  {
    "url": "index.html",
    "revision": "2afa75607ab982b0fc73221003ecd76f"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-12c2f1e1.entry.js"
  },
  {
    "url": "build/p-15231d59.entry.js"
  },
  {
    "url": "build/p-1ee7b2a4.js"
  },
  {
    "url": "build/p-2494d2c3.entry.js"
  },
  {
    "url": "build/p-2d6ced47.entry.js"
  },
  {
    "url": "build/p-317c878c.js"
  },
  {
    "url": "build/p-3365c64b.entry.js"
  },
  {
    "url": "build/p-482da678.entry.js"
  },
  {
    "url": "build/p-4932cde8.entry.js"
  },
  {
    "url": "build/p-493f5b3c.entry.js"
  },
  {
    "url": "build/p-5eb232da.entry.js"
  },
  {
    "url": "build/p-637b5882.js"
  },
  {
    "url": "build/p-819740c7.entry.js"
  },
  {
    "url": "build/p-8718f189.entry.js"
  },
  {
    "url": "build/p-91200748.js"
  },
  {
    "url": "build/p-9ba6e310.entry.js"
  },
  {
    "url": "build/p-9feb7d1c.entry.js"
  },
  {
    "url": "build/p-a3146b48.js"
  },
  {
    "url": "build/p-c0285636.entry.js"
  },
  {
    "url": "build/p-cdf53455.entry.js"
  },
  {
    "url": "build/p-e0232121.entry.js"
  },
  {
    "url": "build/p-ef90fbe2.js"
  },
  {
    "url": "redirect.js",
    "revision": "01685ba609e926ad58374e17a1de278d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
