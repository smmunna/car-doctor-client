import React from 'react';
import nextIcon from '../../assets/icons/next.png'

const Service = ({ service }) => {
    const { _id, title, price, img } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions flex justify-between">
                    <p className='text-red-600 text-lg'>Price: ${price}</p>
                    <button><img src={nextIcon} width={30} alt="next" /></button>
                </div>
            </div>
        </div>
    );
}

export default Service;
