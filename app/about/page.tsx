'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Chatbot from '../components/Chatbot';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function AboutPage() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const timelineItems = [
    {
      title: "Our Foundation",
      subtitle: "Technology Excellence",
      description: "Established as a leading technology solutions provider, focusing on innovative software development and digital transformation.",
      year: "2020"
    },
    {
      title: "Service Expansion",
      subtitle: "Comprehensive Solutions",
      description: "Expanded our services to include AI-powered analytics, cloud infrastructure, and enterprise security management systems.",
      year: "2021"
    },
    {
      title: "Global Reach",
      subtitle: "International Partnerships",
      description: "Formed strategic partnerships with major corporations across Africa, providing multilingual support and 24/7 availability.",
      year: "2022"
    },
    {
      title: "Innovation Leadership",
      subtitle: "Cutting-Edge Technology",
      description: "Pioneered blockchain solutions, mobile banking systems, and smart automation platforms for diverse industries.",
      year: "2023"
    },
    {
      title: "Future Vision",
      subtitle: "Digital Transformation",
      description: "Continuing to lead the digital revolution with advanced AI, quantum computing research, and sustainable technology solutions.",
      year: "2024+"
    }
  ];

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
;

  // Animate timeline items on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineElements = document.querySelectorAll('.timeline-item');
    timelineElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
     <Navbar />
      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Hero Section */}
          <section className="about-hero">
            <h1 className="about-hero-title">About Amoria Global Tech</h1>
            <p className="about-hero-description">
              Pioneering the future of technology through innovative solutions, 
              strategic partnerships, and unwavering commitment to digital excellence.
            </p>
          </section>

          {/* Our Team Section */}
          <section className="team-section">
            <div className="team-header">
              <h2 className="team-title">Our Team</h2>
              <p className="team-description">
                Meet the passionate professionals behind Amoria Global Tech&apos;s innovative solutions
              </p>
            </div>

            <div className="team-grid">
              <div className="team-card">
                <div className="team-image-container">
                  <Image 
                    src="/team/mos.jpg" 
                    alt="Moses Miraraya" 
                    width={120} 
                    height={120}
                    className="team-image"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">Moses Miraraya</h3>
                  <p className="team-title-job">Head of Operations</p>
                  <p className="team-description-text">
                    Operations excellence leader ensuring seamless project delivery and client satisfaction.
                  </p>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image-container">
                  <Image 
                    src="/team/but.jpg" 
                    alt="Joseph Maranatha" 
                    width={120} 
                    height={120}
                    className="team-image"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">Joseph Maranatha</h3>
                  <p className="team-title-job">Chief Technology Officer & Full-Stack Developer</p>
                  <p className="team-description-text">
                    Expert software architect specializing in AI, blockchain, frontend and backend development, and cloud infrastructure solutions.
                  </p>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image-container">
                  <Image 
                    src="/team/mub.jpg" 
                    alt="Pacific Uwitonze" 
                    width={120} 
                    height={120}
                    className="team-image"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">Pacific Uwitonze</h3>
                  <p className="team-title-job">UI/UX Designer</p>
                  <p className="team-description-text">
                    Creates wireframes, prototypes, and high-fidelity designs focused on user experience and usability.
                  </p>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image-container">
                  <Image 
                    src="/team/jax.jpg" 
                    alt="Jackson Mugwiza" 
                    width={120} 
                    height={120}
                    className="team-image"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">Jackson Mugwiza</h3>
                  <p className="team-title-job">Cybersecurity Analyst</p>
                  <p className="team-description-text">
                    Monitors systems for threats, responds to breaches, and strengthens digital defenses.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission, Vision, Objectives */}
          <section className="company-values">
            <div className="values-grid">
              <div className="value-card mission-card">
                <div className="value-icon">
                  <span>🎯</span>
                </div>
                <h3 className="value-title">Our Mission</h3>
                <p className="value-description">
                  To empower businesses and individuals with cutting-edge technology solutions 
                  that drive digital transformation, enhance operational efficiency, and create 
                  sustainable value in an interconnected world.
                </p>
              </div>

              <div className="value-card vision-card">
                <div className="value-icon">
                  <span>🚀</span>
                </div>
                <h3 className="value-title">Our Vision</h3>
                <p className="value-description">
                  To be the leading technology partner in Africa and beyond, recognized for 
                  innovation, reliability, and transformative impact in software development, 
                  cloud computing, and digital infrastructure.
                </p>
              </div>

              <div className="value-card objectives-card">
                <div className="value-icon">
                  <span>⭐</span>
                </div>
                <h3 className="value-title">Our Objectives</h3>
                <ul className="objectives-list">
                  <li>Deliver world-class software solutions and consulting services</li>
                  <li>Foster digital inclusion through accessible technology platforms</li>
                  <li>Build strategic partnerships with industry leaders</li>
                  <li>Continuously innovate in AI, blockchain, and cloud technologies</li>
                  <li>Maintain 99.9% service reliability and customer satisfaction</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Animated Timeline */}
          <section className="timeline-section">
            <h2 className="timeline-title">Our Journey</h2>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              {timelineItems.map((item, index) => (
                <div 
                  key={index}
                  className={`timeline-item ${visibleItems.includes(index) ? 'visible' : ''}`}
                  data-index={index}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h4 className="timeline-item-title">{item.title}</h4>
                    <h5 className="timeline-item-subtitle">{item.subtitle}</h5>
                    <p className="timeline-item-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Team & Culture Section */}
          <section className="culture-section">
            <div className="culture-content">
              <h2 className="culture-title">Our Culture & Values</h2>
              <div className="culture-grid">
                <div className="culture-item">
                  <h4>Innovation First</h4>
                  <p>We embrace emerging technologies and foster a culture of continuous learning and experimentation.</p>
                </div>
                <div className="culture-item">
                  <h4>Customer-Centric</h4>
                  <p>Every solution we create is designed with our clients success and satisfaction as the primary focus.</p>
                </div>
                <div className="culture-item">
                  <h4>Quality Excellence</h4>
                  <p>We maintain the highest standards in code quality, security, and performance across all our products.</p>
                </div>
                <div className="culture-item">
                  <h4>Global Impact</h4>
                  <p>Our solutions are designed to make a positive impact on businesses and communities worldwide.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="about-cta">
            <h2 className="about-cta-title">Ready to Transform Your Business?</h2>
            <p className="about-cta-description">
              Join hundreds of satisfied clients who trust Amoria Global Tech 
              for their digital transformation journey.
            </p>
            <div className="about-cta-buttons">
              <Link href="/services" className="about-cta-btn primary">
                Explore Our Services
              </Link>
              <Link href="/products" className="about-cta-btn secondary">
                View Our Products
              </Link>
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