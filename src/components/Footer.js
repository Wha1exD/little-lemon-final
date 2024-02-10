import React from 'react';
import small_logo from "../images/Logo .svg"

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
                <img src={small_logo} alt=""/>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
        </div>
        <div>
        <h3>
          Doormat Navigation
        </h3>
        <ul>
      <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#menu'>Menu</a></li>
        <li><a href='#reservation'>Reservation</a></li>
        <li><a href='/'>Order Online</a></li>
        <li><a href='/'>Log in</a></li>
      </ul>
      </div>

         <div>
          <h3>
            Contact
          </h3>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
        <div>
          <h3>Social Media links</h3>
          <p><a href='/'>Instagram</a></p>
          <p><a href='/'>Facebook</a></p>
          <p><a href='/'>Twitter</a></p>

        </div>
      </section>
        </footer>
  );
};

export default Footer;