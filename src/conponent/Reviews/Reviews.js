import React from 'react';

const Reviews = () => {
    return (
        <div>
            <div className="text-5xl font-bold text-blue-500 uppercase  text-center font-serif'uppercase font-serif my-6"> Reviews</div>

            <div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-8'>
                    {/* fast card */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">

                            <div className="avatar">
                                <div className="w-20 rounded-full">
                                    <img src="https://www.leoranews.com/wp-content/uploads/1970/01/emma-watson-001.jpg" alt='' />
                                </div>
                            </div>
                            <p>“ Their Service is always perfect,
                                and the staff is very friendly and accommodating. Always looking forward to this place with my friends,
                                the fried vanilla ice cream is exceptionally photographer“</p>


                            <div className='flex justify-between mt-3'>
                                <div>
                                    <h2 className="card-title">Emma Watson</h2>
                                    <p>Hollywood</p>
                                </div>

                                <div className="rating rating-md mt-2">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* second card */}

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">

                            <div className="avatar">
                                <div className="w-20 rounded-full">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYcfTQ2X9rtYthJ-XTxYRMIrp-7mFAJzemJK1hyWhYlUtZfWhWDxI83pLmxAvqFR-VtA&usqp=CAU" alt='' />
                                </div>
                            </div>
                            <p>“ Their Service is always perfect,
                                and the staff is very friendly and accommodating. Always looking forward to this place with my friends,
                                the fried vanilla ice cream is exceptionally photographer“</p>


                            <div className='flex justify-between mt-3'>
                                <div>
                                    <h2 className="card-title">Aliya Bhat</h2>
                                    <p>Bollywood</p>
                                </div>

                                <div className="rating rating-md mt-2">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked  />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* third card */}

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">

                            <div className="avatar">
                                <div className="w-20 rounded-full">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3QORWvF77nk4RtynIAcqUrO8ety_48QqIw&usqp=CAU" alt='' />
                                </div>
                            </div>
                            <p>“ Their Service is always perfect,
                                and the staff is very friendly and accommodating. Always looking forward to this place with my friends,
                                the fried vanilla ice cream is exceptionally photographer“</p>


                            <div className='flex justify-between mt-3'>
                                <div>
                                    <h2 className="card-title">Angelina Jolie</h2>
                                    <p>Hollywood</p>
                                </div>

                                <div className="rating rating-md mt-2">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Reviews;