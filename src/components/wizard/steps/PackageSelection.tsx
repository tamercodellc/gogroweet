import React, { useState } from 'react';
import { CheckCircle, X, HelpCircle, ArrowRight, Users, Zap, Crown, RefreshCw } from 'lucide-react';

interface PackageSelectionProps {
  onSelect: (packageName: 'basic' | 'intermediate' | 'advanced') => void;
}

export function PackageSelection({ onSelect }: PackageSelectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showRecommendation, setShowRecommendation] = useState(false);

  const questions = [
    {
      id: 'growth',
      text: 'What are your growth ambitions?',
      options: [
        { 
          value: 'basic',
          label: 'Testing the waters',
          description: 'I want to establish my online presence and start attracting customers'
        },
        { 
          value: 'intermediate',
          label: 'Ready to scale',
          description: 'I want to grow my business with professional tools and analytics'
        },
        { 
          value: 'advanced',
          label: 'Dominate the market',
          description: 'I need enterprise-level features to maximize my market impact'
        }
      ]
    },
    {
      id: 'conversion',
      text: 'How important is conversion optimization?',
      options: [
        { 
          value: 'basic',
          label: 'Basic conversion tracking',
          description: 'I want to track basic metrics and visitor interactions'
        },
        { 
          value: 'intermediate',
          label: 'Enhanced optimization',
          description: 'I need detailed analytics and SEO tools to improve conversions'
        },
        { 
          value: 'advanced',
          label: 'Maximum conversion power',
          description: 'I want A/B testing and advanced optimization tools for peak performance'
        }
      ]
    },
    {
      id: 'customization',
      text: 'What level of customization do you need?',
      options: [
        { 
          value: 'basic',
          label: 'Essential branding',
          description: 'I need basic customization options to match my brand'
        },
        { 
          value: 'intermediate',
          label: 'Professional design',
          description: 'I want advanced design options and more content sections'
        },
        { 
          value: 'advanced',
          label: 'Complete flexibility',
          description: 'I need full creative control and premium design features'
        }
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: answer
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowRecommendation(true);
    }
  };

  const getRecommendedPackage = () => {
    const scores = {
      basic: 0,
      intermediate: 0,
      advanced: 0
    };

    Object.values(answers).forEach(answer => {
      scores[answer as keyof typeof scores]++;
    });

    if (scores.advanced >= 2) return 'advanced';
    if (scores.intermediate >= 2) return 'intermediate';
    return 'basic';
  };

  const packageDetails = {
    basic: {
      icon: Users,
      name: 'Basic',
      price: 'Free',
      features: [
        '5 Essential Sections',
        'Mobile-Responsive Design',
        'WhatsApp Integration',
        'Basic Analytics',
        'Email Support'
      ],
      benefits: 'Perfect for small businesses and entrepreneurs starting their digital journey.'
    },
    intermediate: {
      icon: Zap,
      name: 'Growth',
      price: '$35.99',
      discountedPrice: '$30.59',
      features: [
        '7 Professional Sections',
        'SEO Optimization Tools',
        'Advanced Analytics',
        'Custom Forms & Integration',
        'Priority Support'
      ],
      benefits: 'Ideal for growing businesses ready to scale their online presence.'
    },
    advanced: {
      icon: Crown,
      name: 'Enterprise',
      price: '$69.99',
      discountedPrice: '$59.49',
      features: [
        '9+ Premium Sections',
        'A/B Testing Tools',
        'Advanced Analytics Suite',
        'Custom Integrations',
        'Dedicated Support'
      ],
      benefits: 'For businesses that demand the highest level of features and support.'
    }
  };

  if (showRecommendation) {
    const recommendedPackage = getRecommendedPackage();
    const selectedPackage = packageDetails[recommendedPackage];
    const PackageIcon = selectedPackage.icon;

    return (
      <div className="space-y-8">
        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Your Perfect Match
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {selectedPackage.name} Package
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Based on your goals and needs, we've found the perfect package to help you succeed.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <PackageIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{selectedPackage.name}</h3>
                <div className="flex items-center gap-2">
                  {selectedPackage.discountedPrice ? (
                    <>
                      <span className="text-2xl font-bold text-primary">{selectedPackage.discountedPrice}</span>
                      <span className="text-lg text-gray-400 line-through">{selectedPackage.price}</span>
                      <span className="text-sm text-green-600 font-medium">Save 15%</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-primary">{selectedPackage.price}</span>
                  )}
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-6 italic">
              "{selectedPackage.benefits}"
            </p>

            <div className="space-y-3 mb-8">
              {selectedPackage.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary-green flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <button
                onClick={() => onSelect(recommendedPackage)}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                Get Started with {selectedPackage.name}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <div className="text-center">
                <button
                  onClick={() => {
                    setShowRecommendation(false);
                    setCurrentQuestion(0);
                    setAnswers({});
                  }}
                  className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Not what you're looking for? Start over
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Let's Find Your Perfect Plan
        </h2>
        <p className="text-gray-600">
          Answer a few questions to get a personalized recommendation
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <div className="mt-2 text-sm text-gray-500 text-right">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-gray-900">
              {questions[currentQuestion].text}
            </h3>
          </div>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="w-full p-6 text-left border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-colors group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {option.label}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {option.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>

          {currentQuestion > 0 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setCurrentQuestion(prev => prev - 1)}
                className="text-gray-600 hover:text-primary transition-colors text-sm"
              >
                ← Go back to previous question
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}