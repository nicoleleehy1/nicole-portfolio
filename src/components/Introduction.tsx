import React, { useState, useEffect } from 'react';

const Introduction: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate component mount animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Sample images with different sizes - replace with your actual images
  const galleryImages = [
    { id: 1, src: '/api/placeholder/400/300', alt: 'Project 1', size: 'large' },
    { id: 2, src: '/api/placeholder/300/200', alt: 'Project 2', size: 'medium' },
    { id: 3, src: '/api/placeholder/250/250', alt: 'Project 3', size: 'square' },
    { id: 4, src: '/api/placeholder/300/400', alt: 'Project 4', size: 'tall' },
    { id: 5, src: '/api/placeholder/200/150', alt: 'Project 5', size: 'small' },
    { id: 6, src: '/api/placeholder/350/200', alt: 'Project 6', size: 'wide' },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="pt-0 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-7xl md:text-8xl font-bold">Nicole Lee</h1>
            <h3 className="text-2xl md:text-3xl mb-6 leading-tight">EECS & BioE @ UC Berkeley</h3>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Contact
              </button>
              <button className="border border-gray-300 px-5 py-3 rounded-lg hover:border-gray-400 transition-all duration-300 font-medium hover:shadow-md">
                Resume
              </button>
              <button className="border border-gray-300 px-5 py-3 rounded-lg hover:border-gray-400 transition-all duration-300 font-medium hover:shadow-md">
                GitHub
              </button>
              <button className="border border-gray-300 px-5 py-3 rounded-lg hover:border-gray-400 transition-all duration-300 font-medium hover:shadow-md">
                Linkedin
              </button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className={`transition-all duration-1000 delay-300 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} `}>
            <div className="grid grid-cols-3 gap-4 h-[600px]">
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-400 bg-gradient-to-br from-blue-100 to-purple-100 h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">Project Alpha</div>
                </div>
                
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-green-100 to-teal-100 flex-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">Web App</div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-orange-100 to-red-100 flex-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">Mobile Design</div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-indigo-100 to-blue-100 h-32">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">UI Kit</div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-pink-100 to-rose-100 h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">Dashboard</div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-purple-100 to-indigo-100 h-56">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">E-commerce</div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-yellow-100 to-orange-100 flex-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">API Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;