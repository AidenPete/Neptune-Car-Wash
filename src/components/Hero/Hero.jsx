// Using local asset (Option 1)
import heroImage from '../../assets/images/hero-bg.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 95, 115, 0.7), rgba(0, 95, 115, 0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="hero-content">
        <h2>Your Car, Blessed by the God of the Sea</h2>
        <p>Experience the divine transformation only Neptune can provide.</p>
        <a href="#booking" className="cta-button">Summon a Shine</a>
      </div>
    </section>
  );
};

export default Hero;