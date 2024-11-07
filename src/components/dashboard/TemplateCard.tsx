import React from 'react';
import { Template } from '../../types';
import { Edit2, Trash2 } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
  onSelect: (template: Template) => void;
}

export function TemplateCard({ template, onSelect }: TemplateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 relative group">
        <img
          src={template.preview}
          alt={template.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <button
              onClick={() => onSelect(template)}
              className="p-2 bg-white rounded-full text-gray-700 hover:text-indigo-600"
            >
              <Edit2 className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white rounded-full text-gray-700 hover:text-red-600">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">{template.name}</h3>
        <p className="text-sm text-gray-500 mt-1">Last edited 2 days ago</p>
      </div>
    </div>
  );
}