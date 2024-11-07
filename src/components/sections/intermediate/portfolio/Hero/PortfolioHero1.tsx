import React from 'react';
import { MessageCircle } from 'lucide-react';

interface PortfolioHero1Props {
  title?: string;
  subtitle?: string;
  brandName?: string;
}

export function PortfolioHero1({
  title = "Bring all your work together",
  subtitle = "A better experience for your attendees and less stress for your team.",
  brandName = "ADELFOX.DESIGN"
}: PortfolioHero1Props) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute right-32 top-32 w-64 h-64 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-50 animate-blob animation-delay-400"></div>
        </div>

        <div className="relative">
          {/* Brand Name */}
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
            {brandName}
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight animate-fade-in-up animation-delay-200">
                {title}
              </h1>
              
              <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-400">
                {subtitle}
              </p>

              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors animate-fade-in-up animation-delay-600">
                Download for Free
              </button>
            </div>

            {/* Right Content - Interactive Design */}
            <div className="lg:w-1/2 relative">
              {/* Main Image - Lower z-index */}
              <div className="relative animate-fade-in-up animation-delay-400">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80"
                  alt="Portfolio"
                  className="rounded-2xl relative z-10"
                />
              </div>

              {/* Floating Elements - Higher z-index */}
              <div className="absolute top-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-medium">M</span>
                  </div>
                  <span className="text-gray-900 font-medium">Mireya</span>
                </div>
              </div>

              <div className="absolute bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float animation-delay-200 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-medium">D</span>
                  </div>
                  <span className="text-gray-900 font-medium">Davin</span>
                </div>
              </div>

              {/* Chat Bubbles - Higher z-index */}
              <div className="absolute top-1/4 -left-8 bg-white rounded-full shadow-lg p-3 animate-float animation-delay-400 z-20">
                <MessageCircle className="w-5 h-5 text-blue-600" />
              </div>

              {/* Decorative Shapes - Higher z-index */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-200 rounded-full animate-float animation-delay-600 z-20"></div>
              <div className="absolute bottom-1/4 -right-4 w-12 h-12 bg-purple-200 rounded-full animate-float animation-delay-800 z-20"></div>
              <div className="absolute -bottom-4 left-1/4 w-6 h-6 bg-blue-200 rounded-full animate-float animation-delay-1000 z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}