"use client"
import React, { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import { projects } from "@/lib/projects";


import Image from "next/image";
import Link from "next/link";
import LandingPage from "@/components/LandingPage";
import ProjectDashboard from "@/components/projects/ProjectDashboard";
import DraggableImage from "@/components/DraggableImage";
import { ChevronDown } from 'lucide-react';
import ExperiencesPage from '@/components/ExperiencesPage';
import IntroCard from '@/components/hero/IntroCard';
import AboutMe from '@/components/hero/AboutMe';
import TechStack from '@/components/TechStack';
import ScrollingGallery from '@/components/ScrollingGallery';
import Highlights from '@/components/Highlights';
import Navbar from '@/components/Navbar';
import ResizableBackground from '@/components/ResizableBackground';
import StarButton from '@/components/hero/Star';
import Footer from '@/components/Footer';





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
      <Navbar theme="light" />
      <main
        style={{ position: "relative", zIndex: 1 }}
        className="flex flex-col gap-8 items-center w-full"
      >
        {/* HERO SECTION */}
        <section id="hero" className="relative w-full overflow-hidden">
          <div className="relative w-full">
            <img
              src="/intro/intro-background.svg"
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Intro Card + Image */}
            <div className="absolute top-0 w-full h-full flex justify-center items-center z-10">
              <div className="flex w-full max-w-6xl gap-10 items-center justify-between flex-row pb-[10%]">

                {/* IntroCard side */}
                <motion.div
                  className="flex-1 min-w-[63%]"
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.9 }}
                >
                  <IntroCard />
                </motion.div>

                {/* Image side */}
                <motion.div
                  className="justify-center"
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.9 }}
                >
                  <img
                    src="/headshot-cropped.jpg"
                    alt="Headshot"
                    className="rounded-xl max-h-[365px]"
                  />
                </motion.div>

              </div>
            </div>
            </div>

        </section>


      {/* About */}
      <section id="about" className='flex gap-10'>
        <div className='w-[1/3] pl-10'><AboutMe /></div>
        <div className='w-[2/3] pr-10'><TechStack /></div>
      </section>


      {/* Featured Projects */}
      <section id="projects" className="w-full flex justify-center mt-10">
        <div className='w-[85%] mx-auto'>
          {/* Header */}
          <h1 className="!font-poppins text-5xl font-extrabold text-white flex items-center ">
            {startTyping && (
              <TypeAnimation
                sequence={['selected works.']}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
              />
            )}
          </h1>
          <div ref={ref} className='items-center flex flex-col gap-1'>
            <ProjectDashboard projects={projects} limit={3} />
            <button className="!font-poppins px-5 h-[2rem] bg-[#F9C6CF] rounded-full text-center justify-start text-[#bd1f20] font-semibold mt-5">See All Projects →</button>
          </div>
        </div>
      </section>

      <section id="experience">
        <h1 className="!font-poppins text-5xl font-bold text-white w-full flex justify-center mt-15">
          experience.
        </h1>
        <ExperiencesPage />
      </section>


      {/* Highlights Gallery */}
      <section id="highlights">
        <Highlights />
      </section>
      

      
    
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
        <Footer />
      </main>
    </div>
  );
};

