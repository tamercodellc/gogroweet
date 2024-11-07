import React from 'react';
import { ArrowRight, Sliders, Star, PenTool, Flag, Heart, BookmarkPlus, Check, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { name: 'facebook', icon: Facebook, href: '#' },
  { name: 'twitter', icon: Twitter, href: '#' },
  { name: 'instagram', icon: Instagram, href: '#' },
  { name: 'linkedin', icon: Linkedin, href: '#' }
];

export function BasicTemplate2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Logo</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-primary">Benefits</a>
              <a href="#dashboard" className="text-gray-600 hover:text-primary">Dashboard</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary">Pricing</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Dynamic Background */}
      <section className="relative pt-20 pb-16 bg-primary/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Let's make project management easy
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90">
                  GET STARTED FREE <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>   
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="p-4 bg-primary/10 rounded-[40px]">
                <div className="h-[400px] w-full bg-gray-300 rounded-lg shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Check Our Features</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of working with our application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sliders, title: 'Flexible Projects' },
              { icon: Star, title: 'Project Timelines' },
              { icon: PenTool, title: 'Tasks & Subtasks' },
              { icon: BookmarkPlus, title: 'Start/End Dates' },
              { icon: Heart, title: 'Real-time Sync' },
              { icon: Flag, title: 'Goal Tracking' }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="p-4 bg-primary/10 rounded-[40px]">
                <div className="h-[400px] w-full bg-gray-300 rounded-lg shadow-md"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Manage All In One Place</h2>
              <p className="text-gray-600 mb-8">
                Streamline your processes with a centralized platform for project management and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="p-4 bg-primary/10 rounded-[40px]">
                <div className="h-[400px] w-full bg-gray-300 rounded-lg shadow-md"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Comprehensive Dashboard</h2>
              <p className="text-gray-600 mb-8">
                Gain insights and track progress with our powerful and intuitive dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-gray-600">Select the perfect package for your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Free', 'Starter', 'Business', 'Enterprise'].map((plan, index) => (
              <div key={plan} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">{plan}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">${index * 29}</span>
                    <span className="text-gray-500 ml-2">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {[1, 2, 3, 4, 5].map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <ArrowRight className="w-5 h-5 text-primary mr-2" />
                        Feature {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <span className="text-lg font-medium text-gray-900">Company</span>
          
          <div className="flex space-x-6">
            {socialLinks.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                className="text-gray-400 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            Developed with ❤️ by Company
          </p>
          
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
      </footer>
    </div>
  );
}
