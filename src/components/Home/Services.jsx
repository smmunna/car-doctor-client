import React from 'react';
import Service from './Service';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData()
 
    return (
        <div>
            <div className='w-1/2 mx-auto text-center'>
                <h3 className='text-3xl'>Our Services</h3>
                <p className='py-5'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-5 mb-5'>
                {
                    services.map(service=><Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
}

export default Services;
