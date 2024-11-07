import React from 'react';
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceHeroProps {
  serviceName: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
  image: string;
}

export function ServiceHero1({
  serviceName = "Professional Consulting Services",
  description = "Transform your business with expert guidance and proven strategies tailored to your needs.",
  benefits = [
    "Personalized Strategy Development",
    "Expert Industry Analysis",
    "Implementation Support"
  ],
  ctaText = "Schedule Consultation",
  ctaLink = "#",
  image = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
}: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Expert Solutions
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              {serviceName}
            </h1>
            
            <p className="text-xl text-gray-600">
              {description}
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-6">
              <a
                href={ctaLink}
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {ctaText}
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-xl transform -rotate-3"></div>
              <img
                src={image}
                alt="Service"
                className="relative rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Book Now</p>
                    <p className="text-sm text-gray-600">Next available: Today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}