import React from 'react';
import { ArrowRight, Star, Code, Palette, Layout } from 'lucide-react';

interface PortfolioHero3Props {
  name?: string;
  title?: string;
  description?: string;
  projects?: Array<{
    title: string;
    image: string;
  }>;
}

export function PortfolioHero3({
  name = "Alex Morgan",
  title = "Digital Artist & Designer",
  description = "Creating meaningful digital experiences through innovative design and creative solutions.",
  projects = [
    {
      title: "Brand Identity",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Web Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=800&q=80"
    }
  ]
}: PortfolioHero3Props) {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium animate-fade-in-up">
              Available for Projects
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight animate-fade-in-up animation-delay-200">
                {name}
              </h1>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-400">
                {title}
              </h2>
              <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-600">
                {description}
              </p>
            </div>

            <div className="flex gap-4 animate-fade-in-up animation-delay-800">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center group">
                View Portfolio
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Contact Me
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-up animation-delay-1000">
              {[
                { value: "7+", label: "Years Experience" },
                { value: "50+", label: "Projects Done" },
                { value: "30+", label: "Happy Clients" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Project Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`relative group overflow-hidden rounded-xl ${
                    index === 2 ? 'col-span-2' : ''
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${1200 + index * 200}ms` }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-medium">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-float">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Featured Work</span>
              </div>
            </div>

            <div className="absolute bottom-12 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float animation-delay-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Available for Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
