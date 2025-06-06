"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { FaCheckCircle, FaStar, FaStarHalfAlt, FaRegStar, FaMapMarkerAlt, FaUserCheck } from "react-icons/fa"
import { FiArrowLeft, FiArrowRight, FiArrowRightCircle } from "react-icons/fi"
import { HiOutlineBadgeCheck } from "react-icons/hi"
import { useProvidersQuery } from "@/redux/api/providerApi"
import Image from "next/image"
import Link from "next/link"
import ProviderSkeleton from "./ProviderSkeleton"

const TopProviders = () => {
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading } = useProvidersQuery(undefined)
  const providersPerPage = 8
  const providers = data?.data || []

  const displayedProviders =
    pathname === "/"
      ? providers.slice(-4)
      : providers.slice((currentPage - 1) * providersPerPage, currentPage * providersPerPage)

  const totalPages = Math.ceil(providers.length / providersPerPage)

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

  return (
    <section className="px-6 md:px-[3rem] bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 providers-section">
      <div>
        {pathname !== "/providers" && (
          <div className="section-heading mb-12">
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full md:w-2/3" data-aos="fade-up">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#1f54dd] to-blue-600 rounded-full mr-4"></div>
                  <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#1f54dd] to-[#1a4bc4] bg-clip-text text-transparent leading-tight mb-6">
                    Expert Providers
                  </span>
                </div>
                <h2 className="text-gray-700 text-lg leading-relaxed font-medium">Top Providers</h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                  Discover the best providers offering top-rated services for all your needs.
                </p>
              </div>
              <div className="w-full md:w-1/3 text-right mt-6 md:mt-0" data-aos="fade-up">
                {displayedProviders?.length > 3 && (
                  <Link href="/providers">
                    <button className="group relative overflow-hidden bg-[#1f54dd] hover:bg-[#1a4bc4] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center">
                      <span className="relative z-10">View All Providers</span>
                      <FiArrowRightCircle className="ml-2 relative z-10" size={20} />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1a4bc4] to-[#1f54dd] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <ProviderSkeleton key={index} />
            ))}
          </div>
        ) : displayedProviders.length === 0 ? (
          <div className="text-center mt-12 py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUserCheck className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Providers Available</h3>
            <p className="text-gray-600">Check back later for new providers joining our platform.</p>
          </div>
        ) : (
          <>
            <div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12"
              data-aos="fade-up"
            >
              {displayedProviders?.map((provider: any, index: number) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full flex flex-col"
                >
                  {/* Provider Image */}
                  <div className="relative overflow-hidden">
                    <div className="h-64 relative">
                      <Image
                        src={provider?.profileImg?.[0] || "/placeholder.svg?height=300&width=400&text=No+Image"}
                        fill
                        alt={`${provider?.fName} ${provider?.lName}`}
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100/90 backdrop-blur-sm text-green-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                        Available
                      </span>
                    </div>

                    {/* Category Badge */}
                    {provider?.category?.categoryName && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-[#1f54dd] border border-[#1f54dd]/20">
                          {provider.category.categoryName}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Provider Info */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Name and Verification */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Link
                          href={`/provider-details/${provider?.id}`}
                          className="text-xl font-bold text-gray-900 hover:text-[#1f54dd] transition-colors group-hover:text-[#1f54dd]"
                        >
                          {provider?.fName} {provider?.lName}
                        </Link>
                        <HiOutlineBadgeCheck className="w-6 h-6 text-[#1f54dd]" />
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FaCheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        Verified Professional
                      </div>
                    </div>

                    {/* Bio/Description */}
                    {provider?.bio && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{provider.bio}</p>
                    )}

                    {/* Location */}
                    {provider?.address && (
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2 text-[#1f54dd]" />
                        {provider.address}
                      </div>
                    )}

                    {/* Rating and Reviews */}
                    <div className="flex items-center justify-between mb-6 mt-auto">
                      <div className="flex items-center">
                        <div className="flex items-center mr-2">{renderStars(provider?.averageRating || 0)}</div>
                        <span className="text-sm text-gray-600">
                          {provider?.averageRating ? provider.averageRating.toFixed(1) : "0.0"} (
                          {provider?.totalReviews || 0} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link href={`/provider-details/${provider.id}`} className="w-full">
                      <button className="w-full group/btn relative overflow-hidden bg-[#1f54dd] hover:bg-[#1a4bc4] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                        <span className="relative z-10">View Profile</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4bc4] to-[#1f54dd] transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {pathname === "/providers" && providers.length > providersPerPage && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <button
                  className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-700 hover:text-[#1f54dd] hover:bg-gray-50"
                  }`}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <FiArrowLeft className="mr-2" />
                  Previous
                </button>

                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                        currentPage === index + 1
                          ? "bg-[#1f54dd] text-white shadow-lg"
                          : "bg-white border border-gray-200 text-gray-700 hover:bg-[#1f54dd] hover:text-white hover:border-[#1f54dd]"
                      }`}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button
                  className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-700 hover:text-[#1f54dd] hover:bg-gray-50"
                  }`}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <FiArrowRight className="ml-2" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default TopProviders
