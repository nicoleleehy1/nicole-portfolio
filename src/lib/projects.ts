export interface Project {
  title: string;
  tech: string[];
  year: string;
  description?: string;
  longDescription?: string;
  hackathon?: string;
  images?: string[];
  link?: string;
  github?: string;
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
    title: "Knowledge Knots · Infinite Knowledge Graph",
    description:
      "Interactive knowledge graph that lets users zoom into concepts, connect ideas, and explore documents with RAG-powered search.",
    tech: ["Next.js", "TypeScript", "Tailwind", "D3", "LangChain"],
    hackathon: "HackMIT 2025",
    link: "https://example.com",
    github: "https://github.com/yourname/knowledge-knots",
    year: "2025",
  },
  {
    title: "ASL Live Translator",
    description:
      "Web app that recognizes American Sign Language letters in real time and converts them into speech and live captions to assist nonverbal users.",
    tech: ["Python", "React", "OpenCV", "MediaPipe", "TensorFlow.js", "Fingerpose"],
    hackathon: "TreeHacks 2025",
    year: "2025",
  },
  {
    title: "Insurmate · AI Insurance Agent",
    description:
      "Web app that recognizes American Sign Language letters in real time and converts them into speech to assist communication.",
    tech: ["React", "TensorFlow.js", "Fingerpose"],
    hackathon: "Bolt Hacks 2025",
    year: "2025",
  },
  {
    title: "Tabitha · Smart Browser Manager",
    description:
      "A Chrome extension that organizes and provides AI insights for most frequently viewed tabs",
    tech: ["Javascript", "Python", "React", "Node.js", "FastAPI", "Trae", "Vite"],
    hackathon: "Agent Hacks 2025",
    year: "2025",
  },
  {
    title: "YHWH Apparel Website",
    description:
      "Redesigned and updated Christian Apparel webiste to promote product drops to 1,200+ users.",
    tech: ["Next.js", "TypeScript", "Tailwind", "D3", "LangChain"],
    link: "https://example.com",
    github: "https://github.com/yourname/knowledge-knots",
    year: "2025",
  },
  {
    title: "Breast Cancer Data Modelling & Sentiment Analysis workshop",
    description:
      "Drag-and-drop interface for clinicians to configure weight distributions on rehab vests, backed by auto-balancing algorithms.",
    tech: ["scikit-learn", "", ""],
    hackathon: "Bioengineering Honor Society",
    link: "https://colab.research.google.com/drive/1tQYDbcIOhHo2mEm9Ci9CPTK5YKkqglE_?authuser=1#scrollTo=9dIaS37AmGu-",
    year: "2025",
  },
  {
    title: "Webinet",
    description:
      "[IN PROGRESS] Hot pineapple buns and milk tea lattes...",
    tech: ['React Native', 'Javascript', 'Adobe XD'],
    hackathon: "Young Founders Summit Asia FINALIST",
    year: "2025",
  },
  {
    title: "Rewhere",
    description:
      "An iOS app that creates a discount system to incentivize donating clothes, mapping clothing banks around Hong Kong.",
    tech: ['React Native', 'Javascript', 'Adobe XD'],
    hackathon: "Technovation Girls (Google) Competition",
    year: "2025",
  },
  {
    title: "School Dashboard",
    description:
      "",
    tech: ["Next.js", "Typescript", "Tailwind"],
    year: "2025",
  },
  {
    title: "Hong Kong Cafe Game",
    description:
      "[IN PROGRESS] Hot pineapple buns and milk tea lattes...",
    tech: ["", "", ""],
    year: "2025",
  },
  {
    title: "Python Snake Game",
    description:
      "Web app that recognizes American Sign Language letters in real time and converts them into speech to assist communication.",
    tech: ["Javascript", "Python", "React", "Node.js", "FastAPI", "Trae", "Vite"],
    year: "2025",
  },
  {
    title: "Build Your Own World",
    description:
      "Web app that recognizes American Sign Language letters in real time and converts them into speech to assist communication.",
    tech: ["Javascript", "Python", "React", "Node.js", "FastAPI", "Trae", "Vite"],
    year: "2025",
  },
  {
    title: "WordNet",
    description:
      "Web app that recognizes American Sign Language letters in real time and converts them into speech to assist communication.",
    tech: ["Javascript", "Python", "React", "Node.js", "FastAPI", "Trae", "Vite"],
    year: "2025",
  },
  {
    title: "2048 Game",
    description:
      "Web app that recognizes American Sign Language letters in real time and converts them into speech to assist communication.",
    tech: ["Javascript", "Python", "React", "Node.js", "FastAPI", "Trae", "Vite"],
    year: "2025",
  },
  {
    title: "Ants vs Bees (Plants vs Zombies Parody)",
    description:
      "Web app that recognizes American Sign Language letters in real time and converts them into speech to assist communication.",
    tech: ["Javascript", "Python", "React", "Node.js", "FastAPI", "Trae", "Vite"],
    year: "2025",
  },
  {
    title: "Typing Speed Test",
    description:
      "Web app that recognizes American Sign Language letters in real time and converts them into speech to assist communication.",
    tech: ["Javascript", "Python", "React", "Node.js", "FastAPI", "Trae", "Vite"],
    year: "2025",
  },
  {
    title: "Scheme Interpreter",
    description:
      "Web app that recognizes American Sign Language letters in real time and converts them into speech to assist communication.",
    tech: ["Javascript", "Python", "React", "Node.js", "FastAPI", "Trae", "Vite"],
    year: "2025",
  },
];

