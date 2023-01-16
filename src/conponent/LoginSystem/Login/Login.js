import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import image from '../../../image/ilustracao-do-conceito-de-login_114360-739.webp'
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';



const Login = () => {
    const { loginSystem, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
    const provider = new GoogleAuthProvider()


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        loginSystem(email, password)
            .then(result => {
                const user = result.user

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                //get jwt token
                fetch('https://y-pronoybanik.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token)
                        navigate(from, { replace: true });

                    })
                form.reset('');
                toast.success("Register successful", {
                    position: "top-center",
                    theme: "light",
                });


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
            });
    }


    const handleGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user;


                const currentUser = {
                    email: user.email
                }
                //get jwt token
                fetch('https://y-pronoybanik.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token)
                        navigate(from, { replace: true });

                    })

                // navigate(from, { replace: true })
            })
            .catch(error =>
                console.error(error)
            )
    }

    return (
        <div className="hero  bg-base-200 my-12 rounded-xl py-4">
            <div className="hero-content flex-col lg:flex-row  ">
                <div className="text-center lg:text-left ">
                    <img className='w-2/3' src={image} alt="" />
                </div>

                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10 mr-12">
                    <div className="card-body">
                        <h1 className="text-5xl text-center font-bold mb-2 font-serif">Login now!</h1>

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
                            <input type="submit" value="LogIn" className="btn btn-primary bg-white" />
                        </div>
                        <div className="form-control mt-6">
                            <button className='btn btn-outline' onClick={handleGoogle}>GooGle Login</button>
                        </div>
                    </div>
                    <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-bold' to="/register">Sing Up</Link></p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;