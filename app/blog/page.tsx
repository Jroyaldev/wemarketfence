import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { draftMode } from 'next/headers';
import { ArrowRight, EyeIcon } from 'lucide-react';
import { RetroSection } from '../../components/retro-section';
import { RetroButton } from '../../components/retro-button';
import { Breadcrumb } from '../../components/breadcrumb';
import { FAQSection } from '../../components/faq-section';
import { getAllBlogPosts, getCategoriesWithCount } from '../../lib/api';

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export const metadata: Metadata = {
  title: 'Blog | We Market Fence',
  description: 'Read our latest articles and insights about fence marketing strategies, lead generation tips, and industry trends.',
};

interface BlogPageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const ContentfulNotConfigured = () => (
  <RetroSection className="py-12">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold mb-6">Contentful Configuration Needed</h2>
      <div className="mb-8 border-4 border-neutral-dark p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <p className="mb-4">
          The Contentful API credentials are not properly configured. To display blog content, please set up the following
          environment variables in your <code className="bg-gray-200 px-2 py-1 rounded">.env.local</code> file:
        </p>
        <ul className="text-left mx-auto max-w-md mb-4">
          <li><code className="bg-gray-200 px-2 py-1 rounded">CONTENTFUL_SPACE_ID</code> - Your Contentful space ID</li>
          <li><code className="bg-gray-200 px-2 py-1 rounded">CONTENTFUL_ACCESS_TOKEN</code> - Access token for published content</li>
        </ul>
        <p>Then restart the development server to apply the changes.</p>
      </div>
      <Link href="/">
        <RetroButton className="mt-4">
          Return to Home
        </RetroButton>
      </Link>
    </div>
  </RetroSection>
);

