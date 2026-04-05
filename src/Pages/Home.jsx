import React from 'react';
import '../Styles/Home.css';
import ProfileImage from '../assets/Profile.jpeg'; // 👈 Ye line add kariye

const Home = () => {
  // 👇 Tumhara personalized data
  const profileData = {
    name: "Marghoob Ali",
    title: "React & JavaScript Developer",
    description: "I specialize in React, JavaScript, Node.js and modern web development. Building interactive UIs and scalable web applications with clean, efficient code.", 
    stats: [
      { number: "10+", label: "Projects" },
      { number: "5+", label: "Clients" },
      { number: "100%", label: "Satisfaction" }
    ]
  };

  return (
    <>  
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">{profileData.name}</span>
              </h1>
              <p className="hero-subtitle">{profileData.title}</p>
              <p className="hero-description">{profileData.description}</p>
              
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#contact" className="btn btn-secondary">Contact Me</a>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="profile-card">
                <img 
                  src={ProfileImage}  // 👈 Ye change kiya
                  alt={`${profileData.name}'s profile`} 
                  className="profile-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="skills-highlight">
        <div className="container">
          <h3 className="skills-title">Technologies I Work With</h3>
          <div className="skills-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Tailwind</span>
            <span>Git</span>
            <span>Vite</span>
          </div> 
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container"> 
          <div className="stats-grid">
            {profileData.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;