import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { RetroSection } from "../../../../components/retro-section";
import { RetroButton } from "../../../../components/retro-button";
import { Breadcrumb } from "../../../../components/breadcrumb";
import { formatDate } from "../../../../lib/contentful";
import { getAllCategories, getPostsByCategory } from "../../../../lib/api";

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = await getAllCategories();
  
  return categories.map(category => ({
    slug: category.fields.slug,
  }));
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  // Get all posts for this category
  const posts = await getPostsByCategory(params.slug);
  
  if (posts.length === 0) {
    notFound();
  }
  
  // Get the category name from the first post
  const categoryName = posts[0].fields.category?.fields.name || "Category";

  return (
    <>
      <Breadcrumb />
      
      {/* Hero Section */}
      <RetroSection className="py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-sm font-bold hover:text-accent-red"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Posts
              </Link>
            </div>
            
            <span className="text-sm font-bold text-accent-yellow uppercase tracking-widest mb-2 block">
              CATEGORY
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-6">
              {categoryName}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Browse all our fence marketing articles in the {categoryName.toLowerCase()} category.
            </p>
          </div>
        </div>
      </RetroSection>
      
      {/* Blog Content Section */}
      <RetroSection className="py-16 bg-neutral-light">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {posts.map((post) => (
                <article 
                  key={post.sys.id} 
                  className="bg-white border-4 border-neutral-dark shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px]"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-bold bg-accent-yellow px-3 py-1 uppercase">
                        {post.fields.category?.fields.name || "Uncategorized"}
                      </span>
                      <span className="text-sm text-neutral-dark">
                        {formatDate(post.fields.publishDate)}
                      </span>
                    </div>
                    
                    {post.fields.featuredImage && (
                      <div className="mb-4 border-3 border-neutral-dark shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                        <Image
                          src={`https:${post.fields.featuredImage.fields.file.url}`}
                          alt={post.fields.featuredImage.fields.title || post.fields.title}
                          width={600}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}
                    
                    <h2 className="text-2xl font-extrabold mb-4 uppercase">{post.fields.title}</h2>
                    <p className="mb-6">{post.fields.excerpt}</p>
                    <Link href={`/blog/${post.fields.slug}`}>
                      <RetroButton variant="primary" className="w-full">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </RetroButton>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/blog">
                <RetroButton variant="secondary">
                  <ArrowLeft className="mr-2 h-4 w-4" /> All Blog Posts
                </RetroButton>
              </Link>
            </div>
          </div>
        </div>
      </RetroSection>
    </>
  );
}
