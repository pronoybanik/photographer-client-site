import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    console.log(service);
    const {_id, image_url, title, details, price } = service
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <p className='font-bold'>price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-primary bg-white">details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;