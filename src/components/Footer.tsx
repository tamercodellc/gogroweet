import React from 'react';
import { GalleryVerticalEnd, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: 'facebook', icon: Facebook, href: '#' },
    { name: 'twitter', icon: Twitter, href: '#' },
    { name: 'instagram', icon: Instagram, href: '#' },
    { name: 'linkedin', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center">
            <GalleryVerticalEnd className="h-6 w-6 text-primary" />
            <span className="ml-2 text-lg font-medium text-gray-900">TAMERDigital</span>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                className="text-gray-400 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            Developed with ❤️ by TAMERDigital
          </p>
          
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}