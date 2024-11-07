import React from 'react';
import { User } from '../../types';
import { LineChart, Users, Eye, MousePointer } from 'lucide-react';

interface StatsProps {
  user: User;
}

export function Stats({ user }: StatsProps) {
  const stats = [
    {
      name: 'Total Views',
      value: '12.5K',
      change: '+12%',
      icon: Eye,
    },
    {
      name: 'Unique Visitors',
      value: '8.2K',
      change: '+8%',
      icon: Users,
    },
    {
      name: 'Click Rate',
      value: '3.8%',
      change: '+2%',
      icon: MousePointer,
    },
    {
      name: 'Conversions',
      value: '2.4K',
      change: '+15%',
      icon: LineChart,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="ml-2 text-sm font-medium text-green-600">{stat.change}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add charts and detailed analytics here */}
    </div>
  );
}