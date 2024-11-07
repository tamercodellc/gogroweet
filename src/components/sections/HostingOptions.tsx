import React from 'react';
import { Globe, Server, ArrowRight } from 'lucide-react';

export function HostingOptions() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Flexible Hosting Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand that different businesses have different requirements. Explore which type of hosting you should choose to find the perfect option for your landing page.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Instant Deployment Option */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary hover:border-primary/80 transition-colors relative">
            <span className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              Most Popular
            </span>
            <div className="absolute top-0 left-6 -translate-y-1/2 bg-secondary-green text-white px-3 py-1 rounded-full text-sm font-medium">
              Beginner Friendly
            </div>
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Server className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Instant Deployment
            </h3>
            <div className="space-y-4 mb-8">
              <p className="text-gray-600">
                Our hassle-free solution perfect for quick deployment. Ideal if you:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Are new to landing pages and want a simple solution</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Don't want to deal with technical setup and maintenance</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Need your page up and running quickly</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Want automatic updates and security handled for you</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Custom Domain Option */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100 hover:border-primary transition-colors relative">
            <span className="absolute top-0 left-6 -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium">
              Advanced Option
            </span>
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Globe className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Custom Domain
            </h3>
            <div className="space-y-4 mb-8">
              <p className="text-gray-600">
                Full control and customization for experienced users. Best when you:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Already own a domain or are familiar with domain management</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Want complete control over your hosting environment</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Need advanced customization and integration options</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Have technical expertise or development resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}