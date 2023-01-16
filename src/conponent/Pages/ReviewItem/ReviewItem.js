import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReviewItem = ({ review, handleDelete }) => {
    const { _id, name, message, email, service } = review;
    const [reviewItem, setReviewItem] = useState([])

    useEffect(() => {
        fetch(`https://y-pronoybanik.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewItem(data))
            
    }, [service])


    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl transform motion-safe:hover:scale-110 ">
                {/* <button onClick={add}></button> */}
                <figure>
                    {
                        reviewItem?.image_url &&
                        <img className='h-80 w-96' src={reviewItem.image_url} alt="Movie" />

                    }

                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h4 className='font-bold'>Email: {email}</h4>
                    <p>{message}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary bg-slate-50"><FaTrashAlt></FaTrashAlt></button>
                    </div>

                    {/* <div>
                        <Link to={`/update/${_id}`}>

                            <button >update</button>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
};

export default ReviewItem;