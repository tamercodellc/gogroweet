import React from 'react';
import { Play } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  videoText: string;
  videoLink: string;
  image: string;
  stats: Array<{ label: string; value: string }>;
}

export function Hero2({
  title = "Elevate Your Digital Presence",
  subtitle = "Create stunning websites with our intuitive platform. No coding required.",
  ctaText = "Start Free Trial",
  ctaLink = "#",
  videoText = "Watch Demo",
  videoLink = "#",
  image = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  stats = [
    { label: "Active Users", value: "10K+" },
    { label: "Downloads", value: "50K+" },
    { label: "Reviews", value: "4.9/5" }
  ]
}: HeroProps) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600">
              {subtitle}
            </p>
            <div className="flex items-center gap-6">
              <a
                href={ctaLink}
                className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {ctaText}
              </a>
              <a
                href={videoLink}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <span className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow mr-3">
                  <Play className="w-5 h-5 text-primary" fill="currentColor" />
                </span>
                {videoText}
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary-green/20"></div>
              <img
                src={image}
                alt="Hero"
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}