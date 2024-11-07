import React, { useEffect, useState } from 'react';
import { GalleryVerticalEnd } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  onSignInClick: () => void;
}

export function Layout({ children, onSignInClick }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-white">
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <button 
              onClick={handleLogoClick}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <GalleryVerticalEnd className="h-8 w-8 text-[#3C82F5]" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                TAMERDigital
              </span>
            </button>
            <div className="flex items-center">
              <button
                onClick={onSignInClick}
                className="px-6 py-2 text-sm font-medium text-white bg-[#3C82F5] rounded-md hover:bg-[#2563eb] transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}