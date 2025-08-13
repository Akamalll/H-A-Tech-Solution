import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for background change
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/show header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>H&A Tech Solution</h1>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <a href="#home" onClick={() => setIsMenuOpen(false)}>
                  Beranda
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => setIsMenuOpen(false)}>
                  Products
                </a>
              </li>
              <li>
                <a href="#solutions-and-services" onClick={() => setIsMenuOpen(false)}>
                  Solusi & Layanan
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={() => setIsMenuOpen(false)}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#resources" onClick={() => setIsMenuOpen(false)}>
                  Resources
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="btn btn-contact">Contact Us</button>
            <div className="mobile-menu-btn" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
