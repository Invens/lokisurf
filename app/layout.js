"use client";
import { Audiowide } from "next/font/google"; // Import Audiowide font
import "./globals.css";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { analytics } from "@/lib/firebase";

// Generate a dark game-themed gradient background color
const getDarkGameThemedBackground = () => {
  const darkColors = [
    "#2E0249", // Dark Purple
    "#0F0E17", // Deep Blue
    "#001F54", // Dark Cyan
    "#3A0CA3", // Dark Violet
    "#1A1A2E", // Charcoal Black
  ];
  
  const neonHighlights = [
    "#FF4D00", // Neon Orange
    "#E94560", // Neon Pink
    "#A700FF", // Neon Purple
    "#00FFF5", // Neon Cyan
  ];

  const darkIndex = Math.floor(Math.random() * darkColors.length);
  const neonIndex = Math.floor(Math.random() * neonHighlights.length);

  return `linear-gradient(135deg, ${darkColors[darkIndex]}, ${neonHighlights[neonIndex]})`;
};

const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  useEffect(() => {
    if (analytics) {
      // You can add analytics logging here if needed
    }
  }, [analytics]);

  const [bgGradient, setBgGradient] = useState(getDarkGameThemedBackground());



  return (
    <html lang="en">
      <Head>
        <title>Loki Surf - Play Thousands of Games Online</title>
        <meta name="description" content="Loki Surf offers thousands of online games playable directly in your browser without any downloads. Enjoy a wide variety of games including action, puzzles, strategy, and more!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="online games, browser games, no download games, play games online, free games, action games, puzzle games, strategy games, Loki Surf, gaming platform" />
        <meta property="og:title" content="Loki Surf - Play Thousands of Games Online" />
        <meta property="og:description" content="Access thousands of games on Loki Surf that you can play directly from your browser without any downloads. From action to puzzles, find a game that suits your taste!" />
        <meta property="og:image" content="/lokisurf.png" /> {/* Ensure you have an appropriate image */}
        <meta property="og:url" content="https://lokisurf.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Loki Surf - Play Thousands of Games Online" />
        <meta name="twitter:description" content="Loki Surf offers thousands of online games playable directly in your browser without any downloads. Enjoy endless hours of entertainment!" />
        <meta name="twitter:image" content="/lokisurf.png" />

        <link rel="canonical" href="https://lokisurf.com" />
        <link rel="icon" href="/favicon.ico" />

        {/* Ads Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4006370769326429"
          crossOrigin="anonymous">
        </script>
      </Head>
      <body className={audiowide.className} style={{ background: bgGradient, transition: 'background 2s ease-in-out' }}>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
