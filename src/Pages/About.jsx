import React from 'react';
import '../Styles/About.css';
import ProfileImage from '../assets/Profile.jpeg';

const About = () => {
  return (
    <section className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>React Specialist & Frontend Developer</h3>
            <p>
              2+ years crafting <strong>stunning React applications</strong> with pixel-perfect UI/UX. 
              I excel at building interactive, responsive web apps that deliver exceptional user experiences.
            </p>
            <p>
              Expert in modern React ecosystem including Hooks, Context API, React Router, 
              state management, and seamless API integrations. Passionate about clean, 
              performant code and modern frontend technologies.
            </p>
            
            <div className="skills-grid">
              <div className="skill-item">
                <h4>React Ecosystem</h4>
                <div className="skill-tags">
                  React, React Router, Hooks, Context API, Custom Hooks
                </div>
              </div>
              <div className="skill-item">
                <h4>Frontend Mastery</h4>
                <div className="skill-tags">
                  JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS
                </div>
              </div>
              <div className="skill-item">
                <h4>Tools & Integration</h4>
                <div className="skill-tags">
                  Vite, Git/GitHub, API Integration, Responsive Design, Figma
                </div>
              </div>
            </div>
            
            <div className="about-buttons">
              <a href="https://github.com/Marghoob-Ali" className="btn" target="_blank" rel="noopener">
                View GitHub
              </a>
              <a href="#projects" className="btn btn-secondary">My Projects</a>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img 
                src={ProfileImage}  
                alt="Muhammad Marghoob Ali - React Developer" 
              />
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 