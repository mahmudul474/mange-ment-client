import React from 'react';
import Static from '../../Components/CarRipaiyerStaic/Static';
import Facelity from '../../Components/Facelity/Facelity';
import Fiuture from '../../Components/FiutureCar/Fiuture';
import Baner from './HomeBanner/Baner';
 



const Home = () => {
    return (
        <div>
           <Baner></Baner>
           <Facelity></Facelity>
            <Fiuture></Fiuture>
            <Static></Static>
        </div>
    );
};

export default Home;