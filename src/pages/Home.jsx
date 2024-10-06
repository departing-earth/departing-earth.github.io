import React, { useState } from "react";
import "../assets/styles/Home.css";
import BlackBox from "../components/BlackBox";
import ExploreExoPlanet from "../components/ExploreExoPlanet";

const Home = () => {
    const [isBlur, setIsBlur] = useState(true);
    const [showDrawConstellation, setDrawConstellation] = useState(true);

    const changeBlur = () => {
        setIsBlur(!isBlur);
    };

    const constellationClick = () => {
        setDrawConstellation(false);
    }

    return (
        <>
            <div className={isBlur ? "BlurredImage" : "notBlur"}></div>
            <div className="HomePage">
                <BlackBox
                    title="WELCOME TO"
                    planetname="EARTH"
                    maintext=" Get ready for the adventure of a lifetime! Earth
                                is evolving, and humanity is on the brink of discovering 
                                incredible new planets. You’ll encounter exoplanets filled with 
                                vibrant colors, candy-floss clouds, and friendly alien 
                                creatures eager to share their worlds with you. Let’s blast 
                                off and make history together!"
                    onDrawConstellationClick={constellationClick}
                    showDrawConstellation={showDrawConstellation}
                    blur={isBlur}
                    changeBlur={changeBlur}
                />
            </div>
        </>
    );
};

export default Home;
