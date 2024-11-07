import React, { useState } from 'react';
import { Phone, Upload, Facebook, Instagram, Youtube, Palette, MessageCircle } from 'lucide-react';

interface BasicDetailsFormData {
  logo?: File;
  whatsappNumber: string;
  primaryColor: string;
  secondaryColor?: string;
  businessCategory: string;
  customCategory?: string;
  businessDescription: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    youtube?: string;
  };
}

interface BasicDetailsFormProps {
  onSubmit: (data: BasicDetailsFormData) => void;
}

const BUSINESS_CATEGORIES = [
  'Restaurants & Food Services',
  'Retail & Shopping',
  'Health & Wellness',
  'Beauty & Personal Care',
  'Professional Services',
  'Home Services',
  'Education & Training',
  'Technology & Software',
  'Arts & Entertainment',
  'Automotive',
  'Construction & Home Improvement',
  'Financial Services',
  'Real Estate',
  'Travel & Tourism',
  'Sports & Recreation',
  'Pet Services',
  'Event Planning',
  'Legal Services',
  'Marketing & Advertising',
  'Manufacturing',
  'Other'
];

export function BasicDetailsForm({ onSubmit }: BasicDetailsFormProps) {
  const [formData, setFormData] = useState<BasicDetailsFormData>({
    whatsappNumber: '',
    primaryColor: '#3C82F5',
    businessCategory: '',
    businessDescription: '',
    socialMedia: {}
  });
  const [logoPreview, setLogoPreview] = useState<string>();
  const [showCustomCategory, setShowCustomCategory] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
    } else {
      return `+${numbers.slice(0, 1)} (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, whatsappNumber: formatted }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, logo: file }));
      const reader = new FileReader();
      reader.onload = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setShowCustomCategory(value === 'Other');
    setFormData(prev => ({ 
      ...prev, 
      businessCategory: value,
      customCategory: value === 'Other' ? prev.customCategory : undefined
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi,%20I%20need%20help%20creating%20a%20logo%20for%20my%20business', '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Basic Information
        </h2>
        <p className="text-gray-600">
          Let's start with some essential details for your landing page
        </p>
      </div>

      <div className="space-y-6">
        {/* Logo Upload with CTA */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Logo
          </label>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
                id="logo-upload"
              />
              <label
                htmlFor="logo-upload"
                className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors"
              >
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Logo preview"
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">Upload Logo</span>
                  </div>
                )}
              </label>
            </div>
            <div className="flex-1 space-y-3">
              <div className="text-sm text-gray-500">
                <p>Recommended size: 200x200px</p>
                <p>Max file size: 2MB</p>
                <p>Formats: PNG, JPG, SVG</p>
              </div>
              <button
                type="button"
                onClick={openWhatsApp}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Need help creating a logo?
              </button>
            </div>
          </div>
        </div>

        {/* Business Category */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Category
            </label>
            <select
              value={formData.businessCategory}
              onChange={handleCategoryChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              required
            >
              <option value="">Select a category</option>
              {BUSINESS_CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {showCustomCategory && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Custom Category
              </label>
              <input
                type="text"
                value={formData.customCategory || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, customCategory: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter your business category"
                required
              />
            </div>
          )}
        </div>

        {/* Business Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What are you promoting or selling?
          </label>
          <textarea
            value={formData.businessDescription}
            onChange={(e) => setFormData(prev => ({ ...prev, businessDescription: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            rows={3}
            placeholder="Briefly describe your product, service, or main offering..."
            required
          />
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              value={formData.whatsappNumber}
              onChange={handlePhoneChange}
              placeholder="+1 (234) 567-8900"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">Include country code (e.g., +1 for USA)</p>
        </div>

        {/* Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Primary Color
            </label>
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-gray-400" />
              <input
                type="color"
                value={formData.primaryColor}
                onChange={(e) => setFormData(prev => ({ ...prev, primaryColor: e.target.value }))}
                className="h-10 w-20 rounded cursor-pointer"
                required
              />
              <input
                type="text"
                value={formData.primaryColor}
                onChange={(e) => setFormData(prev => ({ ...prev, primaryColor: e.target.value }))}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="#000000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Secondary Color (Optional)
            </label>
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-gray-400" />
              <input
                type="color"
                value={formData.secondaryColor || '#000000'}
                onChange={(e) => setFormData(prev => ({ ...prev, secondaryColor: e.target.value }))}
                className="h-10 w-20 rounded cursor-pointer"
              />
              <input
                type="text"
                value={formData.secondaryColor || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, secondaryColor: e.target.value }))}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="#000000"
              />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Social Media (Optional)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Facebook className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="url"
                value={formData.socialMedia.facebook || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  socialMedia: { ...prev.socialMedia, facebook: e.target.value }
                }))}
                placeholder="Facebook URL"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="relative">
              <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="url"
                value={formData.socialMedia.instagram || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  socialMedia: { ...prev.socialMedia, instagram: e.target.value }
                }))}
                placeholder="Instagram URL"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="relative">
              {/* Using a custom TikTok icon since lucide-react doesn't have one */}
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
              <input
                type="url"
                value={formData.socialMedia.tiktok || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  socialMedia: { ...prev.socialMedia, tiktok: e.target.value }
                }))}
                placeholder="TikTok URL"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="relative">
              <Youtube className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="url"
                value={formData.socialMedia.youtube || ''}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  socialMedia: { ...prev.socialMedia, youtube: e.target.value }
                }))}
                placeholder="YouTube URL"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
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