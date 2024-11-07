import React from 'react';
import { ArrowRight, Star, ShoppingCart, Heart, Volume2, Headphones } from 'lucide-react';

interface ProductHero2Props {
  title?: string;
  subtitle?: string;
  price?: string;
  rating?: number;
  reviews?: number;
  image?: string;
}

export function ProductHero2({
  title = "Premium Noise-Cancelling Headphones",
  subtitle = "Immerse yourself in pure audio excellence with our latest noise-cancelling technology.",
  price = "$299.99",
  rating = 4.9,
  reviews = 2453,
  image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
}: ProductHero2Props) {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30 animate-blob animation-delay-400"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium animate-fade-in-up">
              New Release
            </div>

            {/* Title & Description */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight animate-fade-in-up animation-delay-200">
                {title}
              </h1>
              <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-400">
                {subtitle}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 animate-fade-in-up animation-delay-600">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {rating} ({reviews.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 animate-fade-in-up animation-delay-800">
              <span className="text-4xl font-bold text-gray-900">{price}</span>
              <span className="text-xl text-gray-500 line-through">$399.99</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Save 25%
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 animate-fade-in-up animation-delay-1000">
              <button className="flex-1 px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center group">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="p-4 border-2 border-gray-200 text-gray-600 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="lg:w-1/2 relative">
            {/* Main Product Image */}
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-6"></div>
              <img
                src={image}
                alt="Product"
                className="relative rounded-2xl shadow-xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 -right-4 bg-white rounded-xl shadow-lg animate-float">
              <div className="flex items-center justify-center w-14 h-14">
                <div className="absolute w-10 h-10 bg-blue-100 rounded-full"></div>
                <Volume2 className="w-6 h-6 text-blue-600 relative z-10" />
              </div>
            </div>

            <div className="absolute -left-4 bottom-1/4 bg-white rounded-xl shadow-lg animate-float animation-delay-200">
              <div className="flex items-center justify-center w-14 h-14">
                <div className="absolute w-10 h-10 bg-blue-100 rounded-full"></div>
                <Headphones className="w-6 h-6 text-blue-600 relative z-10" />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 left-1/4 w-16 h-16 bg-yellow-200 rounded-full blur-xl opacity-60"></div>
            <div className="absolute -bottom-8 right-1/4 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
