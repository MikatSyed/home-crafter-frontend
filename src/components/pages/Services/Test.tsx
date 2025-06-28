"use client"

import type React from "react"

import { useServicesQuery } from "@/redux/api/servicesApi"
import { useEffect, useState, useCallback } from "react"
import {
  FaChevronDown,
  FaHeart,
  FaMapMarkerAlt,
  FaRegHeart,
  FaRegStar,
  FaStar,
  FaFilter,
  FaTimes,
  FaTh,
  FaList,
} from "react-icons/fa"
import { useCategoriesNameQuery } from "@/redux/api/categoryApi"
import { useFavourites } from "@/redux/hook"
import { useSearchParams } from "next/navigation"
import Rating from "../../UI/Rating"
import { Toaster } from "react-hot-toast"
import Pagination from "../../UI/Pagination"

// Custom debounce hook
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

const ServicesPage = () => {
  const query: Record<string, any> = {}
  const [sliderValue, setSliderValue] = useState(0)
  const [page, setPage] = useState<number>(1)
  const [size, setSize] = useState<number>(10)

  // Separate states for mobile and desktop search
  const [mobileSearchTerm, setMobileSearchTerm] = useState<string>("")
  const [mobileLocationTerm, setMobileLocationTerm] = useState<string>("")
  const [desktopSearchTerm, setDesktopSearchTerm] = useState<string>("")
  const [desktopLocationTerm, setDesktopLocationTerm] = useState<string>("")

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedFilters, setSelectedFilters] = useState({})
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const searchParams = useSearchParams()
  const categoryId = searchParams.get("categoryId")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<"asc" | "desc">("asc")
  const [ratingCounts, setRatingCounts] = useState<Record<number, number>>({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  const [isFiltering, setIsFiltering] = useState(false)

  const { isServiceFavourite, handleFavouriteClick } = useFavourites()

  // Debounce both mobile and desktop search terms
  const debouncedMobileSearchTerm = useDebounce(mobileSearchTerm, 800)
  const debouncedMobileLocationTerm = useDebounce(mobileLocationTerm, 800)
  const debouncedDesktopSearchTerm = useDebounce(desktopSearchTerm, 800)
  const debouncedDesktopLocationTerm = useDebounce(desktopLocationTerm, 800)

  // Combine the search terms (use mobile if available, otherwise desktop)
  const finalSearchTerm = debouncedMobileSearchTerm || debouncedDesktopSearchTerm
  const finalLocationTerm = debouncedMobileLocationTerm || debouncedDesktopLocationTerm

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleOptionClick = (option: "asc" | "desc") => {
    setSelectedOption(option)
    setIsDropdownOpen(false)
  }

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen)
  }

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid")
  }

  useEffect(() => {
    if (categoryId) {
      setSelectedCategories([categoryId])
    }
  }, [categoryId])

  // Mobile input handlers
  const handleMobileSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMobileSearchTerm(e.target.value)
      // Clear desktop search when mobile is used
      if (e.target.value && desktopSearchTerm) {
        setDesktopSearchTerm("")
      }
    },
    [desktopSearchTerm],
  )

  const handleMobileLocationChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMobileLocationTerm(e.target.value)
      // Clear desktop location when mobile is used
      if (e.target.value && desktopLocationTerm) {
        setDesktopLocationTerm("")
      }
    },
    [desktopLocationTerm],
  )

  // Desktop input handlers
  const handleDesktopSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDesktopSearchTerm(e.target.value)
      // Clear mobile search when desktop is used
      if (e.target.value && mobileSearchTerm) {
        setMobileSearchTerm("")
      }
    },
    [mobileSearchTerm],
  )

  const handleDesktopLocationChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDesktopLocationTerm(e.target.value)
      // Clear mobile location when desktop is used
      if (e.target.value && mobileLocationTerm) {
        setMobileLocationTerm("")
      }
    },
    [mobileLocationTerm],
  )

  // Build query object
  query["limit"] = size
  query["page"] = page
  query["sortOrder"] = selectedOption
  query["sortBy"] = "regularPrice"

  if (finalSearchTerm.trim()) {
    query["searchTerm"] = finalSearchTerm.trim()
  }

  if (finalLocationTerm.trim()) {
    query["location"] = finalLocationTerm.trim()
  }

  if (selectedCategories.length > 0) {
    query["category"] = selectedCategories
  }

  if (typeof selectedRating === "number") {
    query["rating"] = selectedRating
  }

  // Handle filtering state for non-search filters
  useEffect(() => {
    if (selectedCategories.length > 0 || selectedRating !== null || sliderValue > 0) {
      setIsFiltering(true)
      const timer = setTimeout(() => setIsFiltering(false), 500)
      return () => clearTimeout(timer)
    }
  }, [selectedCategories, selectedRating, sliderValue])

  // Handle filtering state for search terms
  useEffect(() => {
    const isSearching =
      debouncedMobileSearchTerm !== mobileSearchTerm ||
      debouncedMobileLocationTerm !== mobileLocationTerm ||
      debouncedDesktopSearchTerm !== desktopSearchTerm ||
      debouncedDesktopLocationTerm !== desktopLocationTerm

    setIsFiltering(isSearching)
  }, [
    debouncedMobileSearchTerm,
    mobileSearchTerm,
    debouncedMobileLocationTerm,
    mobileLocationTerm,
    debouncedDesktopSearchTerm,
    desktopSearchTerm,
    debouncedDesktopLocationTerm,
    desktopLocationTerm,
  ])

  const servicesPerPage = viewMode === "grid" ? 6 : 4

  const { data, isLoading } = useServicesQuery({
    ...query,
    ...selectedFilters,
    price_gte: sliderValue,
  })

  const services = data?.data?.slice((currentPage - 1) * servicesPerPage, currentPage * servicesPerPage)
  const totalPages = Math.ceil((data?.meta?.total || 0) / servicesPerPage)

  useEffect(() => {
    if (data?.meta?.ratingCounts) {
      setRatingCounts(data.meta.ratingCounts)
    }
  }, [data])

  const { data: categoriesData }: any = useCategoriesNameQuery(undefined)
  const categories = categoriesData?.data

  const handleCategoryChange = (e: any) => {
    const categoryValue = e.target.value
    const isChecked = e.target.checked

    setSelectedCategories((prevCategories) => {
      if (isChecked) {
        return [...prevCategories, categoryValue]
      } else {
        return prevCategories.filter((category) => category !== categoryValue)
      }
    })
  }

  const handleSliderChange = (event: any) => {
    const value = event.target.value
    setSliderValue(value)
    setSelectedFilters({ ...selectedFilters, minPrice: value })
  }

  const handleRatingFilter = (stars: number) => {
    if (selectedRating === stars) {
      setSelectedRating(null)
    } else {
      setSelectedRating(stars)
    }
  }

  const renderStars = (count: any) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= count) {
        stars.push(<FaStar key={i} className="text-[#ffbc35] ml-2" />)
      } else {
        stars.push(<FaRegStar key={i} className="text-[#ffbc35] ml-2" />)
      }
    }
    return stars
  }

  const FilterContent = () => (
    <>
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
        <p className="text-lg font-semibold text-gray-800 mb-4">Keyword</p>
        <div className="relative">
          <input
            type="text"
            value={desktopSearchTerm}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline transition duration-300 ease-in-out font-md"
            placeholder="What are you looking for?"
            onChange={handleDesktopSearchChange}
          />
          {desktopSearchTerm !== debouncedDesktopSearchTerm && desktopSearchTerm && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      </div>

      {!categoryId && (
        <div className="w-full py-4">
          <div className="flex flex-col rounded-md py-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
            <p className="text-[#32353C] py-1 px-4 font-semibold text-lg">Categories</p>
            {categories?.map((category: any) => (
              <div key={category?.id} className="w-full px-5 py-2 rounded-md flex items-center">
                <label className="cursor-pointer flex items-center">
                  <input
                    className="checkbox checkbox-md"
                    type="checkbox"
                    style={{ accentColor: "#4f46e5" }}
                    checked={selectedCategories.includes(category?.id)}
                    onChange={handleCategoryChange}
                    value={category?.id}
                  />
                  <span className="text-sm text-gray-500 font-sm ml-2">{category?.name}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg py-4 border border-indigo-200">
        <div className="p-6">
          <p className="text-xl font-semibold text-gray-800 mb-4">Location</p>
          <div className="relative">
            <input
              type="text"
              value={desktopLocationTerm}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline transition duration-300 ease-in-out font-md"
              placeholder="Select Location"
              onChange={handleDesktopLocationChange}
            />
            {desktopLocationTerm !== debouncedDesktopLocationTerm && desktopLocationTerm && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#f8fcfd] rounded-lg mt-4 p-6">
        <p className="text-lg font-semibold text-gray-800 mb-4">Price Range</p>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center w-full mt-4">
            <span className="text-gray-700 mr-4">$0</span>
            <input
              type="range"
              className="w-full slider-thumb h-2 rounded-full bg-[#4f46e5] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              min={0}
              max={100}
              value={sliderValue}
              onChange={handleSliderChange}
            />
            <span className="text-gray-700 ml-4">$100</span>
          </div>
        </div>
        <p className="text-gray-700">
          Selected Price: <span className="text-blue-600 font-semibold">${sliderValue}</span>
        </p>
      </div>

      <div className="bg-[#f8fcfd] rounded-lg mt-4 p-6">
        <p className="text-lg font-semibold text-gray-800 mb-4">Rating</p>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center">
              <input
                type="checkbox"
                id={`rating-${stars}`}
                className="mr-2 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                style={{ accentColor: "#4f46e5" }}
                checked={selectedRating === stars}
                onChange={() => handleRatingFilter(stars)}
              />
              <label htmlFor={`rating-${stars}`} className="flex items-center text-lg">
                {renderStars(stars)}
                <span className="pl-10 text-gray-600 text-sm font-normal">({ratingCounts[stars] || 0})</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  )

  const ServiceCard = ({ service, isGridView }: { service: any; isGridView: boolean }) => {
    if (isGridView) {
      return (
        <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              alt={service.serviceName}
              src={service.serviceImg[service.serviceImg.length - 1] || "/placeholder.svg?height=192&width=300"}
            />
            <div
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer"
              onClick={() => handleFavouriteClick(service)}
            >
              {isServiceFavourite(service.id) ? (
                <FaHeart className="text-indigo-600" />
              ) : (
                <FaRegHeart className="text-gray-500" />
              )}
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">
                <a
                  href={`/service-details/${service.id}`}
                  className="text-gray-900 hover:text-blue-500 transition-colors"
                >
                  {service.serviceName}
                </a>
              </h3>
              <span className="bg-[#f7f7ff] text-[#6240ed] px-2 py-1 rounded text-xs font-semibold">
                {service.category.categoryName}
              </span>
            </div>
            <p className="text-gray-600 text-sm flex items-center mb-2">
              <FaMapMarkerAlt className="mr-1" /> {service?.location}
            </p>
            <div className="flex items-center mb-3">
              <Rating rating={service?.averageRating || 0} />
              <span className="text-sm text-gray-600 ml-1">({service?.averageRating})</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-lg font-bold text-gray-900">${service.regularPrice}.00</span>
                {service?.offeredPrice && (
                  <span className="line-through text-gray-500 ml-2 text-sm">${service?.offeredPrice}</span>
                )}
              </div>
              <a
                href={`/service-details/${service.id}`}
                className="text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white py-1 px-3 rounded text-sm transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-white border px-3 rounded-lg overflow-hidden w-full mx-auto mb-3">
        <div className="flex flex-col md:flex-row py-2">
          <div className="relative w-full md:w-1/3">
            <img
              className="w-full h-auto md:h-48 object-cover rounded-lg"
              alt={service.serviceName}
              src={service.serviceImg[service.serviceImg.length - 1] || "/placeholder.svg?height=192&width=300"}
            />
            <div
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer"
              onClick={() => handleFavouriteClick(service)}
            >
              {isServiceFavourite(service.id) ? (
                <FaHeart className="text-indigo-600" />
              ) : (
                <FaRegHeart className="text-gray-500" />
              )}
            </div>
          </div>
          <div className="px-0 md:px-8 py-4 md:py-0 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold mt-2">
                  <a
                    href={`/service-details/${service.id}`}
                    className="text-gray-900 hover:text-blue-500 transition-colors"
                  >
                    {service.serviceName}
                  </a>
                </h3>
                <p className="bg-[#f7f7ff] text-[#6240ed] border border-transparent hover:border-[#6240ed] px-4 py-2 rounded text-sm font-semibold hover:bg-white">
                  {service.category.categoryName}
                </p>
              </div>
              <p className="text-gray-600 mt-2 flex items-center text-sm">
                <FaMapMarkerAlt className="mr-2" /> {service?.location}
              </p>
            </div>
            <div className="mt-2 flex items-center">
              <span className="text-yellow-500 flex items-center">
                <Rating rating={service?.averageRating || 0} /> ({service?.averageRating})
              </span>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <h6 className="text-lg font-bold text-gray-900">
                ${service.regularPrice}.00{" "}
                {service?.offeredPrice && (
                  <span className="line-through text-gray-500 ml-2 text-sm">${service?.offeredPrice}</span>
                )}
              </h6>
              <a
                href={`/service-details/${service.id}`}
                className="text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white py-2 px-6 rounded-md transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="md:px-[4rem] py-6">
        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 mb-4">
          <div className="relative mb-4">
            <input
              type="text"
              value={mobileSearchTerm}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline transition duration-300 ease-in-out font-md"
              placeholder="What are you looking for?"
              onChange={handleMobileSearchChange}
            />
            {mobileSearchTerm !== debouncedMobileSearchTerm && mobileSearchTerm && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              value={mobileLocationTerm}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline transition duration-300 ease-in-out font-md"
              placeholder="Select Location"
              onChange={handleMobileLocationChange}
            />
            {mobileLocationTerm !== debouncedMobileLocationTerm && mobileLocationTerm && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
        </div>

        <section>
          <div className="flex justify-between items-center w-full mb-4">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-800 ml-4 md:ml-0">Filter By</h2>
              {/* Mobile Filter Button */}
              <button
                onClick={toggleMobileFilter}
                className="md:hidden flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-lg"
              >
                <FaFilter size={14} />
                Filters
              </button>
            </div>

            <div className="flex items-center gap-4 mr-4 md:mr-0">
              {/* Grid/List Toggle */}
              <div className="hidden md:flex items-center gap-2 border border-gray-300 rounded-lg p-1">
                <button
                  onClick={toggleViewMode}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-indigo-600 text-white" : "text-gray-600"}`}
                >
                  <FaTh size={14} />
                </button>
                <button
                  onClick={toggleViewMode}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-indigo-600 text-white" : "text-gray-600"}`}
                >
                  <FaList size={14} />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-black border border-gray-400 px-4 py-2 rounded flex items-center"
                >
                  {selectedOption === "asc" ? "Price Low to High" : "Price High to Low"}
                  <FaChevronDown className={`ml-2 ${isDropdownOpen ? "transform rotate-180" : ""}`} size={14} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 z-10 w-48 bg-white border rounded shadow-lg">
                    <p
                      onClick={() => handleOptionClick("asc")}
                      className={`block px-4 py-2 cursor-pointer ${
                        selectedOption === "asc"
                          ? "bg-[#6240ed] text-white"
                          : "text-gray-700 hover:bg-[#f8fcfd] hover:text-black"
                      }`}
                    >
                      Price Low to High
                    </p>
                    <p
                      onClick={() => handleOptionClick("desc")}
                      className={`block px-4 py-2 cursor-pointer ${
                        selectedOption === "desc"
                          ? "bg-[#6240ed] text-white"
                          : "text-gray-700 hover:bg-[#f8fcfd] hover:text-black"
                      }`}
                    >
                      Price High to Low
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-x-4">
            {/* Desktop Filters */}
            <div className="col-span-4 md:col-span-1 mx-4 md:mx-0 rounded-md hidden md:block">
              <FilterContent />
            </div>

            {/* Mobile Filter Sidebar */}
            {isMobileFilterOpen && (
              <div className="fixed inset-0 z-50 md:hidden">
                <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMobileFilter}></div>
                <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg overflow-y-auto">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Filters</h3>
                      <button onClick={toggleMobileFilter} className="p-2 hover:bg-gray-100 rounded">
                        <FaTimes />
                      </button>
                    </div>
                    <FilterContent />
                  </div>
                </div>
              </div>
            )}

            {/* Services Content */}
            <div className="col-span-4 md:col-span-3 mx-4 my-4 md:mx-0 md:my-0">
              {/* Loading State */}
              {(isLoading || isFiltering) && (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4f46e5]"></div>
                  <span className="ml-2 text-gray-600">{isLoading ? "Loading services..." : "Searching..."}</span>
                </div>
              )}

              {/* No Results Message */}
              {!isLoading && !isFiltering && (!services || services.length === 0) && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <FaRegStar size={48} className="mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
                  <p className="text-gray-500">
                    Try adjusting your filters or search terms to find what you're looking for.
                  </p>
                </div>
              )}

              {/* Services Grid/List */}
              {!isLoading && !isFiltering && services && services.length > 0 && (
                <>
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {services.map((service: any) => (
                        <ServiceCard key={service.id} service={service} isGridView={true} />
                      ))}
                    </div>
                  ) : (
                    <div>
                      {services.map((service: any) => (
                        <ServiceCard key={service.id} service={service} isGridView={false} />
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* Pagination */}
              {data?.meta?.total > servicesPerPage && !isLoading && !isFiltering && (
                <div className="flex items-center justify-end mt-10">
                  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ServicesPage
