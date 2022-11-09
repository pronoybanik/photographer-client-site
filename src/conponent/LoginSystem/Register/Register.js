import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import image from '../../../image/ilustracao-do-conceito-de-login_114360-739.webp'
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';


const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset('')
                // alert.success('login succese')
                toast.success("Register successful", {
                    position: "top-center",
                    theme: "light",
                })
            })
            .catch(err => {
                console.error(err)
                toast.warn('🦄 Please try again!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })

    }

    const handleGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => 
                console.error(error)
            )
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-12 rounded-xl">
                <div className="hero-content flex-col lg:flex-row  ">
                    <div className="text-center lg:text-left ">
                        <img className='w-2/3' src={image} alt="" />
                    </div>

                    <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
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
                            <div className="form-control mt-6">
                                <button className='btn btn-secondary' onClick={handleGoogle}>GooGle Register</button>
                            </div>
                        </div>
                        <p className='text-center'>You Have a Account <Link className='text-orange-600 font-bold' to="/login">Log IN</Link></p>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;