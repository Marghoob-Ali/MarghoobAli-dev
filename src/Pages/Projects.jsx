import React, { useState } from 'react';
import '../Styles/Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      id: 1, 
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=300&fit=crop",
      category: "web",
      description: "Full-stack e-commerce website with payment integration and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "web",
      description: "Real-time collaborative task manager with drag & drop functionality",
      tech: ["Next.js", "Socket.io", "Prisma", "Tailwind"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      category: "mobile",
      description: "Cross-platform weather app with beautiful animations and forecasts",
      tech: ["React Native", "Expo", "OpenWeather API"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      category: "design",
      description: "This very portfolio! Modern design with smooth animations",
      tech: ["React", "CSS3", "GSAP"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Chat Application",
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500&h=300&fit=crop", 
      // ✅ 100% WORKING CHAT IMAGE
      category: "web",
      description: "Real-time messaging app with file sharing and group chats",
      tech: ["React", "Firebase", "Material-UI"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      category: "mobile",
      description: "Mobile app for tracking workouts, nutrition and progress",
      tech: ["Flutter", "Firebase", "Charts"],
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeTab === 'all' || project.category === activeTab
  );

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Handpicked selection of my best work</p>
        
        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button 
            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`tab ${activeTab === 'web' ? 'active' : ''}`}
            onClick={() => setActiveTab('web')}
          >
            Web Apps
          </button>
          <button 
            className={`tab ${activeTab === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveTab('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`tab ${activeTab === 'design' ? 'active' : ''}`}
            onClick={() => setActiveTab('design')}
          >
            Design
          </button>
        </div>
        
        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop";
                  }}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.link} 
                      className="link-btn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      className="link-btn github" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.058-.303-.535-1.605.117-3.346 0 0 1.006-.322 3.3 1.23.958-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.741.176 3.044.088 3.346.768.84 1.239 1.91 1.239 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 

export default Projects;