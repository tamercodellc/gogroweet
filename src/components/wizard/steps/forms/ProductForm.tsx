import React, { useState } from 'react';
import { DollarSign, Package, Tag, Truck } from 'lucide-react';

interface ProductFormData {
  productName: string;
  description: string;
  price: string;
  features: string[];
  specifications: string[];
  shippingInfo: string;
  returnPolicy: string;
}

interface ProductFormProps {
  onSubmit: (data: ProductFormData) => void;
}

export function ProductForm({ onSubmit }: ProductFormProps) {
  const [formData, setFormData] = useState<ProductFormData>({
    productName: '',
    description: '',
    price: '',
    features: [''],
    specifications: [''],
    shippingInfo: '',
    returnPolicy: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const addSpecification = () => {
    setFormData(prev => ({
      ...prev,
      specifications: [...prev.specifications, '']
    }));
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const updateSpecification = (index: number, value: string) => {
    const newSpecs = [...formData.specifications];
    newSpecs[index] = value;
    setFormData(prev => ({
      ...prev,
      specifications: newSpecs
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Tell us about your product
        </h2>
        <p className="text-gray-600">
          Provide the essential information about what you're selling
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <div className="relative">
            <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={formData.productName}
              onChange={(e) => setFormData(prev => ({ ...prev, productName: e.target.value }))}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={formData.price}
              onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Key Features
          </label>
          <div className="space-y-2">
            {formData.features.map((feature, index) => (
              <div key={index} className="relative">
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => updateFeature(index, e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder={`Feature ${index + 1}`}
                  required
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addFeature}
            className="mt-2 text-primary hover:text-primary/80 text-sm font-medium"
          >
            + Add Another Feature
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Specifications
          </label>
          <div className="space-y-2">
            {formData.specifications.map((spec, index) => (
              <input
                key={index}
                type="text"
                value={spec}
                onChange={(e) => updateSpecification(index, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder={`Specification ${index + 1}`}
                required
              />
            ))}
          </div>
          <button
            type="button"
            onClick={addSpecification}
            className="mt-2 text-primary hover:text-primary/80 text-sm font-medium"
          >
            + Add Another Specification
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Shipping Information
          </label>
          <div className="relative">
            <Truck className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              value={formData.shippingInfo}
              onChange={(e) => setFormData(prev => ({ ...prev, shippingInfo: e.target.value }))}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              rows={2}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Return Policy
          </label>
          <textarea
            value={formData.returnPolicy}
            onChange={(e) => setFormData(prev => ({ ...prev, returnPolicy: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            rows={2}
            required
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Continue
        </button>
      </div>
    </form>
  );
}