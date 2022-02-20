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
    "revision": "1df7948e5de1249b9e38a8ffa3a2f9a1"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-09cdb421.entry.js"
  },
  {
    "url": "build/p-323e0f65.entry.js"
  },
  {
    "url": "build/p-390c1007.entry.js"
  },
  {
    "url": "build/p-3c72a7cc.entry.js"
  },
  {
    "url": "build/p-46f8da83.entry.js"
  },
  {
    "url": "build/p-549ce1da.entry.js"
  },
  {
    "url": "build/p-66aa876e.entry.js"
  },
  {
    "url": "build/p-68d0b1c9.entry.js"
  },
  {
    "url": "build/p-6add324a.js"
  },
  {
    "url": "build/p-6e58ee83.entry.js"
  },
  {
    "url": "build/p-7a74d2b5.entry.js"
  },
  {
    "url": "build/p-85c8619f.js"
  },
  {
    "url": "build/p-988523c5.entry.js"
  },
  {
    "url": "build/p-9fb9206d.entry.js"
  },
  {
    "url": "build/p-a3731db7.entry.js"
  },
  {
    "url": "build/p-c0ab4441.entry.js"
  },
  {
    "url": "build/p-c7db1c7c.entry.js"
  },
  {
    "url": "build/p-dad10717.js"
  },
  {
    "url": "build/p-dad6c9dd.entry.js"
  },
  {
    "url": "build/p-db53bce5.css"
  },
  {
    "url": "build/p-df206acb.entry.js"
  },
  {
    "url": "build/p-e2352f8c.entry.js"
  },
  {
    "url": "build/p-e4807328.js"
  },
  {
    "url": "redirect.js",
    "revision": "01685ba609e926ad58374e17a1de278d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
