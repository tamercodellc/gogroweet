import React from 'react';
import { ChevronDown } from 'lucide-react';

// Import Basic Hero components
import { Hero1 } from '../components/sections/basic/general/Hero/Hero1';
import { Hero2 } from '../components/sections/basic/general/Hero/Hero2';
import { ProductHero1 } from '../components/sections/basic/product/Hero/ProductHero1';
import { ProductHero2 } from '../components/sections/basic/product/Hero/ProductHero2';
import { ServiceHero1 } from '../components/sections/basic/service/Hero/ServiceHero1';
import { ServiceHero2 } from '../components/sections/basic/service/Hero/ServiceHero2';
import { PortfolioHero1 } from '../components/sections/basic/portfolio/Hero/PortfolioHero1';
import { PortfolioHero2 } from '../components/sections/basic/portfolio/Hero/PortfolioHero2';

// Import Intermediate Hero components
import { Hero1 as IntermediateHero1 } from '../components/sections/intermediate/Hero/Hero1';
import { Hero2 as IntermediateHero2 } from '../components/sections/intermediate/Hero/Hero2';
import { ProductHero1 as IntermediateProductHero1 } from '../components/sections/intermediate/product/Hero/ProductHero1';
import { ProductHero2 as IntermediateProductHero2 } from '../components/sections/intermediate/product/Hero/ProductHero2';
import { ProductHero3 as IntermediateProductHero3 } from '../components/sections/intermediate/product/Hero/ProductHero3';
import { ServiceHero1 as IntermediateServiceHero1 } from '../components/sections/intermediate/service/Hero/ServiceHero1';
import { ServiceHero2 as IntermediateServiceHero2 } from '../components/sections/intermediate/service/Hero/ServiceHero2';
import { ServiceHero3 as IntermediateServiceHero3 } from '../components/sections/intermediate/service/Hero/ServiceHero3';
import { PortfolioHero1 as IntermediatePortfolioHero1 } from '../components/sections/intermediate/portfolio/Hero/PortfolioHero1';
import { PortfolioHero2 as IntermediatePortfolioHero2 } from '../components/sections/intermediate/portfolio/Hero/PortfolioHero2';
import { PortfolioHero3 as IntermediatePortfolioHero3 } from '../components/sections/intermediate/portfolio/Hero/PortfolioHero3';

// Import Advanced Hero components
import { Hero1 as AdvancedHero1 } from '../components/sections/advanced/general/Hero/Hero1';

interface ShowcaseComponent {
  name: string;
  component: React.ComponentType<any>;
  props?: any;
}

interface ShowcaseCategory {
  name: string;
  components: ShowcaseComponent[];
}

interface ShowcaseSection {
  title: string;
  categories: ShowcaseCategory[];
}

