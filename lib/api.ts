import { getClient, BlogPost, Category } from './contentful';
import { EntryCollection } from 'contentful';

// Type-safe approach for Contentful queries
interface ContentfulQueryParams {
  content_type: string;
  [key: string]: any;
}

export async function getAllBlogPosts(preview: boolean = false): Promise<BlogPost[]> {
  const client = getClient(preview);
  const query: ContentfulQueryParams = {
    content_type: 'pageBlogPost', // Updated to match the interface definition
    order: ['-sys.createdAt'], // Using a system field for ordering
  };
  
  try {
    const entries = await client.getEntries(query);
    console.log('Contentful returned entries:', entries.items.length);
    if (entries.items.length > 0) {
      const firstItem = entries.items[0];
      console.log('First post sys ID:', firstItem.sys?.id);
      console.log('First post content type:', firstItem.sys?.contentType?.sys?.id);
      console.log('First post fields:', Object.keys(firstItem.fields || {}));
    } else {
      console.log('No posts found');
    }
    return entries.items as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string, preview: boolean = false): Promise<BlogPost | null> {
  const client = getClient(preview);
  const query: ContentfulQueryParams = {
    content_type: 'pageBlogPost', // Updated to match the interface definition
    'fields.slug': slug,
    limit: 1,
  };
  
  try {
    const entries = await client.getEntries(query);
  
    return entries.items.length > 0 
      ? (entries.items[0] as unknown as BlogPost)
      : null;
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
}

export async function getAllCategories(preview: boolean = false): Promise<Category[]> {
  // Since there's no explicit "category" content type, we might need to
  // either create one in Contentful or extract categories from blog posts
  // For now, returning an empty array to prevent errors
  return [];
}

export async function getCategoriesWithCount(preview: boolean = false): Promise<Category[]> {
  // Since there's no explicit "category" content type, returning an empty array
  return [];
}

export async function getPostsByCategory(categorySlug: string, preview: boolean = false): Promise<BlogPost[]> {
  // Since there's no explicit "category" content type, we'd need to adjust this
  // For now, returning an empty array to prevent errors
  return [];
}
