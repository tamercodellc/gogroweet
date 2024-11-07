import React from 'react';
import { Blocks, Wand2 } from 'lucide-react';
import { StructureOption } from '../LandingPageWizard';

interface StructureSelectionProps {
  onSelect: (option: StructureOption) => void;
}

export function StructureSelection({ onSelect }: StructureSelectionProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          How would you like to build your landing page?
        </h2>
        <p className="text-gray-600">
          Choose how you want to structure your landing page
        </p>
      </div>

      <div className="grid gap-6">
        <button
          onClick={() => onSelect('choose')}
          className="flex items-center p-8 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-colors text-left group"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-6">
            <Blocks className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              I'll Choose My Structure
            </h3>
            <p className="text-gray-600">
              Select and customize each section of your landing page from our pre-designed templates. 
              Perfect if you have a specific vision in mind.
            </p>
          </div>
        </button>

        <button
          onClick={() => onSelect('generate')}
          className="flex items-center p-8 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-colors text-left group"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-6">
            <Wand2 className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Generate It For Me
            </h3>
            <p className="text-gray-600">
              Let us create the perfect structure based on your needs and industry best practices. 
              Ideal if you want expert guidance and quick results.
            </p>
          </div>
        </button>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        Don't worry, you'll be able to customize everything later!
      </div>
    </div>
  );
}