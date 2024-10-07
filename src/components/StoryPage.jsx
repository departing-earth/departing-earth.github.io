import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/styles/StoryPage.css'; // Importing the CSS file

const StoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [dropCap, setDropCap] = useState('');
    const [processedStory, setProcessedStory] = useState('');
    const story = location.state?.story;
    
    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className='storyContainer'>
            <div className="story-page">
                <h1>Let's make a story for your constellation...</h1>
                <p>
                    {story}
                </p>
                <button onClick={handleBackClick} className="back-button">
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default StoryPage;
