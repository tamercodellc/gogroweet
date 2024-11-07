import React from 'react';
import { Play, Monitor, Diamond, MapPin, Command, ArrowRight, Check, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

 const socialLinks = [
    { name: 'facebook', icon: Facebook, href: '#' },
    { name: 'twitter', icon: Twitter, href: '#' },
    { name: 'instagram', icon: Instagram, href: '#' },
    { name: 'linkedin', icon: Linkedin, href: '#' }
  ];

export function BasicTemplate1() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Logo</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#choose-us" className="text-gray-600 hover:text-gray-900">Choose Us</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90">
                  Get Started
                </button>
                <button className="px-8 py-4 flex items-center text-gray-700 hover:text-gray-900">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Video
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-full h-[400px] bg-gray-200 rounded-lg"></div>
                {/* Decorative elements */}
                <div className="absolute -right-4 top-4 w-24 h-24 bg-primary/10 rounded-lg"></div>
                <div className="absolute -left-4 bottom-4 w-16 h-16 bg-secondary-green/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Monitor, title: 'Lorem Ipsum' },
              { icon: Diamond, title: 'Sed ut perspiciatis' },
              { icon: MapPin, title: 'Magni Dolores' },
              { icon: Command, title: 'Nemo Enim' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Images */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="text-sm font-medium text-primary mb-2">WHO WE ARE</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Unleashing Potential with Creative Strategy
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
              <ul className="space-y-4 mb-8">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gray-200 rounded-lg"></div>
                <div className="h-48 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 bg-gray-200 rounded-lg"></div>
                <div className="h-48 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-medium text-primary mb-2">FEATURES</div>
            <h2 className="text-3xl font-bold">Check Our Features</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-full h-[400px] bg-gray-200 rounded-lg"></div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white p-4 rounded-lg shadow-sm">
                  <Check className="w-5 h-5 text-primary mb-2" />
                  <p className="font-medium">Feature {item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section id="choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Command className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Engagement {item}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Style 1 */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-medium text-primary mb-2">PRICING</div>
            <h2 className="text-3xl font-bold">Check Our Pricing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Free', 'Starter', 'Business', 'Ultimate'].map((plan, index) => (
              <div key={plan} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4">{plan}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">${index * 19}</span>
                    <span className="text-gray-500 ml-2">/mo</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[1, 2, 3, 4, 5].map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-primary mr-2" />
                        Feature {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2 px-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Pricing Section - Style 2 */}
      <section className="py-20 bg-white hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-full h-[400px] bg-gray-200 rounded-lg"></div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Premium Package</h2>
              <div className="text-4xl font-bold mb-6">$99<span className="text-xl text-gray-500">/mo</span></div>
              <ul className="space-y-4 mb-8">
                {[1, 2, 3, 4].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-600">Premium Feature {feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-primary text-white rounded-lg hover:bg-primary/90">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center">
            <span className="ml-2 text-lg font-medium text-gray-900">Company</span>
          </div>
          
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