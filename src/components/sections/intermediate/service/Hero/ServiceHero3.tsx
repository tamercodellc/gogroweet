import React from 'react';
import { ArrowRight, Star, Shield, Sparkles } from 'lucide-react';

interface ServiceHero3Props {
  title?: string;
  subtitle?: string;
  features?: Array<{
    icon: React.ElementType;
    title: string;
  }>;
}

export function ServiceHero3({
  title = "Branding and Digital Design Agency",
  subtitle = "We create stunning digital experiences that drive growth and engagement.",
  features = [
    { icon: Star, title: "Award-winning designs" },
    { icon: Shield, title: "Trusted by top brands" },
    { icon: Sparkles, title: "Innovative solutions" }
  ]
}: ServiceHero3Props) {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Yellow accent */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-yellow-400"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="text-sm tracking-wider text-gray-600 uppercase animate-fade-in-up">
              BRANDING/DIGITAL/DESIGN/AGENCY
            </div>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight animate-fade-in-up animation-delay-200">
              {title}
            </h1>

            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-400">
              {subtitle}
            </p>

            <div className="flex gap-6 animate-fade-in-up animation-delay-600">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-none font-medium hover:bg-gray-800 transition-colors flex items-center group">
                Start Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <feature.icon className="w-8 h-8 text-yellow-400 mb-3" />
                  <p className="text-sm font-medium text-gray-900">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-20 animate-fade-in-up animation-delay-200">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                  alt="Professional"
                  className="w-full h-auto"
                />
              </div>

              {/* Yellow Frame */}
              <div className="absolute -top-4 -right-4 -bottom-4 -left-4 border-8 border-yellow-400 z-10"></div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 bg-white p-4 shadow-lg z-30 animate-float">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="font-medium">Featured Work</span>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white p-4 shadow-lg z-30 animate-float animation-delay-200">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-yellow-400" />
                  <span className="font-medium">Trusted Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
