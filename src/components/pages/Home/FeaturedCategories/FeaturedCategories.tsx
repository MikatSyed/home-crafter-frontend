"use client"

import type React from "react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useCategoriesQuery } from "@/redux/api/categoryApi"
import Link from "next/link"
import { FiArrowLeft, FiArrowRight, FiArrowRightCircle, FiGrid, FiTrendingUp, FiStar } from "react-icons/fi"

const FeaturedCategories = () => {
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(6)
  const { data, isLoading }: any = useCategoriesQuery(undefined)

  const totalPages = Math.ceil((data?.meta?.total || 0) / itemsPerPage)
  const categories = data?.data || []

  const displayCategories =
    pathname === "/categories"
      ? categories?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      : categories?.slice(-8)

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value))
    setCurrentPage(1)
  }

  const LoadingSkeleton = ({ isGridView }: { isGridView: boolean }) => (
    <>
      {[...Array(isGridView ? 3 : 4)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
        >
          <div className="relative">
            {isGridView ? (
              <div className="relative">
                <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
                <div className="p-8 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-2xl animate-pulse" />
                    <div className="flex-1 space-y-3">
                      <div className="h-5 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-10 text-center space-y-4">
                <div className="w-20 h-20 bg-gray-200 rounded-2xl mx-auto animate-pulse" />
                <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto animate-pulse" />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  )

  const CategoryCard = ({ category, isGridView }: { category: any; isGridView: boolean }) => (
    <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-gray-100 backdrop-blur-sm">
      <div className="relative">
        {isGridView ? (
          <Link href={`/services?categoryId=${category.id}`} className="block">
            <div className="relative overflow-hidden">
              {/* Main Background Image */}
              <div className="h-80 overflow-hidden relative">
                <img
                  src={
                    category.categoryImg || "/placeholder.svg?height=320&width=400&query=professional service category"
                  }
                  alt={category.categoryName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-[#1f54dd]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Premium Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <FiStar className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-semibold text-gray-800">Premium</span>
                  </div>
                </div>

                {/* Service Count Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-[#1f54dd]/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-white">{category._count.services} Services</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#1f54dd] to-[#1a4bc4] rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={category.categoryIcon || "/placeholder.svg?height=32&width=32&query=professional icon"}
                          alt="icon"
                          className="w-full h-full object-contain filter brightness-0 invert"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-3 border-white shadow-lg" />
                    </div>
                    <div>
                      <h5 className="text-2xl font-bold text-gray-900 group-hover:text-[#1f54dd] transition-colors duration-300 mb-1">
                        {category.categoryName}
                      </h5>
                      <p className="text-sm text-gray-600 font-medium">Professional Excellence</p>
                      <div className="flex items-center mt-2 space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-xs text-gray-500 ml-2">4.9 Rating</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-gradient-to-r from-[#1f54dd]/10 to-[#1f54dd]/20 rounded-xl px-4 py-2">
                      <span className="text-sm font-bold text-[#1f54dd]">Explore</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <Link href={`/services?categoryId=${category.id}`} className="block">
            <div className="relative p-10 text-center overflow-hidden h-64">
              {/* Clear Background Image */}
              <div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                <img
                  src={category.categoryImg || "/placeholder.svg?height=256&width=300&query=premium service background"}
                  alt={category.categoryName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1f54dd]/30 via-[#1f54dd]/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Glass Effect */}
              <div className="absolute inset-0 backdrop-blur-[1px] group-hover:backdrop-blur-[2px] transition-all duration-500" />

              <div className="relative z-10">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1f54dd] to-[#1a4bc4] rounded-2xl p-5 mx-auto shadow-2xl group-hover:shadow-3xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                    <img
                      src={category.categoryIcon || "/placeholder.svg?height=40&width=40&query=premium service icon"}
                      alt="icon"
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-3 border-white shadow-xl flex items-center justify-center">
                    <FiStar className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
                <h5 className="text-xl font-bold text-white drop-shadow-lg group-hover:text-white transition-colors duration-300 mb-2">
                  {category.categoryName}
                </h5>
                <p className="text-sm text-white/90 font-medium drop-shadow">Premium Services</p>
                <div className="mt-3 inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-white">{category._count?.services || 0} Available</span>
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )

  return (
    <div
      className={`mx-auto px-6 md:px-12 lg:px-20 ${pathname === "/categories" ? "bg-gradient-to-br from-gray-50 to-gray-100" : "bg-gradient-to-br from-[#1f54dd]/8 via-white to-[#1f54dd]/12"} py-16 md:py-24`}
    >
      {pathname !== "/categories" ? (
        <div className="section-heading mb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2" data-aos="fade-up">
              {/* <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1f54dd] to-[#1a4bc4] rounded-2xl flex items-center justify-center shadow-xl">
                  <FiGrid className="text-white text-2xl" />
                </div>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#1f54dd]/10 to-[#1f54dd]/20 text-[#1f54dd] border border-[#1f54dd]/30">
                  <FiTrendingUp className="w-4 h-4 mr-2" />
                  Premium Collection
                </span>
              </div> */}
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#1f54dd] to-[#1a4bc4] bg-clip-text text-transparent leading-tight mb-6">
                Elite Service Categories
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Discover our premium collection of professional services, meticulously curated to deliver exceptional
                
              </p>
            </div>
            <div className="w-full md:w-1/2 text-right" data-aos="fade-up">
              {displayCategories?.length > 3 && (
                <Link href="/categories">
                  <button className="group bg-gradient-to-r from-[#1f54dd] to-[#1a4bc4] hover:from-[#1a4bc4] hover:to-[#1f54dd] text-white p-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105 text-md inline-flex items-center">
                    Explore All Categories
                    <FiArrowRightCircle
                      className="ml-3 group-hover:translate-x-2 transition-transform duration-300"
                      size={20}
                    />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center mb-10 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Premium Categories</h1>
            <p className="text-gray-600 text-lg">
              Explore our comprehensive collection of professional service categories
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <label htmlFor="itemsPerPage" className="text-sm font-semibold text-gray-700">
              Items per page:
            </label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1f54dd] focus:border-transparent bg-white shadow-lg text-sm font-medium"
            >
              {[3, 6, 9, 12, 15, 18, 21].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div
        className={`grid ${
          pathname === "/categories"
            ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        } gap-8 lg:gap-10`}
      >
        {isLoading ? (
          <LoadingSkeleton isGridView={pathname === "/categories"} />
        ) : (
          displayCategories?.map((category: any) => (
            <CategoryCard key={category.id} category={category} isGridView={pathname === "/categories"} />
          ))
        )}
      </div>

      {pathname === "/categories" && totalPages > 1 && (
        <div className="flex justify-center items-center mt-16 space-x-6">
          <button
            className={`px-8 py-4 rounded-xl transition-all duration-300 text-base font-semibold ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed bg-gray-100"
                : "text-gray-700 hover:bg-[#1f54dd] hover:text-white border-2 border-gray-300 hover:border-[#1f54dd] bg-white shadow-lg hover:shadow-xl"
            }`}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FiArrowLeft className="mr-3" />
            Previous
          </button>

          <div className="px-6 py-4 text-base font-semibold text-gray-700 bg-gradient-to-r from-[#1f54dd]/10 to-[#1f54dd]/20 rounded-xl border border-[#1f54dd]/30">
            Page {currentPage} of {totalPages}
          </div>

          <button
            className={`px-8 py-4 rounded-xl transition-all duration-300 text-base font-semibold ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed bg-gray-100"
                : "text-gray-700 hover:bg-[#1f54dd] hover:text-white border-2 border-gray-300 hover:border-[#1f54dd] bg-white shadow-lg hover:shadow-xl"
            }`}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
            <FiArrowRight className="ml-3" />
          </button>
        </div>
      )}
    </div>
  )
}

export default FeaturedCategories
