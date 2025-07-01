import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Zap, Users, Award, Sun, Moon } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    setIsVisible(true);
    
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack application built with React, Node.js, and PostgreSQL featuring payment integration and real-time inventory management.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://ecommerce-demo.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      github: "https://github.com/yourusername/task-manager",
      live: "https://taskmanager-demo.com"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive analytics dashboard for business intelligence with custom charts, filters, and real-time data processing.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      github: "https://github.com/yourusername/analytics-dashboard",
      live: "https://analytics-demo.com"
    }
  ];

  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "AWS", level: 70 }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio">
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">Your Name</div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">Software Developer</h1>
          <p className="hero-subtitle">
            Crafting digital experiences with modern technologies and creative solutions
          </p>
          <div className="social-links">
            <a href="https://github.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
          <button 
            className="cta-button"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="stats">
        <div className="stats-grid">
          {[
            { icon: Code, value: "50+", label: "Projects Completed" },
            { icon: Zap, value: "3+", label: "Years Experience" },
            { icon: Users, value: "20+", label: "Happy Clients" },
            { icon: Award, value: "5+", label: "Technologies" }
          ].map((stat, index) => (
            <div key={index} className="stat-card">
              <stat.icon className="stat-icon" size={32} />
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onMouseEnter={() => setActiveProject(index)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay"></div>
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                    <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
          <div className="contact-buttons">
            <a href="mailto:your.email@example.com" className="contact-btn primary">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="/resume.pdf" className="contact-btn secondary" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Your Name. Built with React, TypeScript & Vite.</p>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* CSS Variables for theming */
        :root {
          --bg-primary: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
          --bg-glass: rgba(255, 255, 255, 0.05);
          --bg-glass-hover: rgba(255, 255, 255, 0.1);
          --text-primary: #ffffff;
          --text-secondary: #d1d5db;
          --text-muted: #9ca3af;
          --accent-primary: #06b6d4;
          --accent-secondary: #a855f7;
          --accent-gradient: linear-gradient(135deg, #06b6d4, #a855f7);
          --accent-gradient-full: linear-gradient(135deg, #06b6d4, #a855f7, #ec4899);
        }

        [data-theme="light"] {
          --bg-primary: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f8fafc 100%);
          --bg-glass: rgba(0, 0, 0, 0.05);
          --bg-glass-hover: rgba(0, 0, 0, 0.1);
          --text-primary: #1f2937;
          --text-secondary: #4b5563;
          --text-muted: #6b7280;
          --accent-primary: #3b82f6;
          --accent-secondary: #8b5cf6;
          --accent-gradient: linear-gradient(135deg, #3b82f6, #8b5cf6);
          --accent-gradient-full: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          line-height: 1.6;
          color: var(--text-primary);
        }

        .portfolio {
          min-height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
          overflow-x: hidden;
          position: relative;
        }

        /* Particles Animation */
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          backdrop-filter: blur(10px);
          background: var(--bg-glass);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .nav-brand {
          font-size: 1.5rem;
          font-weight: bold;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links button {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .nav-links button:hover {
          color: var(--accent-primary);
        }

        .theme-toggle {
          padding: 0.5rem;
          background: var(--bg-glass);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          background: var(--bg-glass-hover);
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }

        /* Hero Section */
        .hero {
          position: relative;
          z-index: 10;
          padding: 8rem 1.5rem 5rem;
          text-align: center;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-content {
          transform: translateY(2rem);
          opacity: 0;
          transition: all 1s ease;
        }

        .hero-content.visible {
          transform: translateY(0);
          opacity: 1;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: bold;
          margin-bottom: 1.5rem;
          background: var(--accent-gradient-full);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pulse 3s infinite;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.5rem);
          margin-bottom: 2rem;
          color: var(--text-secondary);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .social-link {
          padding: 0.75rem;
          background: var(--bg-glass);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--bg-glass-hover);
          transform: scale(1.1);
          color: var(--accent-primary);
        }

        .cta-button {
          padding: 1rem 2rem;
          background: var(--accent-gradient);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          box-shadow: 0 10px 25px rgba(168, 85, 247, 0.25);
          transform: scale(1.05);
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Section Title */
        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: bold;
          text-align: center;
          margin-bottom: 4rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Stats Section */
        .stats {
          position: relative;
          z-index: 10;
          padding: 5rem 1.5rem;
        }

        .stats-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
          background: var(--bg-glass);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: var(--bg-glass-hover);
          transform: translateY(-5px);
        }

        .stat-icon {
          color: var(--accent-primary);
          margin-bottom: 1rem;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: bold;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-muted);
        }

        /* Projects Section */
        .projects {
          position: relative;
          z-index: 10;
          padding: 5rem 1.5rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--bg-glass);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.5s ease;
        }

        .project-card:hover {
          background: var(--bg-glass-hover);
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(168, 85, 247, 0.2);
        }

        .project-image {
          position: relative;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
        }

        .project-links {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          gap: 0.5rem;
        }

        .project-link {
          padding: 0.5rem;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: rgba(0, 0, 0, 0.7);
          transform: scale(1.1);
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(168, 85, 247, 0.2));
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 50px;
          font-size: 0.875rem;
          color: var(--accent-primary);
        }

        /* Skills Section */
        .skills {
          position: relative;
          z-index: 10;
          padding: 5rem 1.5rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .skill-item {
          margin-bottom: 1.5rem;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-percentage {
          color: var(--accent-primary);
        }

        .skill-bar {
          width: 100%;
          height: 0.75rem;
          background: rgba(107, 114, 128, 0.3);
          border-radius: 50px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: var(--accent-gradient);
          border-radius: 50px;
          transition: width 1s ease;
        }

        /* Contact Section */
        .contact {
          position: relative;
          z-index: 10;
          padding: 5rem 1.5rem;
          text-align: center;
        }

        .contact-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        @media (min-width: 768px) {
          .contact-buttons {
            flex-direction: row;
            justify-content: center;
          }
        }

        .contact-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-btn.primary {
          background: var(--accent-gradient);
          color: white;
        }

        .contact-btn.primary:hover {
          box-shadow: 0 10px 25px rgba(168, 85, 247, 0.25);
          transform: scale(1.05);
        }

        .contact-btn.secondary {
          border: 2px solid var(--accent-primary);
          color: var(--accent-primary);
          background: transparent;
        }

        .contact-btn.secondary:hover {
          background: var(--accent-primary);
          color: white;
          transform: scale(1.05);
        }

        /* Footer */
        .footer {
          position: relative;
          z-index: 10;
          padding: 2rem 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: var(--text-muted);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .skills-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .navbar {
            padding: 1rem;
          }

          .hero {
            padding: 6rem 1rem 3rem;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .nav-brand {
            font-size: 1.2rem;
          }
        }

        /* Smooth scrolling enhancement */
        html {
          scroll-behavior: smooth;
        }

        /* Focus states for accessibility */
        .cta-button:focus,
        .contact-btn:focus,
        .social-link:focus,
        .theme-toggle:focus,
        .nav-links button:focus {
          outline: 2px solid var(--accent-primary);
          outline-offset: 2px;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .particle {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;