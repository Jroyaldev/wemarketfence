"use client";

import { useEffect } from "react";
import Script from "next/script";
import { Metadata } from "next";

// Exports for metadata (static, can be accessed during server rendering)
export const metadata: Metadata = {
  title: "Perspective Funnel | We Market Fence",
  description: "Complete our marketing assessment to help us understand your fence business needs.",
};

export default function PerspectiveFunnelPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
      <iframe 
        id="ps-embed-67f19c683da3a5003b3c6cfd" 
        src="https://perspectivefunnel.co/67f19bd474309b003b180b24/67f19c683da3a5003b3c6cfd/?embed=1&header=0&footer=0&cookieBanner=1" 
        style={{ border: 0, width: '100vw', height: '100vh' }}
      />
      <Script id="perspective-funnel-script" strategy="afterInteractive">
        {`
          !function(t){
            function i(){
              for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];
              var t=(new Date).getTime();
              d<=t-s&&(s=t,o.apply(void 0,e))
            }
            var o,d,s,a=document.getElementById("ps-embed-67f19c683da3a5003b3c6cfd");
            o=function(){
              a&&"contentWindow"in a&&"object"==typeof a.contentWindow&&"postMessage"in a.contentWindow&&"function"==typeof a.contentWindow.postMessage&&a.contentWindow.postMessage({type:"viewportHeight",viewportHeight:Math.min(a.scrollHeight,window.innerHeight)},"*")
            },
            d=200,
            s=0,
            new ResizeObserver(i).observe(a);
            window.addEventListener("resize",i),
            window.addEventListener("message",function(e){
              var e=null==e?void 0:e.data,
              n=null==e?void 0:e.height;
              "embed-ready"===(null==e?void 0:e.type)&&setTimeout(i, 100),
              t&&a&&void 0!==n&&(a.style.height="".concat(n,"px"))
            })
          }(false);
        `}
      </Script>
    </div>
  );
}
