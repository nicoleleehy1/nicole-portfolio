export interface Project {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  longDescription: string;
  hackathons?: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
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
    title: 'Insurance Pal',
    technologies: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    description: 'An AI-powered insurance assistant that simplifies buying, understanding, and managing insurance through natural conversation.',
    longDescription: `
      Integrated GPT-4o, LangChain and insurance APIs with a custom-built AI insurance agent to automate claims, quotes, and insurance documents parsing.
      Integrated real-time insurance APIs, web scraping, and a quote simulation engine to provide personalized, data-driven recommendations.
      Deployed LLM-powered support to personalize policy advice and educate users    `,
    hackathons: 'Bolt Hacks 2025',
    images: ['./gallery/insurmate-1.png', '/project1-2.jpg', '/project1-3.jpg'],
    features: [
      'LLM Chat',
      '',
    ],
  },
  {
    id: 'project-2',
    title: 'Tabitha',
    technologies: ['Next.js', 'TypeScript'],
    description: 'A Chrome extension that organizes and provides insights for most frequently viewed tabs.',
    longDescription: `
      
      `,
    hackathons: 'Agent Hacks 2025',
    images: ['/project1-1.jpg', '/project1-2.jpg', '/project1-3.jpg'],
    features: [
      'LLM Chat',
      '',
    ],
  },
];

export const getProjectData = (id: string): Project | null => {
  return projects.find((project) => project.id === id) || null;
};
