import React from 'react';
import { LandingPageCategory } from '../LandingPageWizard';
import { Eye, Wrench, Star } from 'lucide-react';

interface TemplateSelectionProps {
  category?: LandingPageCategory;
  onSelect: (templateId: string) => void;
}

export function TemplateSelection({ category, onSelect }: TemplateSelectionProps) {
  // Filter templates based on category
  const templates = [
    {
      id: 'service-1',
      name: 'Professional Service',
      description: 'Clean and modern design for service-based businesses',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      category: 'service',
      features: ['Hero Section', 'Service List', 'Testimonials', 'Contact Form']
    },
    {
      id: 'product-1',
      name: 'Product Showcase',
      description: 'Highlight your product features and benefits',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      category: 'product',
      features: ['Product Gallery', 'Features List', 'Pricing Table', 'Reviews']
    },
    {
      id: 'portfolio-1',
      name: 'Creative Portfolio',
      description: 'Showcase your work and expertise',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      category: 'portfolio',
      features: ['Project Gallery', 'Skills Section', 'Experience Timeline', 'Contact Info']
    },
    {
      id: 'general-1',
      name: 'Multipurpose Landing',
      description: 'Versatile design for any purpose',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      category: 'general',
      features: ['Flexible Sections', 'Call to Action', 'Statistics', 'Contact Form']
    }
  ].filter(template => !category || template.category === category);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Choose Your Template
        </h2>
        <p className="text-gray-600">
          Select a template that best fits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary hover:shadow-lg transition-all group"
          >
            {/* Template Preview */}
            <div className="relative aspect-video">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100 gap-4">
                <button
                  onClick={() => onSelect(template.id)}
                  className="px-4 py-2 bg-primary text-white rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <Wrench className="w-4 h-4" />
                  Customize
                </button>
                <button className="px-4 py-2 bg-white text-gray-900 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
              </div>
            </div>

            {/* Template Info */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {template.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {template.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {template.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 text-primary mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}