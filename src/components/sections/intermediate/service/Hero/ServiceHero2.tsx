import React from 'react';
import { ArrowRight, CheckCircle, Play, Users, BarChart, Zap } from 'lucide-react';

interface ServiceHero2Props {
  title?: string;
  subtitle?: string;
  features?: Array<{
    icon: React.ElementType;
    title: string;
    description: string;
  }>;
}

export function ServiceHero2({
  title = "Transform Your Business Growth",
  subtitle = "Accelerate your success with our data-driven marketing solutions and expert team.",
  features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated specialists for your success"
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Real-time insights and reporting"
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "Quick implementation and ROI"
    }
  ]
}: ServiceHero2Props) {
  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 text-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] bg-center opacity-20"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-400"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 shadow-md animate-fade-in-up">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Services Available 24/7
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight animate-fade-in-up animation-delay-200">
                {title}
              </h1>
              <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-400">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
              <button className="px-8 py-4 bg-white text-indigo-900 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center group border border-gray-200 shadow-md">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-medium hover:bg-white/20 transition-colors flex items-center border border-white/20 shadow-md">
                <Play className="w-5 h-5 mr-2" fill="currentColor" />
                Watch Demo
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors animate-fade-in-up border border-white/20 shadow-md"
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Service Showcase */}
          <div className="relative">
            {/* Main Service Display */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-8 animate-fade-in-up border border-white/20 shadow-md animation-delay-200">
              {/* Service Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Success Rate", value: "98%" },
                  { label: "Projects Done", value: "1.2K+" },
                  { label: "Team Members", value: "50+" },
                  { label: "Global Clients", value: "200+" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 rounded-lg p-4 backdrop-blur-sm animate-fade-in-up border border-white/20 shadow-sm"
                    style={{ animationDelay: `${1000 + index * 200}ms` }}
                  >
                    <p className="text-3xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Service Process Steps */}
              <div className="space-y-4">
                {[
                  "Strategy Development",
                  "Market Analysis",
                  "Implementation",
                  "Growth & Scaling"
                ].map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 bg-white/5 rounded-lg p-4 animate-fade-in-up border border-white/20 shadow-sm"
                    style={{ animationDelay: `${1400 + index * 200}ms` }}
                  >
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 animate-float border border-white/20 shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm">Live Dashboard</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 animate-float animation-delay-200 border border-white/20 shadow-md">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
