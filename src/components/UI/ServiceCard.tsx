import React from "react";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";
import Rating from "@/components/UI/Rating";
import { useFavourites } from "@/redux/hook";

// Define the interface for the service card's props
interface ServiceCardProps {
  service: any; // Replace with a proper type definition if available
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { isServiceFavourite, handleFavouriteClick } = useFavourites();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ml-1 md:ml-4 mr-1 mb-1 md:mb-4" data-aos="fade-up">
      <div className="relative">
        <div className="image-wrapper">
          <Image
            className="w-full rounded-md transition-transform duration-300 ease-in-out h-[230px]"
            alt="Service Image"
            src={service.serviceImg[service.serviceImg.length - 1]}
            height={230}
            width={328}
          />
        </div>

        <div className="fav-item absolute top-0 left-0 p-4 flex justify-between w-full">
          <span className="flex items-center justify-center text-sm bg-white p-2 hover:text-white text-[#665cf0] hover:bg-[#665cf0] rounded">
            {service?.category?.categoryName}
          </span>
          <div
            className="flex items-center justify-center cursor-pointer border rounded-full text-black hover:text-white bg-white w-10 h-10"
            onClick={() => handleFavouriteClick(service)}
          >
            {isServiceFavourite(service.id) ? (
              <FaHeart className="text-indigo-600" />
            ) : (
              <FaRegHeart className="text-gray-500" />
            )}
          </div>
        </div>

        <div className="item-info absolute bottom-0 right-0 p-4 flex items-center justify-start w-full">
          <a href="providers.html" className="flex items-center">
            <img
              src={service.provider.profileImg[0] || "/default-profile.png"} // Fallback for missing images
              className="avatar w-10 h-10 rounded-full"
              alt="User"
            />
            <span className="ml-2 text-white">{`${service?.provider?.fName} ${service?.provider?.lName}`}</span>
          </a>
        </div>
      </div>

      <div className="service-content p-4">
        <h3 className="title text-xl font-bold">
          <Link href={`/service-details/${service.id}`}>{service.serviceName}</Link>
        </h3>

        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-500 flex items-center">
            <FiMapPin className="mr-1" /> {service.location}
          </p>
          <p className="flex items-center">
            {service?.offeredPrice ? (
              <>
                <h6 className="text-md font-bold">${service?.offeredPrice}</h6>
                <span className="line-through text-gray-500 ml-2 text-sm">
                  ${service?.regularPrice}
                </span>
              </>
            ) : (
              <h6 className="text-md font-bold">${service?.regularPrice}</h6>
            )}
          </p>
        </div>

        <div className="mt-4 mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <Rating rating={service?.averageRating || 0} />
            <span className="ml-2 text-gray-500">({service?.totalReviews})</span>
          </div>
          <Link
            href={`/service-details/${service.id}`}
            className="bg-[#f7f7ff] text-[#6240ed] border border-transparent hover:border-[#6240ed] px-4 py-2 rounded text-sm font-semibold hover:bg-white"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
