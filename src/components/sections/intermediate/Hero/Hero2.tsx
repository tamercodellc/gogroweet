import React from 'react';
import { ArrowRight, Star, Users } from 'lucide-react';

interface Hero2Props {
  title: string;
  subtitle: string;
  stats: Array<{ value: string; label: string }>;
  image?: string;
}

export function Hero2({
  title = "Unlock Your Online Success",
  subtitle = "At KeyAce, our team of experts are the key to unlocking your online potential, ensuring your business shines and reach the highest profits in the digital realm.",
  stats = [
    { value: "2,500+", label: "Respective Clients" },
    { value: "100+", label: "Successful Collabs" },
    { value: "98%", label: "Satisfaction Rate" }
  ],
  image = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
}: Hero2Props) {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-40 animate-blob animation-delay-400"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Section */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium animate-fade-in-up">
              SEO AGENCY
            </div>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight animate-fade-in-up animation-delay-200">
              {title}
            </h1>

            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-400">
              {subtitle}
            </p>

            <div className="flex items-center gap-6 animate-fade-in-up animation-delay-600">
              <button className="px-8 py-4 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-800 transition-colors flex items-center group">
                GET STARTED
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 text-gray-600 hover:text-purple-700 transition-colors flex items-center">
                How We Work
              </button>
            </div>

            <div className="grid grid-cols-3 gap-12 pt-12">
              {stats.map((stat, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${800 + index * 200}ms` }}>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section with Floating Elements */}
          <div className="lg:w-1/2 relative animate-slide-in-right">
            {/* SEO Service Badge */}
            <div className="absolute top-8 right-8 z-20 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg animate-fade-in-up animation-delay-1000">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-purple-700" />
                </div>
                <span className="text-gray-900 font-medium">SEO Service</span>
              </div>
            </div>

            {/* Rating Badge */}
            <div className="absolute top-1/3 -left-12 z-20 bg-white rounded-2xl p-4 shadow-lg animate-fade-in-up animation-delay-1200">
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-gray-900">5.0</div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
                </div>
                <div className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center text-white text-sm">
                  +2
                </div>
              </div>
              <div className="text-sm text-gray-600 mt-1">Reviews</div>
            </div>

            {/* Visitors Stats */}
            <div className="absolute bottom-12 -right-8 z-20 bg-white rounded-2xl p-4 shadow-lg animate-fade-in-up animation-delay-1400">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-purple-700" />
                <span className="text-gray-900 font-medium">Visitors</span>
                <span className="text-green-500 text-sm">+15%</span>
              </div>
              <div className="flex items-end gap-1 h-12">
                {[40, 70, 30, 80, 50, 90, 60].map((height, i) => (
                  <div
                    key={i}
                    className="w-3 bg-purple-200 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={image}
                alt="Professional"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
