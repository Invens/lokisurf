import axios from 'axios';

// Replace with your VAPID public key
const PUBLIC_VAPID_KEY = 'BPdiawUDgasEUn3atcn-spOCo-YWcn-LZ8e1NpzrLKb1pmZ8aLOoChnGIWMrVkX39zSGVc69Dt7dpdfbSQx0iyY';

// Detect user country using the Intl API
const getUserCountry = () => {
  try {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    const country = locale.split('-')[1]; // Extract country code from locale
    return country || 'Unknown';
  } catch (error) {
    console.error('Error detecting user country:', error);
    return 'Unknown';
  }
};

// Function to subscribe the user to push notifications
export const subscribeUserToPush = async () => {
  if (!('serviceWorker' in navigator)) {
    console.error('Service Workers are not supported in this browser.');
    return;
  }

  try {
    // Register Service Worker
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('Service Worker registered successfully:', registration);

    // Wait until the Service Worker is active
    const activeRegistration = await navigator.serviceWorker.ready;
    console.log('Service Worker is active:', activeRegistration);

    // Request Notification Permission
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.error('Notification permission denied by the user.');
      return;
    }

    // Detect user country
    const userCountry = getUserCountry();
    console.log('Detected User Country:', userCountry);

    // Subscribe to Push Service
    const subscription = await activeRegistration.pushManager.subscribe({
      userVisibleOnly: true, // Ensures the notifications are visible to the user
      applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY),
    });

    // Add country information to the subscription payload
    const subscriptionWithCountry = {
      ...subscription.toJSON(), // Convert subscription to JSON
      country: userCountry,
    };

    // Send subscription details to the backend
    await axios.post('https://api.lokisurf.com/api/subscribe', subscriptionWithCountry);
    console.log('User subscribed successfully:', subscriptionWithCountry);
  } catch (error) {
    console.error('Error subscribing to push notifications:', error);
  }
};

// Helper function to convert VAPID key to Uint8Array
const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};
