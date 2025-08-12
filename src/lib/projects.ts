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

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'work' | 'education' | 'project';
  description: string;
  achievements: string[];
  technologies?: string[];
  link?: string;
}



export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Insurmate',
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
    description: 'An AI-powered insurance assistant that simplifies buying, understanding, and managing insurance through natural conversation.',
    longDescription: `
      Integrated GPT-4o, LangChain and insurance APIs with a custom-built insurance agent. 
      Integrated real-time insurance APIs, web scraping, and a quote simulation engine to provide personalized, data-driven recommendations.
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

export const experiences: Experience[] = [
    {
      id: '1',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      type: 'work',
      description: 'Led development of scalable web applications serving 100K+ users, focusing on performance optimization and user experience.',
      achievements: [
        'Reduced application load time by 60% through code splitting and optimization',
        'Mentored 5 junior developers and established code review processes',
        'Architected microservices infrastructure handling 1M+ daily requests'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
      link: 'https://techcorp.example.com'
    },
    {
      id: '2',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      duration: '2020 - 2022',
      type: 'work',
      description: 'Built responsive web applications from concept to deployment, collaborating closely with design and product teams.',
      achievements: [
        'Developed 15+ React components used across multiple products',
        'Implemented design system that improved development velocity by 40%',
        'Led migration from JavaScript to TypeScript across codebase'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      link: 'https://startupxyz.example.com'
    },
    {
      id: '3',
      title: 'Computer Science, B.S.',
      company: 'University of California',
      location: 'Berkeley, CA',
      duration: '2016 - 2020',
      type: 'education',
      description: 'Focused on software engineering, algorithms, and web development. Graduated Magna Cum Laude.',
      achievements: [
        'GPA: 3.8/4.0, Dean\'s List for 6 semesters',
        'President of Computer Science Student Association',
        'Completed honors thesis on machine learning applications'
      ],
      technologies: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms']
    },
    {
      id: '4',
      title: 'E-Commerce Platform',
      company: 'Personal Project',
      location: 'Side Project',
      duration: '2023',
      type: 'project',
      description: 'Full-stack e-commerce platform with payment processing, inventory management, and admin dashboard.',
      achievements: [
        'Built complete shopping cart and checkout flow',
        'Integrated Stripe payments and inventory tracking',
        'Deployed on Vercel with 99.9% uptime'
      ],
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe API', 'Tailwind CSS'],
      link: 'https://github.com/username/ecommerce-project'
    }
  ];