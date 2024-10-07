import React, { useState, useEffect } from "react";
import "../assets/styles/ExoPlanetFacts.css";
import BlackBox from "../components/BlackBox";
import ZoomablePlanet from "../components/ZoomablePlanet";
import { useLocation } from "react-router-dom"; // Import useLocation to access the location object
import StarBall from "../components/StarBall";
import { getStarData } from "../api/fetch";

const FactsPage = () => {
  const [isBlur, setIsBlur] = useState(true);
  const [showMoons, setShowMoons] = useState(true); // New state to control moon visibility
    const location = useLocation(); // Access the location object
    const exoplanetFacts = location.state?.planetFacts; // Get the planet data from the state
    const [stars, setStars] = useState([]); // State to store star coordinates
    const exostarData = location.state?.starData;
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
    /* This is a function we close to implementing but ran out of time. The function 
       takes the json returned by the api call that contains all the star data, and creates
       star objects with their distance atributes to put into an array. We then have
       a current exoplanet object which also has distance attributes. We built an api
       that has a distance function implementation that calculates coordinates of
       all stars given into function. So, we give in the current exo planet, as well as
       all the star data in the array, and the function returns another array of coordinates
       which has where each of the stars passed in the array are in relation to the current
       exo planet. We then plot those points to simulate what the milky way would look like
       from the perspective of the exo planet we are on, augmenting the star view based on
       these transformed coordinates */ 
    // useEffect(() => {
    //   const fetchAndTransformStarData = async () => {
    //     try {
    //       const starData = await getStarData();
    //       const starObjects = starData.map(star => ({
    //         ra_s: star.ra_s,
    //         dec_s: star.dec_s,
    //         dist_s: star.dist_s
    //       }));
    
    //       const exoplanetObject = {
    //         ra_s: exoplanetFacts.ra_s,
    //         dec_s: exoplanetFacts.dec_s,
    //         dist_s: exoplanetFacts.dist_s
    //       };
    
    //       const transformedCoordinates = await transform(exoplanetObject, starObjects);
    //       setCoordinates(transformedCoordinates);
    
    //     } catch (error) {
    //       console.error("Error fetching or transforming star data:", error);
    //     }
    //   };
    
    //   fetchAndTransformStarData();
    // }, [exoplanetFacts]);
    

    useEffect(() => {
      //const numberOfStars = exoplanetFacts.number_of_stars; // Assume this is the key for the number of stars
      const numberOfStars = 11000;
      const generatedStars = Array.from({ length: numberOfStars }, () => {
        // Generate random x and y coordinates
        const x = Math.random() * 3000 - 300; // Change 400 to your desired width
        const y = Math.random() * 3000 - 300; // Change 400 to your desired height
        return { x, y };
      });
      setStars(generatedStars);
    }, [exoplanetFacts]); 
   

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
             {stars.map((star, index) => (
          <StarBall key={index} brightness="1" coordinates={`(${star.x}, ${star.y})`} />
        ))}
        </div>
        </>
    );
};

export default FactsPage;
