import React, { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';

interface PaymentFormProps {
  onComplete: () => void;
}

type PaymentMethod = 'card' | 'paypal' | 'apple-pay' | 'google-pay';

// Custom SVG components for payment methods
const PayPalIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6.5 8c1.5-3 3.5-4 7-4 4 0 5.5 1.5 6.5 4 1.5 3.5-3 4-3 8.5m-10.5-4c1.5-3 3.5-4 7-4 4 0 5.5 1.5 6.5 4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ApplePayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 4c-3.3 0-6 2.7-6 6v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-3.3-2.7-6-6-6zm0 2c2.2 0 4 1.8 4 4v8h-8v-8c0-2.2 1.8-4 4-4z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GooglePayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 12h-6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 9v6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function PaymentForm({ onComplete }: PaymentFormProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('card');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Please accept the terms and conditions to continue');
      return;
    }
    onComplete();
  };

  const handlePaymentMethodClick = (method: PaymentMethod) => {
    setSelectedMethod(method);
    if (method !== 'card') {
      onComplete();
    }
  };

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{4})/g, '$1 ').trim();
  };

  const formatExpiry = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length >= 2) {
      return numbers.slice(0, 2) + '/' + numbers.slice(2, 4);
    }
    return numbers;
  };

  const paymentMethods = [
    {
      id: 'card',
      name: 'Card',
      icon: CreditCard,
      description: 'Pay securely with your credit or debit card'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: PayPalIcon,
      description: 'Fast and secure payment with PayPal'
    },
    {
      id: 'apple-pay',
      name: 'Apple Pay',
      icon: ApplePayIcon,
      description: 'Quick checkout with Apple Pay'
    },
    {
      id: 'google-pay',
      name: 'Google Pay',
      icon: GooglePayIcon,
      description: 'Pay easily with Google Pay'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Complete Your Purchase
        </h2>
        <p className="text-gray-600">
          Choose your preferred payment method
        </p>
      </div>

      {/* Payment Method Selection */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => handlePaymentMethodClick(method.id as PaymentMethod)}
            className={`p-4 border-2 rounded-xl text-left transition-all ${
              selectedMethod === method.id
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/50'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <method.icon className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{method.name}</h3>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedMethod === 'card' && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card number
            </label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.cardNumber}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  cardNumber: formatCardNumber(e.target.value)
                }))}
                maxLength={19}
                className="w-full pl-10 pr-24 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="1234 1234 1234 1234"
                required
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <img src="https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/flat/visa.svg" alt="Visa" className="h-6" />
                <img src="https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/flat/mastercard.svg" alt="Mastercard" className="h-6" />
                <img src="https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/flat/amex.svg" alt="American Express" className="h-6" />
                <img src="https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/flat/diners.svg" alt="Diners Club" className="h-6" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                value={formData.expiry}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  expiry: formatExpiry(e.target.value)
                }))}
                maxLength={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="MM/YY"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVC
              </label>
              <input
                type="text"
                value={formData.cvc}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  cvc: e.target.value.replace(/\D/g, '').slice(0, 3)
                }))}
                maxLength={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="123"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                name: e.target.value
              }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Security Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              <Lock className="w-4 h-4" />
              <span>Your payment is secure and encrypted</span>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  className="text-primary hover:underline"
                >
                  Terms of Service
                </button>
              </label>
            </div>

            <button
              type="submit"
              disabled={!termsAccepted}
              className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Complete Payment
            </button>
          </div>
        </form>
      )}

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Terms of Service</h3>
            <div className="prose prose-sm max-w-none mb-6">
              <h4>1. Introduction</h4>
              <p>
                These Terms of Service govern your use of our landing page builder platform. By using our service, you agree to these terms.
              </p>

              <h4>2. Payment Terms</h4>
              <p>
                All payments are processed securely through our payment providers. Prices are in USD and include applicable taxes.
              </p>

              <h4>3. Refund Policy</h4>
              <p>
                We offer a 30-day money-back guarantee if you're not satisfied with our service.
              </p>

              <h4>4. Usage Rights</h4>
              <p>
                You retain all rights to your content. We grant you a license to use our platform and templates.
              </p>

              <h4>5. Privacy</h4>
              <p>
                Your privacy is important to us. We collect and process data in accordance with our Privacy Policy.
              </p>
            </div>
            <button
              onClick={() => setShowTerms(false)}
              className="w-full px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}