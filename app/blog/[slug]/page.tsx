import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { ArrowLeft, ArrowRight, Calendar, Tag, User, Share2 } from 'lucide-react';

import { RetroButton } from '@/components/retro-button';
import { RetroSection } from '@/components/retro-section';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/api';
import { formatDate } from '@/lib/contentful';
import { Breadcrumb } from '@/components/breadcrumb';
import { SocialShareButtons } from '@/components/social-share-buttons';

// Define the options for rich text rendering
const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="list-disc pl-5 mb-4 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ol className="list-decimal pl-5 mb-4 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
      <li className="pl-1">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-accent-yellow pl-4 italic my-6 text-neutral-700">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-t border-neutral-200" />,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { url, title, description, width, height } = node.data.target.fields.file;
      return (
        <div className="my-6 rounded-lg overflow-hidden shadow-sm">
          <Image
            src={`https:${url}`}
            alt={description || title || "Blog image"}
            width={width || 800}
            height={height || 400}
            className="w-full h-auto"
          />
          {title && <p className="text-sm text-center mt-2 italic text-neutral-500">{title}</p>}
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a href={node.data.uri} className="text-accent-red hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  // Check if Contentful environment variables are configured
  const hasContentfulConfig = 
    process.env.CONTENTFUL_SPACE_ID && 
    process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!hasContentfulConfig) {
    console.warn('Contentful environment variables are missing. Static paths will be empty.');
    return [];
  }
  
  try {
    const posts = await getAllBlogPosts();
    
    return posts.map(post => ({
      slug: post.fields.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return empty array to prevent build failure
    return [];
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  // Get the content
  const { title, content, featuredImage, category, author } = post.fields;
  const publishedDate = post.fields.publishedDate || "";

  return (
    <>
      <Breadcrumb />
      
      <RetroSection className="py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link 
                href="/blog" 
                className="inline-flex items-center font-medium hover:text-accent-red transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Posts
              </Link>
            </div>
            
            {/* Post Header */}
            <div className="mb-8">
              {category && (
                <div className="flex flex-wrap gap-2 mb-4">
                  <Link 
                    href={`/blog/category/${category.fields.slug}`}
                    className="inline-flex items-center text-sm bg-accent-yellow text-neutral-dark px-3 py-1 rounded-md hover:bg-accent-yellow/90 transition-colors"
                  >
                    <Tag className="w-3 h-3 mr-1.5" />
                    {category.fields.name}
                  </Link>
                </div>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
                {title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-neutral-600 mb-6">
                {publishedDate && (
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(publishedDate)}
                  </div>
                )}
                {author && (
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {author.fields.name}
                  </div>
                )}
              </div>
            </div>
            
            {/* Featured Image */}
            {featuredImage && (
              <div className="mb-8 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={`https:${featuredImage.fields.file.url}`}
                  alt={featuredImage.fields.title || title}
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            )}
            
            {/* Social Share Buttons */}
            <SocialShareButtons title={title} />
            
            {/* Post Content */}
            <div className="prose prose-lg max-w-none bg-white border border-neutral-200 rounded-lg shadow-sm p-6 md:p-8">
              {documentToReactComponents(content, richTextOptions)}
            </div>
            
            {/* Author Bio - If author field includes bio information */}
            {author && (
              <div className="mt-10 p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  {author.fields.picture && (
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image 
                        src={`https:${author.fields.picture.fields.file.url}`}
                        alt={author.fields.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-center sm:text-left">{author.fields.name}</h3>
                  </div>
                </div>
              </div>
            )}
            
            {/* Post Navigation */}
            <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/blog">
                <RetroButton variant="secondary" className="w-full sm:w-auto justify-center sm:justify-start">
                  <ArrowLeft className="mr-2 h-4 w-4" /> All Posts
                </RetroButton>
              </Link>
              <Link href="/contact">
                <RetroButton variant="primary" className="w-full sm:w-auto justify-center sm:justify-start">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </RetroButton>
              </Link>
            </div>
          </div>
        </div>
      </RetroSection>
      
      {/* Related Posts CTA with updated styling */}
      <RetroSection className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Want More <span className="text-accent-red">Marketing Tips</span>?
            </h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter for exclusive fence marketing strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <RetroButton variant="primary" className="w-full sm:w-auto group">
                  Subscribe Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </RetroButton>
              </Link>
              <Link href="/blog">
                <RetroButton variant="secondary" className="w-full sm:w-auto group">
                  Browse All Posts <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </RetroButton>
              </Link>
            </div>
          </div>
        </div>
      </RetroSection>
    </>
  );
}
