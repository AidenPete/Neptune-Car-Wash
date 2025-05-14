import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import logo from '../../assets/images/logo.png'; // Consistent import
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="logo">
        <img src={logo} alt="Neptune's Divine Car Wash Logo" className="logo-img" />
        <h1>Neptune's Divine Car Wash</h1>
      </a>
      
      <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav>
        <ul className={menuOpen ? 'active' : ''}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#booking" onClick={toggleMenu}>Booking</a></li>
          <li><a href="#preview" onClick={toggleMenu}>Preview</a></li>
          <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
      
      <button id="install-btn" className="install-btn" aria-label="Install app">
        <FaDownload /> Install App
      </button>
    </header>
  );
};

export default Header;