import React from 'react';
import LatestNews from '../LatestNews/LatestNews';
import Packages from '../Packages/Packages';
import Video from '../Video/Video';

const Home = () => {
    return (
        <div>
            <Packages></Packages>
            
            <LatestNews></LatestNews>
            <Video></Video>
        </div>
    );
};

export default Home;