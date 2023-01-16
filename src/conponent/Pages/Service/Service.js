import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [visible, setVisible] = useState(3)
    useEffect(() => {
        fetch('https://y-pronoybanik.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const showMore = () => {
        setVisible((preValue) => preValue * 3)
    }
    return (
        <div>
            <div className='text-center my-28'>
                <h2 className='text-5xl font-bold text-blue-500 uppercase  font-serif'>Our services</h2>
                <p className='mt-3 text-xl font-sans   '>Some photographers work long, irregular hours and spend a lot of time away from their
                    <br />
                    family and friends. A photographer who works in photojournalism is typically on call 24 hours a day</p>

            </div>
            <div className='mt-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7'>
                {
                    services.slice(0, visible).map(service => <ServiceCard
                        key={service._id}
                        service={service}

                    ></ServiceCard>)
                }

                
               
            </div>
            <div className="card-actions my-10 justify-center">
                <button onClick={showMore} className="btn btn-primary ">Load more</button>
                </div>
        </div>
    );
};

export default Services;