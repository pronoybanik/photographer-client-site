import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const item = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <>
            {
                user?.email ?
                    <>
                        <li>
                            <button onClick={handleLogOut}>Log Out</button>
                        </li>
                    </>
                    :
                    <>
                        <li><Link to='/login'>Log In</Link></li>
                        <li><Link to='/register'>Sign up</Link></li>
                    </>
            }
        </>
    </>





    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {item}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><p className='font-bold'>Adam </p> <p className='text-3xl ml-2 font-bold text-orange-600'>Bird</p> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {item}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                        user?.photoURL?
                        <>
                         <img style={{height: '55px'}} className='mask mask-circle' src={user?.photoURL} alt="" />
                        </>
                        :
                        <FaUser></FaUser>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;