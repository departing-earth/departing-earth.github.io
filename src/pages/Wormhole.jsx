import React, { useEffect } from 'react';
import '../assets/styles/wormhole.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPlanetParams, getPlanetFacts, getStarData } from '../api/fetch.js';

const Wormhole = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const submittedNumber = location.state?.submittedNumber;

    const fetchPlanetData = async () => {
        const planetsFacts = await getPlanetFacts();
        // const starsData = await getStarData();

        const planetFacts = planetsFacts[submittedNumber];
        // const starData = starsData[submittedNumber];
        console.log(planetFacts);

        navigate('/facts', { state: { planetFacts } });
    };

    useEffect(() => {
        fetchPlanetData();
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
