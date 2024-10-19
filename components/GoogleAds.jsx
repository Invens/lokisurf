// components/GoogleAds.jsx
import { useEffect, useState } from 'react';
import Script from 'next/script';

const GoogleAds = ({ client, slot, responsive="true", format="auto"}) => {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    if (!adLoaded && typeof window !== "undefined" && window.adsbygoogle) {
      // Push a new ad only if it hasn't been loaded already
      try {
        window.adsbygoogle.push({});
        setAdLoaded(true); // Mark the ad as loaded
      } catch (e) {
        console.error("AdSense Error: ", e.message);
      }
    }
  }, [adLoaded]);


  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </>
  );
};

export default GoogleAds;