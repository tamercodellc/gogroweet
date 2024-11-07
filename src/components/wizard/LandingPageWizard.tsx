import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { PackageSelection } from './steps/PackageSelection';
import { BasicDetailsForm } from './steps/forms/BasicDetailsForm';
import { StructureSelection } from './steps/StructureSelection';
import { GenerationMethod } from './steps/GenerationMethod';
import { ServiceForm } from './steps/forms/ServiceForm';
import { ProductForm } from './steps/forms/ProductForm';
import { PortfolioForm } from './steps/forms/PortfolioForm';
import { PaymentView } from './steps/PaymentView';
import { TemplateGrid } from '../templates/TemplateGrid';

export type WizardStep = 
  | 'package-selection'
  | 'basic-details'
  | 'structure-selection'
  | 'generation-method'
  | 'service-form'
  | 'product-form'
  | 'portfolio-form'
  | 'payment'
  | 'template-selection';

export type Package = 'basic' | 'intermediate' | 'advanced';
export type GenerationOption = 'automatic' | 'step-by-step';
export type LandingPageType = 'service' | 'product' | 'portfolio';

interface WizardData {
  package?: Package;
  basicDetails?: any;
  structureChoice?: 'automatic' | 'manual';
  generationMethod?: GenerationOption;
  generationOptions?: {
    generateContent: boolean;
    generateImages: boolean;
  };
  landingPageType?: LandingPageType;
  serviceDetails?: any;
  productDetails?: any;
  portfolioDetails?: any;
}

export function LandingPageWizard() {
  const [step, setStep] = useState<WizardStep>('package-selection');
  const [wizardData, setWizardData] = useState<WizardData>({});

  const handlePackageSelect = (selectedPackage: Package) => {
    setWizardData(prev => ({ ...prev, package: selectedPackage }));
    if (selectedPackage !== 'basic') {
      setStep('payment');
    } else {
      setStep('basic-details');
    }
  };

  const handleBasicDetailsSubmit = (data: any) => {
    setWizardData(prev => ({ ...prev, basicDetails: data }));
    setStep('structure-selection');
  };

  const handleStructureSelect = (choice: 'automatic' | 'manual') => {
    setWizardData(prev => ({ ...prev, structureChoice: choice }));
    if (choice === 'automatic') {
      setStep('generation-method');
    } else {
      setStep('template-selection');
    }
  };

  const handleGenerationMethodSelect = (
    method: GenerationOption,
    options?: { generateContent: boolean; generateImages: boolean }
  ) => {
    setWizardData(prev => ({
      ...prev,
      generationMethod: method,
      generationOptions: options
    }));
    setStep('template-selection');
  };

  const handlePaymentComplete = () => {
    setStep('basic-details');
  };

  const handleBackClick = () => {
    switch (step) {
      case 'payment':
        setStep('package-selection');
        break;
      case 'basic-details':
        setStep('package-selection');
        break;
      case 'structure-selection':
        setStep('basic-details');
        break;
      case 'generation-method':
        setStep('structure-selection');
        break;
      case 'service-form':
      case 'product-form':
      case 'portfolio-form':
        setStep('basic-details');
        break;
      case 'template-selection':
        setStep(wizardData.structureChoice === 'automatic' ? 'generation-method' : 'structure-selection');
        break;
      default:
        setStep('package-selection');
    }
  };

  const handleHomeClick = () => {
    // Reset wizard and navigate to home
    setWizardData({});
    setStep('package-selection');
    // Add navigation logic here
  };

  // If we're in template selection, render it full screen
  if (step === 'template-selection') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="sticky top-0 z-50 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <button
              onClick={handleBackClick}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>
            <button
              onClick={handleHomeClick}
              className="text-gray-600 hover:text-gray-900"
            >
              Back to Home
            </button>
          </div>
        </div>
        <TemplateGrid onTemplateSelect={() => {}} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {step !== 'package-selection' && (
          <div className="flex justify-between mb-8">
            <button
              onClick={handleBackClick}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>
            <button
              onClick={handleHomeClick}
              className="text-gray-600 hover:text-gray-900"
            >
              Back to Home
            </button>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm p-8">
          {step === 'package-selection' && (
            <PackageSelection onSelect={handlePackageSelect} />
          )}

          {step === 'basic-details' && (
            <BasicDetailsForm onSubmit={handleBasicDetailsSubmit} />
          )}

          {step === 'structure-selection' && (
            <StructureSelection onSelect={handleStructureSelect} />
          )}

          {step === 'generation-method' && (
            <GenerationMethod onSelect={handleGenerationMethodSelect} />
          )}

          {step === 'payment' && (
            <PaymentView 
              selectedPackage={wizardData.package!}
              onComplete={handlePaymentComplete}
            />
          )}

          {step === 'service-form' && (
            <ServiceForm onSubmit={() => {}} />
          )}

          {step === 'product-form' && (
            <ProductForm onSubmit={() => {}} />
          )}

          {step === 'portfolio-form' && (
            <PortfolioForm onSubmit={() => {}} />
          )}
        </div>
      </div>
    </div>
  );
}