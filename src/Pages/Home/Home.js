import React from 'react';
import Static from '../../Components/CarRipaiyerStaic/Static';
import Facelity from '../../Components/Facelity/Facelity';
import Fiuture from '../../Components/FiutureCar/Fiuture';
import Team from '../../Components/Our-Team/Team';
import Work from '../../Components/Recent-work/Work';
import Proces from '../../Components/Work-our-proces/Proces';
import Baner from './HomeBanner/Baner';
 



const Home = () => {
    return (
        <div>
           <Baner></Baner>
           <Facelity></Facelity>
            <Fiuture></Fiuture>
            <Work></Work>
            <Static></Static>
            <Proces></Proces>
            <Team></Team>
        </div>
    );
};

export default Home;