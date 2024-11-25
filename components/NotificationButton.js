import axios from 'axios';

const PUBLIC_VAPID_KEY = 'BPdiawUDgasEUn3atcn-spOCo-YWcn-LZ8e1NpzrLKb1pmZ8aLOoChnGIWMrVkX39zSGVc69Dt7dpdfbSQx0iyY'; // Replace with your VAPID public key

export const subscribeUserToPush = async () => {
  if (!('serviceWorker' in navigator)) {
    console.error('Service Workers are not supported in this browser.');
    return;
  }

  try {
    // Register Service Worker
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('Service Worker registered:', registration);

    // Request Notification Permission
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.error('Notification permission denied.');
      return;
    }

    // Subscribe to Push Service
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY),
    });

    // Send subscription to backend
    await axios.post('https://api.lokisurf.com/api/subscribe', subscription);
    console.log('User subscribed:', subscription);
  } catch (error) {
    console.error('Error subscribing to push notifications:', error);
  }
};

// Convert VAPID key to Uint8Array
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
