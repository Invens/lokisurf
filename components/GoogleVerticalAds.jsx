// // components/GoogleVerticalAds.jsx
// import { useEffect } from 'react';
// import Script from 'next/script';

// const GoogleVerticalAds = ({ client, slot, responsive="true", format="auto"}) => {
//     useEffect(() => {
//         // Check if adsbygoogle is defined before pushing
//         if (window.adsbygoogle) {
//           window.adsbygoogle.push({});
//         }
//       }, []);

//   return (
//     <>
//       <Script
//         async
//         src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4006370769326429"
//         crossOrigin="anonymous"
//       />
//       <ins
//         className="adsbygoogle"
//         style={{ display: 'block' }}
//         data-ad-client={client}
//         data-ad-slot={slot}
//         data-ad-format={format}
//         data-full-width-responsive={responsive}
//       ></ins>
//     </>
//   );
// };

// export default GoogleVerticalAds;
