import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Services from './Services';
import Team from './Team';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs/>
            <Services/>
            <Team/>
        </div>
    );
}

export default Home;
