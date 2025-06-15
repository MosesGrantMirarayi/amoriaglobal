import Link from "next/link";

const Footer = () => {
    return (
        <>
        
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3 className="footer-title">Useful Links</h3>
              <ul className="footer-links">
                <li><Link href="/" className="footer-link">Home</Link></li>
                <li><Link href="/about" className="footer-link">About Us</Link></li>
                <li><Link href="/services" className="footer-link">Services</Link></li>
                <li><Link href="/products" className="footer-link">Products</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Our Location</h3>
              <a 
                href="https://maps.google.com/?q=Kigali,Rwanda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-location-link"
              >
                <i className="bi bi-geo-alt-fill"></i>
                <span>Kigali, Rwanda</span>
              </a>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Contact Us</h3>
              <div className="footer-contact ">
                <a href="tel:+250788437347" className="contact-item">
                  <i className="bi bi-telephone-fill contact-icon"></i>
                  <span className="contact-text">+250 788 437 347</span>
                </a>
                <a href="mailto:info@amoriaglobal.com" className="contact-item">
                  <i className="bi bi-envelope-fill contact-icon"></i>
                  <span className="contact-text">info@amoriaglobal.com</span>
                </a>
                <div className="contact-item">
                  <i className="bi bi-clock-fill contact-icon"></i>
                  <span className="contact-text">Mon-Fri: 8am - 6pm</span>
                </div>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Follow Us On </h3>
              <div className="social-links">
                <a 
                  href="https://facebook.com/share/1Ga8spfH7y/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a 
                  href="https://instagram.com/amoria.globaltech?igsh=bjhsN3NrYTU2c2t5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a 
                  href="https://x.com/amoria32419" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link twitter"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a 
                  href="https://linkedin.com/in/amoria-global-tech-8a774736b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 Amoria Global Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
        </>
    );
}
export default Footer;