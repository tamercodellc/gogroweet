import React from 'react';
import { User } from '../../types';
import { ImageUpload } from '../shared/ImageUpload';

interface SettingsProps {
  user: User;
}

export function Settings({ user }: SettingsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Account Settings</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Image</label>
            <ImageUpload
              onUpload={(url) => console.log('Image uploaded:', url)}
              className="mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              defaultValue={user.name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              defaultValue={user.email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Email Notifications</h3>
            <div className="space-y-2">
              {['Weekly reports', 'New features', 'Template updates'].map((item) => (
                <label key={item} className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}