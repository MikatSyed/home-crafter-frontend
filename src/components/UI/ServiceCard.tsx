// ServiceCard.tsx
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Rating from "@/components/UI/Rating";
import { useFavourites } from "@/redux/hook";
import Loader from "@/components/UI/Loader";


interface ServiceCardProps {
  data: any; 
  title: string; 
  description: string; 
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data, title, description }) => {
  const { isServiceFavourite, handleFavouriteClick } = useFavourites();
  const [swiper, setSwiper] = useState<any | null>(null);

  const handleSwiper = (swiper: any) => setSwiper(swiper);

  const handlePrevious = () => swiper && swiper.slidePrev();
  const handleNext = () => swiper && swiper.slideNext();

  if (!data) return <Loader />;

  return (
    <div className="bg-white py-10 md:py-14">
      <div className="mb-8 mx-auto px-6 md:px-[6rem]">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2" data-aos="fade-up">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-gray-400 mt-4">{description}</p>
          </div>
          {data?.length > 3 && (
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
        </div>
      </div>

   
      <div className="px-5 md:px-[5rem]">
        <Swiper
          onSwiper={handleSwiper}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((service: any, index: number) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ml-1 md:ml-4 mr-1 mb-1 md:mb-4"
                data-aos="fade-up"
              >
                <div className="relative">
               
                  <Swiper loop={true} slidesPerView={1}>
                    {service.serviceImg.map((imgSrc: string, imgIndex: number) => (
                      <SwiperSlide key={imgIndex}>
                        <Image
                          className="w-full rounded-md transition-transform duration-300 ease-in-out h-[230px]"
                          alt="Service Image"
                          src={imgSrc}
                          height={230}
                          width={328}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Favourite and Category Information */}
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

                  {/* Provider Information */}
                  <div className="item-info absolute bottom-0 right-0 p-4 flex items-center justify-start w-full">
                    <Link href={`/service-details/${service.provider.id}`} className="flex items-center">
                      <img
                        src={service.provider.profileImg[0] || "/default-profile.png"} // Fallback for missing images
                        className="avatar w-10 h-10 rounded-full"
                        alt="User"
                      />
                      <span className="ml-2 text-white">{`${service?.provider?.fName} ${service?.provider?.lName}`}</span>
                    </Link>
                  </div>
                </div>

                {/* Service Details and Rating */}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceCard;
