import Banner from "../Banner/Banner";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeServices from "../HomeServices/HomeServices/HomeServices";

const Home = () => {
    return (
        <div className="mt-10 mb-20">
            <Banner />
            <HomeAbout />
            <HomeServices />
        </div>
    );
};

export default Home;