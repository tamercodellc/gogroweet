import React from 'react';
import { Template } from '../types';
import { Hero } from './sections/Hero';
import { Carousel } from './sections/Carousel';
import { WhyHighTicket } from './sections/WhyHighTicket';
import { Pricing } from './sections/Pricing';
import { HostingOptions } from './sections/HostingOptions';
import { Features } from './sections/Features';
import { FAQ } from './sections/FAQ';
import { Footer } from './Footer';

interface TemplateGalleryProps {
  templates: Template[];
  onSelect: (template: Template) => void;
  onSignInClick: () => void;
  onGetStartedClick: () => void;
}

export function TemplateGallery({ templates, onSelect, onSignInClick, onGetStartedClick }: TemplateGalleryProps) {
  return (
    <div className="bg-white">
      <Hero onSignInClick={onSignInClick} onGetStartedClick={onGetStartedClick} />
      <WhyHighTicket />
      <Features />
      <Pricing onSignInClick={onSignInClick} />
      <Carousel/>
      <HostingOptions />
      <FAQ />
      <Footer />
    </div>
  );
}