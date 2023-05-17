import Banner from "../Banner/Banner";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeServices from "../HomeServices/HomeServices";

const Home = () => {
    return (
        <div className="my-8">
            <Banner />
            <HomeAbout />
            <HomeServices />
        </div>
    );
};

export default Home;