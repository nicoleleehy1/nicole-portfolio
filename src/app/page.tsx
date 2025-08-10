"use client"
import React, { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';


import Image from "next/image";
import Link from "next/link";
import LandingPage from "@/components/LandingPage";
import ProjectDashboard from "@/components/projects/ProjectDashboard";
import DraggableImage from "@/components/DraggableImage";
import { ChevronDown } from 'lucide-react';
import ExperiencesPage from '@/components/ExperiencesPage';
import BasicInfo from '@/components/hero/BasicInfo';
import IntroCard from '@/components/IntroCard';
import AboutMe from '@/components/hero/AboutMe';
import TechStack from '@/components/TechStack';
import ScrollingGallery from '@/components/ScrollingGallery';
import Highlights from '@/components/Highlights';
import Navbar from '@/components/Navbar';
import ResizableBackground from '@/components/ResizableBackground';





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
    <div className="min-h-screen w-full flex bg-[#470D03] relative">
      <main
        style={{ position: "relative", zIndex: 1 }}
        className="flex flex-col gap-4 items-center w-full"
      >
        {/* HERO SECTION */}
        <section id="hero" className="relative w-full min-h-[805px] overflow-visible pb-[350px]">
          <div className="relative w-full h-[750px]">
            <img
              src="/intro/intro-background.svg"
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Intro Card + Image */}
            <div className="absolute top-0 w-full h-full flex items-center justify-start z-10">
              {/* IntroCard side */}
              <div className="w-[63%] flex items-stretch">
                <motion.div
                  className="w-full h-full"
                  initial={{ x: -1000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <IntroCard />
                </motion.div>
              </div>

              {/* Image side */}
              <div className="w-[33%] flex items-stretch justify-center mt-[-6rem]">
              <motion.div
                  className="w-full h-full"
                  initial={{ x: 1000 }}
                  animate={{ x: 30 }}
                  transition={{ duration: 1 }}
                >
                  <img
                  src="/headshot-cropped.jpg"
                  alt="Headshot"
                  className="object-cover object-center rounded-[10px] w-[80%] h-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

      <section id="about" className='flex'>
        {/* ABOUT ME */}
        <div className='w-[1/3] pl-10'><AboutMe /></div>
        {/* TECH STACK */}
        <div className='w-[2/3] pr-10'><TechStack /></div>
      </section>

      {/* Scroll Highlights Gallery */}
      <section id="highlights">
        <Highlights />
      </section>


      {/* Projects Dashboard */}
      <div>
        {/* Header */}
        <h1 className="w-[1200px] !font-poppins italic text-5xl font-extrabold text-white mb-12 pt-7 flex items-center">
          📌
          {startTyping && (
            <TypeAnimation
              sequence={['Selected Works.']}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
            />
          )}
        </h1>
        <div ref={ref}><ProjectDashboard startTyping={startTyping} maxProjects={3}/></div>
      </div>

      
      

      {/* Scroll Indicator
      <section className="pt-32 pb-20 px-6">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section> */}
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

