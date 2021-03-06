importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

  
  registerRoute(
    ({request}) => request.destination === 'script' ||
                   request.destination === 'style' ||
                   request.destination === 'image',
    new StaleWhileRevalidate()
  );

 /* registerRoute(
    ({request}) => request.destination === 'image',
    new CacheFirst({
      cacheName: 'images',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60 * 12, // 1 año
        }),
      ],
    }),
  );*/