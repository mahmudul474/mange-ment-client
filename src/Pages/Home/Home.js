import React from 'react';
import Static from '../../Components/CarRipaiyerStaic/Static';
import Cours from '../../Components/Cours/Cours';
import Facelity from '../../Components/Facelity/Facelity';

import Team from '../../Components/Our-Team/Team';
import Work from '../../Components/Recent-work/Work';
import Proces from '../../Components/Work-our-proces/Proces';
import Blog from '../AdminDahbord/Add-blog/Blog';
import Baner from './HomeBanner/Baner';
import Lastedblofg from './Lastet-blog/Lastedblofg';
 



const Home = () => {
    return (
      <div>
        <Baner></Baner>

        <Proces></Proces>
        <Cours></Cours>
        <Team></Team>
        <Lastedblofg></Lastedblofg>
      </div>
    );
};

export default Home;