export function ComponentShowcase() {
  const [activeSection, setActiveSection] = React.useState<string | null>('Heroes');
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);

  const sections: ShowcaseSection[] = [
    {
      title: 'Heroes',
      categories: [
        {
          name: 'Basic General',
          components: [
            { name: 'Basic General Hero 1', component: Hero1 },
            { name: 'Basic General Hero 2', component: Hero2 }
          ]
        },
        {
          name: 'Basic Product',
          components: [
            { name: 'Basic Product Hero 1', component: ProductHero1 },
            { name: 'Basic Product Hero 2', component: ProductHero2 }
          ]
        },
        {
          name: 'Basic Service',
          components: [
            { name: 'Basic Service Hero 1', component: ServiceHero1 },
            { name: 'Basic Service Hero 2', component: ServiceHero2 }
          ]
        },
        {
          name: 'Basic Portfolio',
          components: [
            { name: 'Basic Portfolio Hero 1', component: PortfolioHero1 },
            { name: 'Basic Portfolio Hero 2', component: PortfolioHero2 }
          ]
        },
        {
          name: 'Intermediate General',
          components: [
            { 
              name: 'Intermediate General Hero 1', 
              component: IntermediateHero1,
              props: {
                title: "Experience the Next Generation of Digital Innovation",
                subtitle: "Transform your digital presence with AI-powered solutions that deliver exceptional results.",
                stats: [
                  { value: "98%", label: "Customer Satisfaction" },
                  { value: "2M+", label: "Active Users" },
                  { value: "150+", label: "Global Partners" }
                ]
              }
            },
            { 
              name: 'Intermediate General Hero 2', 
              component: IntermediateHero2,
              props: {
                title: "Unlock Your Online Success",
                subtitle: "At KeyAce, our team of experts are the key to unlocking your online potential, ensuring your business shines and reach the highest profits in the digital realm.",
                stats: [
                  { value: "2,500+", label: "Respective Clients" },
                  { value: "100+", label: "Successful Collabs" },
                  { value: "98%", label: "Satisfaction Rate" }
                ]
              }
            }
          ]
        },
        {
          name: 'Intermediate Product',
          components: [
            {
              name: 'Intermediate Product Hero 1',
              component: IntermediateProductHero1,
              props: {
                title: "Melodies that help you stay focus",
                subtitle: "Experience crystal-clear sound with our premium noise-cancelling headphones. Perfect for work, travel, or relaxation.",
                playlists: [
                  { title: "Moment of silence", author: "Samantha William", duration: "8 min", plays: "1,985,093" },
                  { title: "The sound of nature", author: "Thomas Wise", duration: "8 min", plays: "1,229,385" },
                  { title: "Fantastic Wave", author: "Karen Smith", duration: "9 min", plays: "827,521" }
                ]
              }
            },
            {
              name: 'Intermediate Product Hero 2',
              component: IntermediateProductHero2
            },
            {
              name: 'Intermediate Product Hero 3',
              component: IntermediateProductHero3
            }
          ]
        },
        {
          name: 'Intermediate Service',
          components: [
            {
              name: 'Intermediate Service Hero 1',
              component: IntermediateServiceHero1,
              props: {
                title: "Let's Conduct a Meeting Only in One-Click!",
                subtitle: "It's time to make your virtual meeting conveniently without any worry. Get to know how it works from the video below!",
                stats: [
                  { value: "2M+", label: "Active Users" },
                  { value: "150+", label: "Countries" },
                  { value: "4.9", label: "Rating" }
                ]
              }
            },
            {
              name: 'Intermediate Service Hero 2',
              component: IntermediateServiceHero2
            },
            {
              name: 'Intermediate Service Hero 3',
              component: IntermediateServiceHero3
            }
          ]
        },
        {
          name: 'Intermediate Portfolio',
          components: [
            {
              name: 'Intermediate Portfolio Hero 1',
              component: IntermediatePortfolioHero1,
              props: {
                title: "Bring all your work together",
                subtitle: "A better experience for your attendees and less stress for your team.",
                brandName: "ADELFOX.DESIGN"
              }
            },
            {
              name: 'Intermediate Portfolio Hero 2',
              component: IntermediatePortfolioHero2
            },
            {
              name: 'Intermediate Portfolio Hero 3',
              component: IntermediatePortfolioHero3
            }
          ]
        },
        {
          name: 'Advanced General',
          components: [
            {
              name: 'Advanced General Hero 1',
              component: AdvancedHero1,
              props: {
                title: "Experience the Future of Digital Innovation",
                subtitle: "Transform your digital presence with AI-powered solutions that deliver exceptional results and drive unprecedented growth.",
                stats: [
                  { value: "98%", label: "Customer Satisfaction" },
                  { value: "2M+", label: "Active Users" },
                  { value: "150+", label: "Global Partners" }
                ]
              }
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Component Showcase</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title} className="space-y-6">
              {/* Main Section Button */}
              <button
                onClick={() => {
                  setActiveSection(activeSection === section.title ? null : section.title);
                  setActiveCategory(null);
                }}
                className="flex items-center justify-between w-full px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50"
              >
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    activeSection === section.title ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Categories */}
              {activeSection === section.title && (
                <div className="pl-4 space-y-4">
                  {section.categories.map((category) => (
                    <div key={category.name} className="space-y-4">
                      {/* Category Button */}
                      <button
                        onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                        className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                      >
                        <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-500 transition-transform ${
                            activeCategory === category.name ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Components */}
                      {activeCategory === category.name && (
                        <div className="space-y-12 pl-4">
                          {category.components.map((item) => (
                            <div key={item.name} className="space-y-4">
                              <div className="sticky top-16 z-40 bg-gray-50/80 backdrop-blur-sm">
                                <h4 className="text-lg font-medium text-gray-900 py-4">
                                  {item.name}
                                </h4>
                              </div>
                              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                <item.component {...item.props} />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}