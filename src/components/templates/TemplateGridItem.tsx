import React from 'react';
import { Eye, Users, Wrench, ThumbsUp } from 'lucide-react';

interface Template {
  id: string;
  image: string;
  tier: 'basic' | 'intermediate' | 'advanced';
  category: 'product' | 'service' | 'portfolio';
  views: number;
  likes: number;
}

interface TemplateGridItemProps {
  template: Template;
  onCustomize: () => void;
  onPreview: () => void;
}

export function TemplateGridItem({ template, onCustomize, onPreview }: TemplateGridItemProps) {
  const tierColors = {
    basic: 'bg-green-100 text-green-800',
    intermediate: 'bg-blue-100 text-blue-800',
    advanced: 'bg-purple-100 text-purple-800'
  };

  const categoryColors = {
    product: 'bg-orange-100 text-orange-800',
    service: 'bg-pink-100 text-pink-800',
    portfolio: 'bg-indigo-100 text-indigo-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group">
      {/* Image Container */}
      <div className="relative aspect-video">
        <img
          src={template.image}
          alt={`Template ${template.id}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100 gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPreview();
            }}
            className="px-4 py-2 bg-white rounded-lg text-gray-900 flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCustomize();
            }}
            className="px-4 py-2 bg-primary text-white rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
          >
            <Wrench className="w-4 h-4" />
            Customize
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${tierColors[template.tier]}`}>
            {template.tier.charAt(0).toUpperCase() + template.tier.slice(1)}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[template.category]}`}>
            {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Users className="w-4 h-4" />
          <span className="text-sm">{template.views.toLocaleString()}</span>
          <div className="flex items-center gap-1 ml-2">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-sm">{template.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}