import React from 'react';
import '../../style/Testimonial.css';


const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      business: 'ABC Company',
      testimonial:
        'BizInsight Pro has transformed the way we analyze our data. It has helped us uncover valuable insights and make informed business decisions. Highly recommended!',
      imageSrc: 'john-doe.jpg', // Replace with the image source for John Doe's photo
    },
    {
      name: 'Jane Smith',
      business: 'XYZ Corporation',
      testimonial:
        `We have been using BizInsight Pro for our financial tracking, and it has made a significant impact on our efficiency. It's a fantastic tool for any business.`,
      imageSrc: 'jane-smith.jpg', // Replace with the image source for Jane Smith's photo
    },
    // Add more testimonials here
  ];

  return (
    <div className="customer-testimonials">
      <h2 className="section-title">Customer Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <img
              className="testimonial-image"
              src={testimonial.imageSrc}
              alt={testimonial.name}
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-business">{testimonial.business}</p>
            <p className="testimonial-text">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
