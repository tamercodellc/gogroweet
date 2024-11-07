import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Building2, Package, Target, Users, Mail, Phone, Globe, Palette, Image } from 'lucide-react';

interface TemplateCustomizationProps {
  template: any;
  onBack: () => void;
}

type Step = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

export function TemplateCustomization({ template, onBack }: TemplateCustomizationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    businessInfo: {
      companyName: '',
      industry: '',
      website: ''
    },
    productInfo: {
      name: '',
      description: '',
      keyFeatures: ['', '', ''],
      price: ''
    },
    targetAudience: {
      primaryAudience: '',
      painPoints: '',
      benefits: ''
    },
    contactInfo: {
      email: '',
      phone: '',
      address: ''
    },
    design: {
      primaryColor: '#3C82F5',
      secondaryColor: '#22C55E',
      fontStyle: 'modern'
    }
  });

  const steps: Step[] = [
    {
      id: 'business',
      title: 'Business Information',
      description: 'Tell us about your company',
      icon: Building2
    },
    {
      id: 'product',
      title: 'Product/Service Details',
      description: 'Describe what you\'re offering',
      icon: Package
    },
    {
      id: 'audience',
      title: 'Target Audience',
      description: 'Define who you\'re targeting',
      icon: Target
    },
    {
      id: 'contact',
      title: 'Contact Information',
      description: 'How can customers reach you?',
      icon: Users
    },
    {
      id: 'design',
      title: 'Design Preferences',
      description: 'Customize the look and feel',
      icon: Palette
    }
  ];

  const handleInputChange = (section: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                value={formData.businessInfo.companyName}
                onChange={(e) => handleInputChange('businessInfo', 'companyName', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter your company name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
              <select
                value={formData.businessInfo.industry}
                onChange={(e) => handleInputChange('businessInfo', 'industry', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Select your industry</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="ecommerce">E-commerce</option>
                <option value="finance">Finance</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Website (optional)</label>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="url"
                  value={formData.businessInfo.website}
                  onChange={(e) => handleInputChange('businessInfo', 'website', e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="https://example.com"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product/Service Name</label>
              <input
                type="text"
                value={formData.productInfo.name}
                onChange={(e) => handleInputChange('productInfo', 'name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter product or service name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={formData.productInfo.description}
                onChange={(e) => handleInputChange('productInfo', 'description', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                rows={4}
                placeholder="Describe your product or service"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Key Features</label>
              {formData.productInfo.keyFeatures.map((feature, index) => (
                <input
                  key={index}
                  type="text"
                  value={feature}
                  onChange={(e) => {
                    const newFeatures = [...formData.productInfo.keyFeatures];
                    newFeatures[index] = e.target.value;
                    setFormData(prev => ({
                      ...prev,
                      productInfo: {
                        ...prev.productInfo,
                        keyFeatures: newFeatures
                      }
                    }));
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary mb-2"
                  placeholder={`Feature ${index + 1}`}
                />
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price (optional)</label>
              <input
                type="text"
                value={formData.productInfo.price}
                onChange={(e) => handleInputChange('productInfo', 'price', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter price or price range"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Primary Target Audience</label>
              <input
                type="text"
                value={formData.targetAudience.primaryAudience}
                onChange={(e) => handleInputChange('targetAudience', 'primaryAudience', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Who is your ideal customer?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pain Points</label>
              <textarea
                value={formData.targetAudience.painPoints}
                onChange={(e) => handleInputChange('targetAudience', 'painPoints', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                rows={4}
                placeholder="What problems do they face?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Key Benefits</label>
              <textarea
                value={formData.targetAudience.benefits}
                onChange={(e) => handleInputChange('targetAudience', 'benefits', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                rows={4}
                placeholder="How does your solution help them?"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  value={formData.contactInfo.email}
                  onChange={(e) => handleInputChange('contactInfo', 'email', e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="contact@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (optional)</label>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="tel"
                  value={formData.contactInfo.phone}
                  onChange={(e) => handleInputChange('contactInfo', 'phone', e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Address (optional)</label>
              <textarea
                value={formData.contactInfo.address}
                onChange={(e) => handleInputChange('contactInfo', 'address', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                rows={3}
                placeholder="Enter your business address"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  value={formData.design.primaryColor}
                  onChange={(e) => handleInputChange('design', 'primaryColor', e.target.value)}
                  className="w-16 h-10 rounded cursor-pointer"
                />
                <span className="text-sm text-gray-600">This color will be used for main elements</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Color</label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  value={formData.design.secondaryColor}
                  onChange={(e) => handleInputChange('design', 'secondaryColor', e.target.value)}
                  className="w-16 h-10 rounded cursor-pointer"
                />
                <span className="text-sm text-gray-600">This color will be used for accents</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Font Style</label>
              <select
                value={formData.design.fontStyle}
                onChange={(e) => handleInputChange('design', 'fontStyle', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="modern">Modern</option>
                <option value="classic">Classic</option>
                <option value="playful">Playful</option>
                <option value="minimal">Minimal</option>
              </select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the formData to your backend
    console.log('Form submitted:', formData);
    // For now, let's just show an alert
    alert('Your landing page is being generated! We\'ll notify you when it\'s ready.');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Templates
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Customize Your Template
          </h1>
          <p className="text-gray-600">
            Fill in the details below to customize your landing page
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${
                  index < steps.length - 1 ? 'flex-1' : ''
                }`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    index <= currentStep
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      index < currentStep ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`text-sm ${
                  index <= currentStep ? 'text-primary' : 'text-gray-400'
                }`}
                style={{ width: '20%', textAlign: 'center' }}
              >
                {step.title}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mb-8">
          <button
            onClick={() => setCurrentStep(prev => prev - 1)}
            className={`px-6 py-3 rounded-lg flex items-center ${
              currentStep === 0
                ? 'invisible'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </button>
          <button
            onClick={() => {
              if (currentStep === steps.length - 1) {
                handleSubmit();
              } else {
                setCurrentStep(prev => prev + 1);
              }
            }}
            className="px-6 py-3 bg-primary text-white rounded-lg flex items-center hover:bg-primary/90"
          >
            {currentStep === steps.length - 1 ? 'Generate Landing Page' : 'Next'}
            {currentStep !== steps.length - 1 && <ArrowRight className="w-4 h-4 ml-2" />}
          </button>
        </div>
      </div>
    </div>
  );
}