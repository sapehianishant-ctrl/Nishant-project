'use client';

import React, { useState } from 'react';


interface FAQItem {
  question: string;
  answer: string;
}


const faqs: FAQItem[] = [
  {
    question: "How fast can you build my app or website?",
    answer: "We can deliver in as little as 30 days depending on complexity. Simple websites typically take 2-4 weeks, while complex mobile apps may require 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "How do you help grow my business digitally?",
    answer: "We analyze your target audience and implement data-driven strategies including SEO, social media marketing, and paid advertising to increase your online visibility and drive qualified leads to your business."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is simple. Click the consultation button below to schedule a call. We'll discuss your requirements, provide a project roadmap, and kick off the development process immediately after agreement."
  }
];

const Community = () => {
 
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
    <section className="py-20 px-4 md:px-8 bg-white min-h-screen flex justify-center items-center">
      <div className="max-w-3xl w-full mx-auto">
        
       
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked <span className="text-amber-400">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Get quick answers to common questions about our services
          </p>
        </div>

       
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                
                className={`bg-white rounded-xl transition-all duration-300 overflow-hidden border border-gray-100 ${
                  isOpen ? 'shadow-md ring-1 ring-black/5' : 'shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-bold text-gray-900">
                    {faq.question}
                  </span>
                  
                  
                  <span className={`ml-4 flex-shrink-0 transition-transform duration-300`}>
                    {isOpen ? (
                      
                      <div className="w-6 h-1 bg-amber-400 rounded-full" />
                    ) : (
                    
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    )}
                  </span>
                </button>

                
                <div 
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

          
        <div className="bg-[#FFFCEB] rounded-2xl p-8 md:p-12 text-center shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-500 mb-8">
            Our experts are ready to provide personalized answers
          </p>
          <button className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-8 rounded-lg shadow-sm transition-colors duration-200">
            Get a Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default Community;