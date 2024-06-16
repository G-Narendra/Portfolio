import React from 'react';
import './AboutMeComponent.css';

const AboutMeComponent = () => {
  return (
    <section id="about" className="about-me">
      <div className="container">
        <h2>About Me</h2>
        <div className="personal-info">
          <p>First Name: Narendra</p>
          <p>Last Name: Gandikota</p>
          <p>Age: 20 Years</p>
          <p>Nationality: Indian</p>
          <p>Address: Andhrapradesh, Narasaraopet</p>
          <p>Phone: +91 9948566970</p>
          <p>Email: narendragandikota2540@mail.com</p>
          <p>Languages: Telugu, English</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMeComponent;
