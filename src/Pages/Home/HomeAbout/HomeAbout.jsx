import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const HomeAbout = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col md:flex-row">
                    <div className="md:w-1/2 relative mb-10">
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2 absolute top-1/2 right-5 left-44 rounded-lg shadow-2xl border-8 border-white" />
                    </div>
                    <div className="md:w-1/2 space-y-5">
                        <h2 className="text-xl text-red-600 font-bold">About Us</h2>
                        <h3 className="text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h3>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable.
                        </p>
                        <p>
                            The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                        </p>
                        <button className="btn btn-outline bg-red-600 text-white">Get More Info.</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;