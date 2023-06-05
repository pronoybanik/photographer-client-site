import React from 'react';

const ContactUs = () => {
    return (

        <div>
            <div className=" hero h-96 " style={{ backgroundImage: `url(${"https://images.pexels.com/photos/7485787/pexels-photo-7485787.jpeg?auto=compress&cs=tinysrgb&w=1600"})`, backgroundSize: "cover" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold uppercase text-gray-100 font-serif">
                            contact with us:
                        </h1>
                        <p className="mb-5 text-4xl text-gray-200 font-mono">Number:01608520719</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;