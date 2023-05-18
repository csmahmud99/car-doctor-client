import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const [bookings, setBookings] = useState([]);

    const handleDelete = _id => {
        const proceed = confirm("Are you sure you want to delete this?");
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remaining = bookings.filter(booking => booking._id !== _id);
                        setBookings(remaining);
                    }
                });
        }
    };

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, []);

    return (
        <div className="max-w-6xl mx-auto pt-20 pb-20">
            <h2 className="text-center text-4xl text-red-600 mb-5 font-bold">No. of Your Booked Items: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Cancel Order
                                </label>
                            </th>
                            <th>Service Name & Customer Name</th>
                            <th>Price</th>
                            <th>Date of Getting the Service</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking} 
                                handleDelete={handleDelete}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;