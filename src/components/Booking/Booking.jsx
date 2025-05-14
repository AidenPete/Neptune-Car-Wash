import { useState, useEffect } from 'react';
import WaveDivider from '../WaveDivider/WaveDivider';
import { FaCloudSun, FaCloudRain, FaCloud } from 'react-icons/fa';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    vehicle: '',
    services: []
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [showDiscount, setShowDiscount] = useState(false);
  const [weather, setWeather] = useState({
    icon: <FaCloudSun />,
    temp: '72°F',
    recommendation: 'Perfect for ceramic coating!'
  });

  const servicePrices = {
    triton: 15,
    neptune: 30,
    olympian: 60,
    ceramic: 120,
    undercarriage: 25
  };

  // Simulate weather API call
  useEffect(() => {
    const weatherConditions = [
      {
        icon: <FaCloudSun />,
        temp: '78°F',
        recommendation: 'Try our UV-protection coating!'
      },
      {
        icon: <FaCloudRain />,
        temp: '64°F',
        recommendation: 'Undercarriage wash recommended'
      },
      {
        icon: <FaCloud />,
        temp: '72°F',
        recommendation: 'Perfect day for a divine shine!'
      }
    ];
    
    const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    setWeather(randomWeather);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (e) => {
    const { name, checked } = e.target;
    
    setFormData(prev => {
      const updatedServices = checked
        ? [...prev.services, name]
        : prev.services.filter(s => s !== name);
      
      // Calculate total price
      const total = updatedServices.reduce((sum, service) => sum + (servicePrices[service] || 0), 0);
      setTotalPrice(total);
      setShowDiscount(total > 75);
      
      return { ...prev, services: updatedServices };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || 
        !formData.date || !formData.time || !formData.vehicle) {
      alert('Please fill in all required fields');
      return;
    }

    if (formData.services.length === 0) {
      alert('Please select at least one service');
      return;
    }

    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert(`Thank you, ${formData.name}! Your booking request has been sent. Neptune will contact you soon.`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      vehicle: '',
      services: []
    });
    setTotalPrice(0);
    setShowDiscount(false);
  };

  return (
    <>
      <section id="booking" className="booking">
        <div className="container">
          <div className="booking-container">
            <h2 className="text-center">Request Your Divine Appointment</h2>
            
            <div className="weather-widget">
              <div className="weather-icon">{weather.icon}</div>
              <div className="weather-info">
                <span className="temp">{weather.temp}</span>
                <span className="recommendation">{weather.recommendation}</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="booking-form" noValidate>
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="date">Date:</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]} // Disable past dates
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="time">Time:</label>
                  <input 
                    type="time" 
                    id="time" 
                    name="time" 
                    value={formData.time}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="vehicle">Vehicle Type:</label>
                  <input 
                    type="text" 
                    id="vehicle" 
                    name="vehicle" 
                    value={formData.vehicle}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-column">
                <div className="services-selection">
                  <h3>Select Your Divine Services</h3>
                  
                  <div className="main-services">
                    <div className="service-option">
                      <input 
                        type="checkbox" 
                        id="triton" 
                        name="triton" 
                        checked={formData.services.includes('triton')}
                        onChange={handleServiceChange}
                      />
                      <label htmlFor="triton">
                        <span className="service-name">Triton's Touch</span>
                        <span className="service-price">$15</span>
                        <span className="service-desc">Basic exterior wash</span>
                      </label>
                    </div>
                    
                    <div className="service-option">
                      <input 
                        type="checkbox" 
                        id="neptune" 
                        name="neptune" 
                        checked={formData.services.includes('neptune')}
                        onChange={handleServiceChange}
                      />
                      <label htmlFor="neptune">
                        <span className="service-name">Neptune's Fury</span>
                        <span className="service-price">$30</span>
                        <span className="service-desc">Complete interior/exterior</span>
                      </label>
                    </div>
                    
                    <div className="service-option">
                      <input 
                        type="checkbox" 
                        id="olympian" 
                        name="olympian" 
                        checked={formData.services.includes('olympian')}
                        onChange={handleServiceChange}
                      />
                      <label htmlFor="olympian">
                        <span className="service-name">Olympian Elite</span>
                        <span className="service-price">$60</span>
                        <span className="service-desc">Premium full detail</span>
                      </label>
                    </div>
                  </div>
                  
                  <h4>Add-On Services</h4>
                  <div className="addon-services">
                    <div className="service-option">
                      <input 
                        type="checkbox" 
                        id="ceramic" 
                        name="ceramic" 
                        checked={formData.services.includes('ceramic')}
                        onChange={handleServiceChange}
                      />
                      <label htmlFor="ceramic">
                        <span className="service-name">Ceramic Coating</span>
                        <span className="service-price">$120</span>
                        <span className="service-desc">6-month protection</span>
                      </label>
                    </div>
                    
                    <div className="service-option">
                      <input 
                        type="checkbox" 
                        id="undercarriage" 
                        name="undercarriage" 
                        checked={formData.services.includes('undercarriage')}
                        onChange={handleServiceChange}
                      />
                      <label htmlFor="undercarriage">
                        <span className="service-name">Underworld Undercarriage</span>
                        <span className="service-price">$25</span>
                        <span className="service-desc">Special undercarriage wash</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="price-summary">
                    <h4>Total: ${totalPrice}</h4>
                    {showDiscount && (
                      <p className="discount-note">
                        You've unlocked a free divine air freshener!
                      </p>
                    )}
                  </div>
                </div>
                
                <button type="submit" className="submit-button">
                  Offer to Neptune
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <WaveDivider />
    </>
  );
};

export default Booking;