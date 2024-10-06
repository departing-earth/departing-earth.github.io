import React, { useState } from 'react';
import '../assets/styles/ZoomablePlanet.css'; // Ensure you create a CSS file for styles

const ZoomablePlanet = ({ planetName, facts }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // State to handle fade-out effect

  const handleClick = () => {
    setIsZoomed(true); // Show the fact box
  };

  // Handle close with fade-out
  const handleClose = () => {
    setFadeOut(true); // Trigger fade-out effect
    setTimeout(() => {
      setIsZoomed(false); // Close the fact box after fade-out
      setFadeOut(false); // Reset fade-out state
    }, 500); // Match this duration with your animation duration
  };

  return (
    <div className="planet-container">
      <img
        src="./src/assets/images/Moon.svg" // Replace with your planet image URL
        alt={planetName}
        className="planet-image"
        onClick={handleClick}
      />
      {isZoomed && (
        <div className={`fact-overlay ${fadeOut ? 'fade-out' : ''}`}> {/* Add fade-out class */}
          <div className="fact-box">
            <button className="close-button" onClick={handleClose}>✖</button>
            <h1>{planetName}</h1>
            {/* Changed from <p> to <ul> to render facts as a list */}
            <ul>
              {facts.map((fact, index) => ( // Map through facts and render each as a list item
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZoomablePlanet;
