// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAh1TR362mbd0L1VCvCHHfwbY3yPv1H5A",
  authDomain: "lokisurf-82eba.firebaseapp.com",
  projectId: "lokisurf-82eba",
  storageBucket: "lokisurf-82eba.appspot.com",
  messagingSenderId: "943991431721",
  appId: "1:943991431721:web:8a21371995ff94b30db238",
  measurementId: "G-87KL81BW4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, analytics };
