import React from 'react';

const OurPhotoGrafer = () => {
    return (
        <section>
                <div className="max-w-screen-xl px-4 mb-4 mx-auto sm:py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div className="grid p-6 bg-gray-200 rounded place-content-center sm:p-8">
                            <div className="max-w-md mx-auto text-center lg:text-left">
                                <header>
                                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl uppercase">our Best photo grapher</h2>

                                    <p className="mt-4 text-gray-500">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                                        rerum quam amet provident nulla error!
                                    </p>
                                </header>

                                <div
                                 
                                    className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                                >
                                    Shop All
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 lg:py-8">
                            <ul className="grid grid-cols-3 gap-4">
                                <li>
                                    <div className="block group">
                                        <img
                                            src="https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                            alt=""
                                            className="object-cover w-full rounded aspect-square"
                                        />

                                        <div className="mt-3">
                                            <h3
                                                className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Alita oken
                                            </h3>

                                            
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="block group">
                                        <img
                                            src="https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                            alt=""
                                            className="object-cover w-full rounded aspect-square"
                                        />

                                        <div className="mt-3">
                                            <h3
                                                className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Jesmin Fernandesh
                                            </h3>

                                            
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="block group">
                                        <img
                                            src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                            alt=""
                                            className="object-cover w-full rounded aspect-square"
                                        />

                                        <div className="mt-3">
                                            <h3
                                                className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Deni
                                            </h3>

                                            
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default OurPhotoGrafer;