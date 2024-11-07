import React from 'react';
import { Layout, Briefcase, User, Layers } from 'lucide-react';
import { LandingPageCategory } from '../LandingPageWizard';

interface CategorySelectionProps {
  onSelect: (category: LandingPageCategory) => void;
}

export function CategorySelection({ onSelect }: CategorySelectionProps) {
  const categories = [
    {
      id: 'service',
      icon: Briefcase,
      title: 'Service Landing Page',
      description: 'Perfect for showcasing your professional services and expertise'
    },
    {
      id: 'product',
      icon: Layout,
      title: 'Product Landing Page',
      description: 'Ideal for promoting and selling your products effectively'
    },
    {
      id: 'portfolio',
      icon: User,
      title: 'Portfolio Landing Page',
      description: 'Showcase your work and personal brand professionally'
    },
    {
      id: 'general',
      icon: Layers,
      title: 'General Landing Page',
      description: 'Flexible template for any other type of landing page'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          What type of landing page do you want to create?
        </h2>
        <p className="text-gray-600">
          Choose the category that best fits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelect(category.id as LandingPageCategory)}
            className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-colors text-left group"
          >
            <category.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {category.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {category.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}