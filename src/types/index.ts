export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type Theme = 'dark' | 'light';
