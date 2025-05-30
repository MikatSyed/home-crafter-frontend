"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import { EffectFade, Pagination, Autoplay } from "swiper/modules"
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt, FaRegStar, FaCheckCircle, FaPlay } from "react-icons/fa"
import { HiOutlineBadgeCheck } from "react-icons/hi"
import Link from "next/link"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { FiMapPin } from "react-icons/fi"

interface ServiceCardProps {
  data: any[]
  title: string
  description: string
  isLoading?: boolean
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data, title, description, isLoading }) => {
  const [swiper, setSwiper] = useState<any | null>(null)
  const [favourites, setFavourites] = useState<Set<string>>(new Set())

  const handleSwiper = (swiper: any) => setSwiper(swiper)
  const handlePrevious = () => swiper && swiper.slidePrev()
  const handleNext = () => swiper && swiper.slideNext()

  const toggleFavourite = (serviceId: string) => {
    const newFavourites = new Set(favourites)
    if (newFavourites.has(serviceId)) {
      newFavourites.delete(serviceId)
    } else {
      newFavourites.add(serviceId)
    }
    setFavourites(newFavourites)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />)
    }

    return stars
  }

  const SkeletonCard = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      <div className="h-64 bg-gray-200"></div>
      <div className="p-6">
        <div className="h-4 bg-gray-200 rounded mb-4"></div>
        <div className="h-6 bg-gray-200 rounded mb-3"></div>
        <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-200 rounded w-20"></div>
          <div className="h-8 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    </div>
  )

  // Don't render anything if no data and not loading
  if (!isLoading && (!data || data.length === 0)) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 mb-16">
        <div className="text-center px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">No Services Available</h3>
          <p className="text-gray-600">Check back later for new services.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 mb-16">
      {/* Header Section */}
      <div className="mb-12 px-6 md:px-[3rem]">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-2/3" data-aos="fade-up">
          
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">{title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">{description}</p>
          </div>
          {!isLoading && data && data.length > 3 && (
            <div className="w-full md:w-1/3 text-right mt-6 md:mt-0">
              <div className="inline-flex items-center space-x-3">
                <button
                  className="group relative overflow-hidden rounded-full bg-white text-[#1f54dd] border-2 border-[#1f54dd] hover:text-white p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handlePrevious}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1f54dd] to-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <IoIosArrowBack className="w-5 h-5 relative z-10" />
                </button>
                <button
                  className="group relative overflow-hidden rounded-full bg-white text-[#1f54dd] border-2 border-[#1f54dd] hover:text-white p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleNext}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1f54dd] to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <IoIosArrowForward className="w-5 h-5 relative z-10" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-6 md:px-[3rem]">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <Swiper
            onSwiper={handleSwiper}
            loop={data && data.length > 1}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: Math.min(2, data?.length || 1) },
              1024: { slidesPerView: Math.min(3, data?.length || 1) },
            }}
            className="premium-service-swiper"
          >
            {data?.map((service: any, index: number) => (
              <SwiperSlide key={service.id || index}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 mb-8">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    {service.serviceImg && service.serviceImg.length > 0 ? (
                      <Swiper
                        modules={[EffectFade, Pagination, Autoplay]}
                        effect="fade"
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={service.serviceImg.length > 1}
                        className="h-64"
                      >
                        {service.serviceImg.map((imgSrc: string, imgIndex: number) => (
                          <SwiperSlide key={imgIndex}>
                            <div className="relative h-64 overflow-hidden">
                              <Image
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt={service.serviceName || "Service Image"}
                                src={imgSrc || "/placeholder.svg?height=256&width=400&text=No+Image"}
                                height={256}
                                width={400}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      <div className="h-64 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No Image Available</span>
                      </div>
                    )}

                    {/* Overlay Elements */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                      <div className="flex flex-col gap-2">
                        {service?.category?.categoryName && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-[#1f54dd] border border-[#1f54dd]/20">
                            <FaCheckCircle className="w-3 h-3 mr-1" />
                            {service.category.categoryName}
                          </span>
                        )}
                        {service.status === "Active" && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100/90 backdrop-blur-sm text-green-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                            Available
                          </span>
                        )}
                      </div>
                      <button
                        className="group/fav flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-white transition-all duration-300 hover:scale-110"
                        onClick={() => toggleFavourite(service.id)}
                      >
                        {favourites.has(service.id) ? (
                          <FaHeart className="text-red-500 w-4 h-4" />
                        ) : (
                          <FaRegHeart className="text-gray-600 group-hover/fav:text-red-500 w-4 h-4 transition-colors" />
                        )}
                      </button>
                    </div>

                    {/* Video Play Button */}
                    {service.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={service.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-110"
                        >
                          <FaPlay className="text-[#1f54dd] w-6 h-6 ml-1" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#1f54dd] transition-colors">
                      <Link href={`/service-details/${service.id}`}>{service.serviceName || "Unnamed Service"}</Link>
                    </h3>

                   

                    {/* Service Location */}
                    {service.location && (
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <FiMapPin className="w-4 h-4 mr-2 text-[#1f54dd]" />
                        {service.location}
                      </div>
                    )}

                    {/* Provider Info */}
                    {service.provider && (
                      <div className="flex items-center mb-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 ring-2 ring-[#1f54dd]/20">
                          {service.provider.profileImg && service.provider.profileImg[0] ? (
                            <Image
                              src={service.provider.profileImg[0] || "/placeholder.svg"}
                              alt={`${service.provider.fName} ${service.provider.lName}`}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-r from-[#1f54dd] to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                              {service.provider.fName?.charAt(0) || ""}
                              {service.provider.lName?.charAt(0) || ""}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">
                            {service.provider.fName || ""} {service.provider.lName || ""}
                          </p>
                          <div className="flex items-center text-xs text-gray-500">
                            <HiOutlineBadgeCheck className="w-3 h-3 text-[#1f54dd] mr-1" />
                            Verified Provider
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Rating and Reviews */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="flex items-center mr-2">{renderStars(service.averageRating || 0)}</div>
                        <span className="text-sm text-gray-600">
                          {service.averageRating ? service.averageRating.toFixed(1) : "0.0"} (
                          {service.totalReviews || 0} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        {service.offeredPrice && service.offeredPrice > 0 ? (
                          <div className="flex items-center">
                            <span className="text-2xl font-bold text-green-600">${service.offeredPrice}</span>
                            {service.regularPrice && (
                              <>
                                <span className="text-sm text-gray-500 line-through ml-2">${service.regularPrice}</span>
                                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full ml-2 font-semibold">
                                  {Math.round(
                                    ((service.regularPrice - service.offeredPrice) / service.regularPrice) * 100,
                                  )}
                                  % OFF
                                </span>
                              </>
                            )}
                          </div>
                        ) : (
                          <span className="text-2xl font-bold text-gray-900">${service.regularPrice || "N/A"}</span>
                        )}
                      </div>
                      <Link
                        href={`/service-details/${service.id}`}
                        className="group/btn relative overflow-hidden bg-[#1f54dd] hover:bg-[#1a4bc4] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                      >
                        <span className="relative z-10">Book Now</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4bc4] to-[#1f54dd] transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}

export default ServiceCard
