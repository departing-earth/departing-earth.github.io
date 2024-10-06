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
                    maintext="Bein really nice fellas"
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
