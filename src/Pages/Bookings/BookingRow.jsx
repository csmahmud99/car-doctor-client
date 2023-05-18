
const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, img, service, customer, price, date, status } = booking;

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squire w-32 h-24">
                            <img src={img} alt="booking-item-image" className="rounded-lg border-2 border-red-600" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">{customer}</div>
                    </div>
                </div>
            </td>
            <td>${price}</td>
            <td>{date}</td>
            <th>
                {status === "confirm" ?
                    <span className="font-bold text-primary">Confirmd</span>
                    : <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please, Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;