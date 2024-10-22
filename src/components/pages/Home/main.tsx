
import { Metadata } from "next";
import Blog from "./Blog/Main";
import Faq from "./Faq/Faq";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import FeaturedServices from "./FeaturedServices/FeaturedServices";
import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import HowItWorks from "./HowItWorks/HowItWorks";
import MostPopularServices from "./MostPopularServices/MostPopularServices";
import MainNavbar from "./Nav/MainNavbar";
import Offer from "./OfferCard/OfferCard";
import OfferedServices from "./OfferedServices/OfferedServices";
import Partners from "./Partners/Partners";
import PricingPlan from "./PricingPlan/PricingPlan";
import Testimonial from "./Testimonial/Testimonial";
import TopProviders from "./TopProviders/TopProviders";




const HomePage = () => {
    return (
        <>
            <MainNavbar />
            <HeroSection/>
            <FeaturedCategories/>
            <FeaturedServices/>
            <TopProviders/>
            <HowItWorks/>
            {/* <Offer/> */}
            <OfferedServices/>
            <PricingPlan/>
            <Testimonial/>
            <MostPopularServices/>
            <Blog/>
            <Faq/>
            <Partners/>
            <Footer/>
        </>
    );
};

export default HomePage;