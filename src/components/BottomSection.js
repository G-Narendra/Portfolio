import React from 'react';
import './BottomSection.css';

const BottomSection = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div id="media" className="bottom-section">
      <footer id="foot">
        <div className="social-icons">
          <img 
            src={`${process.env.PUBLIC_URL}/images/github.png`} 
            alt="Github" 
            onClick={() => handleIconClick('https://github.com/G-Narendra')} 
          />
          <img 
            src={`${process.env.PUBLIC_URL}/images/instagram-new.png`} 
            alt="Instagram" 
            onClick={() => handleIconClick('https://www.instagram.com/mr_narendra444/')} 
          />
          <img 
            src={`${process.env.PUBLIC_URL}/images/linkedin.png`} 
            alt="LinkedIn" 
            onClick={() => handleIconClick('https://www.linkedin.com/in/g-narendra/')} 
          />
          <img 
            src={`${process.env.PUBLIC_URL}/images/hackerrank.png`} 
            alt="Hackerrank" 
            onClick={() => handleIconClick('https://www.hackerrank.com/profile/narendragandiko1')} 
          />
        </div>
        <div className="copyright">
          <p>&copy; Nari 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default BottomSection;
