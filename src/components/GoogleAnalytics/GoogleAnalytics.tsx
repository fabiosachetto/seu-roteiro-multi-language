import Script from 'next/script';

const GA_TRACKING_ID = 'GTM-TBHXDD3C'; // Substitua pelo seu ID de acompanhamento do Google Analytics

export const GoogleAnalytics = () => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_TRACKING_ID}');        
      `}
    </Script>
  </>
);