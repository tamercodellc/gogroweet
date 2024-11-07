import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

interface PortfolioHeroProps {
  name: string;
  title: string;
  description: string;
  image: string;
  resumeLink: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export function PortfolioHero1({
  name = "John Doe",
  title = "Creative Developer & Designer",
  description = "Crafting digital experiences with a focus on user-centered design and cutting-edge technology.",
  image = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  resumeLink = "#",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:example@email.com"
  }
}: PortfolioHeroProps) {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              👋 Welcome to my portfolio
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Hi, I'm {name}
            </h1>
            
            <h2 className="text-3xl font-bold text-primary">
              {title}
            </h2>
            
            <p className="text-xl text-gray-600">
              {description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={resumeLink}
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
              
              <div className="flex gap-4">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                )}
                
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </a>
                )}
                
                {socialLinks.email && (
                  <a
                    href={socialLinks.email}
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-gray-700" />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary-green/20 rounded-full blur-3xl"></div>
              <div className="relative w-[400px] h-[400px] mx-auto rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}