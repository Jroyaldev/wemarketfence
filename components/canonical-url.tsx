import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

interface CanonicalProps {
  path?: string;
  basePath?: string;
}

export const Canonical = ({ 
  path,
  basePath = 'https://wemarketfence.com' 
}: CanonicalProps) => {
  const pathname = usePathname();
  const canonicalUrl = path ? `${basePath}${path}` : `${basePath}${pathname}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};
