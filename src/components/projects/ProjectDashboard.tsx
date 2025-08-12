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
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'A scalable web application with robust architecture',
      image: './gallery/insurmate-1.png'
    },
    {
      id: 'project-2',
      title: 'Tabitha - AgentHacks 2025',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'An innovative solution for complex problems',
      image: './gallery/propriologics.jpeg'
    },
    {
      id: 'project-3',
      title: 'ASL Translator - TreeHacks 2025',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'A full-stack application built with modern technologies',
      image: './berkeley-dashboard.png'
    },
    {
      id: 'project-4',
      title: 'School Dashboard',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'Mobile-first responsive design with great UX'
    },
    {
      id: 'project-5',
      title: 'Finance Tracker',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'Data visualization and analytics dashboard'
    },
    {
      id: 'project-6',
      title: 'Rewhere - Technovation 2020',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'E-commerce platform with payment integration'
    },
    {
      id: 'project-7',
      title: 'Webinet - Young Founders',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'E-commerce platform with payment integration'
    },
    {
      id: 'project-8z',
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
    <div className="min-h-screen bg-gradient-to-br p-8 rounded-2xl">
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
