import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import BookItems from './BookItems';

const Mybookings = () => {
    const { users, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    if (!users && loading) {
        return <div>Loading........</div>
    }
    const [bookedItems, setBookedItems] = useState([])
    const url = `http://localhost:5000/bookingscartsdata?email=${users.email}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setBookedItems(data)
                }
                else {
                    navigate('/')
                }
            })
    }, [url])


    const handleDelete = id => {

        const myconfirm = confirm("Are you sure want to Delete ?")

        if (myconfirm) {
            fetch(`http://localhost:5000/bookingscartsdata/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = bookedItems.filter(booked => booked._id !== id)
                        setBookedItems(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <h3>My Bookings List</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> Delete Items
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookedItems.map(booked => <BookItems
                                key={booked._id}
                                booked={booked}
                                handleDelete={handleDelete}
                            />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default Mybookings;
