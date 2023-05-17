import { useEffect, useState } from "react";
import HomeServicesCard from "../HomeServicesCard/HomeServicesCard";

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div className="text-center space-y-3">
                <h2 className="text-xl font-bold text-red-600">Services</h2>
                <h3 className="text-4xl font-bold">Our Service Area</h3>
                <p>
                    The majority have suffered alteration in some form, by injected humour, or randomized <br />words which do not look even slightly believable.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 mx-5">
                {
                    services.map(service => <HomeServicesCard
                        key={service._id}
                        service={service} />)
                }
            </div>
        </div>
    );
};

export default HomeServices;