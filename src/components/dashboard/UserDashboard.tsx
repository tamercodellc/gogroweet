import React from 'react';
import { Template, User } from '../../types';
import { TemplateCard } from './TemplateCard';
import { Stats } from './Stats';
import { Settings } from './Settings';
import { Layers, Settings as SettingsIcon, BarChart } from 'lucide-react';

interface DashboardProps {
  user: User;
  onTemplateSelect: (template: Template) => void;
}

export function UserDashboard({ user, onTemplateSelect }: DashboardProps) {
  const [activeTab, setActiveTab] = React.useState<'templates' | 'stats' | 'settings'>('templates');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}</h1>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('templates')}
            className={`flex items-center px-4 py-2 rounded-md ${
              activeTab === 'templates'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Layers className="w-4 h-4 mr-2" />
            My Templates
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex items-center px-4 py-2 rounded-md ${
              activeTab === 'stats'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BarChart className="w-4 h-4 mr-2" />
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center px-4 py-2 rounded-md ${
              activeTab === 'settings'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <SettingsIcon className="w-4 h-4 mr-2" />
            Settings
          </button>
        </div>

        {activeTab === 'templates' && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {user.savedTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onSelect={onTemplateSelect}
              />
            ))}
          </div>
        )}

        {activeTab === 'stats' && <Stats user={user} />}
        {activeTab === 'settings' && <Settings user={user} />}
      </div>
    </div>
  );
}