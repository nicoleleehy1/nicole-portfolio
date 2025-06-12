"use client"
import React, { useState, useEffect } from 'react';

import Image from "next/image";
import Link from "next/link";
import LandingPage from "@/components/LandingPage";
import ProjectDashboard from "@/components/ProjectDashboard";
import Introduction from '@/components/Introduction';
import DraggableImage from "@/components/DraggableImage";
import { ChevronDown } from 'lucide-react';
import ExperiencesPage from '@/components/ExperiencesPage';
import BasicInfo from '@/components/BasicInfo';
import IntroCard from '@/components/IntroCard';



export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-full p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] flex justify-center">
      <main className="flex flex-col gap-8 items-center w-full max-w-9xl">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold">Your Name</div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="/projects" className="hover:text-blue-600 transition-colors nav-link">Projects</a>
            <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <svg xmlns="http://www.w3.org/2000/svg" width="1512" height="757" viewBox="0 0 1512 757" fill="none">
          <path d="M1442.5 608.498C1488.11 602.088 1513 625.997 1513 625.997L1513 -1.42333e-06L-1.57607 -0.00329111L-1.57601 605.486C-1.57601 605.486 130.707 533.125 243.918 548.488C396.854 569.241 455.732 751.156 610.001 755.998C731.433 759.81 809.093 661.001 930.501 656.498C1039.53 652.455 1075.97 713.385 1185 709.498C1318.87 704.726 1354.8 620.824 1442.5 608.498Z" fill="#FFF5EC"/>
      </svg>
      
      <div className='w-[1200px] h-[500px] border flex justify-start items-center'><IntroCard /></div>


      {/* Intro Cards */}
      <div className='flex gap-4'>
        {/* Left column */}
        <div className='flex flex-col gap-8 translate-x-[-50px]'>
          <div className='w-[400px] hover:animate-shake'><img src="basic-info-card.svg" alt="" /></div>
          <div className='w w-[400px] translate-x-[-15px]'><img src="quick-links.svg" alt="" /></div>
        </div>

        {/* Right column */}
        <div className={`transition-all duration-1000 w-[540px] h-[700px] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-30'}`}>
          <img src="socials-box.svg" alt="" />
        </div>
      </div>

      
      
      

      <section className="pt-32 pb-20 px-6">
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      <ProjectDashboard />
      <ExperiencesPage />

        {/* <DraggableImage
          src="/hello-kitty-sticker.png"
          alt="Hello Kitty"
          initialX={150}
          initialY={200}
          width={80}
          height={80}
        /> */}
      </main>
      
    </div>
  );
}
