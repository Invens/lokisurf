// components/GoogleAds.jsx
import { useEffect } from 'react';
import Script from 'next/script';

const GoogleAds = ({ client, slot, responsive="true", format="auto"}) => {
  useEffect(() => {
    // Check if adsbygoogle is defined before pushing
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);

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