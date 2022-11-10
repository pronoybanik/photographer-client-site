import React, { useContext } from 'react';
import { Navigate, useLocation,  } from 'react-router-dom';
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';
import Spiner from '../../Pages/Spiner/Spiner';



const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user, loading);
    const location = useLocation();

    if (loading) {
        return <Spiner></Spiner>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRouter;