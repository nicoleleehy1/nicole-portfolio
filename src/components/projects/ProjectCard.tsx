
import Link from 'next/link';
import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

// Individual Project Card Component
interface Project {
  id: string;
  title: string;
  technologies: string[];
  description?: string;
  image?: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`
            bg-white rounded-2xl p-3 pb-5 shadow-lg cursor-pointer
            transition-all duration-300 ease-in-out
            ${isHovered ? 'transform scale-105 shadow-2xl' : ''}
            hover:shadow-2xl
            w-full h-full
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Project Image */}
          <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
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
          <div className="space-y-4 pl-2">
            <h3 className="text-[1.4rem] font-bold text-gray-900">
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
          {/* <div className={`
            mt-4 text-sm text-blue-600 font-medium
            transition-opacity duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}>
            Click to view details →
          </div> */}
        </div>  
      </DialogTrigger>

      <DialogContent className="!max-w-4xl !p-0 overflow-hidden rounded-xl shadow-xl dark:bg-slate-800 bg-white max-h-[100vh]">
        <div className="relative">
          {/* Close Button */}
          {/* <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-slate-800 rounded-full shadow hover:shadow-md transition"
            >
              <X size={20} />
            </button>
          </Dialog.Close> */}

          {/* Project Image */}
          <div className="relative h-80 md:h-90">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full rounded-t-xl"
            />
          </div>

          {/* Project Content */}
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  {/* <span>{project.category}</span> */}
                  <span>•</span>
                  {/* <span>Completed {project.completedDate}</span> */}
                </div>
              </div>
              {/* {project.featured && (
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              )} */}
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {/* {project.longDescription} */}
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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
              {/* <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition"
              >
                <Github size={20} />
                <span>View Code</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )} */}
            </div>
          </div>
        </div>
      </DialogContent>

    </Dialog>
  );
};


export default ProjectCard;