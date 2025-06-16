"use client"
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


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
import AboutMe from '@/components/AboutMe';
import TechStack from '@/components/TechStack';



export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Runs once when component mounts

    if (inView) {
      setStartTyping(true); // Triggers typing when section is in view
    }
  }, [inView]);

  return (
    <div className="min-h-screen w-full flex bg-[#9B3827]">
      <main className="flex flex-col gap-8 items-center w-full max-w-9xl">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black backdrop-blur-md border-gray-100 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-white">Nicole Lee</div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="/projects" className="hover:text-blue-600 transition-colors nav-link">Projects</a>
            <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
      

      <div className="relative w-full min-h-[850px] overflow-hidden">
        {/* Background Image */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1512"
          height="857"
          viewBox="0 0 1512 757"
          fill="none"
          className="absolute top-0 left-0 w-full h-auto z-0"
        >
          <path
            d="M1442.5 608.498C1488.11 602.088 1513 625.997 1513 625.997L1513 -1.42333e-06L-1.57607 -0.00329111L-1.57601 605.486C-1.57601 605.486 130.707 533.125 243.918 548.488C396.854 569.241 455.732 751.156 610.001 755.998C731.433 759.81 809.093 661.001 930.501 656.498C1039.53 652.455 1075.97 713.385 1185 709.498C1318.87 704.726 1354.8 620.824 1442.5 608.498Z"
            fill="#FFF5EC"
          />
        </svg>

        <div className="absolute inset-0 flex z-10">
          <div className="w-1/2 h-[750px] flex justify-start items-center">
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <IntroCard />
            </motion.div>
          </div>

          <div className="w-1/3 w-[500px] h-[600px] flex justify-end items-center">
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 50 }}
              transition={{ duration: 1 }}
            >
              <img src="socials-box.svg" alt="" />
            </motion.div>
          </div>
        </div>

        
      </div>


      



      <div className='flex'>
        {/* Left Column */}
        <div className='w-[1/3]'><AboutMe /></div>

        {/* Right Column */}
        <div className='w-[2/3]'><TechStack /></div>

      </div>
      
      
      
      
      

      <section className="pt-32 pb-20 px-6">
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>
      <div ref={ref}><ProjectDashboard startTyping={startTyping}/></div>
      
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
};

