import React, { useRef, useState } from 'react';
import '../assets/styles/BlackBox.css';
import BlackBoxButton from './BlackBoxButton';

const BlackBox = ({ title, planetname, maintext, blur, changeBlur, toggleMoons }) => {
    const [showBlackBox, setShowBlackBox] = useState(true);
    const [showDrawConstellation, setShowDrawConstellation] = useState(false);
    const canvasRef = useRef(null);

    // Handle hiding the BlackBox and showing the canvas
    const imageDisplayClick = () => {
        setShowBlackBox(false);
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

    return (
        <div>
            {showBlackBox ? (
                <div className='BlackBoxMainContainer'>
                    <h1>{title}</h1>
                    <h2>{planetname}</h2>
                    <p>{maintext}</p>
                    <div className="ExploreButtonWrapper">
                        <BlackBoxButton onClick={changeBlur}
                        changeMoons = {toggleMoons}>
                            View Image
                        </BlackBoxButton>
                        <BlackBoxButton onClick={imageDisplayClick} 
                        changeMoons = {toggleMoons}>
                            Draw Constellation
                        </BlackBoxButton>
                    </div>
                </div>
            ) : (
                // Render the canvas when BlackBox is hidden and drawing is activated
                <div>
                    <canvas
                        ref={canvasRef}
                        className="DrawingCanvas"
                        onMouseDown={handleMouseDown}
                        width={window.innerWidth}
                        height={window.innerHeight}
                    ></canvas>
                </div>
            )}
        </div>
    );
};

export default BlackBox;
