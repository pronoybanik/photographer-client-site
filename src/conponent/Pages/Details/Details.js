import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaPlus, FaRegEye } from "react-icons/fa";

const Details = () => {
    const { title, author, image_url, total_view, details, price , _id} = useLoaderData()
    return (
        <div className='my-20'>
            
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-3/4 p-o' src={image_url} alt="Album" /></figure>
                <div className="card-body w-3/4">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}.</p>
                    <p className='font-bold'>price: ${price}</p>


                    <div className='mt-4  grid grid-cols-3'>
                        <div className='flex '>
                            <img
                                className='mask mask-squircle w-12 h-12'
                                src={author.img} alt="" />
                            <div className='ml-2'>
                                <p>{author.name}</p>
                                <p>{author.published_date}</p>
                            </div>
                        </div>

                        <div>
                            <p className='ml-24  flex '><FaRegEye></FaRegEye> {total_view}</p>
                        </div>

                        <div className='ml-2' >
                            <button className="btn btn-primary bg-white"><FaPlus></FaPlus>
                            <Link to={`/addReviewSite/${_id}`}> Add Reviews</Link>
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Details;