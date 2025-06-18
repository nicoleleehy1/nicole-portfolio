'use client';

import Link from 'next/link';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { TypeAnimation } from 'react-type-animation';

interface Project {
  id: string;
  title: string;
  technologies: string[];
  description?: string;
  image?: string;
}

interface ProjectDashboardProps {
  projects?: Project[];
  startTyping?: boolean;
}

const ProjectDashboard: React.FC<ProjectDashboardProps> = ({ projects = [], startTyping }) => {
  // Default projects data if none provided
  const defaultProjects: Project[] = [
    {
      id: 'project-1',
      title: 'ASL Translator - TreeHacks 2025',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'A full-stack application built with modern technologies'
    },
    {
      id: 'project-2',
      title: 'Tabitha - AgentHacks 2025',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'An innovative solution for complex problems'
    },
    {
      id: 'project-3',
      title: 'Insurance Pal - Bolt Hacks 2025',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'A scalable web application with robust architecture'
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

  const projectsToShow = projects.length > 0 ? projects : defaultProjects;

  return (
    <div className="min-h-screen bg-[#FFEBF0] bg-gradient-to-br p-8 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="!font-poppins text-5xl font-extrabold text-[#B61E1D] mb-12 pt-7 flex items-center gap-2">
          📌
          {startTyping && (
            <TypeAnimation
              sequence={['Project Dashboard.']}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
            />
          )}
        </h1>
        

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
