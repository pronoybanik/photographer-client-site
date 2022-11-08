import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../image/ilustracao-do-conceito-de-login_114360-739.webp'


const Register = () => {
    return (
        <div>
         <div className="hero min-h-screen bg-base-200 my-12 rounded-xl">
                <div className="hero-content flex-col lg:flex-row  ">
                    <div className="text-center lg:text-left ">
                        <img className='w-2/3' src={image} alt="" />
                    </div>

                    <form  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                        <div className="card-body">
                            <h1 className="text-5xl text-center font-bold">SIGN UP</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="btn btn-primary bg-white" />
                            </div>
                        </div>
                        <p className='text-center'>You Have a Account <Link className='text-orange-600 font-bold' to="/login">Log IN</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;