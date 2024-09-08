"use client";
import { useServicesQuery } from "@/redux/api/servicesApi";
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaHeart, FaMapMarkerAlt, FaRegStar, FaStar } from "react-icons/fa";
import Loader from "../UI/Loader";
import { useCategoriesNameQuery } from "@/redux/api/categoryApi";
import { useDebounced } from "@/redux/hook";
import { useSearchParams } from "next/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Rating from "../UI/Rating";
import Link from "next/link";

const ServicesPage = () => {
  const query: Record<string, any> = {};
  const [sliderValue, setSliderValue] = useState(0);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [locationTerm, setLocationTerm] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('asc');
  const [ratingCounts, setRatingCounts] = useState<Record<number, number>>({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); 

 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (categoryId) {
      setSelectedCategories([categoryId]);
    }
  }, [categoryId]);

  query["limit"] = size;
  query["page"] = page;
 
  query["sortOrder"] = selectedOption;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  const debouncedLocationTerm = useDebounced({
    searchQuery: locationTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  if (!!debouncedLocationTerm) {
    query["location"] = debouncedLocationTerm;
  }

  if (selectedCategories.length > 0) {
    query["category"] = selectedCategories;
  }

  if (typeof selectedRating === "number") {
    query["rating"] = selectedRating;
  }

  const servicesPerPage = 6

  const { data, isLoading } = useServicesQuery({
    ...query,
    ...selectedFilters,
    price_gte: sliderValue,
  });
  console.log(data)

  const services = data?.data?.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  const totalPages = Math.ceil(data?.meta?.total / servicesPerPage);

  useEffect(() => {
    if (data?.meta?.ratingCounts) {
      setRatingCounts(data.meta.ratingCounts);
    }
  }, [data]);

  const { data: categoriesData }: any = useCategoriesNameQuery(undefined);
  const categories = categoriesData?.data;

  const handleCategoryChange = (e: any) => {
    const categoryValue = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCategories((prevCategories) => {
      if (isChecked) {
        return [...prevCategories, categoryValue];
      } else {
        return prevCategories.filter((category) => category !== categoryValue);
      }
    });
  };

  const handleSliderChange = (event: any) => {
    const value = event.target.value;
    setSliderValue(value);
    setSelectedFilters({ ...selectedFilters, minPrice: value });
  };

  const handleRatingFilter = (stars: number) => {
    if (selectedRating === stars) {
      setSelectedRating(null);
    } else {
      setSelectedRating(stars);
    }
  };

  const renderStars = (count: any) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= count) {
        stars.push(<FaStar key={i} className="text-[#ffbc35] ml-2" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-[#ffbc35] ml-2" />);
      }
    }
    return stars;
  };

  

  if (isLoading) {
    return <Loader />;
  }



  return (
    <div className="md:px-[6rem] py-6">
      <section>
        <div className="flex justify-between items-center w-full mb-4 ">
          <h2 className="text-xl font-semibold text-gray-800 ml-4 md:ml-0">Filter By</h2>
          <div className="mr-4 md:mr-0">
            <button
              onClick={toggleDropdown}
              className={`text-black border border-gray-400 px-4 py-2 rounded flex items-center`}
            >
              {selectedOption === 'asc' ? 'Price Low to High' : 'Price High to Low'}
              <FaChevronDown
                className={`ml-2 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                size={14}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute  w-48 bg-white border rounded shadow-lg">
                <a
                  href="#"
                  onClick={() => handleOptionClick('asc')}
                  className={`block px-4 py-2 ${selectedOption === 'asc' ? 'bg-[#6240ed] text-white' : 'text-gray-700 hover:bg-[#f8fcfd] hover:text-black'}`}
                >
                  Price Low to High
                </a>
                <a
                  href="#"
                  onClick={() => handleOptionClick('desc')}
                  className={`block px-4 py-2 ${selectedOption === 'desc' ? 'bg-[#6240ed] text-white' : 'text-gray-700 hover:bg-[#f8fcfd] hover:text-black'}`}
                >
                  Price High to Low
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-4">
          <div className="col-span-4 md:col-span-1 mx-4 md:mx-0 rounded-md md:block">
            <div className="bg-[#f8fcfd] rounded-lg">
              <div className="p-6">
                <p className="text-lg font-semibold text-gray-800 mb-4">
                  Keyword
                </p>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline transition duration-300 ease-in-out font-md"
                  placeholder="What are you looking for?"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            {categoryId ? (
              <></>
            ) : (
              <div className="w-full py-4">
                <div className="flex flex-col rounded-md py-6 bg-[#f8fcfd]">
                  <p className="text-[#32353C] py-1 px-4 font-semibold text-lg">
                    Categories
                  </p>
                  {categories?.map((category: any) => (
                    <div
                      key={category?.id}
                      className="w-full px-5 py-2 rounded-md flex items-center"
                    >
                      <label className="cursor-pointer flex items-center">
                        <input
                          className="checkbox checkbox-md"
                          type="checkbox"
                          style={{ accentColor: "#1475c6" }}
                          onChange={handleCategoryChange}
                          value={category?.id}
                        />
                        <span className="text-sm text-gray-500 font-sm ml-2">
                          {category?.name}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={`bg-[#f8fcfd] rounded-lg py-4 ${categoryId && `mt-4`}`}>
              <div className="p-6">
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  Location
                </p>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline transition duration-300 ease-in-out font-md"
                  placeholder="Select Location"
                  onChange={(e) => setLocationTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="bg-[#f8fcfd] rounded-lg mt-4 p-6">
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Price Range
              </p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center w-full mt-4">
                  <span className="text-gray-700 mr-4">$0</span>
                  <input
                    type="range"
                    className="w-full h-2 rounded-full bg-blue-600 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                    min={0}
                    max={100}
                    value={sliderValue} // Use the upper limit of the range
                    onChange={handleSliderChange}
                  />
                  <span className="text-gray-700 ml-4">$100</span>
                </div>
              </div>
              <p className="text-gray-700">Selected Price: <span className="text-blue-600 font-semibold">${sliderValue}</span></p>
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
                      checked={selectedRating === stars}
                      onChange={() => handleRatingFilter(stars)}
                    />
                    <label
                      htmlFor={`rating-${stars}`}
                      className="flex items-center text-lg"
                    >
                      {renderStars(stars)}
                      <span className="pl-10 text-gray-600 text-sm font-normal">
                        ({ratingCounts[stars] || 0})
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-3 mx-4 my-4 md:mx-0 md:my-0">
            {services?.map((service: any) => (
              <div
                key={service.id}
                className="bg-white border px-3 rounded-lg overflow-hidden w-full mx-auto mb-3"
              >
                <div className="flex flex-col md:flex-row py-2">
                  <div className="relative w-full md:w-1/3">
                    <img
                      className="w-full h-auto md:h-48 object-cover rounded-lg"
                      alt={service.serviceName}
                      src={service.serviceImg[service.serviceImg.length - 1]}
                    />
                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                      <a href="" className="text-red-500">
                        <FaHeart size={20} />
                      </a>
                    </div>
                  </div>

                  <div className="px-0 md:px-8  py-4 md:py-0 flex-1 flex flex-col justify-between">
                    <div >
                   <div className="flex justify-between">
                   <h3 className="text-xl font-semibold mt-2">
                        <a
                          href={`/service-details/${service.id}`}
                          className="text-gray-900 hover:text-blue-500 transition-colors"
                        >
                          {service.serviceName}
                        </a>
                      </h3>
                      <p
                        className="bg-[#f7f7ff] text-[#6240ed] border border-transparent hover:border-[#6240ed] px-4 py-2 rounded text-sm font-semibold hover:bg-white"
                      >
                        {service.category.categoryName}
                      </p>
                   </div>
                   
                      <p className="text-gray-600 mt-2 flex items-center text-sm">
                        <FaMapMarkerAlt className="mr-2" /> {service?.location}
                      </p>
                    </div>

                    <div className="mt-2 flex items-center">
                      <img
                        className="w-10 h-10 rounded-full border-2 border-blue-500 mr-3"
                        src="https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg"
                        alt="User"
                      />
                      <span className="text-yellow-500 flex items-center">
                      <Rating rating={service?.averageRating || 0} />  ({service?.averageRating})
                      </span>
                    </div>

                    <div className="mt-2 flex justify-between items-center">
                      <h6 className="text-lg font-bold text-gray-900">
                        ${service.regularPrice}.00{" "}
                        {service?.offeredPrice &&  
                 <span className="line-through text-gray-500 ml-2 text-sm">
                    ${service?.offeredPrice}
                  </span>}
                      </h6>
                      <a
                        href={`/service-details/${service.id}`}
                        className="bg-[#6240ed] text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
{totalPages > 4 && (
  <div className="flex justify-end mt-8">
          <button
            className={`inline-flex items-center px-4 py-2 mx-1 rounded-lg transition-colors ${
              currentPage === 1
                ? "text-gray-500 cursor-not-allowed text-sm bg-gray-300"
                : "text-gray-700 bg-[#f8fcfd] hover:from-blue-500 hover:to-blue-700 text-sm font-bold hover:text-[#4f46e5]"
            }`}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FiArrowLeft className="mr-1" /> PREV
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-1 rounded-lg transition-colors ${
                currentPage === index + 1
                  ? "bg-[#4f46e5] text-white"
                  : "bg-[#f8fcfd] border border-gray-300 text-gray-800 hover:bg-[#4f46e5] text-sm hover:text-white"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`inline-flex items-center px-4 py-2 mx-1 rounded-lg transition-colors ${
              currentPage === totalPages
                ? "text-gray-500 cursor-not-allowed text-sm bg-gray-300"
                : "text-gray-700 bg-[#f8fcfd] text-sm font-bold hover:text-[#4f46e5]"
            }`}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            NEXT <FiArrowRight className="ml-1" />
          </button>
        </div> )}

          </div>

        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
