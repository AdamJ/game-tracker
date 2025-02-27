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
self.addEventListener('widgetuninstall', (event) => {});

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
        data: JSON.stringify({name}),
    };

    // Push payload to widget.
    await self.widgets.updateByInstanceId(event.instanceId, payload);
}

// Workbox Precaching
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

// Navigation Routing
workbox.routing.registerRoute(
  ({ request }) => request.mode === 'navigate',
  async ({ event }) => {
    const cache = await caches.open(workbox.precaching.getCacheKeyForURL('/index.html'));
    const cachedResponse = await cache.match('/index.html');
    return cachedResponse || fetch(event.request);
  }
);

self.addEventListener('push', (event) => {
  event.waitUntil(
    self.registration.showNotification('New Notification', {
      body: 'Notification Body Text',
      icon: 'assets/icons/icon_512.png',
    })
  )
});
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  var fullPath = self.location.origin + event.notification.data.path;
  clients.openWindow(fullPath);
});
