import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2>Our services</h2>
            <div className='my-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;