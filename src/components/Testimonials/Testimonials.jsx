import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "My Toyota looks like it rolled straight out of Atlantis! The ceramic coating repels water like magic.",
      author: "Sarah M."
    },
    {
      id: 2,
      text: "Neptune's Fury package transformed my toyota Passo from a mom-mobile to a sea god's chariot!",
      author: "Angela K"
    },
    {
      id: 3,
      text: "I didn't believe in divine intervention until I saw what they did to my 10-year-old Honda.",
      author: "Maria G."
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="text-center">Divine Praise From Our Customers</h2>
        
        <div className="testimonial-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials