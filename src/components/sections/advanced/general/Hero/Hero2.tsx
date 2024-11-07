import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Star, Users, BarChart, Sparkles, Zap, Shield } from 'lucide-react';

interface Hero2Props {
  title?: string;
  subtitle?: string;
  stats?: Array<{
    icon: React.ElementType;
    value: string;
    label: string;
  }>;
}

export function Hero2({
  title = "Revolutionize Your Learning Journey",
  subtitle = "Join our platform and transform your educational aspirations into achievements with AI-powered personalized learning paths.",
  stats = [
    { icon: Users, value: "50k+", label: "Active Students" },
    { icon: BarChart, value: "98%", label: "Success Rate" },
    { icon: Star, value: "4.9", label: "User Rating" }
  ]
}: Hero2Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.05) 50%)',
            backgroundSize: '20px 20px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[Sparkles, Zap, Shield].map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float"
            style={{
              top: `${20 + index * 30}%`,
              left: `${10 + index * 40}%`,
              animationDelay: `${index * 0.2}s`,
              transform: `translate(${mousePosition.x * (index + 1)}px, ${mousePosition.y * (index + 1)}px)`
            }}
          >
            <Icon className="w-12 h-12 text-blue-500/20" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div 
              className={`inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Star className="w-4 h-4 mr-2" />
              #1 Learning Platform
            </div>

            <div className="space-y-6">
              <h1 
                className={`text-5xl font-bold text-gray-900 leading-tight transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: '200ms' }}
              >
                {title}
              </h1>
              <p 
                className={`text-xl text-gray-600 transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: '400ms' }}
              >
                {subtitle}
              </p>
            </div>

            <div 
              className={`flex gap-4 transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '600ms' }}
            >
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center group shadow-lg shadow-blue-500/25">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </div>

            {/* Stats Grid */}
            <div 
              className={`grid grid-cols-3 gap-6 transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '800ms' }}
            >
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <stat.icon className="w-8 h-8 text-blue-500 mb-4" />
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Display */}
          <div 
            className={`relative transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            {/* Main Image/Content Card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Learning"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>

              {/* Floating Rating Card */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium">4.9/5</span>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg animate-float animation-delay-200">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Active Users</p>
                    <p className="text-sm text-gray-500">+15% this month</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}