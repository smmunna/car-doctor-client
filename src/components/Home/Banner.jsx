import React from 'react';
import Banner1 from '../../assets/images/banner/1.jpg'
import Banner2 from '../../assets/images/banner/2.jpg'
import Banner3 from '../../assets/images/banner/3.jpg'
import Banner4 from '../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
                <img src={Banner1} className="w-full" />

                <div className="absolute flex justify-between h-full w-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <div className='space-y-7 p-48'>
                        <h3 className='text-4xl text-base-100 font-bold w-1/2'>Affordable Price For Car Servicing</h3>
                        <p className='text-base-100'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=' flex gap-4'>
                            <button className="btn btn-active btn-accent">Button</button>
                            <button className="btn btn-outline btn-accent">Button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10 gap-4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img src={Banner2} className="w-full" />
                <div className="absolute flex justify-between h-full w-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <div className='space-y-7 p-48'>
                        <h3 className='text-4xl text-base-100 font-bold w-1/2'>Affordable Price For Car Servicing</h3>
                        <p className='text-base-100'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=' flex gap-4'>
                            <button className="btn btn-active btn-accent">Button</button>
                            <button className="btn btn-outline btn-accent">Button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10 gap-4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img src={Banner3} className="w-full" />
                <div className="absolute flex justify-between h-full w-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <div className='space-y-7 p-48'>
                        <h3 className='text-4xl text-base-100 font-bold w-1/2'>Affordable Price For Car Servicing</h3>
                        <p className='text-base-100'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=' flex gap-4'>
                            <button className="btn btn-active btn-accent">Button</button>
                            <button className="btn btn-outline btn-accent">Button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10 gap-4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img src={Banner4} className="w-full" />
                <div className="absolute flex justify-between h-full w-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <div className='space-y-7 p-48'>
                        <h3 className='text-4xl text-base-100 font-bold w-1/2'>Affordable Price For Car Servicing</h3>
                        <p className='text-base-100'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=' flex gap-4'>
                            <button className="btn btn-active btn-accent">Button</button>
                            <button className="btn btn-outline btn-accent">Button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10 gap-4">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}

export default Banner;
