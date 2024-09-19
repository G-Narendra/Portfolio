import React from 'react';
import './ExperienceComponent.css';
const educations = [
  { year: '2014-2019', degree: 'Secondary Schooling', institution: 'ZPHSchool, Dodleru' },
  { year: '2019-2021', degree: 'Intermediate', institution: 'Sri Krishna Chaithanya Jr College, Narasaropet' },
  { year: '2021-2025', degree: 'Bachelor Degree', institution: 'Narasaraopeta Engineering College(Autonomous), Narasaropet' }
];

const ExperienceComponent = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Education</h2>
        <div className="education-list">
          {educations.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.year}</h3>
              <p>{edu.degree} - {edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceComponent;
