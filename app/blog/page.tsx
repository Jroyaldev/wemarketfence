"use client"
import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { RetroSection } from "../../components/retro-section"
import { RetroButton } from "../../components/retro-button"
import { Breadcrumb } from "../../components/breadcrumb"
import { FAQSection } from "../../components/faq-section"

export default function BlogPage() {
  // Dummy blog posts for structure
  const blogPosts = [
    {
      id: 1,
      title: "5 Proven Marketing Strategies for Fence Companies",
      excerpt: "Discover the top marketing strategies that are helping fence contractors generate more leads and grow their business in today's competitive market.",
      date: "April 1, 2025",
      slug: "#",
      category: "Marketing"
    },
    {
      id: 2,
      title: "How to Create an Effective Website for Your Fence Business",
      excerpt: "Learn the essential elements every fence company website needs to convert visitors into customers and stand out from competitors.",
      date: "March 25, 2025",
      slug: "#",
      category: "Websites"
    },
    {
      id: 3,
      title: "Local SEO Tips for Fence Contractors",
      excerpt: "Implement these local SEO strategies to ensure your fence company appears at the top of search results when potential customers are looking for services in your area.",
      date: "March 15, 2025",
      slug: "#",
      category: "SEO"
    },
  ];

  // Dummy categories for structure
  const categories = [
    { name: "Marketing", count: 12 },
    { name: "Websites", count: 8 },
    { name: "SEO", count: 7 },
    { name: "Social Media", count: 5 },
    { name: "Lead Generation", count: 4 },
  ];

  return (
    <>
      <Breadcrumb />
      
      {/* Hero Section */}
      <RetroSection className="py-12 md:py-20">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-bold text-accent-yellow uppercase tracking-widest mb-2 block">
              INSIGHTS & STRATEGIES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-6">
              FENCE MARKETING <span className="text-accent-red">BLOG</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Expert advice, industry insights, and proven strategies to help your fence company 
              attract more customers and grow your business.
            </p>
          </div>
        </div>
      </RetroSection>
      
      {/* Blog Content Section */}
      <RetroSection className="py-16 bg-neutral-light">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-8">
                {blogPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-white border-4 border-neutral-dark shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px]"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-bold bg-accent-yellow px-3 py-1 uppercase">{post.category}</span>
                        <span className="text-sm text-neutral-dark">{post.date}</span>
                      </div>
                      <h2 className="text-2xl font-extrabold mb-4 uppercase">{post.title}</h2>
                      <p className="mb-6">{post.excerpt}</p>
                      <Link href={post.slug}>
                        <RetroButton variant="primary" className="w-full">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </RetroButton>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination Placeholder */}
              <div className="flex justify-center mt-12">
                <div className="flex gap-2">
                  <button className="w-10 h-10 flex items-center justify-center border-2 border-neutral-dark font-bold">1</button>
                  <button className="w-10 h-10 flex items-center justify-center border-2 border-neutral-dark bg-neutral-light font-bold">2</button>
                  <button className="w-10 h-10 flex items-center justify-center border-2 border-neutral-dark bg-neutral-light font-bold">3</button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white border-4 border-neutral-dark shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
                <div className="border-b-4 border-neutral-dark p-4">
                  <h3 className="text-xl font-extrabold uppercase">Categories</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-3">
                    {categories.map((category) => (
                      <li key={category.name} className="flex justify-between items-center">
                        <Link href="#" className="font-medium hover:text-accent-red transition-colors">
                          {category.name}
                        </Link>
                        <span className="text-sm bg-neutral-light px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Email Signup */}
              <div className="bg-white border-4 border-neutral-dark shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="border-b-4 border-neutral-dark p-4">
                  <h3 className="text-xl font-extrabold uppercase">Get Updates</h3>
                </div>
                <div className="p-4">
                  <p className="mb-4">Sign up to receive the latest fence marketing strategies.</p>
                  <form className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full p-3 border-3 border-neutral-dark focus:border-accent-red outline-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                    />
                    <RetroButton variant="primary" className="w-full">
                      Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                    </RetroButton>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RetroSection>

      {/* FAQ Section */}
      <FAQSection
        title="BLOG FAQ"
        items={[
          {
            question: "How often do you publish new content?",
            answer: "We publish new fence marketing strategies and tips weekly. Subscribe to our email list to get notified when new content is available."
          },
          {
            question: "Do you offer custom marketing advice for fence companies?",
            answer: "Yes! In addition to our blog content, we provide personalized marketing consultations for fence contractors. Contact us to learn more about our services."
          },
          {
            question: "Can I suggest topics for future blog posts?",
            answer: "Absolutely! We love hearing from fence professionals about the marketing challenges they face. Send us your topic suggestions through our contact form."
          }
        ]}
      />
      
      {/* CTA Section */}
      <RetroSection className="py-16 bg-neutral-dark text-white">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-6">
              READY TO GROW YOUR <span className="text-accent-yellow">FENCE BUSINESS</span>?
            </h2>
            <p className="text-lg mb-8">
              Don't wait for customers to find you. Let's create a marketing strategy that brings them directly to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RetroButton variant="secondary">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </RetroButton>
              <RetroButton variant="accent">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </RetroButton>
            </div>
          </div>
        </div>
      </RetroSection>
    </>
  );
}
