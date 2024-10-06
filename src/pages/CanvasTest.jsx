import React, { useState, useEffect } from 'react';
import '../assets/styles/CanvasTest.css';
import BlackBox from '../components/BlackBox';
import ExploreExoPlanet from '../components/ExploreExoPlanet';
import BlackBoxButton from '../components/BlackBoxButton';


const CanvasTest = () => {

    const [isBlur, setIsBlur] = useState(true);
    useEffect(() => { setIsBlur(true) }, [isBlur])

    const changeBlur = () => {
        setIsBlur(!isBlur);
    }

    return (
        <>
            <div className={isBlur ? "BlurredImage" : "notBlur"}></div>
            <div className='CanvasTest'>
                {isBlur ? <BlackBox title="WELCOME TO" planetname="EARTH"
                    maintext="Hello, we are really nice fellas!" onDrawConstellationClick={() => { }} blur={isBlur} changeBlur={changeBlur}>
                </BlackBox> : <></>}
            </div>
            
        </>
    );
};

export default CanvasTest;