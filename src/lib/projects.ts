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
];

export const getProjectData = (id: string): Project | null => {
  return projects.find((project) => project.id === id) || null;
};