"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { useServicesQuery, useUpdateServiceMutation } from "@/redux/api/servicesApi";
import Link from "next/link";
import StatusModal from "@/components/UI/StatusModal";

const Services = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useServicesQuery(undefined);
  const [updateService] = useUpdateServiceMutation();

  const filteredServices = data?.data?.filter(
    (service: any) => service.status === activeTab
  );

  const handleStatusClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleConfirmStatusChange = async () => {
    if (!selectedService) return;
  
    // Determine the updated status
    const updatedStatus = selectedService.status === "Active" ? "Inactive" : "Active";
  
    try {
      // Pass the updated status in the payload
      const response = await updateService({ id: selectedService.id,  body: { status: updatedStatus } }).unwrap();
      console.log('Update response:', response);
      setIsModalOpen(false);
      setSelectedService(null);
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };
  
  
  return (
    <div className="mx-auto px-6 bg-white py-7">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-[#2a2a3d] mb-6">My Services</h2>
        <div>
          <Link href="/provider/services/create-service">
            <button className="text-[#4f46e5] hover:bg-[#4f46e5] inline-flex items-center hover:text-white px-4 py-2 rounded text-md border border-[#4f46e5]">
              Add Service
            </button>
          </Link>
        </div>
      </div>

      <div className="mb-6">
        <button
          onClick={() => setActiveTab("Active")}
          className={`px-4 py-2 ${
            activeTab === "Active"
              ? "bg-[#4f46e5] text-white"
              : "bg-white text-blue-600"
          } border rounded-l-md`}
        >
          Active Services
        </button>
        <button
          onClick={() => setActiveTab("Inactive")}
          className={`px-4 py-2 ml-2 ${
            activeTab === "Inactive"
              ? "bg-[#4f46e5] text-white"
              : "bg-white text-blue-600"
          } border rounded-r-md`}
        >
          Inactive Services
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredServices?.map((service: any, index: any) => (
          <div
            key={index}
            className="border hover:shadow-md rounded-md relative overflow-hidden"
            data-aos="fade-up"
          >
            <div className="relative">
              <Link href={`/service-details/${service.id}`} className="block relative">
                <div className="image-wrapper">
                  <Image
                    className="img-fluid w-full  transition-transform duration-300 ease-in-out h-auto md:h-[230px]"
                    alt="Service Image"
                    src={service.serviceImg[service.serviceImg.length - 1]}
                    height={218}
                    width={328}
                  />
                </div>
              </Link>
              <div className="fav-item absolute top-0 left-0 p-4 flex justify-between w-full">
                <span className="text-sm bg-white px-3 py-1 hover:text-white text-[#665cf0] hover:bg-[#665cf0] rounded flex items-center">
                  {service.category.categoryName}
                </span>
                <div className="flex items-center">
                  <span className="rate ml-4 flex items-center bg-white px-3 py-1 rounded">
                    <FaStar className="filled text-yellow-500 mr-1" /> {service?.averageRating}
                  </span>
                </div>
              </div>
              <div className="item-info absolute bottom-0 right-0 p-4 flex items-center justify-start w-full">
                <Link href={`/providers/${service.provider.id}`} className="flex items-center">
                  <img
                    src={service.provider.profileImg[0]}
                    className="avatar w-10 h-10 rounded-full"
                    alt="User"
                  />
                  <span className="ml-2 text-white">{`${service?.provider?.fName} ${service?.provider?.lName}`}</span>
                </Link>
              </div>
            </div>
            <div className="service-content p-4">
              <h3 className="title text-xl font-bold">
                <Link href={`/service-details/${service.id}`}>{service.serviceName}</Link>
              </h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-500 flex items-center text-sm">
                  <FiMapPin className="mr-1" /> {service.location}
                </p>
                <p className="flex items-center">
                  {service?.offeredPrice ? 
                  <><h6 className="text-md font-bold"> ${service?.offeredPrice}</h6>
                  <span className="line-through text-gray-500 ml-2 text-sm">
                   ${service?.regularPrice}
                  </span></>
                   : <> <h6 className="text-md font-bold">
                   ${service?.regularPrice}
                  </h6></>
                  }
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <Link href={`/provider/services/edit/${service?.id}`}>
                    <span className="text-[14px] text-[#74788d] font-semibold">Edit</span>
                  </Link>
                  <span
                    className="text-[14px] text-[#74788d] font-semibold ml-4 cursor-pointer"
                    onClick={() => handleStatusClick(service)}
                  >
                    {service.status}
                  </span>
                </div>
                <Link
                  href={`/service-details/${service.id}`}
                  className="bg-[#f7f7ff] text-[#6240ed] border border-transparent hover:border-[#6240ed] px-4 py-2 rounded text-sm font-semibold hover:bg-white"
                >
                  Apply Offer
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <StatusModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmStatusChange}
        serviceName={selectedService?.serviceName || ""}
        currentStatus={selectedService?.status || ""}
      />
    </div>
  );
};

export default Services;
