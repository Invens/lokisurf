"use client";
import { Audiowide } from "next/font/google"; // Import Audiowide font
import "./globals.css";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from "next/head";

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Use Audiowide font
const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  const [bgColor, setBgColor] = useState(getRandomColor());

  return (
    <html lang="en">
      <Head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4006370769326429"
          crossOrigin="anonymous">
        </script>
      </Head>
      <body className={audiowide.className} style={{ backgroundColor: bgColor }}>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
