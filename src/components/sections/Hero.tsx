import React from 'react';
import { Play, Star, Sparkles } from 'lucide-react';

interface HeroProps {
  onSignInClick: () => void;
  onGetStartedClick: () => void;
}

export function Hero({ onSignInClick, onGetStartedClick }: HeroProps) {
  const openVideo = () => {
    alert("Here is where video is opened");
  };

  return (
    <div className="max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column */}
        <div className="lg:w-1/2 lg:pr-12">
          {/* Discount Banner */}
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary">
              🎉 Limited Time Offer: 15% OFF on All Templates
            </span>
          </div>

          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Boost Your Sales with Free High-Ticket Landing Pages
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Transform your business with landing pages that offer A/B testing, integration with external tools, and SEO optimization. Ready to attract high-value customers and maximize your conversions from the first click.
          </p>

          <div className="flex gap-4 mb-12">
            <button 
              onClick={onGetStartedClick}
              className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors flex items-center"
            >
              Get My Free Landing Page
            </button>
            <div className="flex items-center px-8 py-4 bg-white border-2 border-gray-100 rounded-lg shadow-lg">
              <span className="text-4xl font-bold text-primary mr-2">5.0</span>
              <div className="flex flex-col items-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  From <span className="font-semibold">176+ reviews</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column with Image and Floating Elements */}
        <div className="lg:w-1/2 relative mt-12 lg:mt-0">
          <div className="relative h-[600px] w-full">
            {/* Concentric circles background */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute w-[550px] h-[550px] rounded-full bg-[#E8F3FF] -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[450px] h-[450px] rounded-full bg-[#D3E7FF] -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[350px] h-[350px] rounded-full bg-[#BED9FF] -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            {/* Main image */}
            <img
              src="/src/assets/images/Raydel.png"
              alt="Successful businessman"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-[500px] w-auto object-contain mix-blend-darken"
            />

            {/* Floating elements */}
            <div className="absolute top-10 right-0 bg-white p-4 rounded-xl shadow-lg animate-float z-20">
              <div className="flex items-center gap-2">
                <div>
                  <p className="font-semibold">78%</p>
                  <p className="text-sm text-gray-600">Conversion Rate</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/3 -left-8 bg-white p-4 rounded-xl shadow-lg animate-float-delayed z-20">
              <div className="flex items-center gap-2">
                <div>
                  <p className="font-semibold">40x</p>
                  <p className="text-sm text-gray-600">Improve Sales</p>
                </div>
              </div>
            </div>

            {/* Button with responsive text */}
            <button
              onClick={openVideo}
              className="absolute bottom-20 right-12 bg-primary text-white p-6 rounded-xl shadow-lg animate-float z-20 flex items-center gap-3 cursor-pointer hover:bg-blue-600 transition-colors group"
            >
              <div className="bg-white rounded-full p-2">
                <Play className="w-6 h-6 text-primary" fill="currentColor" />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg lg:inline hidden">See How It Works</p>
                <p className="font-bold text-lg lg:hidden">How It Works</p>
                <p className="text-sm text-white/90 lg:block hidden">Watch our 2-min demo</p>
              </div>
              <Sparkles className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
            </button>

            {/* Small decorative elements */}
            <div className="absolute top-0 right-20 w-8 h-8 bg-blue-400 rounded-full opacity-50 z-20"></div>
            <div className="absolute bottom-10 left-10 w-6 h-6 bg-green-400 rounded-full z-20"></div>
            <div className="absolute top-1/2 right-0 w-4 h-4 bg-primary rounded-full z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}