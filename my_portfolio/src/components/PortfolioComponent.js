import React, { useState, useEffect } from 'react';
import './PortfolioComponent.css';

const projects = [
  {
    id: 1,
    category: 'Data Analysis',
    image: `${process.env.PUBLIC_URL}/images/project1.jpg`,
    title: 'Sales Data Analysis',
    description: 'Analyzed sales data to identify trends and forecast future sales using Python.',
    extraDescription: 'Used various statistical methods and Python libraries like pandas and numpy to clean and analyze the data.',
    githubUrl: 'https://github.com/G-Narendra/Sales-Data-Analysis'
  },
  {
    id: 2,
    category: 'Deep Learning',
    image: `${process.env.PUBLIC_URL}/images/pancreas.png`,
    title: 'Early Detection and Classification of Pancreatic Cancer Using Medical Imaging',
    description: 'Used Deep Learning algorithms to predict the pancreatic Tumer based on various features.',
    extraDescription: 'Implemented using Python and Deep learning libraries like TensorFlow and Keras and make predictions.',
    githubUrl: 'https://github.com/G-Narendra/Pancreatic-cancer-detection.git' // Link not available
  },
  {
    id: 3,
    category: 'Visualization',
    image: `${process.env.PUBLIC_URL}/images/tableau.webp`,
    title: 'Healthcare Data Visualization',
    description: 'Created interactive dashboards using Tableau to visualize key business metrics.',
    extraDescription: 'Utilized Tableau’s features to create dashboards that help in decision making by visualizing healthcare data trends.',
    githubUrl: 'https://github.com/G-Narendra/Healthcare-data-analysis-using-Tableau'
  },
  {
    id: 4,
    category: 'Predictive Modeling',
    image: `${process.env.PUBLIC_URL}/images/stocks1.png`,
    title: 'Stock Price Prediction',
    description: 'Developed predictive models to forecast stock prices using machine learning techniques.',
    extraDescription: 'Used time series analysis and machine learning models to predict stock prices with a significant level of accuracy.',
    githubUrl: 'https://github.com/G-Narendra/Stock-Price-Prediction'
  },
  {
    id: 5,
    category: 'Data Analysis',
    image: `${process.env.PUBLIC_URL}/images/churn.png`,
    title: 'Customer Churn Analysis',
    description: 'Analyzed customer data to predict churn and identify retention strategies.',
    extraDescription: 'Applied data preprocessing and machine learning techniques to identify the factors affecting customer churn.',
    githubUrl: 'https://github.com/G-Narendra/Customer-Churn-Prediction'
  },
  {
    id: 6,
    category: 'Machine Learning',
    image: `${process.env.PUBLIC_URL}/images/social.png`,
    title: 'Sentiment Analysis',
    description: 'Implemented sentiment analysis on social media data to gauge customer sentiment.',
    extraDescription: 'Used natural language processing (NLP) techniques and machine learning models to classify the sentiment of social media posts.',
    githubUrl: 'https://github.com/G-Narendra/Sentiment-Analysis'
  }
];

const PortfolioComponent = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const [focusedProjectId, setFocusedProjectId] = useState(null);

  useEffect(() => {
    let timer;
    if (hoveredProjectId) {
      timer = setTimeout(() => {
        setFocusedProjectId(hoveredProjectId);
      }, 0);
    } else {
      setFocusedProjectId(null);
    }
    return () => clearTimeout(timer);
  }, [hoveredProjectId]);

  const handleMouseEnter = (projectId) => {
    setHoveredProjectId(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProjectId(null);
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>My Data Science Projects</h2>
        
        <div className="portfolio-list">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`portfolio-item ${
                focusedProjectId && focusedProjectId !== project.id ? 'hidden' : ''
              } ${focusedProjectId === project.id ? 'centered' : ''}`} 
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                </a>
              ) : (
                <>
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                </>
              )}
              {focusedProjectId === project.id ? (
                <>
                  <p>{project.description}</p>
                  <div className="extra-info">
                    <p>{project.extraDescription}</p>
                  </div>
                </>
              ) : (
                <div className="extra-info">
                  <p>{project.extraDescription}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioComponent;
