import React from 'react';
import '../Styles/Services.css';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      icon: "🌐",
      description: "Modern, responsive websites & web applications using React, Next.js, Node.js",
      features: ["React/Next.js", "Node.js/Express", "Responsive Design", "SEO Optimized"]
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      description: "Beautiful, intuitive designs that convert visitors into customers",
      features: ["Figma", "Tailwind CSS", "Mobile First", "User Testing"]
    },
    {
      title: "Mobile Apps", 
      icon: "📱",
      description: "Native & cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "API Integration", "Push Notifications"]
    },
    {
      title: "API Development",
      icon: "🔌",
      description: "Scalable REST & GraphQL APIs with proper authentication & documentation",
      features: ["Node.js", "MongoDB", "JWT Auth", "Swagger Docs"]
    }
  ];

  return (
    <section className="services section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          I provide high-quality services to help your business grow online
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, i) => (
                  <span key={i}>✓ {feature}</span>
                ))}
              </div>
              <a href="#contact" className="btn service-btn">Get Quote</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;