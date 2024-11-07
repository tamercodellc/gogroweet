import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  backgroundImage?: string;
}

export function Hero1({
  title = "Transform Your Business with Our Solution",
  subtitle = "Empower your business with cutting-edge tools and expert support. Start your journey today.",
  ctaText = "Get Started",
  ctaLink = "#",
  image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  backgroundImage
}: HeroProps) {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100">
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600">
              {subtitle}
            </p>
            <div className="flex gap-4">
              <a
                href={ctaLink}
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {ctaText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-xl transform rotate-3"></div>
              <img
                src={image}
                alt="Hero"
                className="relative rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}