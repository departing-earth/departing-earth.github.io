import React from 'react';
import '../assets/styles/BlackBoxButton.css';

const BlackBoxButton = ({ onClick, children }) => {
    return (
        <button className='blackBoxButton' onClick={onClick}>
            {children}
        </button>
    );
};

export default BlackBoxButton;