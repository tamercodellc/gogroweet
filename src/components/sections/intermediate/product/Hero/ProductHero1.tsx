import React from 'react';
import { Play, Headphones, Music, Volume2 } from 'lucide-react';

interface ProductHero1Props {
  title?: string;
  subtitle?: string;
  playlists?: Array<{
    title: string;
    author: string;
    duration: string;
    plays: string;
  }>;
}

export function ProductHero1({
  title = "Melodies that help you stay focus",
  subtitle = "Experience crystal-clear sound with our premium noise-cancelling headphones. Perfect for work, travel, or relaxation.",
  playlists = [
    { title: "Moment of silence", author: "Samantha William", duration: "8 min", plays: "1,985,093" },
    { title: "The sound of nature", author: "Thomas Wise", duration: "8 min", plays: "1,229,385" },
    { title: "Fantastic Wave", author: "Karen Smith", duration: "9 min", plays: "827,521" }
  ]
}: ProductHero1Props) {
  const [emailInput, setEmailInput] = React.useState('');

  return (
    <section className="relative bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight animate-fade-in-up">
              {title}
            </h1>
            
            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">
              {subtitle}
            </p>

            <div className="relative animate-fade-in-up animation-delay-400">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Your email address"
                className="w-full px-6 py-4 bg-white rounded-full shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              />
              <button className="absolute right-2 top-2 px-6 py-2 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Featured Playlist */}
            <div className="space-y-4 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 animate-fade-in-up animation-delay-600">
                Featured Melody
              </h3>
              <div className="grid gap-4">
                {playlists.map((playlist, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-4 flex items-center gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${800 + index * 200}ms` }}
                  >
                    <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Music className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{playlist.title}</h4>
                      <p className="text-sm text-gray-600">{playlist.author}</p>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                        <span>{playlist.duration}</span>
                        <span>{playlist.plays} played</span>
                      </div>
                    </div>
                    <button className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center hover:bg-teal-100 transition-colors">
                      <Play className="w-5 h-5 text-teal-600" fill="currentColor" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image with Floating Elements */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden animate-fade-in-up animation-delay-200">
                <img
                  src="https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?auto=format&fit=crop&w=800&q=80"
                  alt="Focus Music"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-100 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-50 rounded-full animate-float animation-delay-200"></div>
              
              {/* Feature Icons */}
              <div className="absolute top-8 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float">
                <Headphones className="w-6 h-6 text-teal-600" />
              </div>
              <div className="absolute bottom-8 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float animation-delay-400">
                <Volume2 className="w-6 h-6 text-teal-600" />
              </div>

              {/* Circular Images */}
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="absolute w-12 h-12 rounded-full bg-gray-200 border-2 border-white animate-float"
                  style={{
                    top: `${20 + index * 15}%`,
                    right: `${-10 + index * 5}%`,
                    animationDelay: `${index * 200}ms`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}