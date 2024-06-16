import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import AboutMeComponent from './components/AboutMeComponent';
import SkillsComponent from './components/SkillsComponent';
import ExperienceComponent from './components/ExperienceComponent';
import PortfolioComponent from './components/PortfolioComponent';
import ContactComponent from './components/ContactComponent';
import BottomSection from './components/BottomSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <AboutMeComponent />
      <SkillsComponent />
      <ExperienceComponent />
      <PortfolioComponent />
      <ContactComponent />
      <BottomSection />
     
    </div>
  );
}

export default App;
