import React, { useState } from 'react';
import { TemplateCustomization } from './TemplateCustomization';
import { UserGuide } from './UserGuide';
import { TemplateGridItem } from './TemplateGridItem';
import { ListFilter } from 'lucide-react';
import { BasicTemplate1 } from './basic/Template1';
import { BasicTemplate2 } from './basic/Template2';
import { BasicTemplate3 } from './basic/Template3';
import { Template1 } from './intermediate/Template1';
import { PreviewContainer } from './PreviewContainer';

interface Template {
  id: string;
  image: string;
  tier: 'basic' | 'intermediate' | 'advanced';
  category: 'product' | 'service' | 'portfolio';
  views: number;
  likes: number;
  component?: React.ComponentType;
}

interface TemplateGridProps {
  onTemplateSelect: (template: Template) => void;
}

export function TemplateGrid({ onTemplateSelect }: TemplateGridProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);

  const tiers = ['All', 'Basic', 'Intermediate', 'Advanced'];
  const categories = ['All', 'Product', 'Service', 'Portfolio'];

  const templates: Template[] = [
    // Basic Templates
    {
      id: 'basic-1',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tier: 'basic',
      category: 'product',
      views: 1234,
      likes: 0,
      component: BasicTemplate1
    },
    {
      id: 'basic-2',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      tier: 'basic',
      category: 'service',
      views: 2156,
      likes: 0,
      component: BasicTemplate2
    },
    {
      id: 'basic-3',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=800&q=80',
      tier: 'basic',
      category: 'portfolio',
      views: 1879,
      likes: 0,
      component: BasicTemplate3
    },
    // Intermediate Templates
    {
      id: 'intermediate-1',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80',
      tier: 'intermediate',
      category: 'product',
      views: 3421,
      likes: 0,
      component: Template1
    },
    {
      id: 'intermediate-2',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
      tier: 'intermediate',
      category: 'service',
      views: 2890,
      likes: 0
    },
    {
      id: 'intermediate-3',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tier: 'intermediate',
      category: 'service',
      views: 3156,
      likes: 0
    },
    {
      id: 'intermediate-4',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      tier: 'intermediate',
      category: 'portfolio',
      views: 2567,
      likes: 0
    },
    // Advanced Templates
    {
      id: 'advanced-1',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
      tier: 'advanced',
      category: 'product',
      views: 4532,
      likes: 0
    },
    {
      id: 'advanced-2',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
      tier: 'advanced',
      category: 'product',
      views: 3987,
      likes: 0
    },
    {
      id: 'advanced-3',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tier: 'advanced',
      category: 'service',
      views: 4123,
      likes: 0
    },
    {
      id: 'advanced-4',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      tier: 'advanced',
      category: 'service',
      views: 3765,
      likes: 0
    },
    {
      id: 'advanced-5',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
      tier: 'advanced',
      category: 'portfolio',
      views: 4321,
      likes: 0
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const tierMatch = selectedTier === 'all' || template.tier === selectedTier.toLowerCase();
    const categoryMatch = selectedCategory === 'all' || template.category === selectedCategory.toLowerCase();
    return tierMatch && categoryMatch;
  });

  if (selectedTemplate) {
    return (
      <TemplateCustomization
        template={selectedTemplate}
        onBack={() => setSelectedTemplate(null)}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
      {previewTemplate && previewTemplate.component && (
        <PreviewContainer
          onClose={() => setPreviewTemplate(null)}
          onCustomize={() => {
            setPreviewTemplate(null);
            setSelectedTemplate(previewTemplate);
          }}
        >
          <previewTemplate.component />
        </PreviewContainer>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="mb-8 flex justify-end gap-4">
            <div className="flex items-center gap-2">
              <ListFilter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                {tiers.map(tier => (
                  <option key={tier} value={tier.toLowerCase()}>
                    {tier}
                  </option>
                ))}
              </select>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                {categories.map(category => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredTemplates.map(template => (
              <TemplateGridItem
                key={template.id}
                template={template}
                onCustomize={() => setSelectedTemplate(template)}
                onPreview={() => setPreviewTemplate(template)}
              />
            ))}
          </div>
        </div>

        <div className="lg:w-1/4">
          <UserGuide />
        </div>
      </div>
    </div>
  );
}