import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is this a one-time payment or a subscription?",
    answer: "All our templates come with a one-time payment. Once you purchase a template, you own it forever with no recurring fees. This includes future updates to your chosen template."
  },
  {
    question: "Can I host the landing page on my own domain?",
    answer: "Yes! You have two options: 1) Use our hassle-free hosting service which comes with SSL, CDN, and automatic updates, or 2) Download the template and host it on your own domain. Both options are available after purchase."
  },
  {
    question: "What makes these landing pages highly convertible?",
    answer: "Our landing pages are built with conversion optimization best practices: clear CTAs, social proof elements, optimized loading speed, mobile responsiveness, and A/B testing capabilities. They're designed based on data from thousands of successful campaigns."
  },
  {
    question: "Do I need technical knowledge to customize the template?",
    answer: "Not at all! Our drag-and-drop editor makes customization easy for everyone. No coding required. However, if you're technically inclined, you have full access to the code for advanced customization."
  },
  {
    question: "What happens if I need help with my landing page?",
    answer: "We provide comprehensive support including documentation, video tutorials, and email support. Premium templates include priority support with 24/7 response times."
  },
  {
    question: "Can I switch templates after purchase?",
    answer: "Yes! If you're not satisfied with your chosen template, you can switch to another template of equal or lesser value within 14 days of purchase. For upgrades to higher-tier templates, you only pay the difference."
  },
  {
    question: "How do you ensure high conversion rates?",
    answer: "Our templates are continuously optimized based on real-world performance data. We incorporate proven conversion elements like trust signals, urgency triggers, and psychological pricing. Plus, built-in analytics help you track and improve performance."
  },
  {
    question: "What's included in the template package?",
    answer: "Each template includes the complete landing page code, all assets (images, icons, etc.), integration guides for popular tools, SEO optimization features, and mobile-responsive design. Premium templates also include additional sections and advanced features."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Split faqs array into two columns for desktop
  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, midPoint);
  const rightColumnFaqs = faqs.slice(midPoint);

  const FAQColumn = ({ items, startIndex }: { items: FAQItem[], startIndex: number }) => (
    <div className="space-y-4">
      {items.map((faq, index) => {
        const actualIndex = startIndex + index;
        return (
          <div
            key={actualIndex}
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === actualIndex ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {openIndex === actualIndex && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our landing page templates
          </p>
        </div>

        {/* Mobile: Single Column */}
        <div className="lg:hidden space-y-4">
          <FAQColumn items={faqs} startIndex={0} />
        </div>

        {/* Desktop: Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
          <FAQColumn items={leftColumnFaqs} startIndex={0} />
          <FAQColumn items={rightColumnFaqs} startIndex={midPoint} />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <button className="text-primary font-medium hover:text-primary/90">
              Chat with Us
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}