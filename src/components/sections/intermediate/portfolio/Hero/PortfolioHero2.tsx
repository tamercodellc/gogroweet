import React from 'react';
import { ArrowRight, Star, Code, Palette, Layout } from 'lucide-react';

interface PortfolioHero2Props {
  name?: string;
  title?: string;
  description?: string;
  skills?: Array<{
    icon: React.ElementType;
    name: string;
  }>;
}

export function PortfolioHero2({
  name = "Sarah Anderson",
  title = "Creative Developer",
  description = "Crafting digital experiences that blend innovative design with cutting-edge technology.",
  skills = [
    { icon: Code, name: "Frontend Development" },
    { icon: Palette, name: "UI/UX Design" },
    { icon: Layout, name: "Web Design" }
  ]
}: PortfolioHero2Props) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] bg-center opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium animate-fade-in-up">
              Portfolio 2024
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight animate-fade-in-up animation-delay-200">
                Hi, I'm {name}
              </h1>
              <h2 className="text-3xl font-bold text-blue-400 animate-fade-in-up animation-delay-400">
                {title}
              </h2>
              <p className="text-xl text-gray-300 animate-fade-in-up animation-delay-600">
                {description}
              </p>
            </div>

            <div className="flex gap-4 animate-fade-in-up animation-delay-800">
              <button className="px-8 py-4 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center group">
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 rounded-lg font-medium hover:bg-white/20 transition-colors">
                Contact Me
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: `${1000 + index * 200}ms` }}
                >
                  <skill.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <p className="font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Creative Showcase */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden animate-fade-in-up animation-delay-200">
                <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                    alt="Portfolio"
                    className="w-full h-full object-cover rounded-xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Floating Elements - Updated with dark background */}
              <div className="absolute top-8 -right-4 bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float z-30">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-medium">Available for Work</span>
                </div>
              </div>

              <div className="absolute -left-4 bottom-8 bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float animation-delay-200 z-30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-white font-medium">Online Now</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 left-1/4 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 right-1/4 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
