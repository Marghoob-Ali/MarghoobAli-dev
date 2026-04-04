import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // ✅ EmailJS Configuration
  const SERVICE_ID = 'service_mu2zvn2';
  const TEMPLATE_ID = 'template_d4qmgwk';
  const PUBLIC_KEY = 'MYq2JclFvZhGi97QE';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((result) => {
        setStatus('Thank you! Your message has been sent. I\'ll reply soon.');
        setFormData({ from_name: '', user_email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('Failed to send message. Please try again!');
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact section">
      <div className="container">
        <h2 className="section-title gradient-text">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? Let's discuss and make it happen!
        </p>
        
        <div className="contact-content">
          {/* ✅ Contact Information - All Buttons Fixed */}
          <div className="contact-info">
            {/* 📧 GMAIL DIRECT LINK */}
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>marghoobalimk@gmail.com</p>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=marghoobalimk@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Marghoob,%0A%0AI%20have%20a%20project%20inquiry..." 
                className="contact-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Open Gmail →
              </a>
            </div>
            
            {/* 📱 Phone Call */}
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <p>+92 304 8544767</p>
              <a 
                href="tel:+923048544767" 
                className="contact-link"
              >
                Call Now →
              </a>
            </div>
            
            {/* 🗺️ Google Maps */}
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>
                Qasim Town<br/>
                Street No 5<br/>
                Bahawalpur, Pakistan
              </p>
              <a 
                href="https://maps.app.goo.gl/HkH1EwVGG2FUP6gw5" 
                className="contact-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on Map →
              </a>
            </div>
          </div>
          
          {/* ✅ Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name *"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
                <span className="input-border"></span>
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email *"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
                <span className="input-border"></span>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
                <span className="input-border"></span>
              </div>
              
              <div className="form-group full-width">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
                <span className="input-border"></span>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            
            {status && (
              <div className={`form-status ${status.includes('Thank you') ? 'success' : 'error'}`}>
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;