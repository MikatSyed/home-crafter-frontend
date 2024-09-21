
import Blog from "./Blog/Blog";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import FeaturedServices from "./FeaturedServices/FeaturedServices";
import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import HowItWorks from "./HowItWorks/HowItWorks";
import MostPopularServices from "./MostPopularServices/MostPopularServices";
import Navbar from "./Navbar/Navbar";
import Partners from "./Partners/Partners";
import PricingPlan from "./PricingPlan/PricingPlan";
import Testimonial from "./Testimonial/Testimonial";
import TopProviders from "./TopProviders/TopProviders";



const HomePage = () => {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <FeaturedCategories/>
            <FeaturedServices/>
            <TopProviders/>
            <HowItWorks/>
            <MostPopularServices/>
            <PricingPlan/>
            <Testimonial/>
            <Blog/>
            <Partners/>
            <Footer/>
        </>
    );
};

export default HomePage;