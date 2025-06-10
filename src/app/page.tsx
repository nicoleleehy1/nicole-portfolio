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
      <Introduction />
      <img src="basic-info-card.svg" alt="" />

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
