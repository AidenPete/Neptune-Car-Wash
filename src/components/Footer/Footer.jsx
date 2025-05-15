import { FaFacebookF, FaInstagram, FaTwitter, FaYelp, FaChevronRight, FaMapMarkerAlt, FaCity, FaPhone, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Neptune's Divine Car Wash</h3>
            <p>Where mortal vehicles receive godly treatment. Established 2023.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Yelp"><FaYelp /></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><FaChevronRight /> <a href="#home">Home</a></li>
              <li><FaChevronRight /> <a href="#services">Services</a></li>
              <li><FaChevronRight /> <a href="#booking">Booking</a></li>
              <li><FaChevronRight /> <a href="#preview">AR Preview</a></li>
              <li><FaChevronRight /> <a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li><FaMapMarkerAlt /> 123 Garden estate</li>
              <li><FaCity /> Poseidon's Trident house, PB 12345</li>
              <li><FaPhone /> 0712564246</li>
              <li><FaEnvelope /> divine@neptunewash.com</li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2025 Neptune's Divine Car Wash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer