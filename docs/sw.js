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
    "revision": "ee15a5a987a4e9c889278bbfa764b1e2"
  },
  {
    "url": "build/assets/config.json",
    "revision": "1c389666fa66fffa4a82022c4ae72d61"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-07c1ce7d.entry.js"
  },
  {
    "url": "build/p-07d15f6c.entry.js"
  },
  {
    "url": "build/p-213af3df.entry.js"
  },
  {
    "url": "build/p-21c4d90b.entry.js"
  },
  {
    "url": "build/p-236809c2.entry.js"
  },
  {
    "url": "build/p-2cb05c08.entry.js"
  },
  {
    "url": "build/p-327a4435.entry.js"
  },
  {
    "url": "build/p-3a5b1b52.entry.js"
  },
  {
    "url": "build/p-436e4b05.entry.js"
  },
  {
    "url": "build/p-70d2bb65.js"
  },
  {
    "url": "build/p-85c8619f.js"
  },
  {
    "url": "build/p-89d85688.js"
  },
  {
    "url": "build/p-8c217a31.entry.js"
  },
  {
    "url": "build/p-8e456657.entry.js"
  },
  {
    "url": "build/p-a1ba6326.entry.js"
  },
  {
    "url": "build/p-a8cddc49.entry.js"
  },
  {
    "url": "build/p-abcb70cb.entry.js"
  },
  {
    "url": "build/p-b78ee362.js"
  },
  {
    "url": "build/p-bb80cd17.entry.js"
  },
  {
    "url": "build/p-d2deb915.entry.js"
  },
  {
    "url": "build/p-dad10717.js"
  },
  {
    "url": "build/p-db53bce5.css"
  },
  {
    "url": "redirect.js",
    "revision": "01685ba609e926ad58374e17a1de278d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
