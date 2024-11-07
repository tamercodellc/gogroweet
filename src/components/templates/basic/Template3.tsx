import React from 'react';
import { Mail, Phone, Download, ArrowRight, Github, Linkedin, Twitter, ExternalLink, Code, Palette, Layout, Monitor, Facebook, Instagram } from 'lucide-react';

const socialLinks = [
  { name: 'github', icon: Github, href: '#' },
  { name: 'linkedin', icon: Linkedin, href: '#' },
  { name: 'twitter', icon: Twitter, href: '#' },
  { name: 'facebook', icon: Facebook, href: '#' },
  { name: 'instagram', icon: Instagram, href: '#' }
];

export function BasicTemplate3() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-primary">Portfolio</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-primary transition-colors">Projects</a>
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
     <section id="about" className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                👋 Welcome to my portfolio
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Creative <span className="text-primary">Developer</span> & Designer
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Turning ideas into real life products is my calling. Let's work together to bring your vision to life.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center">
                  Download CV
                  <Download className="ml-2 w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors">
                  Let's Talk
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <div className="w-full h-full bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are the skills and technologies I specialize in
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: 'Web Development', skills: ['React', 'Node.js', 'TypeScript', 'Next.js'] },
              { icon: Palette, title: 'UI/UX Design', skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'] },
              { icon: Layout, title: 'App Development', skills: ['React Native', 'Flutter', 'iOS', 'Android'] },
              { icon: Monitor, title: 'DevOps', skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'] }
            ].map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all">
                  <category.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <ArrowRight className="w-4 h-4 text-primary mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="px-6 py-3 bg-white text-primary rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex gap-2">
                    {['React', 'Node.js', 'TypeScript'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Services I Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional solutions for your digital needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Web Development',
              'Mobile Apps',
              'UI/UX Design',
              'Consulting'
            ].map((service, index) => (
              <div key={service} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service}</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Let's discuss your project and see how I can help
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 000-0000</p>
                </div>
              </div>
              <div className="flex gap-4">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </a>
                ))}
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            <span className="text-lg font-medium text-gray-900">Portfolio</span>
            
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
              Crafted with ❤️ using modern technologies
            </p>
            
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}