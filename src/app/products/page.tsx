'use client';

import { useState, useEffect } from 'react';
import Chatbot from '../components/Chatbot';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function ProductsPage() {

  const products = [
    {
      title: 'Amoria Connect',
      description: 'Comming Soon',
      icon: '🎪',
      features: [''],
      fullDescription: ' '
    }
  ];

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show/hide scroll-to-top button - only after component is mounted
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Don't render until mounted
  if (!mounted) {
    return <div></div>;
  }

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
                  </div>
                  
                  <div className="product-page-content">
                    <h3 className="product-page-title">{product.title}</h3>
                    <p className="product-page-description">{product.fullDescription}</p>
                    
                    <div className="product-page-buttons">
                      <button className="product-buy-btn" disabled>
                        Explore
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

      {/* Scroll to Top Button - only render after mounted to prevent hydration mismatch */}
      {mounted && showScrollTop && (
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
