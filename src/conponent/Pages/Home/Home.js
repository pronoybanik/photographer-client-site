import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Banner from '../Bannar/Banner';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Service></Service>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;