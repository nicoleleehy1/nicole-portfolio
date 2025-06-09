import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

interface ProjectDetailProps {
  params: {
    id: string;
  };
}

// This would typically come from a database or CMS
const getProjectData = (id: string) => {
  const projects = {
    'project-1': {
      id: 'project-1',
      title: 'E-Commerce Platform',
      technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
      description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment processing.',
      longDescription: `
        This comprehensive e-commerce solution was built to handle high-traffic scenarios while maintaining excellent user experience. 
        The frontend utilizes React with TypeScript for type safety and better developer experience, while the backend is powered by 
        Java Spring Boot providing robust REST APIs.

        Key features include user authentication with JWT tokens, advanced product filtering and search, real-time inventory management, 
        secure payment processing with Stripe integration, and an admin dashboard for order and product management.

        The application follows microservices architecture patterns and implements caching strategies for optimal performance.
      `,
      images: ['/project1-1.jpg', '/project1-2.jpg', '/project1-3.jpg'],
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      features: [
        'User Authentication & Authorization',
        'Product Catalog with Advanced Search',
        'Shopping Cart & Wishlist',
        'Secure Payment Processing',
        'Order Management System',
        'Admin Dashboard',
        'Responsive Design',
        'Real-time Notifications'
      ],
      challenges: [
        'Implementing secure payment processing',
        'Optimizing database queries for large product catalogs',
        'Managing state across complex user interactions',
        'Ensuring responsive design across all devices'
      ]
    },
    // Add more projects here...
  };

  return projects[id as keyof typeof projects] || null;
};

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const project = getProjectData(params.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-600 hover:text-blue-800">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                  <span className="text-gray-500">Project Screenshot {index + 1}</span>
                  {/* Replace with actual images */}
                  {/* <img src={image} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-full object-cover rounded-lg" /> */}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Project</h2>
              <div className="prose text-gray-600 leading-relaxed">
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </section>

            {project.challenges && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges & Solutions</h2>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}