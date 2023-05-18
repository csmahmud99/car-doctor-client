import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
    const service = useLoaderData();

    const { _id, title, price } = service;

    const {user} = useContext(AuthContext);

    const handleOrderService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        
        const order = {
            customer: name,
            email,
            date,
            service: _id,
            price
        };

        console.log(order);
    };

    return (
        <div className="max-w-6xl mx-auto my-20">
            <h2 className="text-center text-4xl font-bold text-red-600">Book Now: {title}</h2>

            <div className="card-body">
                <form onSubmit={handleOrderService} className="bg-slate-100 p-14 rounded-lg">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Date You Want</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email Address</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Service Charge in $</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} className="input input-bordered" readOnly />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" value="Confirm Order" className="btn btn-block bg-red-600 text-white" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Checkout;