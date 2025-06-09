'use client';

import Link from 'next/link';
import { useState } from 'react';

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
      title: 'Project #1',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'A full-stack application built with modern technologies'
    },
    {
      id: 'project-2',
      title: 'Project #2',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'An innovative solution for complex problems'
    },
    {
      id: 'project-3',
      title: 'Project #3',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'A scalable web application with robust architecture'
    },
    {
      id: 'project-4',
      title: 'Project #4',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'Mobile-first responsive design with great UX'
    },
    {
      id: 'project-5',
      title: 'Project #5',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'Data visualization and analytics dashboard'
    },
    {
      id: 'project-6',
      title: 'Project #6',
      technologies: ['React', 'TypeScript', 'Java'],
      description: 'E-commerce platform with payment integration'
    }
  ];

  const projectsToShow = projects.length > 0 ? projects : defaultProjects;

  return (
    <div className="min-h-screen bg-gradient-to-br p-8">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-black mb-12">
          Project Dashboard
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

// Individual Project Card Component
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className={`
          bg-white rounded-2xl p-6 h-90 shadow-lg cursor-pointer
          transition-all duration-300 ease-in-out
          ${isHovered ? 'transform scale-105 h-95 shadow-2xl' : ''}
          hover:shadow-2xl
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image Placeholder */}
        <div className="h-40 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="text-gray-400 text-sm">Project Preview</div>
          )}
        </div>

        {/* Project Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.description && (
            <p className="text-gray-600 text-sm line-clamp-3">
              {project.description}
            </p>
          )}
        </div>

        {/* Hover indicator */}
        <div className={`
          mt-4 text-sm text-blue-600 font-medium
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
          Click to view details →
        </div>
      </div>
    </Link>
  );
};

export default ProjectDashboard;