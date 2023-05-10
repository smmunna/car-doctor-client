import React from 'react';
import LoginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const Signup = () => {

    const handleSignupSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }


    return (
        <div className="hero py-12 lg:py-24">
            <div className="hero-content flex-col-reverse lg:flex-row gap-20">
                <div className="text-center lg:text-left">
                    <img src={LoginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignupSubmit}>
                        <h3 className="text-2xl pl-5 pt-4 font-semibold">Signup</h3>
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
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Signup;
