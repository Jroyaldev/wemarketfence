import React from 'react';
import Image, { ImageProps } from 'next/image';

interface SEOImageProps extends Omit<ImageProps, 'alt'> {
  alt: string; // Make alt required
  title?: string; // Optional title attribute
  priority?: boolean; // For LCP images
}

export const SEOImage = ({
  alt,
  title,
  priority = false,
  ...props
}: SEOImageProps) => {
  // If no meaningful alt text is provided, throw an error during development
  if (process.env.NODE_ENV === 'development' && (!alt || alt === '' || alt === 'image')) {
    console.error('SEOImage: Meaningful alt text is required for SEO and accessibility');
  }

  return (
    <Image
      alt={alt}
      title={title}
      priority={priority}
      {...props}
      // Ensure images have width and height to prevent layout shifts
      width={props.width || 0}
      height={props.height || 0}
    />
  );
};
