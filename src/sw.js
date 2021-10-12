// change to the version you get from `npm ls workbox-build`
importScripts('workbox-v4.3.1/workbox-sw.js');

const CACHE_NAME = "honey-news-cach-v1";


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
self.workbox.precaching.precacheAndRoute([]);
