import React from 'react';
import './SkillsComponent.css';

const skills = [
  { name: 'Python', image: 'python.png' },
  { name: 'SQL', image: 'sql.png' },
  { name: 'Statistics', image: 'statistics.png' },
  { name: 'Machine Learning', image: 'machine learning.png' },
  { name: 'Data Visualization', image: 'data visualization.png' },
  { name: 'Tableau', image: 'tableau.png' },
  { name: 'Excel', image: 'excel.png' },
  { name: 'PowerBI', image: 'power-bi.png' }
];

const certifications = [
  { 
    title: 'Data Science', 
    organization: 'SkillDzire', 
    link: 'https://in.docs.wps.com/l/sINeQ-fvMAcGy87QG?v=v2' 
  },
  { 
    title: 'AI-ML Virtual Internship', 
    organization: 'EduSkills', 
    link: 'https://drive.google.com/file/d/1uPpVsnnyenhcAQ2XsZUsT_rHvFDSvTeN/view?usp=sharing' 
  },
  { 
    title: 'AI and Data Skills Internship Cum', 
    organization: 'Ybi Foundations', 
    link: 'https://drive.google.com/file/d/1g5RAPTJ92rBsOZ3p3HceJ-NjjOEdbNbS/view' 
  },
  { 
    title: 'Data Science and Machine Learning Internship', 
    organization: 'Ybi Foundations', 
    link: 'https://drive.google.com/file/d/1GwG7JxF61LHLt-Y0msOqoYinLuIivPzH/view?usp=sharing' 
  },
  { 
    title: 'Data Science and Machine Learning Capstone Project', 
    organization: 'IBM', 
    link: 'https://drive.google.com/file/d/1729MHGdxpCZW_VdIS6a8Tjcjfa28LpyV/view' 
  },
  { 
    title: 'Machine Learning with Python', 
    organization: 'IBM', 
    link: 'https://drive.google.com/file/d/1ByJ-cYhafi1K1EOQ--GWBdCTAVSuyf-2/view' 
  },
  { 
    title: 'Data Visualization with Python', 
    organization: 'Cognitive Class', 
    link: 'https://drive.google.com/file/d/1uYNoIEnVRNkaJijIHIuiVX3n0j4l7Wu_/view?usp=sharing' 
  },
  { 
    title: 'Python 101 For Data Science', 
    organization: 'Cognitive Class', 
    link: 'https://drive.google.com/file/d/1ix1R7d9QVH1PyAVgo7SMLIMdAmlRPbrI/view' 
  },
  { 
    title: 'Deep Learning - IIT Ropar', 
    organization: 'NPTEL', 
    link: 'https://drive.google.com/file/d/1y97g7G92JwDJwE6mBNr8XF7Z-z_MzTvT/view' 
  },
  { 
    title: 'Python Problem Solving (Intermediate)', 
    organization: 'HackerRank', 
    link: 'https://drive.google.com/file/d/1eC1B-1-IswUN0sVyqKT-Q3Ly1wQGZxZE/view?usp=sharing' 
  },
  { 
    title: 'SQL (Intermediate)', 
    organization: 'HackerRank', 
    link: 'https://drive.google.com/file/d/1D2WbVvxERoFQf93jRcxcZ4wz36RYAJzf/view?usp=sharing' 
  },
  { 
    title: 'Data Analysis with Python', 
    organization: 'Cognitive Class', 
    link: 'https://drive.google.com/file/d/1y5v2j9Q2S7pjOWWeiYfvZrcylVXeXG_H/view?usp=sharing' 
  }
];

const SkillsAndCertificationsComponent = () => {
  return (
    <section id="skills-and-certifications" className="skills-and-certifications">
      <div className="container">
        {/* Skills Section */}
        <h2>My Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <img src={`images/${skill.image}`} alt={`${skill.name} icon`} className="skill-image" />
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <h2>Certifications</h2>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div key={index} className="certification">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <h3>{cert.title}</h3>
              </a>
              <p>{cert.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsAndCertificationsComponent;
