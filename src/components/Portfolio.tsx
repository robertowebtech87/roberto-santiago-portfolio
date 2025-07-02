import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Zap, Users, Award, Sun, Moon } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Force scroll to top on component mount (page load)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const projects = [
    {
      title: "Futuristic Landing Page",
      description: "Modern, cutting-edge landing page with stunning animations, 3D elements, and interactive components. Built with React and advanced CSS animations to create an immersive user experience.",
      tech: ["React", "TypeScript", "CSS3", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&auto=format",
      github: "https://github.com/robertowebtech87/futuristic-landing",
      live: "https://futuristic-landing.webtech87.pt"
    },
    {
      title: "E-Commerce Website", 
      description: "Complete online store with shopping cart, payment integration, user authentication, and admin dashboard. Features responsive design and seamless checkout experience.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      github: "https://github.com/robertowebtech87/ecommerce-store",
      live: "https://ecommerce.webtech87.pt"
    },
    {
      title: "Laser Service Website",
      description: "Professional service website for laser treatment clinic featuring appointment booking, service galleries, testimonials, and contact forms with modern medical industry design.",
      tech: ["React", "TypeScript", "CSS3", "EmailJS"],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop&auto=format",
      github: "https://github.com/robertowebtech87/laser-service",
      live: "https://laser-service.webtech87.pt"
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
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const refreshAndScrollToTop = () => {
    // Scroll to top first
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    // Then refresh the page
    window.location.reload();
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
        <div 
          className="nav-brand"
          onClick={refreshAndScrollToTop}
          style={{ cursor: 'pointer' }}
          title="Go to top and refresh page"
        >
          Roberto Santiago
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <button onClick={toggleTheme} className="theme-toggle mobile-theme-toggle">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}
        
        {/* Mobile Menu Dropdown */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <button onClick={() => scrollToSection('about')} className="mobile-menu-item">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="mobile-menu-item">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="mobile-menu-item">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="mobile-menu-item">
              Contact
            </button>
          </div>
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
            <a href="https://github.com/robertowebtech87" className="social-link" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/roberto-santiago-83224a371/" className="social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:roberto.santiago@webtech87.pt" className="social-link">
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
      <ScrollReveal animation="fade-up">
        <section id="about" className="stats">
          <div className="stats-grid">
            {[
              { icon: Code, value: "50+", label: "Projects Completed" },
              { icon: Zap, value: "3+", label: "Years Experience" },
              { icon: Users, value: "20+", label: "Happy Clients" },
              { icon: Award, value: "5+", label: "Technologies" }
            ].map((stat, index) => (
              <ScrollReveal 
                key={index} 
                animation="scale" 
                delay={index * 100}
              >
                <div className="stat-card">
                  <stat.icon className="stat-icon" size={32} />
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Projects Section */}
      <ScrollReveal animation="fade-up">
        <section id="projects" className="projects">
          <div className="container">
            <ScrollReveal animation="matrix">
              <h2 className="section-title">Featured Projects</h2>
            </ScrollReveal>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ScrollReveal 
                  key={index}
                  animation="glow"
                  delay={index * 200}
                >
                  <div className="project-card">
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Skills Section */}
      <ScrollReveal animation="cyber">
        <section id="skills" className="skills">
          <div className="container">
            <ScrollReveal animation="hologram">
              <h2 className="section-title">Technical Skills</h2>
            </ScrollReveal>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <ScrollReveal 
                  key={index}
                  animation="fade-right"
                  delay={index * 100}
                >
                  <div className="skill-item">
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
          <div className="contact-buttons">
            <a href="mailto:roberto.santiago@webtech87.pt" className="contact-btn primary">
              <Mail size={20} />
              Get In Touch
            </a>
            <a 
              href="/roberto-santiago-resume.pdf" 
              className="contact-btn secondary" 
              download="Roberto_Santiago_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Roberto Santiago. Built with React, TypeScript & Vite.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;