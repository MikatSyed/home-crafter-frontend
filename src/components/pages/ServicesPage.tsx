"use client";
import React, { useState } from "react";
import { BiLinkExternal, BiMinus, BiPlus } from "react-icons/bi"; // Import the desired icons from react-icons
import FilterDrawer from "../UI/FilterDrawer";
import ReactStars from "react-rating-stars-component";
import { FaHeart, FaMapMarkerAlt, FaRegStar, FaStar } from "react-icons/fa";

const CompaniesPage = () => {
  const [showAllOptions, setShowAllOptions] = useState(false);
  const [showAllIndustry, setShowAllIndustry] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState(8);
  const [visibleIndustries, setVisibleIndustries] = useState(8);
  const [isExpend, setIsExpend] = useState(true);
  const [isExpendIndustries, setIsExpendIndustries] = useState(false);

  const categoriesData = [
    "Cleaning Services",
    "Plumbing",
    "Electrical Work",
    "Landscaping",
    "Pest Control",
    "Painting",
    "Roofing",
    "Moving Services"
  ];
  

  const options = [
    "S22",
    "W22",
    "S21",
    "W21",
    "S20",
    "W20",
    "S19",
    "W19",
    "S18",
    "W18",
    "S17",
    "W17",
    "IK12",
    "S16",
    "W16",
    "S15",
    "W15",
    "S14",
    "W14",
    "S13",
    "W13",
    "S12",
    "W12",
    "S11",
    "W11",
    "S10",
    "W10",
    "S09",
    "W09",
    "S08",
    "W08",
    "S07",
    "W07",
    "S06",
    "W06",
  ];
  const industriesData = [
    "All industries",
    "Education",
    "Fintech",
    "Consumer",
    "Real Estate and Construction",
    "Industrials",
    "Government",
   
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const renderStars = (count:any) => {
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

  return (
    <div className="md:px-[7rem] py-6">
    

      <section>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 rounded-md hidden md:block">


          <div className="bg-[#f8fcfd] rounded-lg">
  <div className="p-6">
    <p className="text-xl font-semibold text-gray-800 mb-4">Keyword</p>
    <input
      type="text"
      className="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline transition duration-300 ease-in-out font-md"
      placeholder="What are you looking for?"
    />
  </div>
</div>


<div className="w-full py-4">
      <div className="flex flex-col  rounded-md py-6 bg-[#f8fcfd]">
        <p className="text-[#32353C] py-1 px-4  font-semibold text-xl">Categories</p>
        {categoriesData.map((category, index) => (
          <div
            key={index}
            className="w-full px-5 py-2 rounded-md  flex items-center"
          >
            <label className="cursor-pointer flex items-center ">
              <input
                className="checkbox checkbox-md"
                type="checkbox"
                style={{ accentColor: '#1475c6' }}
        
              />
              <span className="text-sm text-gray-500 font-sm ml-2">{category}</span>
            </label>
          </div>
        ))}
      </div>
    </div>


    <div className="bg-[#f8fcfd] rounded-lg py-4">
  <div className="p-6">
    <p className="text-xl font-semibold text-gray-800 mb-4">Location</p>
    <input
      type="text"
      className="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline transition duration-300 ease-in-out font-md"
      placeholder="Select Location"
    />
  </div>
</div>    


<div className="bg-[#f8fcfd]  rounded-lg mt-4 p-6">
    <p className="text-xl font-semibold text-gray-800 mb-4">Price Range</p>
    <div className="flex items-center justify-between mb-6">
        <div className="flex items-center w-full mt-4">
            <span className="text-gray-700 mr-4">$0</span>
            <input
                type="range"
                className="w-full h-2 rounded-full bg-blue-600 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                min="0"
                max="1000"
                step="10"
            />
            <span className="text-gray-700 ml-4">$1000</span>
        </div>
    </div>
    <div className="flex items-center justify-between">
        <div className="flex flex-col items-center">
            <span className="text-gray-700">Min</span>
            <span className="text-blue-600 font-semibold">$200</span>
        </div>
        <div className="flex flex-col items-center">
            <span className="text-gray-700">Max</span>
            <span className="text-blue-600 font-semibold">$800</span>
        </div>
    </div>
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
                        <label htmlFor={`rating-${stars}`} className="flex items-center text-xl">
                            {renderStars(stars)}
                        </label>
                    </div>
                ))}
            </div>
        </div> 
          </div>



          <div className="col-span-4 mx-4 md:mx-0 md:col-span-3 ">
      
          <div className="bg-white border px-3 rounded-lg overflow-hidden w-full mx-auto my-2">
    <div className="flex flex-col md:flex-row  py-2">
      
        <div className="relative w-full md:w-1/3">
           
                <img
                    className="w-full h-auto md:h-48 object-cover rounded-lg" 
                    alt="Service"
                    src="https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-04.jpg"
                />
          
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                <a href="javascript:void(0)" className="text-red-500">
                    <FaHeart size={20} />
                </a>
            </div>
        </div>
      
        <div className="px-8 py-2 flex-1 flex flex-col justify-between">
           
            <div>
            <a href="service-details.html" className="bg-[#f7f7ff] text-[#6240ed] border border-transparent hover:border-[#6240ed] px-4 py-2 rounded text-sm font-semibold hover:bg-white">Car Wash</a>
                <h3 className="text-xl font-semibold mt-2">
                    <a href="service-details.html" className="text-gray-900 hover:text-blue-500 transition-colors">
                        Car Repair Services
                    </a>
                </h3>
                <p className="text-gray-600 mt-2 flex items-center text-sm">
                    <FaMapMarkerAlt className="mr-2" /> Maryland City, MD, USA
                </p>
            </div>
           
            <div className="mt-2 flex items-center ">
              
                <img
                    className="w-10 h-10  rounded-full border-2 border-blue-500 mr-3"
                    src="https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg"
                    alt="User"
                />
            
                <span className="text-yellow-500 flex items-center">
                    <FaStar className="mr-1" /> 4.9
                </span>
            </div>
          
            <div className="mt-2 flex justify-between items-center">
                <h6 className="text-lg font-bold text-gray-900">
                    $25.00 <span className="text-gray-500 line-through text-md">$35.00</span>
                </h6>
                <a href="booking.html" className="bg-[#6240ed] text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors">
                    Book Now
                </a>
            </div>
        </div>
    </div>
</div>
          <div className="bg-white border px-3 rounded-lg overflow-hidden w-full mx-auto my-2">
    <div className="flex flex-col md:flex-row  py-2">
      
        <div className="relative w-full md:w-1/3">
           
                <img
                    className="w-full h-auto md:h-48 object-cover rounded-lg" 
                    alt="Service"
                    src="https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-04.jpg"
                />
          
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                <a href="javascript:void(0)" className="text-red-500">
                    <FaHeart size={20} />
                </a>
            </div>
        </div>
      
        <div className="px-8 py-2 flex-1 flex flex-col justify-between">
           
            <div>
            <a href="service-details.html" className="bg-[#f7f7ff] text-[#6240ed] border border-transparent hover:border-[#6240ed] px-4 py-2 rounded text-sm font-semibold hover:bg-white">Car Wash</a>
                <h3 className="text-xl font-semibold mt-2">
                    <a href="service-details.html" className="text-gray-900 hover:text-blue-500 transition-colors">
                        Car Repair Services
                    </a>
                </h3>
                <p className="text-gray-600 mt-2 flex items-center text-sm">
                    <FaMapMarkerAlt className="mr-2" /> Maryland City, MD, USA
                </p>
            </div>
           
            <div className="mt-2 flex items-center ">
              
                <img
                    className="w-10 h-10  rounded-full border-2 border-blue-500 mr-3"
                    src="https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg"
                    alt="User"
                />
            
                <span className="text-yellow-500 flex items-center">
                    <FaStar className="mr-1" /> 4.9
                </span>
            </div>
          
            <div className="mt-2 flex justify-between items-center">
                <h6 className="text-lg font-bold text-gray-900">
                    $25.00 <span className="text-gray-500 line-through text-md">$35.00</span>
                </h6>
                <a href="booking.html" className="bg-[#6240ed] text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors">
                    Book Now
                </a>
            </div>
        </div>
    </div>
</div>
          <div className="bg-white border px-3 rounded-lg overflow-hidden w-full mx-auto my-2">
    <div className="flex flex-col md:flex-row  py-2">
      
        <div className="relative w-full md:w-1/3">
           
                <img
                    className="w-full h-auto md:h-48 object-cover rounded-lg" 
                    alt="Service"
                    src="https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-04.jpg"
                />
          
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                <a href="javascript:void(0)" className="text-red-500">
                    <FaHeart size={20} />
                </a>
            </div>
        </div>
      
        <div className="px-8 py-2 flex-1 flex flex-col justify-between">
           
            <div>
            <a href="service-details.html" className="bg-[#f7f7ff] text-[#6240ed] border border-transparent hover:border-[#6240ed] px-4 py-2 rounded text-sm font-semibold hover:bg-white">Car Wash</a>
                <h3 className="text-xl font-semibold mt-2">
                    <a href="service-details.html" className="text-gray-900 hover:text-blue-500 transition-colors">
                        Car Repair Services
                    </a>
                </h3>
                <p className="text-gray-600 mt-2 flex items-center text-sm">
                    <FaMapMarkerAlt className="mr-2" /> Maryland City, MD, USA
                </p>
            </div>
           
            <div className="mt-2 flex items-center ">
              
                <img
                    className="w-10 h-10  rounded-full border-2 border-blue-500 mr-3"
                    src="https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg"
                    alt="User"
                />
            
                <span className="text-yellow-500 flex items-center">
                    <FaStar className="mr-1" /> 4.9
                </span>
            </div>
          
            <div className="mt-2 flex justify-between items-center">
                <h6 className="text-lg font-bold text-gray-900">
                    $25.00 <span className="text-gray-500 line-through text-md">$35.00</span>
                </h6>
                <a href="booking.html" className="bg-[#6240ed] text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors">
                    Book Now
                </a>
            </div>
        </div>
    </div>
</div>
          <div className="bg-white border px-3 rounded-lg overflow-hidden w-full mx-auto my-2">
    <div className="flex flex-col md:flex-row  py-2">
      
        <div className="relative w-full md:w-1/3">
           
                <img
                    className="w-full h-auto md:h-48 object-cover rounded-lg" 
                    alt="Service"
                    src="https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-04.jpg"
                />
          
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                <a href="javascript:void(0)" className="text-red-500">
                    <FaHeart size={20} />
                </a>
            </div>
        </div>
      
        <div className="px-8 py-2 flex-1 flex flex-col justify-between">
           
            <div>
            <a href="service-details.html" className="bg-[#f7f7ff] text-[#6240ed] border border-transparent hover:border-[#6240ed] px-4 py-2 rounded text-sm font-semibold hover:bg-white">Car Wash</a>
                <h3 className="text-xl font-semibold mt-2">
                    <a href="service-details.html" className="text-gray-900 hover:text-blue-500 transition-colors">
                        Car Repair Services
                    </a>
                </h3>
                <p className="text-gray-600 mt-2 flex items-center text-sm">
                    <FaMapMarkerAlt className="mr-2" /> Maryland City, MD, USA
                </p>
            </div>
           
            <div className="mt-2 flex items-center ">
              
                <img
                    className="w-10 h-10  rounded-full border-2 border-blue-500 mr-3"
                    src="https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg"
                    alt="User"
                />
            
                <span className="text-yellow-500 flex items-center">
                    <FaStar className="mr-1" /> 4.9
                </span>
            </div>
          
            <div className="mt-2 flex justify-between items-center">
                <h6 className="text-lg font-bold text-gray-900">
                    $25.00 <span className="text-gray-500 line-through text-md">$35.00</span>
                </h6>
                <a href="booking.html" className="bg-[#6240ed] text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors">
                    Book Now
                </a>
            </div>
        </div>
    </div>
</div>
          <div className="bg-white border px-3 rounded-lg overflow-hidden w-full mx-auto my-2">
    <div className="flex flex-col md:flex-row  py-2">
      
        <div className="relative w-full md:w-1/3">
           
                <img
                    className="w-full h-auto md:h-48 object-cover rounded-lg" 
                    alt="Service"
                    src="https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-04.jpg"
                />
          
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                <a href="javascript:void(0)" className="text-red-500">
                    <FaHeart size={20} />
                </a>
            </div>
        </div>
      
        <div className="px-8 py-2 flex-1 flex flex-col justify-between">
           
            <div>
            <a href="service-details.html" className="bg-[#f7f7ff] text-[#6240ed] border border-transparent hover:border-[#6240ed] px-4 py-2 rounded text-sm font-semibold hover:bg-white">Car Wash</a>
                <h3 className="text-xl font-semibold mt-2">
                    <a href="service-details.html" className="text-gray-900 hover:text-blue-500 transition-colors">
                        Car Repair Services
                    </a>
                </h3>
                <p className="text-gray-600 mt-2 flex items-center text-sm">
                    <FaMapMarkerAlt className="mr-2" /> Maryland City, MD, USA
                </p>
            </div>
           
            <div className="mt-2 flex items-center ">
              
                <img
                    className="w-10 h-10  rounded-full border-2 border-blue-500 mr-3"
                    src="https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg"
                    alt="User"
                />
            
                <span className="text-yellow-500 flex items-center">
                    <FaStar className="mr-1" /> 4.9
                </span>
            </div>
          
            <div className="mt-2 flex justify-between items-center">
                <h6 className="text-lg font-bold text-gray-900">
                    $25.00 <span className="text-gray-500 line-through text-md">$35.00</span>
                </h6>
                <a href="booking.html" className="bg-[#6240ed] text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors">
                    Book Now
                </a>
            </div>
        </div>
    </div>
</div>





          
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompaniesPage;
