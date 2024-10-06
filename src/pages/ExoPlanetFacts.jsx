import React, { useState } from "react";
import "../assets/styles/ExoPlanetFacts.css";
import BlackBox from "../components/BlackBox";
import ZoomablePlanet from "../components/ZoomablePlanet";
import { useLocation } from "react-router-dom"; // Import useLocation to access the location object

const FactsPage = () => {
  const [isBlur, setIsBlur] = useState(true);
  const [showMoons, setShowMoons] = useState(true); // New state to control moon visibility
    const location = useLocation(); // Access the location object
    const exoplanetFacts = location.state?.planetFacts; // Get the planet data from the state
    // const exostarData = location.state?.starData;
    const changeBlur = () => {
      setIsBlur(!isBlur);
  };

  const handleViewImageClick = () => {
    setShowMoons(false);
  };

  const handleGoBackClick = () => {
    setShowMoons(true); // Re-show the moons when user "goes back"
  };

    // Show loading text if no data is received
    if (!exoplanetFacts) {  //|| !exostarData) {
        return (
            <div className="error-message">
                <p>Error: Unable to load exoplanet data. Please try again.</p>
                <button onClick={() => history.go(-3)} className="retry-button">
                    Go to previous exoplanet
                </button>
            </div>
        );
    }

    return (
      <>
      <div className={isBlur ? "BlurredImageB" : "notBlur"}></div>
        <div className="FactsPageContainer">
            {exoplanetFacts && (
                <BlackBox
                    title="Welcome To"
                    planetname={exoplanetFacts.pl_name}
                    maintext={`Click on the moons to see facts about ${exoplanetFacts.pl_name}`}
                    onDrawConstellationClick={() => {}}
                    blur={isBlur}
                    changeBlur={changeBlur}
                    toggleMoons={handleViewImageClick}
                />
            )}
            {showMoons && exoplanetFacts && (
                <div className="planet-corners">
                    <ZoomablePlanet
                        planetName={exoplanetFacts.pl_name}
                        facts={[
                            `Distance from Earth: ${exoplanetFacts.disc_year} light-years`,
                        ]}
                    />
                    <ZoomablePlanet
                        planetName={exoplanetFacts.pl_name}
                        facts={[
                            `Discovery year: ${exoplanetFacts.disc_year}`
                        ]}
                    />
                    <ZoomablePlanet
                        planetName={exoplanetFacts.pl_name}
                        facts={[`Orbit Time: ${exoplanetFacts.pl_orbper} days`]}
                    />
                    <ZoomablePlanet
                        planetName={exoplanetFacts.pl_name}
                        facts={[
                            `Surface Gravity: ${exoplanetFacts.st_logg} m/s^2`,
                        ]}
                    />
                </div>
            )}
        </div>
        </>
    );
};

export default FactsPage;
