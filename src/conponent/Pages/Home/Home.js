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
            <section>
                <div
                    class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div
                            class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                        >
                            <img
                                alt="Party"
                                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div class="lg:py-24">
                            <h2 class="text-3xl font-bold sm:text-4xl uppercase">our new event <br /> 50% off</h2>

                            <p class="mt-4 text-gray-600">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                                atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                                veniam tempora deserunt? Molestiae eius quidem quam repellat.
                            </p>


                        </div>
                    </div>
                </div>
            </section>
            
            <OurPhotoGrafer></OurPhotoGrafer>
            <Faq></Faq>

            <ContactUs></ContactUs>
            <Reviews></Reviews>
            <section

                className="mt-2 py-12 font-serif mb-14"
                style={{
                    background: `url(${'https://images.pexels.com/photos/1055613/pexels-photo-1055613.jpeg?auto=compress&cs=tinysrgb&w=1600'})`,
                    backgroundSize: 'cover'
                }}
            >
                <div className="text-center mb-10 ">
                    <h2 className="text-info font-bold  mb-2 text-xl">Contact Us</h2>
                    <h2 className="text-2xl text-white uppercase">Add Feedback</h2>
                </div>
                <form >
                    <div className=" flex  items-center justify-center mb-2">
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full max-w-xs  "
                        />
                    </div>
                    <div className="flex  items-center justify-center mb-2">
                        <input
                            name="email"
                            type="text"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>

                    <div className="flex  items-center justify-center">
                        <textarea
                            name="bio"
                            className="textarea textarea-bordered w-80 "
                            placeholder="Bio"
                        ></textarea>
                    </div>
                    <div className="flex  items-center justify-center mt-4">
                        <button className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                            button
                        </button>
                    </div>
                </form>
            </section>


        </div>
    );
};

export default Home;