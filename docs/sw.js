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
    "revision": "4880ac9f4c39de01464c4e2d82a0a1d8"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-0f8e4f20.entry.js"
  },
  {
    "url": "build/p-23ee6249.entry.js"
  },
  {
    "url": "build/p-2a5d4d1f.entry.js"
  },
  {
    "url": "build/p-317c878c.js"
  },
  {
    "url": "build/p-3d020aa8.entry.js"
  },
  {
    "url": "build/p-4a21ff1f.entry.js"
  },
  {
    "url": "build/p-57eded0a.entry.js"
  },
  {
    "url": "build/p-595caa9f.entry.js"
  },
  {
    "url": "build/p-601087d3.entry.js"
  },
  {
    "url": "build/p-6bfcc2e0.entry.js"
  },
  {
    "url": "build/p-79185aca.entry.js"
  },
  {
    "url": "build/p-7fb0bfa8.entry.js"
  },
  {
    "url": "build/p-813564f9.entry.js"
  },
  {
    "url": "build/p-a8f3106f.js"
  },
  {
    "url": "build/p-a9801b73.entry.js"
  },
  {
    "url": "build/p-bbfaaceb.entry.js"
  },
  {
    "url": "build/p-dad10717.js"
  },
  {
    "url": "build/p-e4807328.js"
  },
  {
    "url": "build/p-ef17d66d.entry.js"
  },
  {
    "url": "build/p-f8eeec13.entry.js"
  },
  {
    "url": "build/p-f9ddf5e5.entry.js"
  },
  {
    "url": "build/p-f9e5f4c6.entry.js"
  },
  {
    "url": "redirect.js",
    "revision": "01685ba609e926ad58374e17a1de278d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
