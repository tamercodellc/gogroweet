import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductHeroProps {
  productName: string;
  description: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  image: string;
  features: string[];
}

export function ProductHero1({
  productName = "Premium Wireless Headphones",
  description = "Experience crystal-clear sound quality with our latest noise-cancelling technology.",
  price = "$299",
  originalPrice = "$399",
  rating = 4.8,
  reviews = 2456,
  image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  features = [
    "Active Noise Cancellation",
    "40h Battery Life",
    "Premium Sound Quality"
  ]
}: ProductHeroProps) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary-green/5 rounded-3xl transform rotate-3"></div>
              <img
                src={image}
                alt={productName}
                className="relative rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {rating} ({reviews.toLocaleString()} reviews)
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900">
              {productName}
            </h1>
            
            <p className="text-xl text-gray-600">
              {description}
            </p>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-gray-900">{price}</span>
              {originalPrice && (
                <span className="text-2xl text-gray-400 line-through">
                  {originalPrice}
                </span>
              )}
            </div>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button className="flex-1 px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}