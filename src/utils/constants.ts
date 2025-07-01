export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Software Developer',
  description: 'Crafting digital experiences with modern technologies and creative solutions',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'your.email@example.com',
  github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/yourusername',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/yourprofile',
};

export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack application built with React, Node.js, and PostgreSQL featuring payment integration and real-time inventory management.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    github: "#",
    live: "#"
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive analytics dashboard for business intelligence with custom charts, filters, and real-time data processing.",
    tech: ["React", "D3.js", "Python", "FastAPI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    github: "#",
    live: "#"
  }
];

export const SKILLS = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "AWS", level: 70 }
];
