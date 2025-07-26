import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { draftMode } from 'next/headers';
import { ArrowRight, Calendar, Tag, User, EyeIcon } from 'lucide-react';
import { RetroSection } from '../../components/retro-section';
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
        <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
          Return to Home
        </span>
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
        <RetroSection className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Page Header with accent badge */}
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-medium bg-blue-100 text-neutral-dark px-3 py-1 rounded-md uppercase mb-4">
                INSIGHTS & STRATEGIES
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase">
                <span className="text-neutral-dark">FENCE MARKETING</span>{' '}
                <span className="text-blue-600">BLOG</span>
              </h1>
              <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
                Expert advice, industry insights, and proven strategies to help fence companies attract more customers.
              </p>
              <div className="hidden md:block">
                <div className="flex gap-2 justify-center mb-6">
                  {categories.slice(0, 5).map((category) => (
                    <Link 
                      key={category.sys.id}
                      href={`/blog/category/${category.fields.slug}`}
                      className="inline-flex items-center px-3 py-1 bg-white text-sm font-medium border border-neutral-200 rounded-md hover:bg-neutral-100 transition-colors"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {category.fields.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                {posts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {posts.map((post, index) => {
                      // Safely access nested fields with optional chaining
                      const title = post.fields?.title || 'Untitled Post';
                      const slug = post.fields?.slug || '';
                      const excerpt = post.fields?.shortDescription || ''; 
                      const publishDate = post.fields?.publishedDate || ''; 
                      const authorName = post.fields?.author?.fields?.name;
                      const categoryName = post.fields?.category?.fields?.name;
                      
                      // Get image URL with fallback
                      const imageUrl = post.fields?.featuredImage?.fields?.file?.url 
                        ? `https:${post.fields.featuredImage.fields.file.url}`
                        : '/images/placeholder-blog.jpg';

                      // Alternate card styles for visual interest
                      const isFeatureCard = index === 0;
                      
                      return isFeatureCard ? (
                        // Feature card (first post)
                        <article key={post.sys.id} className="md:col-span-2 group">
                          <Link href={`/blog/${slug}`} className="block">
                            <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow transition-all duration-300">
                              <div className="aspect-video overflow-hidden relative">
                                <Image 
                                  src={imageUrl} 
                                  alt={title}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 800px"
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {categoryName && (
                                  <span className="absolute top-4 left-4 bg-blue-100 text-neutral-dark text-xs font-medium px-2 py-1 rounded z-10">
                                    {categoryName}
                                  </span>
                                )}
                              </div>
                              <div className="p-6">
                                <h2 className="text-2xl font-bold hover:text-blue-600 transition-colors mb-3">
                                  {title}
                                </h2>
                                <div className="flex items-center text-sm text-neutral-600 mb-4 gap-4">
                                  {publishDate && (
                                    <span className="flex items-center">
                                      <Calendar className="w-4 h-4 mr-1" /> 
                                      {formatDate(publishDate)}
                                    </span>
                                  )}
                                  {authorName && (
                                    <span className="flex items-center">
                                      <User className="w-4 h-4 mr-1" /> 
                                      {authorName}
                                    </span>
                                  )}
                                </div>
                                <p className="text-neutral-700 mb-4">{excerpt}</p>
                                <div className="flex items-center font-medium text-blue-600">
                                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </article>
                      ) : (
                        // Regular cards
                        <article key={post.sys.id} className="group">
                          <Link href={`/blog/${slug}`} className="block">
                            <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow transition-all duration-300 h-full flex flex-col">
                              <div className="aspect-video overflow-hidden relative">
                                <Image 
                                  src={imageUrl} 
                                  alt={title}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 400px"
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {categoryName && (
                                  <span className="absolute top-3 left-3 bg-blue-100 text-neutral-dark text-xs font-medium px-2 py-1 rounded z-10">
                                    {categoryName}
                                  </span>
                                )}
                              </div>
                              <div className="p-5 flex-grow flex flex-col">
                                <h2 className="text-lg font-bold hover:text-blue-600 transition-colors mb-3">
                                  {title}
                                </h2>
                                <div className="flex items-center text-xs text-neutral-600 mb-3 gap-3">
                                  {publishDate && (
                                    <span className="flex items-center">
                                      <Calendar className="w-3 h-3 mr-1" /> 
                                      {formatDate(publishDate)}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-neutral-700 mb-3 line-clamp-2">{excerpt}</p>
                                <div className="mt-auto pt-3 text-sm flex items-center font-medium text-blue-600">
                                  Read More <ArrowRight className="w-3 h-3 ml-1" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </article>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-bold mb-4">No posts found</h2>
                    <p>
                      We haven't published any blog posts yet. Check back soon for new content!
                    </p>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-4">
                {/* Categories Widget */}
                <div className="bg-white border border-neutral-200 rounded-lg shadow-sm p-6 mb-8 sticky top-24">
                  <h2 className="text-xl font-bold mb-6 uppercase flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-blue-600" />
                    Categories
                  </h2>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        href="/blog" 
                        className="flex items-center font-medium hover:text-blue-600 transition-colors py-1"
                      >
                        All Posts
                        <span className="ml-auto bg-neutral-100 px-2 py-0.5 rounded-md text-sm">
                          {posts.length}
                        </span>
                      </Link>
                    </li>
                    {categories.map((category) => (
                      <li key={category.sys.id}>
                        <Link 
                          href={`/blog/category/${category.fields.slug}`}
                          className="flex items-center hover:text-blue-600 transition-colors py-1"
                        >
                          {category.fields.name}
                          <span className="ml-auto bg-neutral-100 px-2 py-0.5 rounded-md text-sm">
                            {category.count || 0}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Newsletter Widget */}
                <div className="bg-blue-100 border border-neutral-200 rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-4 uppercase flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    Stay Updated
                  </h2>
                  <p className="mb-4">Subscribe to our newsletter for the latest fence marketing tips and strategies.</p>
                  <Link href="/contact">
                    <span className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors group flex items-center justify-center">
                      Subscribe Now <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </RetroSection>
        
        {/* FAQ Section - Maintained but with updated styling */}
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
          <div className="mb-8 border border-neutral-200 rounded-lg p-6 bg-white shadow-sm">
            <p className="mb-4">
              There was an error loading the blog content. Please try again later.
            </p>
          </div>
          <Link href="/">
            <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Return to Home
            </span>
          </Link>
        </div>
      </RetroSection>
    );
  }
}
