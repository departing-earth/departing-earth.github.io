import React, { useEffect } from 'react';
import '../assets/styles/wormhole.css';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Wormhole = () => {
    const location = useLocation(); // Access the location object
    const navigate = useNavigate(); // Get the navigate function
    const submittedNumber = location.state?.submittedNumber;

    // Simulate fetching planet data based on the submitted number
    const fetchPlanetData = async () => {
        // Mock data simulating an API response
        const mockData = {
            planets: [
                { id: 1, name: 'Kepler-452b', distanceFromEarth: 1400, orbitTime: 385, mass: 5, radius: 1.5, temperature: 265 },
                { id: 2, name: 'Proxima Centauri b', distanceFromEarth: 4.24, orbitTime: 11.2, mass: 1.27, radius: 1.3, temperature: 274 },
                // Add more mock planet data as needed
            ],
        };

        // Simulate a delay like an actual API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Find the planet data based on the submitted number
        const planetData = mockData.planets.find(planet => planet.id === submittedNumber); // Adjust this based on your data structure

        // Navigate to FactsPage with the planet data
        navigate('/facts', { state: { planetData } });
    };

    /*
    // Real API call commented out for testing
    const fetchPlanetData = async () => {
        try {
            const response = await fetch(`API_URL_HERE/${submittedNumber}`); // Use the submitted number in your API call
            const data = await response.json();

            // Assuming the data structure allows you to find the planet based on the number
            const planetData = data.planets.find(planet => planet.id === submittedNumber); // Adjust this based on your data structure

            // Navigate to FactsPage with the planet data
            navigate('/facts', { state: { planetData } });
        } catch (error) {
            console.error('Error fetching planet data:', error);
            // Handle error as necessary (e.g., show an error message)
        }
    };
    */

    useEffect(() => {
        fetchPlanetData(); // Call the fetch function when the component mounts
    }, [submittedNumber]);

    return (
        <div className="WormholeContainer">
            <div className="Wormhole" />
            <div className="Wormhole" />
            <div className="Wormhole" />
            <div className="Wormhole" />
            <div className="Wormhole" />
            <div className="Wormhole" />
            <div className="TextOverlay">
                <h1>Traveling through the Wormhole...</h1>
            </div>
        </div>
    );
};

export default Wormhole;
