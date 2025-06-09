
import Link from 'next/link';
import { useState } from 'react';

// Individual Project Card Component
interface Project {
  id: string;
  title: string;
  technologies: string[];
  description?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className={`
          bg-white rounded-2xl p-6 w-[1/3] shadow-lg cursor-pointer
          transition-all duration-300 ease-in-out
          ${isHovered ? 'transform scale-105 h-95 shadow-2xl' : ''}
          hover:shadow-2xl
          min-w-[420px] max-w-[500px] w-full
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

export default ProjectCard;