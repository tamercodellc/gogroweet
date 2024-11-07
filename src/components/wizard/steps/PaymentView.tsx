import React from 'react';
import { Package } from '../LandingPageWizard';
import { PaymentForm } from './PaymentForm';

interface PaymentViewProps {
  selectedPackage: Package;
  onComplete: () => void;
}

export function PaymentView({ selectedPackage, onComplete }: PaymentViewProps) {
  const packageDetails = {
    intermediate: {
      name: 'Growth',
      price: '$35.99',
      discountedPrice: '$30.59',
      features: [
        '7 Professional Sections',
        'SEO Optimization Tools',
        'Advanced Analytics',
        'Custom Forms & Integration',
        'Priority Support'
      ]
    },
    advanced: {
      name: 'Enterprise',
      price: '$69.99',
      discountedPrice: '$59.49',
      features: [
        '9+ Premium Sections',
        'A/B Testing Tools',
        'Advanced Analytics Suite',
        'Custom Integrations',
        'Dedicated Support'
      ]
    }
  };

  const details = packageDetails[selectedPackage];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Complete Your Purchase
        </h2>
        <p className="text-gray-600">
          You're just one step away from creating your perfect landing page
        </p>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Order Summary
        </h3>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="font-medium text-gray-900">{details.name} Package</h4>
            <p className="text-sm text-gray-600">Annual subscription</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-primary">{details.discountedPrice}</p>
            <p className="text-sm text-gray-500 line-through">{details.price}</p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900">{details.price}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Discount (15%)</span>
            <span className="text-green-600">-${(parseFloat(details.price.slice(1)) * 0.15).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-medium mt-4 pt-4 border-t border-gray-200">
            <span>Total</span>
            <span className="text-lg text-primary">{details.discountedPrice}</span>
          </div>
        </div>
      </div>

      {/* Payment Form */}
      <PaymentForm onComplete={onComplete} />
    </div>
  );
}