import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PRODUCTS', href: '/products'},
  ];
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

    return (
      <>
         {/* Navigation */}
      <nav className="nav-container">
        <div className="container">
          <div className="nav-wrapper">
            {/* Logo */}
            <Link href="/" className="logo">
              <Image 
                src="/logo.png" 
                alt="Amoria Tech Global" 
                width={200}
                height={200}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="nav-center">
              <div className="nav-pills">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`nav-pill ${pathname === item.href ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              ☰
            </button>

            {/* Enhanced Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <div className="mobile-menu-header">
                {/* Logo */}
                <Link href="/" className="logo">
                <Image 
                    src="/logo.png" 
                    alt="Amoria Tech Global" 
                    width={200}
                    height={200}
                    priority
                />
                </Link>
                <button
                  className="mobile-menu-close"
                  onClick={toggleMobileMenu}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <div className="mobile-menu-content">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`mobile-menu-item ${pathname === item.href ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mobile-menu-footer">
                <div className="mobile-social-links">
                  <a href="https://facebook.com/share/1Ga8spfH7y/?mibextid=wwXIfr" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://instagram.com/amoria.globaltech?igsh=bjhsN3NrYTU2c2t5" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://x.com/amoria32419" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="https://linkedin.com/in/amoria-global-tech-8a774736b" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
                <div className="mobile-contact-info">
                  <p><i className="bi bi-telephone"></i> <a href="tel:+250788437347">+250 788 437 347</a></p>
                  <p><i className="bi bi-envelope"></i> <a href="mailto:info@amoriaglobal.com">info@amoriaglobal.com</a></p>
                  <p><i className="bi bi-geo-alt"></i> Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
        </>
    );
}
export default Navbar;