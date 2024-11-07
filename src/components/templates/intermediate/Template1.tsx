import React from 'react';
import { ArrowRight, Star, ShoppingCart, Package, Truck, Shield } from 'lucide-react';

export function Template1() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Logo</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary">Features</a>
              <a href="#specs" className="text-gray-600 hover:text-primary">Specs</a>
              <a href="#gallery" className="text-gray-600 hover:text-primary">Gallery</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary">Pricing</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Curved Background */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNTAwVjBoMTQ0MHY1MDBjLTI4OS44MzMtMTY2LjY2Ny04NzkuODMzLTE2Ni42NjctMTQ0MCAweiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] bg-bottom bg-no-repeat"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48">
          <div className="relative z-10">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                🎉 Special Launch Discount - 20% OFF
              </span>
              <h1 className="text-5xl font-bold text-white mb-6">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors">
                Shop Now <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="aspect-[16/9] bg-gray-200 rounded-lg shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: 'Premium Quality' },
              { icon: ShoppingCart, title: 'Fast Shipping' },
              { icon: Package, title: 'Easy Returns' },
              { icon: Shield, title: 'Secure Payment' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Product Features</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-primary font-semibold">{item}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Feature {item}</h3>
                      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Product Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-video bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '630+', label: 'Happy Customers' },
              { value: '254', label: 'Products Sold' },
              { value: '547', label: '5-Star Reviews' },
              { value: '387', label: 'Support Cases' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Standard', 'Premium', 'Ultimate'].map((plan, index) => (
              <div key={plan} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">{plan}</h3>
                <div className="text-4xl font-bold mb-6">${(index + 1) * 99}</div>
                <ul className="space-y-3 mb-8">
                  {[1, 2, 3, 4, 5].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-primary mr-2" />
                      <span>Feature {feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for updates and exclusive offers
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-xl font-bold mb-4">Logo</div>
            <p className="text-gray-600 mb-4">© {new Date().getFullYear()} All rights reserved</p>
            <div className="flex justify-center space-x-6">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-primary">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}