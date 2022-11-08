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
                        <p className='text-white' > In photography there is a reality so subtle that it becomes more real than reality </p>
                    </div>
                    
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href={`#slide${prev}`} className="btn btn-circle mr-3">❮</a>
                        <a href={`#slide${next}`} className="btn btn-circle ">❯</a>
                    </div>
                </div>
    );
};

export default BannerItem;