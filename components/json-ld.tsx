import React from 'react';

interface LocalBusinessJsonLdProps {
  name: string;
  description: string;
  url: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  image?: string;
  priceRange?: string;
  sameAs?: string[];
  openingHours?: string[];
  servesCuisine?: string[];
}

export const LocalBusinessJsonLd = ({
  name,
  description,
  url,
  telephone,
  address,
  image,
  priceRange,
  sameAs,
  openingHours,
}: LocalBusinessJsonLdProps) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MarketingAgency',
    name,
    description,
    url,
    ...(telephone && { telephone }),
    ...(address && { address: {
      '@type': 'PostalAddress',
      ...address,
    }}),
    ...(image && { image }),
    ...(priceRange && { priceRange }),
    ...(sameAs && { sameAs }),
    ...(openingHours && { openingHours }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface FAQPageJsonLdProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQPageJsonLd = ({ questions }: FAQPageJsonLdProps) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface ServiceJsonLdProps {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  serviceArea?: {
    name: string;
    type: string;
  }[];
  serviceType?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    description?: string;
  };
}

export const ServiceJsonLd = ({
  name,
  description,
  provider,
  serviceArea,
  serviceType,
  offers,
}: ServiceJsonLdProps) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      ...provider,
    },
    ...(serviceArea && {
      areaServed: serviceArea.map(area => ({
        '@type': area.type,
        name: area.name,
      }))
    }),
    ...(serviceType && { serviceType }),
    ...(offers && {
      offers: {
        '@type': 'Offer',
        ...offers,
      }
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface BreadcrumbJsonLdProps {
  items: Array<{
    name: string;
    item: string;
  }>;
}

export const BreadcrumbJsonLd = ({ items }: BreadcrumbJsonLdProps) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
