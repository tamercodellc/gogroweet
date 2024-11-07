import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface PricingProps {
  onSignInClick: () => void;
}

const pricingTiers = [
  {
    name: 'Basic',
    originalPrice: 'Free',
    discountedPrice: 'Free',
    description: 'Perfect for getting started',
    features: [
      '5 Sections Total',
      'Custom Header and Footer',
      'Call to Action (CTA) to WhatsApp',
      'Basic Design Templates',
      'Standard Support'
    ],
    limitations: [
      'SEO Optimization',
      'Analysis and Conversion Tracking',
      'Integration with Third Party Tools',
      'Lead Capture by Email',
      'A/B Testing',
      'Priority Technical Support'
    ]
  },
  {
    name: 'Intermediate',
    originalPrice: 35.99,
    discountedPrice: (35.99 * 0.85).toFixed(2),
    description: 'Best for growing businesses',
    features: [
      '7 Sections Total',
      'Custom Header and Footer',
      'Call to Action (CTA) to WhatsApp',
      'SEO Optimization',
      'Improved Design',
      'Analysis and Conversion Tracking',
      'Integration with Third Party Tools'
    ],
    limitations: [
      'Lead Capture by Email',
      'Integration with Email Marketing',
      'A/B Testing',
      'Priority Technical Support'
    ]
  },
  {
    name: 'Advanced',
    originalPrice: 69.99,
    discountedPrice: (69.99 * 0.85).toFixed(2),
    description: 'For professional marketers',
    features: [
      '9 Sections Total',
      'Custom Header and Footer',
      'Call to Action (CTA) to WhatsApp',
      'SEO Optimization',
      'Premium Design',
      'Analysis and Conversion Tracking',
      'Integration with Third Party Tools',
      'Lead Capture by Email',
      'Integration with Email Marketing',
      'A/B Testing',
      'Priority Technical Support'
    ],
    limitations: []
  }
];

export function Pricing({ onSignInClick }: PricingProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Perfect Plan</h2>
        <p className="text-xl text-gray-600">
          Select the perfect template package that suits your needs
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Note: Registration is required to access any package.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl shadow-xl bg-white p-8 border-2 ${
              tier.name === 'Intermediate' ? 'border-primary' : 'border-gray-100'
            }`}
          >
            {tier.name === 'Intermediate' && (
              <span className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            )}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <p className="text-gray-600 mb-4">{tier.description}</p>
              <div className="flex items-center justify-center gap-2">
                {tier.originalPrice !== 'Free' && (
                  <>
                    <p className="text-4xl font-bold text-primary">${tier.discountedPrice}</p>
                    <p className="text-2xl text-gray-400 line-through">${tier.originalPrice.toFixed(2)}</p>
                  </>
                )}
                {tier.originalPrice === 'Free' && (
                  <p className="text-4xl font-bold text-gray-900">{tier.originalPrice}</p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {tier.features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-secondary-green mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
              {tier.limitations.map((limitation) => (
                <div key={limitation} className="flex items-center opacity-50">
                  <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{limitation}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onSignInClick}
              className={`w-full mt-8 px-6 py-3 rounded-lg font-medium transition-colors ${
                tier.name === 'Intermediate'
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              Get My Landing Page
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}