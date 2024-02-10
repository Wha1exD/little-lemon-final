import React from 'react';
import food from "../images/food1.avif";
import fishHover from "../images/fish.jpg";

const About = () => {
  return (
    <div className='about' id="about">
      <section className='aboutsec'>
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="aboutimg">
          <img src={food} alt="food" />
          <img src={fishHover} alt="" className="hover-image" />
        </div>
      </section>

    </div>
  );
};

export default About;
