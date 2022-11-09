import React from 'react';
import img1 from '../../../image/1640112.webp';
// import img1 from '../../../images/banner/1.jpg';
import img2 from '../../../image/download (3).jpeg';
import img3 from '../../../image/wp4877950.jpg';
import BannerItem from '../Bannar/BannerItem/BannerItem'
import './Banner.css'

const Banner = () => {
    const sliders = [
        {
            image: img1,
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 1
        },
        
    ]
    return (
        <div>
            <div className="carousel w-full my-10">

                {
                    sliders.map(slide => <BannerItem
                        key={slide.id}
                        slide={slide}
                    ></BannerItem>)
                }

            </div>
        </div>
    );
};

export default Banner;