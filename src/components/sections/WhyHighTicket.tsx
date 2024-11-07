import React from 'react';
import { Percent, Target, Users, Rocket } from 'lucide-react';

const stats = [
  {
    icon: Percent,
    value: '-50%',
    label: 'Cost per Conversion',
    description: 'Reduction in cost per conversion for PPC campaigns with dedicated landing pages',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    icon: Target,
    value: '+30%',
    label: 'Lead Quality',
    description: 'Higher quality leads generated through optimized landing page forms',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    icon: Users,
    value: '+70%',
    label: 'Retargeting Success',
    description: 'Higher success rate in retargeting campaigns focused on landing page visitors',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    icon: Rocket,
    value: '7x',
    label: 'Lead Generation',
    description: 'Companies with more than 30 landing pages see 7x more leads than those with fewer than 10',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  }
];

export function WhyHighTicket() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why High-Ticket Funnels Are Your Key to Success
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with proven strategies that deliver exceptional results
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {stats.map((stat) => (
          <div key={stat.value} className="bg-white rounded-lg p-8 text-center shadow-lg">
            <div className="flex justify-center mb-4">
              <div className={`${stat.bgColor} p-4 rounded-full`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-lg font-medium text-gray-900 mb-2">{stat.label}</div>
            <div className="text-sm text-gray-600">{stat.description}</div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors group">
          Are You Ready? We are
          <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}