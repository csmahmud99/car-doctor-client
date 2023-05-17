import { Link } from "react-router-dom";
import slider1 from "../../../assets/images/homeCarousel/1.jpg";
import slider2 from "../../../assets/images/homeCarousel/2.jpg";
import slider3 from "../../../assets/images/homeCarousel/3.jpg";
import slider4 from "../../../assets/images/homeCarousel/4.jpg";

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full rounded-lg md:h-[600px]">
                {/* Home Banner Slider 01 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider1} alt="home-banner-1" className="w-full md:h-[600px]" />
                    <div className="absolute h-full top-0 left-0 right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] md:pl-20 py-1/2 flex items-center">
                        <div className="text-white space-y-7 md:w-1/3">
                            <h2 className="text-5xl">Affordable Price For Car Servicing</h2>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button className="btn btn-outline bg-red-600 mr-5 text-white"><Link>Discover More</Link></button>
                                <button className="btn btn-outline btn-error"><Link className="text-white">Latest Project</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Home Banner Slider 02 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} alt="home-banner-2" className="w-full md:h-[600px]" />
                    <div className="absolute h-full top-0 left-0 right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] md:pl-20 py-1/2 flex items-center">
                        <div className="text-white space-y-7 md:w-1/3">
                            <h2 className="text-5xl">Affordable Price For Car Servicing</h2>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button className="btn btn-outline bg-red-600 mr-5 text-white"><Link>Discover More</Link></button>
                                <button className="btn btn-outline btn-error"><Link className="text-white">Latest Project</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Home Banner Slider 03 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} alt="home-banner-3" className="w-full md:h-[600px]" />
                    <div className="absolute h-full top-0 left-0 right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] md:pl-20 py-1/2 flex items-center">
                        <div className="text-white space-y-7 md:w-1/3">
                            <h2 className="text-5xl">Affordable Price For Car Servicing</h2>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button className="btn btn-outline bg-red-600 mr-5 text-white"><Link>Discover More</Link></button>
                                <button className="btn btn-outline btn-error"><Link className="text-white">Latest Project</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Home Banner Slider 04 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slider4} alt="home-banner-4" className="w-full md:h-[600px]" />
                    <div className="absolute h-full top-0 left-0 right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] md:pl-20 py-1/2 flex items-center">
                        <div className="text-white space-y-7 md:w-1/3">
                            <h2 className="text-5xl">Affordable Price For Car Servicing</h2>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button className="btn btn-outline bg-red-600 mr-5 text-white"><Link>Discover More</Link></button>
                                <button className="btn btn-outline btn-error"><Link className="text-white">Latest Project</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;