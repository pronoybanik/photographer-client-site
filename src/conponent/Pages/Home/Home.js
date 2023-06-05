import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Banner from '../Bannar/Banner';
import Service from '../Service/Service';
import OurPhotoGrafer from '../../OurPhotoGrafer/OurPhotoGrafer';
import OurBestImage from '../../OurBestImage/OurBestImage';
import ContactUs from '../../ContactUs/ContactUs';
import Faq from '../../Faq/Faq';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Service></Service>
            <OurBestImage></OurBestImage>
            <OurPhotoGrafer></OurPhotoGrafer>
            <Faq></Faq>
            <ContactUs></ContactUs>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;