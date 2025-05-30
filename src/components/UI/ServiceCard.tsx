"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import { EffectFade, Pagination, Autoplay } from "swiper/modules"
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaClock,
  FaCheckCircle,
  FaPlay,
  FaFire,
} from "react-icons/fa"
import { FiMapPin } from "react-icons/fi"
import { HiOutlineBadgeCheck } from "react-icons/hi"
import Link from "next/link"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

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

  // Enhanced Countdown Timer Component
  const CountdownTimer: React.FC<{ daysLeft: number }> = ({ daysLeft }) => {
    const [timeLeft, setTimeLeft] = useState({
      days: daysLeft,
      hours: 23,
      minutes: 59,
      seconds: 59,
    })

    useEffect(() => {
      const timer = setInterval(() => {
        const now = new Date()
        const endOfDay = new Date()
        endOfDay.setHours(23, 59, 59, 999)

        const timeDiff = endOfDay.getTime() - now.getTime()

        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)

        setTimeLeft({
          days: daysLeft,
          hours,
          minutes,
          seconds,
        })
      }, 1000)

      return () => clearInterval(timer)
    }, [daysLeft])

    return (
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-2 rounded-xl shadow-lg">
        <div className="flex items-center space-x-1 text-xs font-bold">
          <FaClock className="w-3 h-3" />
          <span>
            {timeLeft.days}d {timeLeft.hours.toString().padStart(2, "0")}:{timeLeft.minutes.toString().padStart(2, "0")}
            :{timeLeft.seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    )
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">{title}</h2>
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
                <div
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 mb-8 h-[510px] flex flex-col ${
                    service?.offer ? "ring-2 ring-red-200 ring-opacity-50" : ""
                  }`}
                >
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
                            <div className="relative h-84 overflow-hidden">
                              <Image
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt={service.serviceName || "Service Image"}
                                src={imgSrc || "/placeholder.svg?height=256&width=400&text=No+Image"}
                                height={256}
                                width={400}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      <div className="h-64 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No Image Available</span>
                      </div>
                    )}

                    {/* Top Overlay Elements */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                      <div className="flex flex-col gap-2">
                        {service?.category?.categoryName && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-[#1f54dd] border border-[#1f54dd]/20">
                            <FaCheckCircle className="w-3 h-3 mr-1" />
                            {service.category.categoryName}
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

                    {/* Bottom Overlay Elements - Provider, Hot Offer, Discount */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <div className="flex items-center justify-between">
                        {/* Provider Info */}
                        {service.provider && (
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full overflow-hidden mr-2 ring-2 ring-white/50">
                              {service.provider.profileImg && service.provider.profileImg[0] ? (
                                <Image
                                  src={service.provider.profileImg[0] || "/placeholder.svg"}
                                  alt={`${service.provider.fName} ${service.provider.lName}`}
                                  width={64}
                                  height={64}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-r from-[#1f54dd] to-blue-600 flex items-center justify-center text-white font-semibold text-md">
                                  {service.provider.fName?.charAt(0) || ""}
                                  {service.provider.lName?.charAt(0) || ""}
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="text-md font-semibold text-white">
                                {service.provider.fName || ""} {service.provider.lName || ""}
                              </p>
                            
                            </div>
                          </div>
                        )}

                        {/* Hot Offer Badge */}
                        {service?.offer && (
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-bold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md">
                              <FaFire className="w-3 h-3 mr-1" />
                              HOT OFFER
                            </span>
                            {/* Discount Badge */}
                            {service?.offer?.discount && (
                              <div className="bg-white/90 backdrop-blur-sm text-red-600 px-2 py-1 rounded-lg text-xs font-bold shadow-md">
                                {service.offer.discount}% OFF
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                  
                  </div>

                  {/* Content Section */}
                  <div className="p-5 flex flex-col flex-grow">
                    {/* Special Offer Section - Equal Height for All Cards */}
                    <div className="mb-2 h-[70px] flex items-center">
                      {service?.offer ? (
                        <div className="w-full p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center">
                              <span className="text-sm font-bold text-red-700">
                                {service.offer.offerName || "Special Offer"}
                              </span>
                            </div>
                            {service?.daysLeft && Number.parseInt(service?.daysLeft) > 0 && (
                              <CountdownTimer daysLeft={Number.parseInt(service.daysLeft)} />
                            )}
                          </div>
                          <p className="text-xs text-red-600 font-medium">
                            Save {service.offer.discount}% • Limited time offer
                            {service?.daysLeft && ` • ${service.daysLeft} days left`}
                          </p>
                        </div>
                      ) : (
                        <div className="w-full p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                          <div className="flex items-center justify-center">
                            <span className="text-sm font-medium text-blue-700">Regular Service</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#1f54dd] transition-colors">
                      <Link href={`/service-details/${service.id}`}>{service.serviceName || "Unnamed Service"}</Link>
                    </h3>

                    {/* Service Details */}
                    <div className="mb-2 min-h-[24px]">
                      {service.location && (
                        <div className="flex items-center text-sm text-gray-600">
                          <FiMapPin className="w-4 h-4 mr-2 text-[#1f54dd]" />
                          {service.location}
                        </div>
                      )}
                    </div>

                    {/* Rating and Reviews */}
                    <div className="flex items-center justify-between mb-2 min-h-[24px]">
                      <div className="flex items-center">
                        <div className="flex items-center mr-2">{renderStars(service.averageRating || 0)}</div>
                        <span className="text-sm text-gray-600">
                          {service.averageRating ? service.averageRating.toFixed(1) : "0.0"} (
                          {service.totalReviews || 0})
                        </span>
                      </div>
                    </div>

                    {/* Enhanced Price and Action */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 ">
                      <div className="flex items-center">
                        {service.offeredPrice && service.offeredPrice > 0 ? (
                          <div className="flex items-center">
                            <span className={`text-xl font-bold ${service?.offer ? "text-red-600" : "text-green-600"}`}>
                              ${service.offeredPrice}
                            </span>
                            {service.regularPrice && (
                              <>
                                <span className="text-xs text-gray-500 line-through ml-2">${service.regularPrice}</span>
                              </>
                            )}
                          </div>
                        ) : (
                          <span className="text-xl font-bold text-gray-900">${service.regularPrice || "N/A"}</span>
                        )}
                      </div>
                      <Link
                        href={`/service-details/${service.id}`}
                        className="group/btn relative overflow-hidden bg-[#1f54dd] hover:bg-[#1a4bc4] text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                      >
                        <span className="relative z-10">{service?.offer ? "Grab Offer" : "Book Now"}</span>
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
