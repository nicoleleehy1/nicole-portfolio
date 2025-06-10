'use client';

import Link from 'next/link';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  technologies: string[];
  description?: string;
  image?: string;
}

interface ProjectDashboardProps {
  projects?: Project[];
}

const ProjectDashboard: React.FC<ProjectDashboardProps> = ({ projects = [] }) => {
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
    <div className="min-h-screen bg-gradient-to-br p-8 border-3 rounded-2xl">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-black mb-12">
          🖇️ Project Dashboard
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
