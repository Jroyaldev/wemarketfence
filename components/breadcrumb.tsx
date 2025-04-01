"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { BreadcrumbJsonLd } from './json-ld';

export const Breadcrumb = () => {
  const pathname = usePathname();
  
  // Skip breadcrumbs on the homepage
  if (pathname === '/') return null;
  
  // Create breadcrumb items by splitting the path
  const pathSegments = pathname.split('/').filter(segment => segment);
  
  // Build breadcrumb items array for both UI and JSON-LD
  const breadcrumbItems = [
    { name: 'Home', path: '/', item: 'https://wemarketfence.com/' },
  ];
  
  // Add path segments
  pathSegments.forEach((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbItems.push({
      name,
      path,
      item: `https://wemarketfence.com${path}`,
    });
  });

  return (
    <>
      <nav aria-label="Breadcrumbs" className="py-3 px-4 text-sm">
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={item.path}>
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-neutral-dark" aria-hidden="true" />
              )}
              <li>
                {index === breadcrumbItems.length - 1 ? (
                  <span className="font-medium text-accent-red" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    href={item.path}
                    className="text-neutral-dark hover:text-accent-yellow transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>
      
      {/* Add structured data for breadcrumbs */}
      <BreadcrumbJsonLd 
        items={breadcrumbItems.map(item => ({
          name: item.name,
          item: item.item,
        }))}
      />
    </>
  );
};
