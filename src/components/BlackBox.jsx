import React, { useState } from 'react';
import '../assets/styles/BlackBox.css';
import ExploreExoPlanet from './ExploreExoPlanet';
import BlackBoxButton from './BlackBoxButton';

const BlackBox = ({ title, planetname, maintext, onDrawConstellationClick, showDrawConstellation, blur, changeBlur }) => {
    const [showExplore, setShowExplore] = useState(false);
    const [showBlackBox, setShowBlackBox] = useState(true);

    // Toggle ExploreExoPlanet visibility
    const handleButtonClick = () => {
        setShowExplore(prevShowExplore => !prevShowExplore);
    };

    // Handle "View Image" click (removing the blur)
    const imageDisplayClick = () => {
        setShowBlackBox(false);
        changeBlur(); // Call the function passed in to remove blur
    };

    return (
        <div>
            {showBlackBox ? ( // Render BlackBox if it's visible
                <div className='BlackBoxMainContainer'>
                    <h1>{title}</h1>
                    <h2>{planetname}</h2>
                    <p>{maintext}</p>
                    <div className="ExploreButtonWrapper">
                        <button className='ExploreButton' onClick={handleButtonClick}>
                            Explore Exoplanet
                        </button>
                        <BlackBoxButton onClick={imageDisplayClick}>
                            View Image
                        </BlackBoxButton>
                        {showExplore && <ExploreExoPlanet />}
                    </div>
                </div>
            ) : (
                // When the image is visible (BlackBox hidden)
                showDrawConstellation ? (
                    <div>
                        <BlackBoxButton className="DrawConstellationButton" onClick={onDrawConstellationClick}>
                            Draw Constellation
                        </BlackBoxButton>
                    </div>
                ) : null
            )}
        </div>
    );
};

export default BlackBox;
