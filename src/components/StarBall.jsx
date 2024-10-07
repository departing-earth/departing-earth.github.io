// BrightBall.js
import React from 'react';
import '../assets/styles/StarBall.css';

const StarBall = ({ brightness, coordinates }) => {
    // Split the coordinates string and parse them as numbers
    const [x, y] = coordinates.replace(/[()]/g, '').split(',').map(Number);

    return (
        <div
            className="ball"
            style={{
                filter: `brightness(${brightness})`, // Adjust brightness based on props
                boxShadow: `0 0 2px rgba(255, 255, 255, ${brightness})`, // Adjust glow based on brightness
                position: 'absolute', // Allow positioning using coordinates
                left: `${x}px`, // Set the horizontal position
                top: `${y}px`, // Set the vertical position
            }}
        ></div>
    );
};

export default StarBall;
