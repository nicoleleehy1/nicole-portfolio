'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';


interface Project {
  id: string;
  title: string;
  technologies: string[];
  description?: string;
  longdescription?: string;
  image?: string;
  category?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  completedDate?: string;
}

interface ProjectDashboardProps {
  projects?: Project[];
  startTyping?: boolean;
  maxProjects?: number; // New prop to limit number of projects shown
}

const Projects: Project[] = [
    {
      id: 'project-1',
      title: 'Insurance Pal - Bolt Hacks 2025',
      technologies: ['Typescript', 'Next.js', 'Tailwind', 'Supabase', 'PostgreSQL', 'Bolt'],
      description: 'An AI insurance assistant to automate claims, quotes, document parsing and personalized policy advice.',
      image: './gallery/insurmate-1.png'
    },
    {
      id: 'project-2',
      title: 'Propriologics',
      technologies: ['Typescript', 'Next.js', 'TailwindCSS', 'Shadcn UI', 'Supabase', 'AWS EC2, S3'],
      description: 'A full-stack web platform that helps clinicians monitor patient posture in real time and personalize rehabilitation by combining wearable telemetry, computer vision models, and secure data management.',
      image: './gallery/propriologics.jpeg'
    },
    {
      id: 'project-3',
      title: 'ASL Translator - TreeHacks 2025',
      technologies: ['Python', 'React', 'OpenCV', 'MediaPipe', 'Tensorflow.js'],
      description: 'ASL hand gesture recognition and live captions integrated into an AI chatbot for nonverbal users',
      image: './asl-translator-2.png'
    },
    {
      id: 'project-4',
      title: 'Tabitha - AgentHacks 2025',
      technologies: ['Typescript', 'Next.js', 'TailwindCSS', 'GPT-4.0'],
      description: 'A Chrome extension that organizes and provides insights for most frequently viewed tabs.',
      image: './gallery/propriologics.jpeg'
    },
    {
      id: 'project-5',
      title: 'School Dashboard',
      technologies: ['Typescript', 'Next.js', 'TailwindCSS'],
      description: 'Mobile-first responsive design with great UX'
    },
    {
      id: 'project-6',
      title: 'Hong Kong Cafe Game',
      technologies: ['Java', 'TypeScript', 'Java'],
      description: 'Hot pineapple buns and milk lattes...'
    },
    {
      id: 'project-7',
      title: 'Rewhere - Technovation Girls',
      technologies: ['React Native', 'Adobe XD', 'Javascript'],
      description: 'An iOS app incentivizing clothing donation; mapped 400+ clothing banks in Hong Kong using gov. APIs'
    },
    {
      id: 'project-8',
      title: 'Webinet - Young Founders',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'E-commerce platform with payment integration'
    },
    {
      id: 'project-9',
      title: 'Flame - HKTDC Entrepreneur Day',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'E-commerce platform with payment integration'
    }
  ];

const categories = ["All", "Full Stack", "Frontend", "Backend", "Internship", "Hackathon"];

const ProjectDashboard: React.FC<ProjectDashboardProps> = ({ projects = [], startTyping, maxProjects }) => {
  const projectsToShow = projects.length > 0 ? projects : Projects;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Limit projects if maxProjects is specified
  const limitedProjects = maxProjects ? projectsToShow.slice(0, maxProjects) : projectsToShow;

  // Filter projects based on selected category
    const filteredProjects = useMemo(() => {
      if (selectedCategory === "All") {
        return limitedProjects;
      }
      return limitedProjects.filter(project => project.category === selectedCategory);
    }, [selectedCategory, limitedProjects]);
  
  // Separate featured and regular projects
  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gradient-to-br p-8 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
