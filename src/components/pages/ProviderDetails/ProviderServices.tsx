"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Rating from "@/components/UI/Rating"; // Ensure you have a Rating component created
import { Toaster } from "react-hot-toast";
import { useFavourites } from "@/redux/hook"; // Custom hook for handling favorites
import { useSingleProviderServiceQuery } from "@/redux/api/servicesApi"; // Redux toolkit query hook
import ServiceCard from "@/components/UI/ServiceCard";

// Define the interface for props
interface ProviderServicesProps {
  providerId: string;
}

const ProviderServices: React.FC<ProviderServicesProps> = ({ providerId }) => {
  const [swiper, setSwiper] = useState<any | null>(null);
  const { isServiceFavourite, handleFavouriteClick } = useFavourites();
  const { data } = useSingleProviderServiceQuery(providerId);
  const providers = data?.data;
  console.log(providers, "25");

  // Function to set swiper instance
  const handleSwiper = (swiper: any) => {
    setSwiper(swiper);
  };

  // Slide previous button handler
  const handlePrevious = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  // Slide next button handler
  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="py-14">
        <div className="section-heading mb-8">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2" data-aos="fade-up">
              <h2 className="text-4xl font-bold text-indigo-900 leading-tight">
                Provider Services
              </h2>
              <p className="text-gray-400 mt-4">
                Explore the greatest of our services. You won’t be disappointed.
              </p>
            </div>

            {/* Navigation buttons for large screens */}
            {providers?.length > 3 && (
              <div className="w-full text-right hidden md:block">
                <div className="inline-flex items-center space-x-4">
                  <button
                    className="rounded-full bg-[#4c40ed] hover:bg-white text-white hover:text-[#4f46e5] p-3 shadow-lg hover:shadow-xl border-transparent hover:border-[#4f46e5] border"
                    onClick={handlePrevious}
                  >
                    <IoIosArrowBack className="w-5 h-5" />
                  </button>
                  <button
                    className="rounded-full bg-[#4c40ed] hover:bg-white text-white hover:text-[#4f46e5] p-3 shadow-lg hover:shadow-xl border-transparent hover:border-[#4f46e5] border"
                    onClick={handleNext}
                  >
                    <IoIosArrowForward className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Navigation buttons for small screens */}
            {providers?.length > 1 && (
              <div className="w-full text-right block md:hidden">
                <div className="inline-flex items-center space-x-4">
                  <button
                    className="rounded-full bg-[#4c40ed] hover:bg-white text-white hover:text-[#4f46e5] p-3 shadow-lg hover:shadow-xl border-transparent hover:border-[#4f46e5] border"
                    onClick={handlePrevious}
                  >
                    <IoIosArrowBack className="w-5 h-5" />
                  </button>
                  <button
                    className="rounded-full bg-[#4c40ed] hover:bg-white text-white hover:text-[#4f46e5] p-3 shadow-lg hover:shadow-xl border-transparent hover:border-[#4f46e5] border"
                    onClick={handleNext}
                  >
                    <IoIosArrowForward className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Swiper for displaying services */}
        <Swiper
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
          {providers?.map((service: any, index: number) => (
            <SwiperSlide key={index}>
             <ServiceCard service={service} /> 
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProviderServices;
