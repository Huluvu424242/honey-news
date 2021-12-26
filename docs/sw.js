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
    "revision": "281904fd9afd05e26b614a2ff5fa38fe"
  },
  {
    "url": "demo.html",
    "revision": "e645cd65dad822ca8b8b1d262f7670c9"
  },
  {
    "url": "index.html",
    "revision": "2d66cad42db748a09cddd7ca9cdd060f"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-07290d95.entry.js"
  },
  {
    "url": "build/p-0e01ae97.entry.js"
  },
  {
    "url": "build/p-0fba6cd0.entry.js"
  },
  {
    "url": "build/p-1744701b.entry.js"
  },
  {
    "url": "build/p-1917f887.css"
  },
  {
    "url": "build/p-207b1fe4.entry.js"
  },
  {
    "url": "build/p-44e591ea.entry.js"
  },
  {
    "url": "build/p-48ea8690.entry.js"
  },
  {
    "url": "build/p-6422b6ce.js"
  },
  {
    "url": "build/p-785855a5.js"
  },
  {
    "url": "build/p-7b26fdc8.entry.js"
  },
  {
    "url": "build/p-7c8c25f8.entry.js"
  },
  {
    "url": "build/p-8b90fe63.entry.js"
  },
  {
    "url": "build/p-900bd06b.entry.js"
  },
  {
    "url": "build/p-93323891.entry.js"
  },
  {
    "url": "build/p-9cce6f4d.entry.js"
  },
  {
    "url": "build/p-a8efedee.entry.js"
  },
  {
    "url": "build/p-a98d6272.js"
  },
  {
    "url": "build/p-b1746710.entry.js"
  },
  {
    "url": "build/p-d1306710.entry.js"
  },
  {
    "url": "build/p-eb60c682.js"
  },
  {
    "url": "build/p-ef254ea5.js"
  },
  {
    "url": "build/p-fa29fad5.js"
  },
  {
    "url": "redirect.js",
    "revision": "e07857a9b3af025aa3e014fa4a8068d0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});