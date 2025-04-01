import { createClient } from 'contentful';
import type { EntrySkeletonType, Entry } from 'contentful';

// Check if we have the required environment variables
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

// This client is used for fetching published data on the server side
export const client = spaceId && accessToken 
  ? createClient({
      space: spaceId,
      accessToken: accessToken,
    })
  : null;

// This client is used for fetching preview/draft data
export const previewClient = spaceId && previewToken 
  ? createClient({
      space: spaceId,
      accessToken: previewToken,
      host: 'preview.contentful.com',
    })
  : null;

// Helper function to get the appropriate client based on preview mode
export function getClient(preview: boolean = false) {
  if (!client || !previewClient) {
    throw new Error('Contentful environment variables are not properly configured. Please check your .env.local file.');
  }
  return preview ? previewClient : client;
}

// Helper function to format date
export function formatDate(dateString: string): string {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// Interfaces for Contentful content types
export interface BlogPostFields {
  title: string;
  slug: string;
  shortDescription: string;
  featuredImage: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  content: any; 
  publishedDate: string;
  author?: {
    fields: {
      name: string;
      picture: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
  };
  category?: {
    fields: {
      name: string;
      slug: string;
    };
  };
  internalName?: string;
  seoFields?: any;
  relatedBlogPosts?: any[];
}

export interface CategoryFields {
  name: string;
  slug: string;
}

// Define the content types to satisfy EntrySkeletonType
export interface BlogPost extends EntrySkeletonType<BlogPostFields> {
  contentTypeId: 'pageBlogPost';
  fields: BlogPostFields;
  sys: {
    id: string;
  };
}

export interface Category extends EntrySkeletonType {
  contentTypeId: 'category';
  fields: CategoryFields;
  sys: {
    id: string;
  };
  count?: number;
}
