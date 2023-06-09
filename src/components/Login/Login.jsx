import React, { useContext, useState } from 'react';
import LoginImg from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleSignupSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user
                if (user) {
                    navigate(from, { replace: true })
                }
            })
            .catch(error => {
                const fmessage = 'Firebase: Error (auth/user-not-found).'
                if (error.message == fmessage) {
                    setError('User Email not found')
                }
                else if (error.message !== fmessage) {
                    setError('Password did not match')
                }
                else {
                    setError('')
                }
            })
    }

    return (
        <div className="hero py-12 lg:py-18">
            <div className="hero-content flex-col-reverse lg:flex-row gap-20">
                <div className="text-center lg:text-left">
                    <img src={LoginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignupSubmit}>
                        <h3 className="text-2xl pl-5 pt-4 font-semibold">Login</h3>
                        <p className='mx-5 pt-5 text-red-600'>{error}</p>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    Don't have account? <Link to="/signup" className="label-text-alt link link-hover text-[16px]">Signup here</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='mt-5 text-center'>
                                <h3>Or Login with</h3>
                                <div className="mt-3">
                                    <button><FaGoogle /></button>
                                    <button className='mx-3'><FaFacebook /></button>
                                    <button><FaLinkedin /></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;
