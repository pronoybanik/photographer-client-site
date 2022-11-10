import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [visible, setVisible] = useState(3)
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const showMore = () =>{
        setVisible((preValue) => preValue *3)
    }
    return (
        <div>
            <div className='text-center my-32'>
            <h2 className='text-4xl font-bold text-blue-900 '>Our services</h2>
            <p className='mt-2  '>Some photographers work long, irregular hours and spend a lot of time away from their
                <br />
                 family and friends. A photographer who works in photojournalism is typically on call 24 hours a day</p>

            </div>
            <div className='my-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7'>
                {
                    services.slice(0, visible).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                        
                    ></ServiceCard>)
                }
            <div className="card-actions">
      <button onClick={showMore} className="btn btn-primary">Load more</button>
    </div>
            </div>
        </div>
    );
};

export default Services;