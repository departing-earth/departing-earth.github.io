import React, { useState } from 'react';
import '../assets/styles/Home.css';
import BlackBox from '../components/BlackBox';
import ExploreExoPlanet from '../components/ExploreExoPlanet';


const Home = () => {

    const [isBlur, setIsBlur] = useState(true);

    const changeBlur = () => {
        setIsBlur(!isBlur);
    }

    return (
        <>
            <div className={isBlur ? "BlurredImage" : "notBlur"}></div>
            <div className='HomePage'>
                <BlackBox title="WELCOME TO" planetname="EARTH"
<<<<<<< HEAD
                    maintext="SUCKIN CRAZY ON BLACK STROKES" blur={isBlur} changeBlur={changeBlur} />
=======
                    maintext="Bein really nice fellas" blur={isBlur} changeBlur={changeBlur} />
>>>>>>> origin/alex-changes
            </div>
        </>
    );
};

export default Home;