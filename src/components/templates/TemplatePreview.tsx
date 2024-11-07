import React from 'react';
import { Template } from '../../types';

interface TemplatePreviewProps {
  template: Template;
  content: Template['content'];
}

export function TemplatePreview({ template, content }: TemplatePreviewProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={template.preview}
          alt={template.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">{content.headline}</h1>
            <p className="text-xl text-white mb-8">{content.subheadline}</p>
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="prose max-w-none">
          <p className="text-gray-600 text-lg">{content.body}</p>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {template.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {/* Feature icon would go here */}
                  {index + 1}
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{feature}</h3>
                <p className="mt-2 text-base text-gray-500">
                  Feature description would go here. This is a placeholder text.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers who have chosen our solution.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}