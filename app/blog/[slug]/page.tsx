import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import { RetroSection } from "../../../components/retro-section";
import { RetroButton } from "../../../components/retro-button";
import { Breadcrumb } from "../../../components/breadcrumb";
import { formatDate } from "../../../lib/contentful";
import { getAllBlogPosts, getBlogPostBySlug } from "../../../lib/api";

// Define the options for rich text rendering
const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p className="mb-4">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="list-disc pl-5 mb-4 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ol className="list-decimal pl-5 mb-4 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
      <li>{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-accent-yellow pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-t-2 border-neutral-dark" />,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { url, title, description, width, height } = node.data.target.fields.file;
      return (
        <div className="my-6 border-3 border-neutral-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <Image
            src={`https:${url}`}
            alt={description || title || "Blog image"}
            width={width || 800}
            height={height || 400}
            className="w-full h-auto"
          />
          {title && <p className="text-sm text-center mt-2 italic">{title}</p>}
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a href={node.data.uri} className="text-accent-red underline hover:no-underline" target="_blank" rel="noopener noreferrer">
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
  const { title, publishDate, content, featuredImage, category, author } = post.fields;

  return (
    <>
      <Breadcrumb />
      
      <RetroSection className="py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-sm font-bold hover:text-accent-red"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Posts
              </Link>
            </div>
            
            {/* Post Header */}
            <div className="mb-8">
              {category && (
                <span className="inline-block text-sm font-bold bg-accent-yellow px-3 py-1 uppercase mb-4">
                  {category.fields.name}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 uppercase">
                {title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-neutral-dark mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(publishDate)}
                </div>
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
              <div className="mb-8 border-4 border-neutral-dark shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <Image
                  src={`https:${featuredImage.fields.file.url}`}
                  alt={featuredImage.fields.title || title}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            )}
            
            {/* Post Content */}
            <div className="prose prose-lg max-w-none bg-white border-4 border-neutral-dark shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8">
              {documentToReactComponents(content, richTextOptions)}
            </div>
            
            {/* Post Footer */}
            <div className="mt-12 flex justify-between items-center">
              <Link href="/blog">
                <RetroButton variant="secondary">
                  <ArrowLeft className="mr-2 h-4 w-4" /> All Posts
                </RetroButton>
              </Link>
              <Link href="/contact">
                <RetroButton variant="primary">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </RetroButton>
              </Link>
            </div>
          </div>
        </div>
      </RetroSection>
      
      {/* Related Posts CTA - Could implement this in the future */}
      <RetroSection className="py-16 bg-neutral-dark text-white">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-6">
              WANT MORE <span className="text-accent-yellow">MARKETING TIPS</span>?
            </h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter for exclusive fence marketing strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RetroButton variant="secondary">
                Subscribe Now <ArrowRight className="ml-2 h-4 w-4" />
              </RetroButton>
              <RetroButton variant="accent">
                Browse All Posts <ArrowRight className="ml-2 h-4 w-4" />
              </RetroButton>
            </div>
          </div>
        </div>
      </RetroSection>
    </>
  );
}
