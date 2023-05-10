import React from 'react';
import Team1 from '../../assets/images/team/1.jpg'
import Team2 from '../../assets/images/team/2.jpg'
import Team3 from '../../assets/images/team/3.jpg'
import './TeamSlider.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

const Team = () => {
    return (
        <div className='my-16'>
            <div className='mb-8'>
                <h3 className='text-3xl font-bold text-center py-4'>Meet Our Team</h3>
                <p className='my-5 text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="grid lg:grid-cols-3 gap-10 px-3 mb-5">
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={Team1} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Car Engine Plug</h2>
                                <p>Engine Expert</p>
                                <div className="card-actions">
                                    <FaFacebook />
                                    <FaTwitter />
                                    <FaInstagram />
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={Team2} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Car Engine Plug</h2>
                                <p>Engine Expert</p>
                                <div className="card-actions">
                                    <FaFacebook />
                                    <FaTwitter />
                                    <FaInstagram />
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={Team3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Car Engine Plug</h2>
                                <p>Engine Expert</p>
                                <div className="card-actions">
                                    <FaFacebook />
                                    <FaTwitter />
                                    <FaInstagram />
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid lg:grid-cols-3 gap-10 px-3 mb-5">
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={Team1} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Car Engine Plug</h2>
                                <p>Engine Expert</p>
                                <div className="card-actions">
                                    <FaFacebook />
                                    <FaTwitter />
                                    <FaInstagram />
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={Team2} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Car Engine Plug</h2>
                                <p>Engine Expert</p>
                                <div className="card-actions">
                                    <FaFacebook />
                                    <FaTwitter />
                                    <FaInstagram />
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={Team3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Car Engine Plug</h2>
                                <p>Engine Expert</p>
                                <div className="card-actions">
                                    <FaFacebook />
                                    <FaTwitter />
                                    <FaInstagram />
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Team;
