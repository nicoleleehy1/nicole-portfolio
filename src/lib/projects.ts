export interface Project {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  longDescription: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges?: string[];
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    description: 'A full-stack e-commerce solution with payment processing',
    longDescription: 'Detailed description here...',
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/yourusername/project',
    features: ['User Authentication', 'Payment Processing', 'Admin Dashboard'],
    images: ['/projects/ecommerce-1.jpg', '/projects/ecommerce-2.jpg']
  },
  // Add more projects...
];