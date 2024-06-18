  import React, { useState } from 'react';
  import './HeaderComponent.css';
  import SideButtonsComponent from './SideButtonsComponent';

  const HeaderComponent = () => {
    const [showMore, setShowMore] = useState(false);

    const handleToggleMore = () => {
      setShowMore(!showMore);
    };

    return (
      <header id="home" className="header">
        <div className="profile-image">
          <img src={`${process.env.PUBLIC_URL}/images/hulk.jpg`} alt="Profile" />
        </div>
        <div className="intro">
          <h1>I'm Narendra Gandikota.</h1>
          <h2>Student</h2>
          <p>I am passionate about becoming a data scientist. I love finding patterns in data and turning them into useful insights. My curiosity and determination drive me to learn and master data analysis and machine learning. I am eager to use my skills to make a positive impact and solve real-world problems. My journey is fueled by a blend of technical skills and creative thinking, making me excited for the future in data science.</p>
          <button onClick={handleToggleMore}>
            {showMore ? 'Show Less' : 'More About Me'}
          </button>
          {showMore && (
            <div className="extra-info">
              <p>
                In addition to my passion for data science, I enjoy exploring new technologies and staying up-to-date with industry trends. I am an avid learner, often diving into online courses and tutorials to expand my knowledge. Outside of academics, I like to work on personal projects that challenge me and allow me to apply what I've learned in practical ways. My goal is to contribute to innovative solutions that can help make a difference in the world.
              </p>
              <p>
                When I'm not immersed in data, you can find me indulging in my hobbies such as reading science fiction novels, playing chess, and hiking. These activities help me maintain a balanced lifestyle and fuel my creativity. I believe in continuous improvement and am always looking for opportunities to grow both personally and professionally.
              </p>
            </div>
          )}
        </div>
        <SideButtonsComponent />
      </header>
    );
  }

  export default HeaderComponent;
