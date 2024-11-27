'use client'; // Required for Next.js client-side components

import { useEffect } from 'react';

// Function to convert VAPID key to Uint8Array
const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
};

// Function to detect user country
const getUserCountry = () => {
  try {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    return locale.split('-')[1] || 'Unknown';
  } catch (error) {
    console.error('Error detecting user country:', error);
    return 'Unknown';
  }
};

// Main subscription function
const subscribeUserToPush = async () => {
  const PUBLIC_VAPID_KEY = 'BPdiawUDgasEUn3atcn-spOCo-YWcn-LZ8e1NpzrLKb1pmZ8aLOoChnGIWMrVkX39zSGVc69Dt7dpdfbSQx0iyY';

  if (!('serviceWorker' in navigator)) {
    console.error('Service Workers are not supported in this browser.');
    return;
  }

  try {
    // Register service worker
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('Service Worker registered successfully:', registration);

    // Wait for service worker to be ready
    const activeRegistration = await navigator.serviceWorker.ready;

    // Request notification permission
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.warn('Notification permission denied.');
      return;
    }

    // Detect user country
    const userCountry = getUserCountry();
    console.log('Detected User Country:', userCountry);

    // Subscribe to Push Notifications
    const subscription = await activeRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY),
    });

    // Prepare subscription payload with user country
    const subscriptionWithCountry = {
      ...subscription.toJSON(),
      country: userCountry,
    };

    // Send subscription details to the backend
    await fetch('https://api.lokisurf.com/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(subscriptionWithCountry),
    });

    console.log('User subscribed successfully:', subscriptionWithCountry);
  } catch (error) {
    console.error('Error subscribing to push notifications:', error);
  }
};

const NotificationPermission = () => {
  useEffect(() => {
    // Automatically call the subscription function on component mount
    subscribeUserToPush();
  }, []);

  return null; // This component renders nothing visually
};

export default NotificationPermission;
