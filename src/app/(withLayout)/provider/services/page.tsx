"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { useServicesQuery } from "@/redux/api/servicesApi";

const MostPopularServices = () => {
  const [activeTab, setActiveTab] = useState("active"); // State to track the active tab

  // Fetch services data from Redux
  const { data } = useServicesQuery(undefined);

  // Filter services based on the active tab
  const filteredServices = data?.data?.filter(
    (service:any) => service.status === activeTab
  );

  return (
    <div className="mx-auto px-6 bg-white py-7">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-[#2a2a3d] mb-6">
          My Services
        </h2>
        <div>
          <button className="text-[#4f46e5] hover:bg-[#4f46e5] inline-flex items-center hover:text-white px-4 py-2 rounded text-md border border-[#4f46e5]">
            Add Service
          </button>
        </div>
      </div>

      <div className="mb-6">
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
        {filteredServices?.map((service:any, index:any) => (
          <div
            key={index}
            className="service-widget shadow-md rounded-md relative overflow-hidden"
            data-aos="fade-up"
          >
            <div className="relative">
              <a href="service-details.html" className="block relative">
                <div className="image-wrapper">
                  <Image
                    className="img-fluid w-full rounded-md transition-transform duration-300 ease-in-out h-auto  md:h-[230px]"
                    alt="Service Image"
                    src={service.service_img[0]}
                    height={218}
                    width={328}
                  />
                </div>
              </a>
              <div className="fav-item absolute top-0 left-0 p-4 flex justify-between w-full">
                <span className="text-sm bg-white px-3 py-1 hover:text-white text-[#665cf0] hover:bg-[#665cf0] rounded flex items-center">
                  {service.category.category_name}
                </span>
                <div className="flex items-center">
                  <span className="rate ml-4 flex items-center bg-white px-3 py-1 rounded">
                    <FaStar className="filled text-yellow-500 mr-1" /> 4.9
                  </span>
                </div>
              </div>
              <div className="item-info absolute bottom-0 right-0 p-4 flex items-center justify-start w-full">
                <a href="providers.html" className="flex items-center">
                  <img
                    src={service.category.category_icon}
                    className="avatar w-10 h-10 rounded-full"
                    alt="User"
                  />
                  <span className="ml-2 text-white">John Doe</span>
                </a>
              </div>
            </div>
            <div className="service-content p-4">
              <h3 className="title text-xl font-bold">
                <a href="service-details.html">{service.service_name}</a>
              </h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-500 flex items-center text-sm">
                  <FiMapPin className="mr-1" /> {service.location}
                </p>
                <p className="flex items-center">
                  <h6 className="text-md font-bold">${service.price}</h6>
                  <span className="line-through text-gray-500 ml-2 text-sm">
                    ${service.price + 10}
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
