import React from 'react';
import Marquee from 'react-fast-marquee';

const OurBestImage = () => {
    const toolsData = [
        {
            img: "https://images.pexels.com/photos/16676321/pexels-photo-16676321/free-photo-of-wood-landscape-man-couple.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            title: "iphone",

        },
        {
            img: "https://images.pexels.com/photos/16961842/pexels-photo-16961842/free-photo-of-landscape-field-summer-animal.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            title: "redmi",

        },
        {
            img: "https://images.pexels.com/photos/16944330/pexels-photo-16944330/free-photo-of-fashion-beach-sunglasses-love.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            title: "lend line",

        },
        {
            img: "https://images.pexels.com/photos/16972096/pexels-photo-16972096/free-photo-of-perro.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            title: "semsung",

        },
        {
            img: "https://images.pexels.com/photos/16733845/pexels-photo-16733845/free-photo-of-fashion-people-woman-dark.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            title: "semsung",

        }
    ];


    return (
        <div className="py-8">
            <h1 className='text-4xl font-bold text-sky-600 uppercase text-center'>our best photo</h1>
            <Marquee
                pauseOnHover={true}
                gradient={false}
                className="flex my-8 cursor-pointer"
            >
                {toolsData.map((tool, i) => {
                    const { img, title } = tool;
                    return (
                        <div className='mx-2'>
                            <div href="#" class="relative block group">
                                <img
                                    src={img}
                                    alt=""
                                    class="h-[320px] w-[340px] object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px]"
                                />

                                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    {/* <h3 class="text-xl font-medium text-white"> {title}</h3> */}

                                </div>
                            </div>
                        </div>
                    );
                })}
            </Marquee>
        </div>
    );
};

export default OurBestImage;