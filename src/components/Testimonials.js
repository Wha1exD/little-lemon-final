import React from 'react';

const Testimonial = () => {
  return (
    <div className='testimonial-container'>
      <h2 className='testimonial-title'><u>Testimonials</u></h2>
      <div className='testimonial-grid'>
        <div className='testimonial'>
          <div className='testimonial-content'>
            <p className='testimonial-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet neque eu neque convallis, eu dictum lacus lacinia."</p>
            <p className='testimonial-author'>- John Doe</p>
          </div>
        </div>
        <div className='testimonial'>
          <div className='testimonial-content'>
            <p className='testimonial-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet neque eu neque convallis, eu dictum lacus lacinia."</p>
            <p className='testimonial-author'>- Jane Smith</p>
          </div>
        </div>
        <div className='testimonial'>
          <div className='testimonial-content'>
            <p className='testimonial-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet neque eu neque convallis, eu dictum lacus lacinia."</p>
            <p className='testimonial-author'>- Michael Johnson</p>
          </div>
        </div>
        <div className='testimonial'>
          <div className='testimonial-content'>
            <p className='testimonial-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet neque eu neque convallis, eu dictum lacus lacinia."</p>
            <p className='testimonial-author'>- Emily Brown</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
