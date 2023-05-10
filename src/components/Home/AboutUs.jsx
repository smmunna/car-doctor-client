import React from 'react';
import AboutUs1 from '../../assets/images/about_us/person.jpg'
import AboutUs2 from '../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="hero  mb-16 bg-base-200">
            <div className="hero-content flex-col lg:flex-row lg:gap-28 mt-16 lg:mb-48">
                <div className='relative'>
                    <img src={AboutUs1} className="max-w-sm rounded-lg shadow-2xl" />
                    <img src={AboutUs2} className="lg:absolute max-w-sm rounded-lg shadow-2xl lg:left-16 lg:top-32" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-2">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
