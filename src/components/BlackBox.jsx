import React, { useState } from 'react';
import '../assets/styles/BlackBox.css';
import ExploreExoPlanet from './ExploreExoPlanet';
import BlackBoxButton from './BlackBoxButton';

const BlackBox = ({ title, planetname, maintext, onDrawConstellationClick, blur, changeBlur }) => {
    const [showExplore, setShowExplore] = useState(false);
    const [showBlackBox, setShowBlackBox] = useState(true); // State to manage visibility of BlackBox

    // Function to toggle visibility of the ExploreExoPlanet component
    const handleButtonClick = () => {
        setShowExplore(prevShowExplore => !prevShowExplore); // Toggle the value
    };

    // Function to hide BlackBox and show Draw Constellation button
    const imageDisplayClick = () => {
        setShowBlackBox(false); // Hide the BlackBox when imageDisplay is clicked
    };


    return (
        <div>
            {blur ? ( // Render BlackBox if showBlackBox is true
                <div className='BlackBoxMainContainer'>
                    <h1>{title}</h1>
                    <h2>{planetname}</h2>
                    <p>{maintext}</p>
                    <div className="ExploreButtonWrapper">
                        <button className='ExploreButton' onClick={handleButtonClick}>
                            Explore Exoplanet
                        </button>
                        <BlackBoxButton onClick={changeBlur}>
                            View Image
                        </BlackBoxButton>
                        {/* Conditionally render ExploreExoPlanet when the button is clicked */}
                        {showExplore && <ExploreExoPlanet />}
                    </div>
                </div>
            ) : (
                // Render this when BlackBox is hidden
                <div>
                    <BlackBoxButton className="DrawConstellationButton" onClick={onDrawConstellationClick}>
                        Draw Constellation
                    </BlackBoxButton>
                </div>
            )}
        </div>
    );
};

export default BlackBox;
