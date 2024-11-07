import React from 'react';
import { ArrowRight, Download, Star } from 'lucide-react';

interface PortfolioHero2Props {
  name: string;
  role: string;
  specialties: string[];
  availability: string;
  image: string;
  backgroundImage: string;
}

export function PortfolioHero2({
  name = "Sarah Johnson",
  role = "UI/UX Designer",
  specialties = ["Web Design", "Mobile Apps", "Brand Identity"],
  availability = "Available for freelance",
  image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  backgroundImage = "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80"
}: PortfolioHero2Props) {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              {availability}
            </div>
            
            <h1 className="text-5xl font-bold text-white">
              {name}
            </h1>
            
            <h2 className="text-3xl font-bold text-primary">
              {role}
            </h2>

            <div className="flex flex-wrap gap-3">
              {specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>

            <div className="pt-4 flex gap-4">
              <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center">
                View Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary-green/20 rounded-full blur-3xl"></div>
              <div className="relative w-[400px] h-[400px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary-green rounded-full opacity-20 animate-pulse"></div>
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover rounded-full border-8 border-white/10"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-green/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}