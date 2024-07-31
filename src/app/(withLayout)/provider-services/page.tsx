"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { Swiper, SwiperSlide, Swiper as SwiperType } from "swiper/react";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const MostPopularServices = () => {
  const [activeTab, setActiveTab] = useState("active"); // State to track the active tab

  const services = [
    {
      name: "Construction",
      category: "Cleaning",
      img: "https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-02.jpg",
      provider: "Jeny Doe",
      providerImg:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg",
      location: "New Jersey, USA",
      rating: 4.9,
      price: "$25.00",
      oldPrice: "$35.00",
      service: "Electric Panel Repairing Service",
      active: true,
    },
    {
      name: "Construction",
      category: "Cleaning",
      img: "https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-02.jpg",
      provider: "Jeny Doe",
      providerImg:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg",
      location: "New Jersey, USA",
      rating: 4.9,
      price: "$25.00",
      oldPrice: "$35.00",
      service: "Electric Panel Repairing Service",
      active: true,
    },
    {
      name: "Construction",
      category: "Cleaning",
      img: "https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-02.jpg",
      provider: "Jeny Doe",
      providerImg:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg",
      location: "New Jersey, USA",
      rating: 4.9,
      price: "$25.00",
      oldPrice: "$35.00",
      service: "Electric Panel Repairing Service",
      active: true,
    },
    {
      name: "Construction",
      category: "Cleaning",
      img: "https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-02.jpg",
      provider: "Jeny Doe",
      providerImg:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg",
      location: "New Jersey, USA",
      rating: 4.9,
      price: "$25.00",
      oldPrice: "$35.00",
      service: "Electric Panel Repairing Service",
      active: true,
    },
    {
      name: "Construction",
      category: "Cleaning",
      img: "https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-02.jpg",
      provider: "Jeny Doe",
      providerImg:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg",
      location: "New Jersey, USA",
      rating: 4.9,
      price: "$25.00",
      oldPrice: "$35.00",
      service: "Electric Panel Repairing Service",
      active: false,
    },
    {
      name: "Construction",
      category: "Cleaning",
      img: "https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-02.jpg",
      provider: "Jeny Doe",
      providerImg:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg",
      location: "New Jersey, USA",
      rating: 4.9,
      price: "$25.00",
      oldPrice: "$35.00",
      service: "Electric Panel Repairing Service",
      active: true,
    },
    {
      name: "Car Wash",
      category: "Car Wash",
      img: "https://truelysell.dreamstechnologies.com/html/template/assets/img/feature.jpg",
      provider: "John Doe",
      providerImg:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg",
      location: "Los Angeles, USA",
      rating: 4.8,
      price: "$15.00",
      oldPrice: "$20.00",
      service: "Complete Car Wash",
      active: false,
    },
    {
      name: "Electrical",
      category: "Electrical",
      img: "https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-01.jpg",
      provider: "Emily Clark",
      providerImg:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-03.jpg",
      location: "Chicago, USA",
      rating: 4.9,
      price: "$30.00",
      oldPrice: "$40.00",
      service: "Home Electrical Service",
      active: true,
    },
    {
      name: "Construction",
      category: "Cleaning",
      img: "https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-02.jpg",
      provider: "Jeny Doe",
      providerImg:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg",
      location: "New Jersey, USA",
      rating: 4.9,
      price: "$25.00",
      oldPrice: "$35.00",
      service: "Electric Panel Repairing Service",
      active: false,
    },
  ];

  const filteredServices = services.filter(
    (service) => service.active === (activeTab === "active")
  );

  return (
    <div className="mx-auto px-6  bg-white py-7">
      <div className="flex  justify-between">
        <h2 className="text-2xl font-semibold text-[#2a2a3d] mb-6">
          My Services
        </h2>
        <div>
          <a
            href="categories.html"
            className="bg-[#4f46e5] inline-flex items-center text-white px-4 py-2 rounded"
          >
            Add Service
           
          </a>
        </div>
      </div>
      <div className=" mb-6">
        <button
          onClick={() => setActiveTab("active")}
          className={`px-4 py-2 ${
            activeTab === "active"
              ? "bg-[#4f46e5] text-white"
              : "bg-white text-blue-600"
          } border rounded-l-md`}
        >
          Active Services
        </button>
        <button
          onClick={() => setActiveTab("inactive")}
          className={`px-4 py-2 ${
            activeTab === "inactive"
              ? "bg-[#4f46e5] text-white"
              : "bg-white text-blue-600"
          } border rounded-r-md`}
        >
          Inactive Services
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredServices.map((category, index) => (
         <div
         key={index}
         className="service-widget shadow-md rounded-md relative overflow-hidden"
         data-aos="fade-up"
       >
         <div className="relative">
           <a href="service-details.html" className="block relative">
             <div className="image-wrapper">
               <Image
                 className="img-fluid w-full rounded-md transition-transform duration-300 ease-in-out"
                 alt="Service Image"
                 src={category.img}
                 height={218}
                 width={328}
               />
             </div>
           </a>
           <div className="fav-item absolute top-0 left-0 p-4 flex justify-between w-full">
             <span className="text-sm bg-white px-3 py-1 hover:text-white text-[#665cf0] hover:bg-[#665cf0] rounded flex items-center">
               {category.category}
             </span>
             <div className="flex items-center">
               <span className="rate ml-4 flex items-center bg-white px-3 py-1 rounded">
                 <FaStar className="filled text-yellow-500 mr-1" /> {category.rating}
               </span>
             </div>
           </div>
           <div className="item-info absolute bottom-0 right-0 p-4 flex items-center justify-start w-full">
             <a href="providers.html" className="flex items-center">
               <img
                 src={category.providerImg}
                 className="avatar w-10 h-10 rounded-full"
                 alt="User"
               />
               <span className="ml-2 text-white">{category.provider}</span>
             </a>
           </div>
         </div>
         <div className="service-content p-4">
           <h3 className="title text-xl font-bold">
             <a href="service-details.html">{category.service}</a>
           </h3>
           <div className="flex items-center justify-between mt-2">
             <p className="text-gray-500 flex items-center text-sm">
               <FiMapPin className="mr-1" /> {category.location}
             </p>
             <p className="flex items-center">
               <h6 className="text-md font-bold">{category.price}</h6>
               <span className="line-through text-gray-500 ml-2 text-sm">
                 {category.oldPrice}
               </span>
             </p>
           </div>
           <div className="mt-4 flex items-center justify-between">
             <p className="text-[14px] text-[#74788d] font-semibold">
               Edit
               <span className="text-[14px] text-[#74788d] font-semibold ml-4">
                 Active
               </span>
             </p>
             <a
               href="service-details.html"
               className="bg-[#f7f7ff] text-[#6240ed] border border-transparent hover:border-[#6240ed] px-4 py-2 rounded text-sm font-semibold hover:bg-white"
             >
               Apply Offer
             </a>
           </div>
         </div>
       </div>
       
        ))}
      </div>
    </div>
  );
};

export default MostPopularServices;

