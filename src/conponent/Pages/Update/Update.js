import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const updateData = useLoaderData()

    const [user, setUser] = useState(updateData)


    const handleAddDataUser = event => {
        event.preventDefault()
        // console.log(user);
        fetch(`https://y-pronoybanik.vercel.app/review/${updateData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >0) {
                    alert('user update')
                }

            })
    }

    const handleChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value
        setUser(newUser);
        // console.log(newUser);
    }


    return (
        <div>
            <h2>Update site: {updateData.name}</h2>

            <form onSubmit={handleAddDataUser}>
                <input  onChange={handleChange} defaultValue={updateData.name} type="text" name='name' className="input input-bordered w-full" placeholder='name' required />


                <button className="btn btn-outline my-2" > Update </button>
            </form>
        </div>
    );
};

export default Update;