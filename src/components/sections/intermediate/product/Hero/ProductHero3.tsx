import React from 'react';
import { Play, ShoppingBag, Shield, Truck, Star } from 'lucide-react';

interface ProductHero3Props {
  title?: string;
  subtitle?: string;
  features?: Array<{
    icon: React.ElementType;
    title: string;
    description: string;
  }>;
}

export function ProductHero3({
  title = "Experience Next-Gen Gaming",
  subtitle = "Immerse yourself in stunning 4K graphics and revolutionary haptic feedback.",
  features = [
    {
      icon: Shield,
      title: "2-Year Warranty",
      description: "Full coverage for peace of mind"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Free shipping worldwide"
    },
    {
      icon: ShoppingBag,
      title: "Easy Returns",
      description: "30-day money-back guarantee"
    }
  ]
}: ProductHero3Props) {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Top Section - Full Width Image */}
      <div className="relative w-full h-[40vh] bg-gray-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1606318801954-d46d46d3360a?auto=format&fit=crop&w=2400&q=80"
          alt="Gaming Console"
          className="w-full h-full object-cover"
        />
        
        {/* Floating Elements - Adjusted z-index and positioning */}
        <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 animate-float z-20">
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
            <div>
              <div className="text-lg font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>

        <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 animate-float animation-delay-200 z-20">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="font-medium text-gray-900">In Stock</span>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>

      {/* Bottom Section - Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
              {subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-400">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Pre-order Now
              </button>
              <button className="px-8 py-4 bg-gray-100 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center">
                <Play className="w-5 h-5 mr-2" fill="currentColor" />
                Watch Trailer
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Price Tag */}
          <div className="mt-12 text-center animate-fade-in-up animation-delay-1000">
            <div className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full">
              <span className="text-sm">Starting at</span>
              <span className="text-2xl font-bold ml-2">$499</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}