export default async function BlogPage() {
  // Check if we're in draft/preview mode
  const { isEnabled: isInPreviewMode } = await draftMode();
  
  // Check if Contentful environment variables are configured
  const hasContentfulConfig = 
    process.env.CONTENTFUL_SPACE_ID && 
    process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!hasContentfulConfig) {
    return <ContentfulNotConfigured />;
  }

  try {
    // Fetch blog posts and categories
    const posts = await getAllBlogPosts(isInPreviewMode);
    const categories = await getCategoriesWithCount(isInPreviewMode);
    
    return (
      <>
        <Breadcrumb />
        <RetroSection className="py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-8 uppercase text-center">Blog</h1>
            <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
              Expert advice, industry insights, and proven strategies to help fence companies attract more customers.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {posts.length > 0 ? (
                  <div className="grid grid-cols-1 gap-8">
                    {posts.map((post) => {
                      // Safely access nested fields with optional chaining, using the correct field names
                      const title = post.fields?.title || 'Untitled Post';
                      const slug = post.fields?.slug || '';
                      const excerpt = post.fields?.shortDescription || ''; 
                      const publishDate = post.fields?.publishedDate || ''; 
                      const authorName = post.fields?.author?.fields?.name;
                      
                      // Get image URL with fallback
                      const hasImage = post.fields?.featuredImage?.fields?.file?.url;
                      const imageUrl = hasImage ? `https:${post.fields.featuredImage.fields.file.url}` : null;
                      const imageAlt = post.fields?.featuredImage?.fields?.title || title;
                      
                      return (
                        <article 
                          key={post.sys?.id || Math.random().toString()} 
                          className="bg-white border-4 border-neutral-dark shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px]"
                        >
                          <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold bg-accent-yellow px-3 py-1 uppercase">
                                  {post.fields?.category?.fields?.name || "Uncategorized"}
                                </span>
                                {isInPreviewMode && !publishDate && (
                                  <span className="text-xs font-bold bg-accent-red text-white px-2 py-1 uppercase">
                                    Draft
                                  </span>
                                )}
                              </div>
                              <span className="text-sm text-neutral-dark">
                                {publishDate ? formatDate(publishDate) : "Unpublished"}
                              </span>
                            </div>
                            
                            {/* Featured Image */}
                            {imageUrl ? (
                              <div className="mb-4 border-3 border-neutral-dark shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                                <Image
                                  src={imageUrl}
                                  alt={imageAlt}
                                  width={600}
                                  height={300}
                                  className="w-full h-64 object-cover"
                                />
                              </div>
                            ) : (
                              <div className="mb-4 border-3 border-neutral-dark shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] h-64 bg-gray-200 flex items-center justify-center">
                                <p className="text-gray-500">No image available</p>
                              </div>
                            )}
                            
                            <h2 className="text-2xl font-extrabold mb-4 uppercase">{title}</h2>
                            <p className="mb-6">{excerpt}</p>
                            
                            <div className="flex justify-between items-center">
                              <Link href={`/blog/${slug}`}>
                                <RetroButton size="sm" className="text-sm">
                                  Read more <ArrowRight className="ml-1 w-4 h-4" />
                                </RetroButton>
                              </Link>
                              
                              {isInPreviewMode && (
                                <Link href={`/api/exit-preview?redirect=/blog/${slug}`} className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                                  <EyeIcon className="w-4 h-4 mr-1" /> Preview Mode
                                </Link>
                              )}
                            </div>
                            
                            {authorName && (
                              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 flex items-center justify-center">
                                  <span className="text-xs text-gray-600">{authorName.charAt(0)}</span>
                                </div>
                                <span className="text-sm font-medium">{authorName}</span>
                              </div>
                            )}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-white border-4 border-neutral-dark p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <h2 className="text-2xl font-bold mb-4">No posts found</h2>
                    <p>
                      We haven't published any blog posts yet. Check back soon for new content!
                    </p>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div>
                {/* Categories Widget */}
                <div className="bg-white border-4 border-neutral-dark shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 mb-8">
                  <h2 className="text-xl font-extrabold mb-6 uppercase">Categories</h2>
                  <ul className="space-y-4">
                    <li>
                      <Link 
                        href="/blog" 
                        className="font-bold hover:text-accent-red transition-colors"
                      >
                        All Posts
                      </Link>
                    </li>
                    {categories.map((category) => (
                      <li key={category.sys.id}>
                        <Link 
                          href={`/blog/category/${category.fields.slug}`}
                          className="hover:text-accent-red transition-colors flex justify-between"
                        >
                          <span>{category.fields.name}</span>
                          <span className="bg-neutral-light px-2 rounded-md text-sm">
                            {category.count || 0}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Newsletter Widget */}
                <div className="bg-white border-4 border-neutral-dark shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6">
                  <h2 className="text-xl font-extrabold mb-4 uppercase">Stay Updated</h2>
                  <p className="mb-4">Subscribe to our newsletter for the latest fence marketing tips and strategies.</p>
                  <Link href="/contact">
                    <RetroButton variant="accent" className="w-full">
                      Subscribe Now
                    </RetroButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </RetroSection>
        
        {/* FAQ Section */}
        <FAQSection items={[
          {
            question: 'What is the purpose of this blog?',
            answer: 'This blog is designed to provide expert advice, industry insights, and proven strategies to help fence companies attract more customers and grow their business.'
          },
          {
            question: 'How often are new posts published?',
            answer: 'New posts are published on a regular basis, so be sure to check back often for fresh content.'
          },
          {
            question: 'Can I subscribe to the blog?',
            answer: 'Yes, you can subscribe to our newsletter to receive updates on new posts and other valuable content.'
          }
        ]} />
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <RetroSection className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6">Error Loading Blog</h2>
          <div className="mb-8 border-4 border-neutral-dark p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="mb-4">
              There was an error loading the blog content. Please try again later.
            </p>
          </div>
          <Link href="/">
            <RetroButton className="mt-4">
              Return to Home
            </RetroButton>
          </Link>
        </div>
      </RetroSection>
    );
  }
}
