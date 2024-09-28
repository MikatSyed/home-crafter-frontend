"use client";
import "swiper/css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { usePopularServicesQuery } from "@/redux/api/servicesApi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Loader from "@/components/UI/Loader";
import { Toaster } from "react-hot-toast";
import ServiceCard from "@/components/UI/ServiceCard";

const MostPopularServices = () => {
  const [swiper, setSwiper] = useState<any | null>(null);


  const handleSwiper = (swiper: any) => {
    setSwiper(swiper);
  };

  const handlePrevious = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  const { data, isLoading } = usePopularServicesQuery(undefined);
  const services = data?.data;
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
    <div className="bg-white py-10 md:py-14">
      <div className="mb-8 mx-auto px-6 md:px-[6rem]">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2" data-aos="fade-up">
            <h2 className="text-4xl font-bold ">Most Popular Services</h2>
            <p className="text-gray-400 mt-4">
              Explore the greatest of our services. You won’t be disappointed
            </p>
          </div>
          {services?.length > 3 && (
              <div className="w-full md:w-1/2 text-right hidden md:block">
                <div className="inline-flex items-center space-x-4">
                  <button
                    className="rounded-full text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white p-3 shadow-lg hover:shadow-xl"
                    onClick={handlePrevious}
                  >
                    <IoIosArrowBack className="w-5 h-5" />
                  </button>
                  <button
                    className="rounded-full text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white p-3 shadow-lg hover:shadow-xl"
                    onClick={handleNext}
                  >
                    <IoIosArrowForward className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
             {services?.length > 1 && (
              <div className="w-full md:w-1/2 text-right block md:hidden">
                <div className="inline-flex items-center space-x-4">
                  <button
                    className="rounded-full text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white p-3 shadow-lg hover:shadow-xl"
                    onClick={handlePrevious}
                  >
                    <IoIosArrowBack className="w-5 h-5" />
                  </button>
                  <button
                    className="rounded-full text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white p-3 shadow-lg hover:shadow-xl"
                    onClick={handleNext}
                  >
                    <IoIosArrowForward className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
      <div className="px-5 md:px-[5rem]">  <Swiper
        onSwiper={handleSwiper}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {services?.map((service: any, index: number) => (
          <SwiperSlide key={index}>
            
            <ServiceCard service={service} /> 
          </SwiperSlide>
        ))}
      </Swiper></div>
    
    </div>
    </>
  );
};

export default MostPopularServices;