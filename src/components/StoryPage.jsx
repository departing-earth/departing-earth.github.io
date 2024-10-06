import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/styles/StoryPage.css'; // Importing the CSS file

const StoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [story, setStory] = useState('');
    const [dropCap, setDropCap] = useState('');
    const [processedStory, setProcessedStory] = useState('');

    useEffect(() => {
        const fetchStory = async () => {
            // Uncomment the following lines to fetch the story from the backend
            // const response = await fetch('/api/getStory', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ imageData: location.state.imageData }), // Pass image data if needed
            // });

            // const data = await response.json();
            // setStory(data.story); // Assuming the API returns an object with a 'story' property

            // Simulating a fetched story for demonstration purposes
            const simulatedStory = "Once Upon A time in a galaxy far far away......";
            setStory(simulatedStory);
        };

        fetchStory();
    }, [location]);

    useEffect(() => {
        if (story) {
            // Extract the first character for the drop cap
            const firstCharacter = story.charAt(0); // Get the first character
    
            // Set the drop cap state
            setDropCap(firstCharacter); // Set it as the drop cap
            
            // Get the remaining story starting from the second character
            const remainingStory = story.length > 1 ? story.slice(1) : ''; // Check for more than one character
            setProcessedStory(remainingStory.trim()); // Set the remaining story without the first character
            
            // Log the drop cap and remaining story for debugging
        }
    }, [story]); // Only run this effect when `story` changes

    const handleBackClick = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className='storyContainer'>
            <div className="story-page">
                <h1>Let's make a story for your constellation...</h1>
                <p>
                    {dropCap && <span className="drop-cap">{dropCap}</span>}{processedStory}
                    
                </p>
                <button onClick={handleBackClick} className="back-button">
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default StoryPage;
