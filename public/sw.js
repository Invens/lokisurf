self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting(); // Force activation immediately
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  return self.clients.claim(); // Take control of uncontrolled clients
});

self.addEventListener('push', (event) => {
  const data = event.data.json();
  console.log('Push received:', data);

  const options = {
    body: data.body,
    icon: data.icon || '/lokisurf.png',
    image: data.image || '/subway-surfer.avif',
    data: { url: data.url || '/' }, // Default URL
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close(); // Close the notification

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      const url = event.notification.data.url || '/';
      for (const client of clientList) {
        if (client.url === url && 'focus' in client) {
          return client.focus(); // Focus the tab if it's already open
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url); // Open a new tab if the URL isn't open
      }
    })
  );
});
