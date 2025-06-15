'use client';

import { useState, useEffect } from 'react';
import Chatbot from '../components/Chatbot';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function ProductsPage() {

  const products = [
    {
      title: 'USSD Mobile Banking',
      description: 'Provides access to banking services on mobile phone without internet connection. Complete offline banking solution for rural and urban areas.',
      icon: '📱',
      features: ['Offline banking access', 'USSD protocol support', 'Multi-language interface', 'Real-time transactions'],
      price: '$199',
      fullDescription: 'Our USSD Mobile Banking solution enables customers to access banking services through simple USSD codes on any mobile phone, without requiring internet connectivity.'
    },
    {
      title: 'Clearing and Payment Solution',
      description: 'Enable exchange of interbank transactions through clearing central house system with advanced security and real-time processing.',
      icon: '🎯',
      features: ['Interbank transactions', 'Central clearing house', 'Real-time processing', 'Advanced security'],
      price: '$399',
      fullDescription: 'Comprehensive clearing and settlement system that facilitates secure interbank transactions through a centralized clearing house with real-time processing capabilities.'
    },
    {
      title: 'Android Based Agency Banking',
      description: 'Extends branch services to customer through bank agents using mobile devices with comprehensive agent management system.',
      icon: '📊',
      features: ['Agent management', 'Mobile POS integration', 'Customer onboarding', 'Transaction monitoring'],
      price: '$299',
      fullDescription: 'Transform any Android device into a mobile banking terminal, enabling bank agents to provide full banking services to customers in remote locations.'
    },
    {
      title: 'Digital Payment Gateway',
      description: 'Secure online payment processing solution for e-commerce businesses and merchants with multi-currency support.',
      icon: '💳',
      features: ['Multi-currency support', 'Fraud detection', 'API integration', 'Real-time reporting'],
      price: '$499',
      fullDescription: 'Advanced payment gateway solution with enterprise-grade security, supporting multiple payment methods and currencies for global e-commerce operations.'
    },
    {
      title: 'Security Management System',
      description: 'Comprehensive security solution with real-time monitoring and threat detection for enterprise-level protection.',
      icon: '🔒',
      features: ['Real-time monitoring', 'Threat detection', 'Access control', 'Audit logging'],
      price: '$599',
      fullDescription: 'Enterprise security management platform with AI-powered threat detection, comprehensive access control, and real-time monitoring capabilities.'
    },
    {
      title: 'Cloud Infrastructure Suite',
      description: 'Scalable cloud computing platform with automated deployment and management tools for modern applications.',
      icon: '☁️',
      features: ['Auto-scaling', 'Container orchestration', 'DevOps integration', 'Monitoring dashboard'],
      price: '$799',
      fullDescription: 'Complete cloud infrastructure solution with Kubernetes orchestration, automated CI/CD pipelines, and comprehensive monitoring tools.'
    },
    {
      title: 'Blockchain Transaction System',
      description: 'Decentralized transaction processing system with smart contract support and immutable transaction records.',
      icon: '⛓️',
      features: ['Smart contracts', 'Immutable records', 'Decentralized network', 'Crypto integration'],
      price: '$899',
      fullDescription: 'Advanced blockchain platform for secure, transparent transactions with smart contract functionality and cryptocurrency integration.'
    },
    {
      title: 'AI-Powered CRM Platform',
      description: 'Intelligent customer relationship management system with predictive analytics and automated workflows.',
      icon: '🤖',
      features: ['Predictive analytics', 'Automated workflows', 'Customer insights', 'Integration APIs'],
      price: '$699',
      fullDescription: 'Next-generation CRM platform powered by artificial intelligence, providing predictive customer insights and automated relationship management.'
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
            <h1 className="hero-title text-xl font-bold text-white/80">Our Products</h1>
            <p className="hero-description">
              Cutting-edge technology solutions designed to transform your business 
              operations and drive digital innovation across all industries.
            </p>
          </section>

          {/* Products Grid */}
          <section className="products-page-grid-section">
            <div className="products-page-grid">
              {products.map((product, index) => (
                <div key={index} className="product-page-card">
                  <div className="product-page-header">
                    <div className="product-page-icon">
                      <span>{product.icon}</span>
                    </div>
                    <div className="product-page-price">
                      {product.price}
                    </div>
                  </div>
                  
                  <div className="product-page-content">
                    <h3 className="product-page-title">{product.title}</h3>
                    <p className="product-page-description">{product.fullDescription}</p>
                    
                    <ul className="product-page-features">
                      {product.features.map((feature, i) => (
                        <li key={i} className="product-page-feature">
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="product-page-buttons">
                      <button className="product-buy-btn">
                        Buy Now - {product.price}
                      </button>
                      <button className="product-demo-btn">
                        Free Demo
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="products-cta-section">
            <div className="products-cta-content">
              <h2 className="products-cta-title">Need Custom Solutions?</h2>
              <p className="products-cta-description">
                Our team of experts can customize any product to meet your specific business 
                requirements. Get in touch with us for personalized solutions.
              </p>
              <div className="products-cta-buttons">
                <button className="products-cta-primary-btn">Contact Sales</button>
                <button className="products-cta-secondary-btn">Request Quote</button>
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