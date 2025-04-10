'use client'

import React from 'react'
import Script from 'next/script'

export default function GoogleTagManager() {
  return (
    <>
      {/* Google Tag Manager - Script for head */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KT73W9Q7');
        `}
      </Script>

      {/* Google Tag Manager - noscript for body */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-KT73W9Q7"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}
