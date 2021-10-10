// change to the version you get from `npm ls workbox-build`
importScripts('workbox-v4.3.1/workbox-sw.js');

function infoMessage(text) {
  if (console) {
    console.log(text);
  }
}

self.skipWaiting();

self.addEventListener('message', (event) => {
  console.log("sw empfing message" + event.data);
  // if (event.data && event.data.type === 'INCREASE_COUNT') {
  //   // Select who we want to respond to
  //   self.clients.matchAll({
  //     includeUncontrolled: true,
  //     type: 'window',
  //   }).then((clients) => {
  //     if (clients && clients.length) {
  //       // Send a response - the clients
  //       // array is ordered by last focused
  //       clients[0].postMessage({
  //         type: 'REPLY_COUNT',
  //         count: ++count,
  //       });
  //     }
  //   });
  // }
});


const dontCache = function (url) {
  let dontCache = false;
  dontCache = dontCache || url.startsWith("https://huluvu424242.herokuapp.com/feed?url=")
  return dontCache;
};

// custom service worker code
self.addEventListener('fetch', function (event) {
  infoMessage('## handling fetch event for: ', event.request.url);

  if (dontCache(event.request.url)) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Für alle anderen URLs caching anwenden
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          infoMessage("## aus cache: " + event.request.url);
          return response;
        }

        return fetch(event.request).then(
          function (response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function (cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );

  //
  // CORS playing
  //

  // responsePromise = fetch(event.request)
  //   .then(function (response) {
  //     console.log('Response from network is:', response);
  //     console.log(new Map(response.headers));
  //
  //     const newHeaders = new Headers(response.headers);
  //     newHeaders.append('Access-Control-Allow-Origin', '*');
  //
  //     const anotherResponse = new Response(response.body, {
  //       status: response.status,
  //       statusText: response.statusText,
  //       headers: newHeaders
  //     });
  //
  //     console.log(new Map(anotherResponse.headers));
  //     return anotherResponse;
  //   })
  //   .catch(function (error) {
  //     console.error('Fetching failed:', error);
  //     throw error;
  //   });
  //
  // event.respondWith(responsePromise);

});


// the precache manifest will be injected into the following line
// precacheAndRoute(self.__WB_MANIFEST);
self.workbox.precaching.precacheAndRoute([
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
    "revision": "4825f0e3e3b38666b6e8cb261549e12b"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-0f4430d2.js"
  },
  {
    "url": "build/p-12c2f1e1.entry.js"
  },
  {
    "url": "build/p-15231d59.entry.js"
  },
  {
    "url": "build/p-2155c8b7.js"
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
    "url": "build/p-482da678.entry.js"
  },
  {
    "url": "build/p-4932cde8.entry.js"
  },
  {
    "url": "build/p-561b5f5d.entry.js"
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
    "url": "build/p-9768bc2c.js"
  },
  {
    "url": "build/p-985fddd9.entry.js"
  },
  {
    "url": "build/p-9ba6e310.entry.js"
  },
  {
    "url": "build/p-9feb7d1c.entry.js"
  },
  {
    "url": "build/p-a9e36fb1.js"
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
    "url": "build/p-ece9a545.entry.js"
  },
  {
    "url": "build/p-f4f609b3.js"
  },
  {
    "url": "build/p-f7acb1be.entry.js"
  },
  {
    "url": "redirect.js",
    "revision": "01685ba609e926ad58374e17a1de278d"
  }
]);
