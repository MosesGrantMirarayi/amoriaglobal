'use client';

import { useState, useEffect } from 'react';
import Chatbot from '../components/Chatbot';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function ServicesPage() {
 
  const services = [
    {
      title: 'Software Publishing',
      description: 'Comprehensive software publishing services including distribution, licensing, and digital marketplace management for your software products with global reach.',
      icon: '💿',
      features: ['Digital distribution', 'License management', 'Marketplace integration', 'Version control'],
      price: 'Starting at $199/month'
    },
    {
      title: 'Web Portals',
      description: 'Custom web portal development and management solutions that provide secure access to information and services for your users with advanced security features.',
      icon: '🌐',
      features: ['Custom portal design', 'User authentication', 'Content management', 'Responsive design'],
      price: 'Starting at $299/month'
    },
    {
      title: 'Computer Programming',
      description: 'Professional software development services using cutting-edge technologies to build scalable and efficient applications tailored to your business needs.',
      icon: '💻',
      features: ['Custom software development', 'Full-stack solutions', 'API integration', 'Code optimization'],
      price: 'Starting at $399/month'
    },
    {
      title: 'Computer Consultancy & Facilities Management',
      description: 'Expert IT consultancy and comprehensive computer facilities management to optimize your technology infrastructure and reduce operational costs.',
      icon: '🔧',
      features: ['IT consulting', 'Infrastructure management', 'System optimization', 'Technical support'],
      price: 'Starting at $499/month'
    },
    {
      title: 'TV Programming & Broadcasting Activities',
      description: 'Complete television programming and broadcasting solutions including content creation, scheduling, and distribution management for media companies.',
      icon: '📺',
      features: ['Content programming', 'Broadcasting management', 'Schedule optimization', 'Distribution networks'],
      price: 'Starting at $599/month'
    },
    {
      title: 'Memories Storage',
      description: 'Secure and reliable data storage solutions for preserving your digital memories and important information with cloud integration and backup services.',
      icon: '💾',
      features: ['Cloud storage', 'Data backup', 'Memory preservation', 'Secure access'],
      price: 'Starting at $99/month'
    }
  ];

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
     <Navbar />

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Hero Section */}
          <section className="hero-section">
            <h1 className="hero-title text-xl font-bold text-white/80">Our Services</h1>
            <p className="hero-description">
              Comprehensive solutions designed to transform your business operations 
              and drive growth through innovative technology.
            </p>
          </section>

          {/* Services Grid */}
          <section className="services-grid-section">
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-detail-card">
                  <div className="service-detail-header">
                    <div className="service-detail-icon">
                      <span>{service.icon}</span>
                    </div>
                    <div className="service-price">
                      {service.price}
                    </div>
                  </div>
                  
                  <div className="service-detail-content">
                    <h3 className="service-detail-title">{service.title}</h3>
                    <p className="service-detail-description">{service.description}</p>
                    
                    <ul className="service-detail-features">
                      {service.features.map((feature, i) => (
                        <li key={i} className="service-detail-feature">
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="service-cta-button">
                      Get Started →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="cta-section">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Transform Your Business?</h2>
              <p className="cta-description">
                Get started with our comprehensive suite of services today and see the difference 
                advanced technology can make for your business.
              </p>
              <div className="cta-buttons">
                <button className="cta-primary-btn">Start Free Trial</button>
                <button className="cta-secondary-btn">Schedule Demo</button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}

      {/* Chatbot Widget */}
      <Chatbot />

     <Footer />
    </>
  );
}