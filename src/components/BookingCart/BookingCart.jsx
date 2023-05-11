import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const BookingCart = () => {
    const { users } = useContext(AuthContext)
    const bookingCartsData = useLoaderData()

    const handleBookingCart = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const service_id = form.service_id.value;
        const title = form.title.value;
        const img = form.img.value;
        const date = form.date.value;
        const price = form.price.value;

        const bookingsCart = {
            name, email, service_id, title, img, date, price
        }

        fetch('http://localhost:5000/bookingcarts',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(bookingsCart)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert("Successfully Booked")
            }
        })
    }

    return (
        <div>
            <h3 className='text-3xl text-center my-2 font-semibold'>Booking Cart</h3>

            <div className="hero">
                <form onSubmit={handleBookingCart}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card  w-96 max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Id</span>
                                    </label>
                                    <input type="text" name='service_id' placeholder="email" disabled defaultValue={bookingCartsData.service_id} className="input input-bordered" />
                                </div>
                                <div className="form-control hidden">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" name='img' defaultValue={bookingCartsData.img} disabled className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="date" name='date' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' disabled defaultValue={bookingCartsData.price} className="input input-bordered" />
                                </div>
                            </div>
                        </div>
                        <div className="card  w-96 max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" disabled defaultValue={users.email} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" name='title' placeholder="Your Name" className="input input-bordered" disabled defaultValue={bookingCartsData.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-control my-4">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default BookingCart;
