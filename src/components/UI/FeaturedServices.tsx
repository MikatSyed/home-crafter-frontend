"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useServicesQuery } from "@/redux/api/servicesApi";
import Link from "next/link";
import Loader from "./Loader";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
  const { data,isLoading } = useServicesQuery(undefined);
  const services = data?.data;
  if (isLoading) {
    return (
        <div >
            <Loader/>
        </div>
    );
}

  return (
    <div className="mx-auto px-6 md:px-[7rem] bg-white py-14">
      <div className="section-heading mb-8">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-indigo-900 leading-tight">
              Featured Services
            </h2>
            <p className="text-gray-400 mt-4">
              Explore the greatest of our services. You won’t be disappointed
            </p>
          </div>
          {services?.length > 3 && ( 
            <div className="w-full md:w-1/2 text-right">
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
      <Swiper
        onSwiper={handleSwiper}
        loop={true}
        spaceBetween={20}
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
            <div
              className="border shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
              data-aos="fade-up"
            >
              <div className="relative">
                <div className="image-wrapper">
                  <Image
                    className="img-fluid w-full rounded-md transition-transform duration-300 ease-in-out h-auto  md:h-[220px]"
                    alt="Service Image"
                    src={service.serviceImg[0]}
                    height={218}
                    width={328}
                  />
                </div>

                <div className="fav-item absolute top-0 left-0 p-4 flex justify-between w-full">
                  <span className="flex items-center justify-center text-sm bg-white p-2 hover:text-white text-[#665cf0] hover:bg-[#665cf0] rounded">
                    {service?.category?.categoryName}
                  </span>
                  <div className="flex items-center justify-center border rounded-full text-black hover:text-white bg-white w-10 h-10 hover:bg-blue-600">
                    <FaRegHeart className="w-4 h-4" />
                  </div>
                </div>
                <div className="item-info absolute bottom-0 right-0 p-4 flex items-center justify-start w-full">
                  <a href="providers.html" className="flex items-center">
                    <img
                      src="https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg"
                      className="avatar w-10 h-10 rounded-full"
                      alt="User"
                    />
                    <span className="ml-2 text-white">Jeny Doe</span>
                  </a>
                </div>
              </div>
              <div className="service-content p-4">
                <h3 className="title text-xl font-bold">
                  <a href="service-details.html">{service.serviceName}</a>
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-500 flex items-center">
                    <FiMapPin className="mr-1" /> {service.location}
                  </p>
                  <p className="flex items-center">
                    <span className="rate ml-4 flex items-center">
                      <FaStar className="filled text-yellow-500 mr-1" /> 4
                    </span>
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h6 className="text-lg font-bold">
                    {service.price}{" "}
                    <span className="line-through text-gray-500 ml-2">
                      $35.00
                    </span>
                  </h6>
                  <Link
                    href={`/service-details/${service.id}`}
                    className="bg-[#f7f7ff] text-[#6240ed] border border-transparent hover:border-[#6240ed] px-4 py-2 rounded text-sm font-semibold hover:bg-white"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MostPopularServices;
