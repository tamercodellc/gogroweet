import React, { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { Template } from '../types';

interface TemplateEditorProps {
  template: Template;
  onBack: () => void;
}

export function TemplateEditor({ template, onBack }: TemplateEditorProps) {
  const [editableContent, setEditableContent] = useState(template.content);

  return (
    <div className="h-screen flex">
      {/* Editor Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Templates
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="text-lg font-semibold mb-4">Edit Content</h2>
          <div className="space-y-4">
            {Object.entries(editableContent).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <textarea
                  value={value as string}
                  onChange={(e) =>
                    setEditableContent((prev) => ({
                      ...prev,
                      [key]: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  rows={3}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </div>
      </div>

      {/* Preview Panel */}
      <div className="flex-1 bg-gray-100 overflow-y-auto">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Dynamic template preview will be rendered here */}
            <h1 className="text-4xl font-bold mb-6">{editableContent.headline}</h1>
            <p className="text-xl text-gray-600 mb-8">{editableContent.subheadline}</p>
            <div className="prose max-w-none">{editableContent.body}</div>
          </div>
        </div>
      </div>
    </div>
  );
}