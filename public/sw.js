self.addEventListener('push', (event) => {
    const data = event.data.json();
    console.log('Push received:', data);
  
    // Show notification
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon || '/icon.png',
      data: {
        url: data.url || '/', // Use the URL from the backend, fallback to home page
      },
    });
  });
  
  self.addEventListener('notificationclick', (event) => {
    event.notification.close(); // Close the notification
  
    // Open the URL from notification data or fallback to home page
    const targetUrl = event.notification.data.url || '/';
  
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
        // Check if the target URL is already open
        for (const client of clientList) {
          if (client.url === targetUrl && 'focus' in client) {
            return client.focus(); // Focus the existing tab
          }
        }
  
        // Open the URL in a new tab if not already open
        if (clients.openWindow) {
          return clients.openWindow(targetUrl);
        }
      })
    );
  });
  