import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, }) => {
 
    const {_id, image_url, title, details, price } = service
    return (
        <div className=''>
            <div className="card card-compact w-96 bg-base-100 shadow-xl transform motion-safe:hover:scale-110 ">
                <figure><img className='object-fill h-48 w-96' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>
                        {
                            details.length > 100 ?
                            <p>{details.slice(0, 100) + "..."}</p>
                            :
                            <p>{details}</p>
                        }
                        </p>
                    <p className='font-bold'>price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-primary bg-white btn-sm">details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;