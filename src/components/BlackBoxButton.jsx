import React from 'react';
import '../assets/styles/BlackBoxButton.css';

const BlackBoxButton = ({ onClick, children, changeMoons }) => {
    const handleButtonClick = () => {
        onClick();
        changeMoons(); // Call the function to toggle moon visibility
    };
    return (
        <button className='blackBoxButton' onClick={handleButtonClick}>
            {children}
        </button>
    );
};

export default BlackBoxButton;