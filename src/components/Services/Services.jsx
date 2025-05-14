import WaveDivider from '../WaveDivider/WaveDivider'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Triton's Touch",
      price: 15,
      description: "Basic exterior wash to cleanse your chariot of common road grime",
      features: [
        "Foam bath",
        "Rinse",
        "Hand dry",
        "Tire shine"
      ]
    },
    {
      id: 2,
      name: "Neptune's Fury",
      price: 30,
      description: "Complete interior and exterior wash fit for a sea god",
      features: [
        "Full exterior wash",
        "Interior vacuum",
        "Window cleaning",
        "Scent boost",
        "Dashboard polish"
      ]
    },
    {
      id: 3,
      name: "Olympian Elite",
      price: 60,
      description: "The ultimate divine treatment for your noble steed",
      features: [
        "Premium wash",
        "Ceramic coating",
        "Leather conditioning",
        "Undercarriage rinse",
        "Engine bay clean"
      ]
    }
  ]

  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <h2 className="text-center">Our Divine Services</h2>
          <p className="text-center mt-2">Choose from our range of godly cleaning packages, each designed to meet the needs of modern chariots.</p>
          
          <div className="service-grid mt-4">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <h3>{service.name}</h3>
                <div className="price">${service.price}</div>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <a href="#booking" className="book-button">Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider flipped />
    </>
  )
}

export default Services