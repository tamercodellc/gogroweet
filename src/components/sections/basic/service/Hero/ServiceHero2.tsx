import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface ServiceHero2Props {
  serviceName: string;
  description: string;
  services: string[];
  stats: Array<{ value: string; label: string }>;
  image: string;
}

export function ServiceHero2({
  serviceName = "Digital Marketing Solutions",
  description = "Boost your online presence with our comprehensive digital marketing services.",
  services = ["SEO Optimization", "Social Media Marketing", "Content Strategy"],
  stats = [
    { value: "250+", label: "Clients" },
    { value: "95%", label: "Success Rate" },
    { value: "15+", label: "Industries" }
  ],
  image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
}: ServiceHero2Props) {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary-green/20 rounded-xl transform rotate-3"></div>
              <img
                src={image}
                alt={serviceName}
                className="relative rounded-lg shadow-xl w-full h-auto"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -right-8 top-1/4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                    <p className="text-sm text-gray-600">Client Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Premium Services
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900">
              {serviceName}
            </h1>
            
            <p className="text-xl text-gray-600">
              {description}
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-medium">{index + 1}</span>
                    </div>
                    <span className="text-gray-600">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}