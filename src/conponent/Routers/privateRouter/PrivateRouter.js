import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    // const location = useLocation()
    console.log(user, loading);
    if (loading) {
        return <div>Loading...</div>
    }

    if (user) {
        return <Navigate to='/' ></Navigate>
    }
    return children;

};

export default PrivateRouter;

// state={{ from: location }} replace