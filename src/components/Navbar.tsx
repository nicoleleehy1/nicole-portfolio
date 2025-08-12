"use client"

import React, { useState, useEffect } from 'react';
import { siteMeta } from '../lib/siteMeta'

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
    <div className='text-sm'>
        {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
            ? isLight
              ? 'bg-[#ffffff] backdrop-blur-sm shadow-lg'
              : 'bg-[#470D03] backdrop-blur-sm shadow-lg'
            : 'bg-[#010A08]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-13">
            <div className="flex items-center space-x-3">
              <a href={`#hero`}>
              <span className={`!font-poppins font-semibold text-lg transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Nicole Lee
              </span>
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Experience', 'Projects', 'Leadership'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-pink-200'
                  }`}
                >
                  {item}
                </a>
              ))}
              <a href={siteMeta.resumePath} download
                className={`ml-2 inline-block px-3 py-1 rounded-md border transition-colors
                  ${
                    isScrolled
                      ? 'text-black border-black hover:text-red-600 hover:border-red-600'
                      : 'text-white border-white hover:text-pink-200 hover:border-pink-200'
                  }`}
              >
                Resume
              </a>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar