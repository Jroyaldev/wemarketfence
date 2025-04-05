'use client'

import React from 'react'
import Script from 'next/script'

export default function GoogleTag() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16964314941"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16964314941');
          
          // Conversion tracking function
          window.gtag_report_conversion = function(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-16964314941/JXgPCN7e2bEaEL3Om5k_',
                'event_callback': callback
            });
            return false;
          }
        `}
      </Script>
    </>
  )
}
