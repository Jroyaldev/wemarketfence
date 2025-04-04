"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
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
  title = "Frequently Asked Questions",
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
        <div className="flex flex-col items-center mb-12">
          <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-accent-yellow/20 text-accent-yellow mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            {title}
          </h2>
          <div className="w-16 h-1 bg-accent-red rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div 
              key={index}
              className="border border-neutral-200 rounded-lg shadow-sm bg-white overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full p-5 text-left font-medium text-lg transition-colors hover:bg-neutral-50"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <div className="h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 bg-accent-red/10 text-accent-red">
                  {openIndex === index ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </div>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="prose prose-lg max-w-none p-5 pt-0 text-neutral-700">
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
