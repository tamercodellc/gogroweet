import React from 'react';
import { Play, Users, MessageCircle } from 'lucide-react';

interface ServiceHero1Props {
  title?: string;
  subtitle?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export function ServiceHero1({
  title = "Let's Conduct a Meeting Only in One-Click!",
  subtitle = "It's time to make your virtual meeting conveniently without any worry. Get to know how it works from the video below!",
  stats = [
    { value: "2M+", label: "Active Users" },
    { value: "150+", label: "Countries" },
    { value: "4.9", label: "Rating" }
  ]
}: ServiceHero1Props) {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 animate-fade-in-up">
              {title}
            </h1>
            
            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                Try for Free
              </button>
              <button className="px-8 py-3 flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Play className="w-5 h-5" fill="currentColor" />
                Watch Video
              </button>
            </div>

            <div className="flex gap-8 pt-8 animate-fade-in-up animation-delay-600">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Meeting Grid */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Meeting Window */}
              <div className="col-span-2 bg-white rounded-2xl shadow-lg p-4 animate-fade-in-up animation-delay-200">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4"></div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full"></div>
                  <div>
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    <div className="h-3 w-16 bg-gray-100 rounded mt-1"></div>
                  </div>
                </div>
              </div>

              {/* Participant Windows */}
              {[1, 2].map((item) => (
                <div 
                  key={item}
                  className={`bg-white rounded-2xl shadow-lg p-4 animate-fade-in-up`}
                  style={{ animationDelay: `${400 + item * 200}ms` }}
                >
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}

              {/* Floating Elements */}
              <div className="absolute -right-4 top-1/4 bg-white rounded-xl shadow-lg p-3 animate-float">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="absolute -left-4 bottom-1/4 bg-white rounded-xl shadow-lg p-3 animate-float animation-delay-200">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}