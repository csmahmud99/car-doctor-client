import { FaArrowRight } from 'react-icons/fa';

const HomeServicesCard = ({ service }) => {

    const { img, title, price } = service;

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl border-2 border-red-600">
                <figure className="px-10 pt-10">
                    <img src={img} alt="home-services-title" className="rounded-xl h-40" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">{title}</h2>
                    <div className="flex items-center pt-3">
                        <p className="text-red-600">Price: ${price}</p>
                        <div className="card-actions">
                            <button className="btn btn-outline bg-red-600 text-white"><FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeServicesCard;