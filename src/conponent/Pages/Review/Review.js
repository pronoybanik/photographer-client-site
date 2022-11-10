import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure')
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = reviews.filter(odr => odr._id !== id)
                        setReviews(remaining)
                    }
                })
        }
    }

    return (
        <div className='my-12 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12' >

            {
                reviews.map(review => <ReviewItem
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                ></ReviewItem>)
            }
        </div>
    );
};

export default Review;