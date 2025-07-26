"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function PerspectiveFunnelPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
      <iframe
        id="cal-embed"
        src="https://cal.com/jonny-taol55?embed=true"
        style={{ border: 0, width: '100%', minHeight: '100vh' }}
      />

    </div>
  );
}
