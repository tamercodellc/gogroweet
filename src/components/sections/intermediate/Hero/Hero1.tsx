import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface Hero1Props {
  title?: string;
  subtitle?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export function Hero1({
  title = "Transform Your Digital Presence",
  subtitle = "Join our platform and transform your business aspirations into achievements, starting today.",
  stats = [
    { value: "20k+", label: "Users" },
    { value: "108k", label: "Sales" },
    { value: "723", label: "Projects" }
  ]
}: Hero1Props) {
  return (
    <section className="bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Top Content Box with added mb-6 */}
          <div className="bg-emerald-800 rounded-[25px] p-8 text-white mb-6">
            <div className="mb-4">
              <span className="text-sm">Online Platform</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">
              {title}
            </h1>
            
            <p className="text-lg text-emerald-100 mb-6 animate-fade-in-up animation-delay-200">
              {subtitle}
            </p>
            
            <button className="px-6 py-3 bg-orange-500 rounded-full text-white font-medium hover:bg-orange-600 transition-colors flex items-center group animate-fade-in-up animation-delay-400">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Bottom Stats Grid */}
          <div className="grid grid-cols-2 gap-6 ">
            {/* Stats Box */}
            <div className="bg-emerald-50 rounded-[25px] p-6 relative overflow-hidden">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    #d1e7dd,
                    #d1e7dd 10px,
                    #f0fdf4 10px,
                    #f0fdf4 20px
                  )`,
                  opacity: 0.3,
                  zIndex: 0
                }}
              />
              <div className="grid grid-cols-3 gap-4 relative z-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-600">Metric</p> {/* Simplified label */}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Box */}
            <div className="bg-emerald-50 rounded-[25px] p-6 relative overflow-hidden">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    #d1e7dd,
                    #d1e7dd 10px,
                    #f0fdf4 10px,
                    #f0fdf4 20px
                  )`,
                  opacity: 0.3,
                  zIndex: 0
                }}
              />
              <div className="flex items-center gap-4 relative z-10">
                <div>
                  <div className="text-xl font-bold text-gray-900">4.9</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-3 h-3 text-yellow-400 fill-yellow-400" 
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((avatar) => (
                      <div
                        key={avatar}
                        className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"
                      />
                    ))}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    100k+ Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image Box */}
        <div className="bg-white rounded-[25px] overflow-hidden relative h-[400px] lg:h-[500px]">
          {/* Diagonal Stripes Background */}
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #f0f0f0,
                #f0f0f0 10px,
                #ffffff 10px,
                #ffffff 20px
              )`
            }}
          />
          
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
            alt="Professional"
            className="w-full h-full object-cover relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
