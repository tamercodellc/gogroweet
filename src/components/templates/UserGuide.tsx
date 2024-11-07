import React from 'react';
import { BookOpen, Lightbulb, Pencil, Rocket, Zap } from 'lucide-react';

export function UserGuide() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Choose Your Template',
      description: 'Browse our collection and find the perfect template for your needs'
    },
    {
      icon: Rocket,
      title: 'Set Your Information',
      description: 'Fill in your business details and requirements to get started'
    },
    {
      icon: Pencil,
      title: 'Customize',
      description: 'Easily modify colors, content, and layout to match your brand'
    },
    {
      icon: Zap,
      title: 'Launch',
      description: 'Publish your landing page and start converting visitors'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold text-gray-900">Quick Start Guide</h2>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon className="w-4 h-4 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-primary/5 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Our support team is here to help you create the perfect landing page.
        </p>
        <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );
}