"use client";
import { useServicesQuery } from "@/redux/api/servicesApi";
import React, { useEffect, useState } from "react";
import { FaHeart, FaMapMarkerAlt, FaRegStar, FaStar } from "react-icons/fa";
import Loader from "../UI/Loader";
import { useCategoriesNameQuery } from "@/redux/api/categoryApi";
import { useDebounced } from "@/redux/hook";
import { useSearchParams } from "next/navigation";

const ServicesPage = () => {
  const query: Record<string, any> = {};
  const [sliderValue, setSliderValue] = useState(0);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [locationTerm, setLocationTerm] = useState<string>(""); 
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  useEffect(() => {
    // Set the category ID to the selected categories state if it exists in the URL
    if (categoryId) {
      setSelectedCategories([categoryId]);
    }
  }, [categoryId]);
  query["limit"] = size;
  query["page"] = page;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  const debouncedLocationTerm = useDebounced({
    searchQuery: locationTerm,
    delay: 600,
  });
  console.log(debouncedLocationTerm)

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  // Add location filter to the query
  if (!!debouncedLocationTerm) {
    query["location"] = debouncedLocationTerm;
  }

  // Add selected categories to the query if any are selected
  if (selectedCategories.length > 0) {
    query["category"] = selectedCategories;
  }

  const { data, isLoading } = useServicesQuery({
    ...query,
    ...selectedFilters,
    price_gte: sliderValue,
  });

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
    console.log();
    setSelectedFilters({ ...selectedFilters, minPrice: value });
  };

  const renderStars = (count: any) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= count) {
        stars.push(<FaStar key={i} className="text-[#ffbc35] ml-2 " />);
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
    <div className="md:px-[7rem] py-6">
      <section>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 rounded-md hidden md:block">
            <div className="bg-[#f8fcfd] rounded-lg">
              <div className="p-6">
                <p className="text-xl font-semibold text-gray-800 mb-4">
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
{
  categoryId ? <>
  
  </> : <>
  <div className="w-full py-4">
              <div className="flex flex-col rounded-md py-6 bg-[#f8fcfd]">
                <p className="text-[#32353C] py-1 px-4 font-semibold text-xl">
                  Categories
                </p>
                {categories?.map((category: any) => (
                  <div
                    key={category?.id}
                    className="w-full px-5 py-2 rounded-md flex items-center"
                  >
                    <label className="cursor-pointer flex items-center ">
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
  </>
}
      

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
              <p className="text-xl font-semibold text-gray-800 mb-4">
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
              <p className="text-xl font-semibold text-gray-800 mb-4">Rating</p>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`rating-${stars}`}
                      className="mr-2 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label
                      htmlFor={`rating-${stars}`}
                      className="flex items-center text-xl"
                    >
                      {renderStars(stars)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-4 mx-4 md:mx-0 md:col-span-3">
            {data?.data.map((service: any) => (
              <div
                key={service.id}
                className="bg-white border px-3 rounded-lg overflow-hidden w-full mx-auto my-2"
              >
                <div className="flex flex-col md:flex-row py-2">
                  <div className="relative w-full md:w-1/3">
                    <img
                      className="w-full h-auto md:h-48 object-cover rounded-lg"
                      alt={service.serviceName}
                      src={service.serviceImg[0]} // Assuming you want to display the first image
                    />
                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                      <a href="javascript:void(0)" className="text-red-500">
                        <FaHeart size={20} />
                      </a>
                    </div>
                  </div>

                  <div className="px-8 py-2 flex-1 flex flex-col justify-between">
                    <div>
                      <a
                        href={`/service-details/${service.id}`}
                        className="bg-[#f7f7ff] text-[#6240ed] border border-transparent hover:border-[#6240ed] px-4 py-2 rounded text-sm font-semibold hover:bg-white"
                      >
                        {service.category.categoryName}
                      </a>
                      <h3 className="text-xl font-semibold mt-2">
                        <a
                          href={`/service-details/${service.id}`}
                          className="text-gray-900 hover:text-blue-500 transition-colors"
                        >
                          {service.serviceName}
                        </a>
                      </h3>
                      <p className="text-gray-600 mt-2 flex items-center text-sm">
                        <FaMapMarkerAlt className="mr-2" /> {service.location}
                      </p>
                    </div>

                    <div className="mt-2 flex items-center">
                      <img
                        className="w-10 h-10 rounded-full border-2 border-blue-500 mr-3"
                        src="https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg"
                        alt="User"
                      />
                      <span className="text-yellow-500 flex items-center">
                        <FaStar className="mr-1" /> 4.9
                      </span>
                    </div>

                    <div className="mt-2 flex justify-between items-center">
                      <h6 className="text-lg font-bold text-gray-900">
                        ${service.price}.00{" "}
                        <span className="text-gray-500 line-through text-md">
                          ${service.price + 10}.00
                        </span>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
