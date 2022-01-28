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
    "revision": "e1aabb9e6b650a634e303fa88abd0b21"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-042e570a.entry.js"
  },
  {
    "url": "build/p-07290d95.entry.js"
  },
  {
    "url": "build/p-1744701b.entry.js"
  },
  {
    "url": "build/p-176b2403.js"
  },
  {
    "url": "build/p-207b1fe4.entry.js"
  },
  {
    "url": "build/p-317c878c.js"
  },
  {
    "url": "build/p-374686ce.entry.js"
  },
  {
    "url": "build/p-44e591ea.entry.js"
  },
  {
    "url": "build/p-4886523d.entry.js"
  },
  {
    "url": "build/p-48ea8690.entry.js"
  },
  {
    "url": "build/p-5222b9b3.entry.js"
  },
  {
    "url": "build/p-6e36e9f5.entry.js"
  },
  {
    "url": "build/p-6e3cdf34.entry.js"
  },
  {
    "url": "build/p-785855a5.js"
  },
  {
    "url": "build/p-8751615c.js"
  },
  {
    "url": "build/p-8b90fe63.entry.js"
  },
  {
    "url": "build/p-8d1626a4.js"
  },
  {
    "url": "build/p-93323891.entry.js"
  },
  {
    "url": "build/p-9cce6f4d.entry.js"
  },
  {
    "url": "build/p-b1746710.entry.js"
  },
  {
    "url": "build/p-c60f2e94.entry.js"
  },
  {
    "url": "build/p-d1306710.entry.js"
  },
  {
    "url": "build/p-dad10717.js"
  },
  {
    "url": "build/p-f2b2ddfd.js"
  },
  {
    "url": "build/p-ff3017ad.entry.js"
  },
  {
    "url": "redirect.js",
    "revision": "01685ba609e926ad58374e17a1de278d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
