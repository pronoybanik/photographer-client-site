import React from 'react';

const BannerItem = ({slide}) => {
    const {image, prev, id, next} = slide;
    return (
        <div id= {`slide${id}`} className="carousel-item relative w-full ">
                    <div className='carousel-img'>

                        <img src={image} className="w-full rounded-xl h-full" />
                    </div>

                    <div className="absolute  flex justify-end transform -translate-y-1/2 left-5  top-1/3">
                        <h1 className='font-bold  text-white text-5xl'>
                            NATURAL <p className='text-orange-600'>BLEND</p>
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform  w-1/2 -translate-y-1/2 left-5  top-2/4">
                        <p className='text-white mt-8' > If you find that your favorite music or your best-loved movie director no longer stirs your imagination, it’s time to turn your attention to the all-time classics: the famous photographers that shook the world. </p>
                    </div>
                    
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href={`#slide${prev}`} className="btn btn-circle mr-3">❮</a>
                        <a href={`#slide${next}`} className="btn btn-circle ">❯</a>
                    </div>
                </div>
    );
};

export default BannerItem;