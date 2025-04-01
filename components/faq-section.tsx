"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQPageJsonLd } from './json-ld';
import { RetroSection } from './retro-section';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
  className?: string;
}

export const FAQSection = ({ 
  title = "FREQUENTLY ASKED QUESTIONS",
  items,
  className = "" 
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <RetroSection className={`py-16 ${className}`}>
      <div className="container px-4 sm:px-6">
        {/* Title */}
        <div className="flex flex-col items-center mb-10">
          <span className="text-sm font-bold text-accent-yellow uppercase tracking-widest mb-2">
            GET ANSWERS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center uppercase mb-4">
            {title}
          </h2>
          <div className="w-24 h-2 bg-accent-red"></div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div 
              key={index}
              className="mb-4 border-4 border-neutral-dark shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full p-4 text-left font-bold text-lg"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`px-4 pb-4 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                <div className="prose prose-lg max-w-none">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Structured Data */}
      <FAQPageJsonLd questions={items} />
    </RetroSection>
  );
};
