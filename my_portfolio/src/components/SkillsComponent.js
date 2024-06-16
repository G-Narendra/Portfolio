import React from 'react';
import './SkillsComponent.css';

const skills = [
  { name: 'Python', image: 'python.png' },
  { name: 'SQL', image: 'sql.png' },
  { name: 'Statistics', image: 'statistics.png' },
  { name: 'Machine Learning', image: 'machine learning.png' },
  { name: 'Data Visualization', image: 'data visualization.png' },
  { name: 'Tableau', image: 'tableau.png' },
  { name: 'Excel', image: 'excel.png' }
];

const SkillsComponent = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <img src={`images/${skill.image}`} alt={`${skill.name} icon`} className="skill-image" />
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsComponent;
