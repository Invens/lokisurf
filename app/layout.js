"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";


const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const [bgColor, setBgColor] = useState(getRandomColor());

  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: bgColor }} >
        
        {children}
        
        </body>
    </html>
  );
}
