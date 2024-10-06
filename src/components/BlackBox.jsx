import React, { useRef, useState } from 'react';
import '../assets/styles/BlackBox.css';
import BlackBoxButton from './BlackBoxButton';
import ExploreExoPlanet from './ExploreExoPlanet';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
const BlackBox = ({ title, planetname, maintext, blur, changeBlur, toggleMoons }) => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const [showExplore, setShowExplore] = useState(false);
    const [showBlackBox, setShowBlackBox] = useState(true); 
    const [showDrawButton, setShowDrawButton] = useState(false); // Manages Draw Button visibility
    const canvasRef = useRef(null);

    // Handle hiding the BlackBox, showing the Draw Constellation button, and turning off the blur
    const imageDisplayClick = () => {
        setShowBlackBox(false);  // Hide the BlackBox
        setShowDrawButton(true); // Show the Draw Constellation button
        changeBlur();            // Turn off the blur
    };
    const handleButtonClick = () => {
        setShowExplore(prevShowExplore => !prevShowExplore); // Toggle the value
    };

    // Drawing logic
    const handleMouseDown = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        let isDrawing = true;

        const draw = (event) => {
            if (!isDrawing) return;
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'white';
            ctx.lineCap = 'round';

            ctx.lineTo(event.clientX - rect.left, event.clientY - rect.top);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(event.clientX - rect.left, event.clientY - rect.top);
        };

        const stopDrawing = () => {
            isDrawing = false;
            ctx.beginPath();  // Reset the drawing path
        };

        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseleave', stopDrawing);
    };

    const handleSubmitDrawing = () => {
        alert("Your constellation has been submitted!");
        navigate('/story'); 

    };
    return (
        <div>
            {showBlackBox ? (
                <div className='BlackBoxMainContainer'>
                    <h1>{title}</h1>
                    <h2>{planetname}</h2>
                    <p>{maintext}</p>
                    <div className="ExploreButtonWrapper">
                    <button className='ExploreButton' onClick={handleButtonClick}>
                            Explore Exoplanet
                        </button>
                        {/* View Image Button */}
                        <BlackBoxButton onClick={imageDisplayClick}
                         changeMoons = {toggleMoons}>
                            View Image
                        </BlackBoxButton>
                        {showExplore && <ExploreExoPlanet />}
                    </div>
                </div>
            ) : (
                // Render the canvas or Draw Constellation button after View Image is clicked
                <div>
                    {showDrawButton && (
                        <BlackBoxButton onClick={() => setShowDrawButton(false)}
                        changeMoons = {toggleMoons}>
                            Draw Constellation
                        </BlackBoxButton>
                    )}
                    {!showDrawButton && (
                        <>
                        <canvas
                            ref={canvasRef}
                            className="DrawingCanvas"
                            onMouseDown={handleMouseDown}
                            width={window.innerWidth}
                            height={window.innerHeight}
                        ></canvas>
                        <button className="SubmitButton" onClick={handleSubmitDrawing}>
                    Submit Drawing
                    </button>
                    </>
                    )}
                    
                </div>
            )}
        </div>
    );
};

export default BlackBox;
