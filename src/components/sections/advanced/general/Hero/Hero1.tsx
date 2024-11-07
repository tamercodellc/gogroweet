import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, Star, Shield, Zap, Users, BarChart, 
  ChevronRight, Code, Cpu, Database, Cloud, 
  Settings, Server, Monitor
} from 'lucide-react';

interface Hero1Props {
  title?: string;
  subtitle?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export function Hero1({
  title = "Experience the Future of Digital Innovation",
  subtitle = "Transform your digital presence with AI-powered solutions that deliver exceptional results and drive unprecedented growth.",
  stats = [
    { value: "98%", label: "Customer Satisfaction" },
    { value: "2M+", label: "Active Users" },
    { value: "150+", label: "Global Partners" }
  ]
}: Hero1Props) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [email, setEmail] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number>();
  const [icons, setIcons] = useState<BouncingIcon[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  // Initialize bouncing icons
  useEffect(() => {
    const iconComponents = [Code, Cpu, Database, Cloud, Settings, Server, Monitor];
    const initialIcons: BouncingIcon[] = Array.from({ length: 10 }, (_, i) => ({
      icon: iconComponents[i % iconComponents.length],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      size: Math.random() * 20 + 20,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2
    }));
    setIcons(initialIcons);
  }, []);

  // Animate bouncing icons
  useEffect(() => {
    const animate = () => {
      setIcons(prevIcons => 
        prevIcons.map(icon => {
          let newX = icon.x + icon.speedX;
          let newY = icon.y + icon.speedY;
          let newSpeedX = icon.speedX;
          let newSpeedY = icon.speedY;
          let newRotation = (icon.rotation + icon.rotationSpeed) % 360;

          if (newX <= 0 || newX >= window.innerWidth - icon.size) {
            newSpeedX = -icon.speedX;
          }
          if (newY <= 0 || newY >= window.innerHeight - icon.size) {
            newSpeedY = -icon.speedY;
          }

          return {
            ...icon,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
            rotation: newRotation
          };
        })
      );
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Background elements remain the same */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-400"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col space-y-16">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div 
                className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 shadow-lg transform transition-all duration-700 ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                New Features Available
              </div>

              {/* Title & Description */}
              <div className="space-y-6">
                <h1 
                  className={`text-5xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent transform transition-all duration-700 ${
                    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: '200ms' }}
                >
                  {title}
                </h1>
                <p 
                  className={`text-xl text-gray-300 transform transition-all duration-700 ${
                    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: '400ms' }}
                >
                  {subtitle}
                </p>
              </div>

              {/* CTA Buttons */}
              <div 
                className={`space-y-4 transform transition-all duration-700 ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: '600ms' }}
              >
                <div className="flex flex-wrap gap-4">
                  <button className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md rounded-lg font-medium hover:from-blue-700/90 hover:to-purple-700/90 transition-all group">
                    Get Started
                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="flex-1 px-8 py-4 bg-white/10 backdrop-blur-md rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20">
                    Watch Demo
                  </button>
                </div>

                {/* Email Capture */}
                <form onSubmit={handleSubmit} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for 15% discount"
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 pr-32"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Right Content - Interactive Dashboard Preview */}
            <div 
              className={`relative transform transition-all duration-1000 ${
                isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              {/* Dashboard content */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
                    >
                      <p className="text-2xl font-bold mb-1">{stat.value}</p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Activity Graph */}
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-medium">Activity Overview</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Live Data
                    </div>
                  </div>
                  <div className="flex items-end gap-2 h-32">
                    {[40, 70, 30, 85, 50, 90, 60, 80, 40, 70, 30, 85].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-600/80 to-purple-600/80 backdrop-blur-md rounded-t transition-all duration-500 hover:opacity-80"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gray-700/90 backdrop-blur-md rounded-xl p-4 border border-gray-500 shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm">Premium Features</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-gray-700/90 backdrop-blur-md rounded-xl p-4 border border-gray-500 shadow-lg animate-float animation-delay-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">System Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Row - Full Width */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-700 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ animationDelay: '1000ms' }}
          >
            {[
              { icon: Shield, title: "Enterprise Security" },
              { icon: Zap, title: "Lightning Fast" },
              { icon: Users, title: "Team Collaboration" },
              { icon: BarChart, title: "Advanced Analytics" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-colors border border-white/20 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-md rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <span className="font-medium text-white">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface BouncingIcon {
  icon: React.ElementType;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
}