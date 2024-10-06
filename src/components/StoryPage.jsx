import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/styles/StoryPage.css'; // Importing the CSS file

const StoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [story, setStory] = useState('');

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
            const simulatedStory = "Once upon a time in a galaxy far away, there lived a constellation that guided lost travelers...";
            setStory(simulatedStory);
        };

        fetchStory();
    }, [location]);

    const handleBackClick = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className="story-page">
            {/* <h1>Your Story</h1> */}
            <p>{story}</p>
            <button onClick={handleBackClick} className="back-button">
                Go Back
            </button>
        </div>
    );
};

export default StoryPage;
