import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddReviews = () => {
    const { _id, price, rating } = useLoaderData()
    const { user } = useContext(AuthContext)

    const handlePlaceOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            name,
            email,
            price,
            rating,
            message,
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset('')
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="User Name" className="input input-bordered w-full " />
                    <input email='email' type="text" defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full " required />
                </div>
                <textarea name='message' type='text' className="textarea input-bordered w-full mt-4" placeholder="Your Message" required></textarea>
                <div className='my-4'>
                    <input className="btn btn-primary bg-white mr-4" type="submit" value="Submit" />
                </div>
            </form>
            <button className="btn btn-outline mb-10" >
                <Link to='/review'> see Review</Link>
            </button>
        </div>
    );
};

export default AddReviews;