import React, { useState } from 'react';
import { Wand2, ListChecks, AlertCircle } from 'lucide-react';
import { GenerationOption } from '../LandingPageWizard';

interface GenerationMethodProps {
  onSelect: (method: GenerationOption, options?: { generateContent: boolean; generateImages: boolean }) => void;
}

export function GenerationMethod({ onSelect }: GenerationMethodProps) {
  const [generateContent, setGenerateContent] = useState(false);
  const [generateImages, setGenerateImages] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleAutomaticSelect = () => {
    if (!generateContent && !generateImages) {
      setShowError(true);
      return;
    }
    setShowError(false);
    onSelect('automatic', { generateContent, generateImages });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Choose Your Creation Method
        </h2>
        <p className="text-gray-600">
          Select how you'd like to build your landing page
        </p>
      </div>

      <div className="grid gap-6">
        {/* Automatic Generation Option */}
        <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Wand2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Automatic Generation
              </h3>
              <p className="text-gray-600 text-sm">
                Let AI help you create your landing page content
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={generateContent}
                onChange={(e) => {
                  setGenerateContent(e.target.checked);
                  setShowError(false);
                }}
                className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="text-gray-700">Generate content with AI</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={generateImages}
                onChange={(e) => {
                  setGenerateImages(e.target.checked);
                  setShowError(false);
                }}
                className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="text-gray-700">Generate images with AI</span>
            </label>

            {showError && (
              <div className="flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>Please select at least one generation option</span>
              </div>
            )}
          </div>

          <button
            onClick={handleAutomaticSelect}
            className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
          >
            Continue with Automatic Generation
          </button>
        </div>

        {/* Manual Selection Option */}
        <button
          onClick={() => onSelect('step-by-step')}
          className="flex items-center p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-colors text-left group"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-6">
            <ListChecks className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Step by Step Creation
            </h3>
            <p className="text-gray-600 text-sm">
              Create your landing page with guided assistance at each step
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}