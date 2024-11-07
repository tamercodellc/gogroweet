import React from 'react';
import { Wand2, PenTool } from 'lucide-react';

interface ContentPreferenceProps {
  onSelect: (preference: 'automatic' | 'manual') => void;
}

export function ContentPreference({ onSelect }: ContentPreferenceProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          How would you like to handle the content?
        </h2>
        <p className="text-gray-600">
          Choose how you want to populate your landing page content
        </p>
      </div>

      <div className="grid gap-4">
        <button
          onClick={() => onSelect('automatic')}
          className="flex items-center p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-colors text-left group"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-6">
            <Wand2 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              AI-Generated Content
            </h3>
            <p className="text-gray-600 text-sm">
              Let AI create professional content based on your information
            </p>
          </div>
        </button>

        <button
          onClick={() => onSelect('manual')}
          className="flex items-center p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-colors text-left group"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-6">
            <PenTool className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Write My Own Content
            </h3>
            <p className="text-gray-600 text-sm">
              Manually write and customize all content sections
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}