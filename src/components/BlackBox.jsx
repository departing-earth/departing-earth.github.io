import React, { useRef, useState } from 'react';
import '../assets/styles/BlackBox.css';
import BlackBoxButton from './BlackBoxButton';
import ExploreExoPlanet from './ExploreExoPlanet';
import { useNavigate } from 'react-router-dom';
import { sendImage } from "../api/fetch.js";

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

    const handleSubmitDrawing = async () => {
        // const canvas = canvasRef.current;
        // const ctx = canvas.getContext('2d');

        // const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // for (let i = 0; i < imageData.data.length; i += 4) {
        //     // Check if the pixel is white
        //     if (imageData.data[i] === 255 && 
        //         imageData.data[i + 1] === 255 && 
        //         imageData.data[i + 2] === 255) {
        //         imageData.data[i] = 0;
        //         imageData.data[i + 1] = 0;
        //         imageData.data[i + 2] = 0;
        //     }
        // }

        // ctx.putImageData(imageData, 0 ,0);
        // const imageLink = canvas.toDataURL('image/webp');

        // const downloadLink = document.createElement('a');
        // downloadLink.href = imageLink;
        // downloadLink.download = 'constellation_drawing.webp';  // Filename for the saved image
    
        // // Programmatically click the link to trigger the download
        // downloadLink.click();
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Create a new canvas for the white background
        const newCanvas = document.createElement('canvas');
        const newCtx = newCanvas.getContext('2d');

        // Set the dimensions of the new canvas
        newCanvas.width = canvas.width;
        newCanvas.height = canvas.height;

        // Fill the new canvas with a white background
        newCtx.fillStyle = 'white';
        newCtx.fillRect(0, 0, newCanvas.width, newCanvas.height);

        // Get the image data from the original canvas
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const newData = newCtx.getImageData(0, 0, canvas.width, canvas.height);

        // Draw the black strokes onto the new canvas
        for (let i = 0; i < imageData.data.length; i += 4) {
            // Check if the pixel is black (or close to black)
            if (imageData.data[i] === 255 && 
                imageData.data[i + 1] === 255 && 
                imageData.data[i + 2] === 255) {
                // Set the corresponding pixel on the new canvas to black
                // newCtx.fillStyle = 'black';
                // newCtx.fillRect((i / 4) % canvas.width, Math.floor((i / 4) / canvas.width), 1, 1);
                newData.data[i] = 0;
                newData.data[i + 1] = 0;
                newData.data[i + 2] = 0;
            }
        }

        newCtx.putImageData(newData, 0, 0);
        const newImageData = newCanvas.toDataURL('image/webp');
        console.log("here");
        newCanvas.toBlob(async function(blob) {
            const formData = new FormData();
            formData.append('doodle', blob);
            const story = await sendImage({ data: formData });
            console.log("story: " + story);
            navigate('/story', { state: { story } });
        });

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
