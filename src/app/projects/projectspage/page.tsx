'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, X } from 'lucide-react';

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  completedDate: string;
}

// Sample project data - replace with your actual projects
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    longDescription: "A comprehensive e-commerce platform built with Next.js and Stripe integration. Features include user authentication, product management, shopping cart, and order tracking.",
    image: "/gallery/propriologics.jpeg",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    category: "Full Stack",
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://your-ecommerce.vercel.app",
    featured: true,
    completedDate: "2024-03"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    longDescription: "A modern task management application with drag-and-drop functionality, real-time collaboration, and team management features.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    category: "Full Stack",
    githubUrl: "https://github.com/yourusername/taskmanager",
    liveUrl: "https://your-taskapp.vercel.app",
    featured: true,
    completedDate: "2024-01"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather application with data visualization",
    longDescription: "A beautiful weather dashboard that provides detailed forecasts, interactive maps, and historical weather data visualization.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "D3.js", "Weather API", "Chart.js", "CSS3"],
    category: "Frontend",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather.vercel.app",
    featured: false,
    completedDate: "2023-11"
  },
  {
    id: 4,
    title: "REST API Server",
    description: "Scalable REST API with authentication and rate limiting",
    longDescription: "A robust REST API server built with Node.js, featuring JWT authentication, rate limiting, input validation, and comprehensive documentation.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "Express", "JWT", "MongoDB", "Redis", "Swagger"],
    category: "Backend",
    githubUrl: "https://github.com/yourusername/rest-api",
    liveUrl: "https://your-api.herokuapp.com/docs",
    featured: false,
    completedDate: "2023-09"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Responsive portfolio website with modern animations",
    longDescription: "A modern, responsive portfolio website built with Next.js, featuring smooth animations, dark mode toggle, and optimized performance.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    category: "Frontend",
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.dev",
    featured: true,
    completedDate: "2024-02"
  },
  {
    id: 6,
    title: "ML Data Pipeline",
    description: "Automated data processing pipeline for machine learning",
    longDescription: "An automated data pipeline that processes, cleans, and prepares data for machine learning models, with monitoring and alerting capabilities.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "AWS"],
    category: "Data Science",
    githubUrl: "https://github.com/yourusername/ml-pipeline",
    liveUrl: "",
    featured: false,
    completedDate: "2023-12"
  }
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "Data Science"];

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              My Projects
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of projects I've built, ranging from full-stack applications to data science solutions. 
              Each project represents a unique challenge and learning opportunity.
            </p>
          </motion.div>

          {/* Filter Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-between mb-8"
          >
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-slate-700"
              >
                <Filter size={20} />
                <span>Filter</span>
              </button>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {filteredProjects.length} projects
              </span>
            </div>

            {/* Category Filters */}
            <AnimatePresence>
              {(showFilters || window.innerWidth >= 640) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-wrap gap-2"
                >
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            >
              {featuredProjects.map(project => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} onSelect={setSelectedProject} featured />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {regularProjects.length > 0 && (
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">All Projects</h2>
          )}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {regularProjects.map(project => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

// Project Card Component
interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, featured = false }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-200 dark:border-slate-700 overflow-hidden ${
        featured ? 'lg:h-96' : 'h-80'
      }`}
      onClick={() => onSelect(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          {featured && (
            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map(tech => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">{project.category}</span>
          <div className="flex space-x-2">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
            </Link>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Project Modal Component
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-white dark:bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <X size={20} />
          </button>
          
          <div className="relative h-64 md:h-80">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-t-xl"
            />
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>Completed {project.completedDate}</span>
                </div>
              </div>
              {project.featured && (
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              )}
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {project.longDescription}
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <Github size={20} />
                <span>View Code</span>
              </Link>
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;