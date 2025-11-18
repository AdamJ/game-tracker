importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js'
);

if (workbox) {
  console.log('Workbox loaded successfully!');
  console.log('workbox.core:', workbox.core); // Add this line

  workbox.core.initializeApp(); // Access initializeApp through the global workbox object

  const { NetworkFirst, CacheFirst, StaleWhileRevalidate } = workbox.strategies;
  const { registerRoute } = workbox.routing;
  const { precacheAndRoute } = workbox.precaching;

  // This is your Service Worker, you can put any of your custom Service Worker
  // code in this file, above the `precacheAndRoute` line.

  // When widget is installed/pinned, push initial state.
  self.addEventListener('widgetinstall', (event) => {
    event.waitUntil(updateWidget(event));
  });

  // When widget is shown, update content to ensure it is up-to-date.
  self.addEventListener('widgetresume', (event) => {
    event.waitUntil(updateWidget(event));
  });

  // When the user clicks an element with an associated Action.Execute,
  // handle according to the 'verb' in event.action.
  self.addEventListener('widgetclick', (event) => {
    if (event.action == "updateName") {
      event.waitUntil(updateName(event));
    }
  });

  // When the widget is uninstalled/unpinned, clean up any unnecessary
  // periodic sync or widget-related state.
  self.addEventListener('widgetuninstall', (event) => { });

  const updateWidget = async (event) => {
    // The widget definition represents the fields specified in the manifest.
    const widgetDefinition = event.widget.definition;

    // Fetch the template and data defined in the manifest to generate the payload.
    const payload = {
      template: JSON.stringify(await (await fetch(widgetDefinition.msAcTemplate)).json()),
      data: JSON.stringify(await (await fetch(widgetDefinition.data)).json()),
    };

    // Push payload to widget.
    await self.widgets.updateByInstanceId(event.instanceId, payload);
  }

  const updateName = async (event) => {
    const name = event.data.json().name;

    // The widget definition represents the fields specified in the manifest.
    const widgetDefinition = event.widget.definition;

    // Fetch the template and data defined in the manifest to generate the payload.
    const payload = {
      template: JSON.stringify(await (await fetch(widgetDefinition.msAcTemplate)).json()),
      data: JSON.stringify({ name }),
    };

    // Push payload to widget.
    await self.widgets.updateByInstanceId(event.instanceId, payload);
  }

  // Workbox Precaching
  // precacheAndRoute(self.__WB_MANIFEST || []);

  // Assuming your sl-icon icons are served from a specific path, e.g., '/assets/icons/' or a CDN
  registerRoute(
    ({ url }) => url.pathname.startsWith('/assets/icons/') || url.host.includes('https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2'), // Adjust the URL pattern
    new CacheFirst({
      cacheName: 'sl-icon-cache',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200], // Cache successful responses and opaque responses (for cross-origin)
        }),
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days (adjust as needed)
          maxEntries: 50, // Keep a maximum of 50 icon files (adjust as needed)
        }),
      ],
    })
  );

  // Cache data
  registerRoute(
    ({ url }) => url.pathname.startsWith('/data'),
    new CacheFirst()
  );

  // Cache app images
  registerRoute(
    ({ url }) => url.pathname.startsWith('/assets'),
    new CacheFirst()
  );

  // Cache app CSS and JS files
  registerRoute(
    ({ request }) =>
      request.destination === 'script' ||
      request.destination === 'style' ||
      request.destination === 'module', // Cache dynamically imported modules
    new StaleWhileRevalidate()
  );

  // Navigation Routing with Offline Fallback
  const navigationHandler = async ({ event }) => {
    const networkFirst = new NetworkFirst({
      cacheName: 'pages-cache',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    });

    try {
      return await networkFirst.handle({ event, request: event.request });
    } catch (error) {
      // If network fails and page not in cache, show offline page
      const cache = await caches.open('offline-page');
      const cachedResponse = await cache.match('/offline.html');
      return cachedResponse || new Response('Offline - Network unavailable', {
        status: 503,
        statusText: 'Service Unavailable',
        headers: new Headers({
          'Content-Type': 'text/html',
        }),
      });
    }
  };

  registerRoute(
    ({ request }) => request.mode === 'navigate',
    navigationHandler
  );

  self.addEventListener('push', function (event) {
    console.log('[Service Worker] Push Received.');
    if (Notification.permission === "granted") {
      const data = event.data.json();
      event.waitUntil(
        self.registration.showNotification(data.title, {
          body: data.body,
          icon: '/assets/icons/icon_192.png', // Replace with your icon
          tag: 'my-tag' // Optional: prevents multiple notifications with the same tag
        })
      );
    } else {
      console.log("Notification permission has been denied");
    }
  });

  self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    var fullPath = self.location.origin + event.notification.data.path;
    clients.openWindow(fullPath);
  });

  // Update notification events
  self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      console.log("Skip waiting was called in the service worker.");
      self.skipWaiting();
    }
  });

  self.addEventListener("install", (event) => {
    console.log("Service Worker install:", event);

    // Pre-cache the offline page during installation
    event.waitUntil(
      caches.open('offline-page').then((cache) => {
        return cache.add('/offline.html');
      })
    );
  });

  // Handle failed fetches gracefully
  self.addEventListener('fetch', (event) => {
    // Skip for Chrome extension requests
    if (event.request.url.startsWith('chrome-extension://')) {
      return;
    }

    // Let Workbox handle the request, but add error handling
    if (event.request.method === 'GET') {
      event.respondWith(
        fetch(event.request).catch((error) => {
          console.log('Fetch failed; returning offline page instead.', error);

          // For navigation requests, return offline page
          if (event.request.mode === 'navigate') {
            return caches.match('/offline.html');
          }

          // For other requests, try to get from cache
          return caches.match(event.request).then((response) => {
            if (response) {
              return response;
            }

            // Return a generic offline response for failed asset requests
            return new Response('Network error', {
              status: 408,
              headers: { 'Content-Type': 'text/plain' },
            });
          });
        })
      );
    }
  });

  precacheAndRoute(self.__WB_MANIFEST || []); // Ensure your manifest also includes icon files if they are part of your build

} else {
  console.error('Workbox failed to load from CDN.');
}
