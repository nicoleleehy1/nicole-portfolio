"use client"

import React, { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface NavbarProps {
    theme: Theme;
}

const Navbar: React.FC<NavbarProps> = ({ theme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    };

    const styles = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#1a202c',
        color: theme === 'light' ? '#000000' : '#ffffff',
        padding: '1rem',
    };
    const isLight = theme === "light";

  return (
    <div className=''>
        {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
            ? isLight
              ? 'bg-[#ffffff] backdrop-blur-sm shadow-lg'
              : 'bg-[#000000] backdrop-blur-sm shadow-lg'
            : 'bg-[#000000]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className={`font-semibold text-lg transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Nicole Lee
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Experience', 'Projects', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Resume
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar