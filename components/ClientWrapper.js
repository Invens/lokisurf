// components/ClientWrapper.js
"use client"; // Ensures this component runs only on the client

import { useEffect, useState } from "react";
import { analytics } from "@/lib/firebase";

// Function to generate the background
const getDarkGameThemedBackground = () => {
  const darkColors = ["#2E0249", "#0F0E17", "#001F54", "#3A0CA3", "#1A1A2E"];
  const neonHighlights = ["#FF4D00", "#E94560", "#A700FF", "#00FFF5"];
  
  const darkIndex = Math.floor(Math.random() * darkColors.length);
  const neonIndex = Math.floor(Math.random() * neonHighlights.length);

  return `linear-gradient(135deg, ${darkColors[darkIndex]}, ${neonHighlights[neonIndex]})`;
};

export default function ClientWrapper({ children }) {
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted

  useEffect(() => {
    if (analytics) {
      // Set up Firebase analytics if needed
    }

    // Ensure that the background is applied only after the component has mounted
    if (isMounted) {
      const backgroundGradient = getDarkGameThemedBackground();
      document.body.style.background = backgroundGradient;
      document.body.style.transition = "background 2s ease-in-out"; // Smooth transition
    }

    // Set the flag to true after component mounts
    setIsMounted(true);

    // Cleanup function to reset the background on unmount if needed
    return () => {
      document.body.style.background = ""; // Reset background on unmount (optional)
    };
  }, [isMounted]);

  return <>{children}</>; // Render children immediately, no layout disruption
}
