import React, { useState } from 'react';
import './SideButtonsComponent.css';

const SideButtonsComponent = () => {
  const [tooltip, setTooltip] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = (text) => {
    setTooltip(text);
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handleButtonClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="side-buttons">
      <button
        className="side-button"
        onClick={() => handleButtonClick('home')}
        onMouseEnter={() => handleMouseEnter('Home')}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa fa-home"></i>
      </button>
      <button
        className="side-button"
        onClick={() => handleButtonClick('about')}
        onMouseEnter={() => handleMouseEnter('About')}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa fa-user"></i>
      </button>
      <button
        className="side-button"
        onClick={() => handleButtonClick('skills')}
        onMouseEnter={() => handleMouseEnter('Skills')}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa fa-code"></i>
      </button>
      <button
        className="side-button"
        onClick={() => handleButtonClick('experience')}
        onMouseEnter={() => handleMouseEnter('Education')}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa fa-book"></i>
      </button>
      <button
        className="side-button"
        onClick={() => handleButtonClick('portfolio')}
        onMouseEnter={() => handleMouseEnter('Projects')}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa fa-project-diagram"></i>
      </button>
      <button
        className="side-button"
        onClick={() => handleButtonClick('contact')}
        onMouseEnter={() => handleMouseEnter('Contact')}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fa fa-envelope"></i>
      </button>
      <button
        className="side-button"
        onClick={() => handleButtonClick('media')}
        onMouseEnter={() => handleMouseEnter('Media')}
        onMouseLeave={handleMouseLeave}
      >
        <i className="fab fa-twitter"></i>
      </button>

      <div id="content">
        {tooltipVisible && <div className="tooltip">{tooltip}</div>}
      </div>
    </div>
  );
};

export default SideButtonsComponent;
