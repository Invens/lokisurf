// app/layout.js
import { Audiowide } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import ClientWrapper from "@/components/ClientWrapper";

const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Loki Surf - Play Thousands of Games Online</title>
        <meta
          name="description"
          content="Loki Surf offers thousands of online games playable directly in your browser without any downloads. Enjoy a wide variety of games including action, puzzles, strategy, and more!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="online games, browser games, no download games, play games online, free games, action games, puzzle games, strategy games, Loki Surf, gaming platform" />
        <meta property="og:title" content="Loki Surf - Play Thousands of Games Online" />
        <meta property="og:description" content="Access thousands of games on Loki Surf that you can play directly from your browser without any downloads. From action to puzzles, find a game that suits your taste!" />
        <meta property="og:image" content="/lokisurf.png" />
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
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={audiowide.className}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
