import React from 'react';

export function Features() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features to help you build high-converting landing pages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Custom Design',
              description: 'Fully customizable templates that match your brand identity',
            },
            {
              title: 'SEO Optimization',
              description: 'Built-in SEO tools to help you rank higher in search results',
            },
            {
              title: 'Analytics Integration',
              description: 'Track your performance with detailed analytics and insights',
            },
            {
              title: 'A/B Testing',
              description: 'Test different versions to optimize your conversion rates',
            },
            {
              title: 'Lead Generation',
              description: 'Built-in forms and tools to capture and manage leads',
            },
            {
              title: 'Third-Party Integration',
              description: 'Connect with your favorite marketing and analytics tools',
            },
          ].map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}