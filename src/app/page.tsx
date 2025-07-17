'use client';

import { useState, useEffect, useRef } from 'react';
import Chatbot from './components/Chatbot';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStatus, setLoadingStatus] = useState('Starting system...');
  const [loadingText, setLoadingText] = useState('INITIALIZING');
  const [preloaderReady, setPreloaderReady] = useState(false);
  const [hasShownPreloader, setHasShownPreloader] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [stars, setStars] = useState<React.ReactElement[]>([]);
  const [particles, setParticles] = useState<React.ReactElement[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);

  // Loading stages for the preloader - 20% increments
  const loadingStages = [
    { progress: 20, status: "Loading core modules...", text: "LOADING" },
    { progress: 40, status: "Establishing connections...", text: "CONNECTING" },
    { progress: 60, status: "Syncing global data...", text: "SYNCING" },
    { progress: 80, status: "Optimizing performance...", text: "OPTIMIZING" },
    { progress: 100, status: "Welcome to Amoria Tech Global!", text: "COMPLETE" }
  ];

// ORIGINAL ARRAY (3 services)
/*
const AmoriaOriginalServices = [
  {
    title: 'Web Portals',
    description: 'Custom web portal development and management solutions that provide secure access to information and services for your users.',
    icon: '🌐',
    features: ['Custom portal design', 'User authentication', 'Content management', 'Responsive design']
  },
  {
    title: 'Computer Programming',
    description: 'Professional software development services using cutting-edge technologies to build scalable and efficient applications.',
    icon: '💻',
    features: ['Custom software development', 'Full-stack solutions', 'API integration', 'Code optimization']
  },
  {
    title: 'Computer Consultancy & Facilities Management',
    description: 'Expert IT consultancy and comprehensive computer facilities management to optimize your technology infrastructure.',
    icon: '🔧',
    features: ['IT consulting', 'Infrastructure management', 'System optimization', 'Technical support']
  }
];*/
  const originalServices = [
    {
      title: 'Web Development',
      description: 'Modern, scalable web solutions from landing pages to complex web applications. We build responsive, fast-loading websites that convert visitors into customers.',
      icon: '🌐',
      features: ['Responsive design', 'E-commerce integration', 'CMS development', 'Performance optimization', 'SEO-ready structure']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices.',
      icon: '📱',
      features: ['iOS development', 'Android development', 'Cross-platform apps', 'App store deployment', 'Mobile-first design']
    },
    {
      title: 'Desktop Applications Development',
      description: 'Robust desktop software solutions for Windows, macOS, and Linux that streamline business operations and enhance productivity.',
      icon: '💻',
      features: ['Cross-platform compatibility', 'Enterprise integration', 'Offline functionality', 'System optimization', 'User-friendly interfaces']
    },
    {
      title: 'SEO Optimization',
      description: 'Data-driven search engine optimization strategies that improve rankings, increase organic traffic, and boost online visibility.',
      icon: '🚀',
      features: ['Technical SEO', 'Content strategy', 'Local optimization', 'Performance audits', 'Analytics tracking']
    },
    {
      title: 'IT Consultation',
      description: 'Strategic technology guidance to help businesses make informed decisions about digital transformation and infrastructure planning.',
      icon: '🔧',
      features: ['Technology assessment', 'Digital strategy', 'Infrastructure planning', 'Process optimization', 'Risk evaluation']
    },
    {
      title: 'Custom Software Solutions',
      description: 'Bespoke software development tailored to unique business requirements, from automation tools to enterprise management systems.',
      icon: '⚙️',
      features: ['Business automation', 'System integration', 'Workflow optimization', 'Custom databases', 'Scalable architecture']
    },
    {
      title: 'Cyber Security',
      description: 'Comprehensive security solutions to protect digital assets, prevent data breaches, and ensure compliance with industry standards.',
      icon: '🔒',
      features: ['Security assessments', 'Threat protection', 'Data encryption', 'Compliance audits', 'Incident response']
    },
    {
      title: 'Data Analysis',
      description: 'Transform raw data into actionable business insights through advanced analytics, visualization, and business intelligence solutions.',
      icon: '📊',
      features: ['Business intelligence', 'Data visualization', 'Predictive modeling', 'Performance metrics', 'Decision support']
    }
  ];

  // Initial client-side mount
  useEffect(() => {
    setIsClient(true);
    
    const hasShown = typeof window !== 'undefined' ? sessionStorage.getItem('preloaderShown') : null;
    if (hasShown) {
      setHasShownPreloader(true);
      setMounted(true);
    } else {
      setPreloaderReady(true);
    }
  }, []);

  // Preloader animation logic - only runs if not shown before
  useEffect(() => {
    if (!preloaderReady || hasShownPreloader || !isClient) return;

    let currentStage = 0;

    const updateProgress = () => {
      if (currentStage < loadingStages.length) {
        const stage = loadingStages[currentStage];
        
        // Jump directly to the target percentage
        setLoadingProgress(stage.progress);
        setLoadingStatus(stage.status);
        setLoadingText(stage.text);
        
        if (stage.progress === 100) {
          setTimeout(() => {
            setMounted(true);
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('preloaderShown', 'true');
            }
          }, 1000);
        } else {
          currentStage++;
          setTimeout(updateProgress, 1200); // Pause for 1.2 seconds between stages
        }
      }
    };

    const timer = setTimeout(updateProgress, 1000);
    return () => clearTimeout(timer);
  }, [preloaderReady, hasShownPreloader, isClient]);

  // Create stars and particles after hydration to avoid hydration issues
  useEffect(() => {
    if (!preloaderReady || hasShownPreloader || !isClient) return;

    const starsArray = [];
    for (let i = 0; i < 100; i++) {
      starsArray.push(
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      );
    }
    setStars(starsArray);

    // Create particles
    const particlesArray = [];
    for (let i = 0; i < 8; i++) {
      particlesArray.push(
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        />
      );
    }
    setParticles(particlesArray);
  }, [preloaderReady, hasShownPreloader, isClient]);

  // Show/hide scroll-to-top button (only after mount)
  useEffect(() => {
    if (!mounted || !isClient) return;

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 300) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted, isClient]);

  // Scroll to top function
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Create infinite array by duplicating services
  const services = [...originalServices, ...originalServices];

  // Auto-sliding functionality with infinite loop (only after mount)   
  useEffect(() => {
    if (!mounted || !isClient) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [mounted, isClient]);

  // Handle infinite loop reset
  useEffect(() => {
    if (!mounted || !isClient) return;

    if (currentSlide >= originalServices.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, originalServices.length, mounted, isClient]);

  // Fixed typing animation using React state instead of DOM manipulation
  useEffect(() => {
    if (!mounted || !isClient) return;

    const word = 'Technology';
    let charIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      if (isDeleting) {
        setTypingText(word.substring(0, charIndex - 1));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          setTimeout(typeWriter, 500);
          return;
        }
      } else {
        setTypingText(word.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === word.length) {
          isDeleting = true;
          setTimeout(typeWriter, 2000);
          return;
        }
      }
      
      setTimeout(typeWriter, isDeleting ? 100 : 150);
    };

    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, [mounted, isClient]);
  // Navigation functions
  const nextSlide = () => {
    if (currentSlide >= originalServices.length - 1) {
      setIsTransitioning(false);
      setCurrentSlide(0);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentSlide(1);
      }, 50);
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide <= 0) {
      setIsTransitioning(false);
      setCurrentSlide(originalServices.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentSlide(originalServices.length - 1);
      }, 50);
    } else {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Safe scroll into view function
  const scrollToElement = (elementId: string) => {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Globe Preloader Component - only show when ready and not mounted and hasn't been shown before
  if (!mounted && !hasShownPreloader && isClient) {
    // Show minimal loading state until preloader is ready
    if (!preloaderReady) {
      return (
        <div className="preloader-container">
          <div className="preloader-content">
            <div className="loading-info">
              <div className="loading-text">INITIALIZING</div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="preloader-container">
        {/* Animated Stars Background */}
        <div className="stars">
          {stars}
        </div>
        
        <div className="preloader-content">
          <div className="globe-container">
            {/* Orbit Rings */}
            <div className="orbit-ring orbit-ring-1"></div>
            <div className="orbit-ring orbit-ring-2"></div>
            
            {/* Main Globe */}
            <div className="globe">
              <div className="globe-sphere">
                {/* Grid Lines */}
                <div className="grid-lines">
                  <div className="latitude-line latitude-1"></div>
                  <div className="latitude-line latitude-2"></div>
                  <div className="latitude-line latitude-3"></div>
                  <div className="longitude-line longitude-1"></div>
                  <div className="longitude-line longitude-2"></div>
                  <div className="longitude-line longitude-3"></div>
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="arrow-container">
              <div className="arrow"></div>
            </div>
            
            {/* Particles */}
            <div className="particles">
              {particles}
            </div>
          </div>
          
          {/* Loading Information */}
          <div className="loading-info">
            <div className="loading-text">{loadingText}</div>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className="percentage">{Math.round(loadingProgress)}%</div>
            <div className="status-text">{loadingStatus}</div>
          </div>
        </div>
      </div>
    );
  }

  // Don't render main content until client-side mounted
  if (!isClient) {
    return <div></div>;
  }

  return (
    <>
      <Navbar />

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Hero Heading Section */}
          <section className="hero-heading-section">
            <h1 className="hero-animated-title">
              Connect the Future with Innovation and Secure{' '}
              <span className="typing-container">
                <span className="typing-text">{typingText}</span>
                <span className="typing-cursor">|</span>
              </span>
            </h1>
            <p className="hero-animated-subtitle">
              Empowering businesses with cutting-edge solutions that drive digital transformation 
              and create lasting value in tomorrow&apos;s connected world.
            </p>
          </section>
          
          {/* Action Buttons Section */}
          <section className="action-buttons-section">
            <div className="action-buttons-container">
              <button 
                className="action-btn member-btn"
                onClick={() => scrollToElement('services-section')}
              >
                Explore our services
              </button>
              <button 
                className="action-btn started-btn"
                onClick={() => scrollToElement('services-section')}
              >
                Contact Sales
              </button>
            </div>
          </section>

          {/* Products Section */}
          <section className="products-section">
            <div className="container">
              <div className="products-header">
                <h2 className="products-title">Our Products</h2>
                <p className="products-description">
                  Innovative solutions designed to meet your business needs
                </p>
              </div>

              <div className="products-grid">
                <div className="product-card">
                  <div className="product-icon">
                    <span>🎪</span>
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">Amoria Connect</h3>
                    <p className="product-description">
                      Comming soon
                    </p>
                    <button className="product-price-btn" disabled>Explore</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Partners Section */}
          <section className="partners-section">
            <div className="partners-container">
              <div className="partners-track">
                <div className="single-partner-card">
                  <div className="logo-item">
                    <img src="/partners/alu-logo.png" alt="ALU"  />
                  </div>
                  <div className="logo-item">
                    <img src="/partners/rwandair-logo.png" alt="RwandAir"  />
                  </div>
                  <div className="logo-item">
                    <img src="/partners/bk-logo.png" alt="Bank of Kigali"  />
                  </div>
                  <div className="logo-item">
                    <img src="/partners/bralirwa-logo.png" alt="Bralirwa"  />
                  </div>
                  <div className="logo-item">
                    <img src="/partners/lemigo-logo.png" alt="Lemigo Hotel"  />
                  </div>
                  <div className="logo-item">
                    <img src="/partners/radisson-logo.png" alt="Radisson Blue"  />
                  </div>
                  <div className="logo-item">
                    <img src="/partners/rra-logo.png" alt="RRA"  />
                  </div>
                  <div className="logo-item">
                    <img src="/partners/moshions-logo.png" alt="Moshions" />
                  </div>
                </div>
                
                {/* Duplicate for continuous loop */}
                <div className="single-partner-card">
                  <div className="logo-item">
                    <img src="/partners/alu-logo.png" alt="ALU" />
                  </div>
                  <div className="logo-item">
                    <img src="/partners/rwandair-logo.png" alt="RwandAir" />
                  </div>
                  <div className="logo-item">
                    <img src="/partners/bk-logo.png" alt="Bank of Kigali" />
                  </div>
                  <div className="logo-item">
                    <img src="/partners/bralirwa-logo.png" alt="Bralirwa" />
                  </div>
                  <div className="logo-item">
                    <img src="/partners/lemigo-logo.png" alt="Lemigo Hotel" />
                  </div>
                  <div className="logo-item">
                    <img src="/partners/radisson-logo.png" alt="Radisson Blue" />
                  </div>
                  <div className="logo-item">
                    <img src="/partners/rra-logo.png" alt="RRA" />
                  </div>
                  <div className="logo-item">
                    <img src="/partners/moshions-logo.png" alt="Moshions" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Services Section */}
          <section className="services-section" id="services-section">
            <div className="services-header">
              <h2 className="services-title">Our Services</h2>
              <p className="services-description">
                Discover powerful features designed to transform your business operations
              </p>
            </div>

            <div className="services-carousel">
              {/* Left Navigation Button */}
              <button className="nav-button nav-button-left" onClick={prevSlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div 
                ref={trackRef}
                className="services-track"
                style={{ 
                  transform: `translateX(-${currentSlide * 304}px)`,
                  transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                }}
              >
                {services.map((service, index) => (
                  <div key={`${service.title}-${index}`} className="service-card">
                    <div className="service-icon">
                      <span>{service.icon}</span>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                      <ul className="service-features">
                        {service.features.map((feature, i) => (
                          <li key={i} className="service-feature">
                            <span className="feature-dot">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Navigation Button */}
              <button className="nav-button nav-button-right" onClick={nextSlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="slide-indicators">
              {originalServices.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === (currentSlide % originalServices.length) ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </section>

          {/* Pricing Section - Commented Out */}
          {/*
          <section className="pricing-section" id="pricing-section">
            <div className="pricing-header">
              <h1 className="pricing-title">Choose the right plan for your business</h1>
              
              <div className="billing-toggle">
                <button 
                  className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
                  onClick={() => setBillingCycle('monthly')}
                >
                  Monthly
                </button>
                <button 
                  className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
                  onClick={() => setBillingCycle('yearly')}
                >
                  Yearly
                </button>
              </div>
            </div>

            <div className="pricing-grid">
              {plans.map((plan) => (
                <div key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && (
                    <div className="popular-badge">MOST POPULAR</div>
                  )}
                  
                  <div className="card-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <p className="plan-description">{plan.description}</p>
                  </div>

                  <div className="price-container">
                    <span className="price">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="price-period">
                      / {billingCycle === 'monthly' ? 'Monthly' : 'Yearly'}
                    </span>
                  </div>

                  <ul className="features-list">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`cta-button ${plan.popular ? 'popular-btn' : ''}`}>
                    {plan.name === 'Pro' ? 'Explore Live Demo' : 'Start free trial'} →
                  </button>
                </div>
              ))}
            </div>
          </section>
          */}
        </div>
      </main>

      {/* Scroll to Top Button */}
      {isClient && mounted && showScrollTop && (
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
