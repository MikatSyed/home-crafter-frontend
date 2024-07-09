import Blog from '@/components/UI/Blog';
import FeaturedCategories from '@/components/UI/FeaturedCategories';
import FeaturedServices from '@/components/UI/FeaturedServices';
import Footer from '@/components/UI/Footer';
import Hero from '@/components/UI/Hero';
import HowItWorks from '@/components/UI/HowItWorks';
import MostPopularServices from '@/components/UI/MostPopularService';
import Navbar from '@/components/UI/Navbar';
import Partners from '@/components/UI/Partners';
import PricingPlan from '@/components/UI/PricingPlan';
import Testimonial from '@/components/UI/Testimonial';
import TopProviders from '@/components/UI/TopProviders';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
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

        </div>
    );
};

export default HomePage;