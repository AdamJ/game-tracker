importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js'
);

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
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

// Cache data
workbox.routing.registerRoute(
  ({url}) => url.pathname.startsWith('/data'),
  new workbox.strategies.CacheFirst()
);
// Cache app images
workbox.routing.registerRoute(
  ({url}) => url.pathname.startsWith('/assets'),
  new workbox.strategies.CacheFirst()
);

// Cache app CSS and JS files
workbox.routing.registerRoute(
  ({request}) => request.destination === 'script' ||
  request.destination === 'style' ||
  request.destination === 'module', // Cache dynamically imported modules
  new workbox.strategies.StaleWhileRevalidate()
);


// Navigation Routing
workbox.routing.registerRoute(
  ({ request }) => request.mode === 'navigate',
  workbox.strategies.networkFirst()
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
  console.log("Service Worker install:", event)
});
