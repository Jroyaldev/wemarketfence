'use client'

import Script from 'next/script'

export default function OttoPixel() {
  return (
    <Script
      id="sa-dynamic-optimization"
      strategy="afterInteractive"
      data-uuid="e60352bf-cd40-4811-b539-b69553a2ce7c"
      dangerouslySetInnerHTML={{
        __html: `
          var script = document.createElement("script");
          script.setAttribute("nowprocket", "");
          script.setAttribute("nitro-exclude", "");
          script.src = "https://dashboard.searchatlas.com/scripts/dynamic_optimization.js";
          script.dataset.uuid = "e60352bf-cd40-4811-b539-b69553a2ce7c";
          script.id = "sa-dynamic-optimization-loader";
          document.head.appendChild(script);
        `
      }}
    />
  )
}
