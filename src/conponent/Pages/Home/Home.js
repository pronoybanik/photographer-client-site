import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Banner from '../Bannar/Banner';
import Service from '../Service/Service';
import OurPhotoGrafer from '../../OurPhotoGrafer/OurPhotoGrafer';
import OurBestImage from '../../OurBestImage/OurBestImage';
import ContactUs from '../../ContactUs/ContactUs';
import Faq from '../../Faq/Faq';
import BestImages from '../../BestImage/BestImages';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Service></Service>
            <OurBestImage></OurBestImage>
            <section >
                <div className="max-w-screen-lg px-4  mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold uppercase text-gray-900 sm:text-3xl">
                            New image  Collection
                        </h2>

                       
                    </header>

                    <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                        <li >
                            <div className="relative block group">
                                <img
                                    src="https://images.pexels.com/photos/799965/pexels-photo-799965.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                    alt=""
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-white">Casual Trainers</h3>

                                    {/* <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Shop Now
                                    </span> */}
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="relative block group">
                                <img
                                    src="https://images.pexels.com/photos/1661388/pexels-photo-1661388.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                    alt=""
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>

                                    {/* <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Shop Now
                                    </span> */}
                                </div>
                            </div>
                        </li>

                        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 ">
                            <div className="relative block group">
                                <img
                                    src="https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                                    {/* <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Shop Now
                                    </span> */}
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>
            <BestImages></BestImages>
            <OurPhotoGrafer></OurPhotoGrafer>
            <Faq></Faq>
            <ContactUs></ContactUs>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;