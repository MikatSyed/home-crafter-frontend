"use client";
import Link from "next/link";
import { useState } from "react";
import { FaHeart } from "react-icons/fa"; // Heart Icon
import { FaTimes } from "react-icons/fa"; // Close Icon
import Image from "next/image"; // Image for service thumbnails

const Navbar = () => {
  const [favoriteCount, setFavoriteCount] = useState<number>(2); // Example count
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false); // Sidebar state

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle sidebar open/close
  };

  // Example services (You can fetch these dynamically in a real app)
  const favoriteServices = [
    {
      id: 1,
      name: "Plumbing Service",
      price: "$150",
      imageUrl: "/path/to/plumbing-image.jpg",
    },
    {
      id: 2,
      name: "Electrical Repair",
      price: "$200",
      imageUrl: "/path/to/electrical-image.jpg",
    },
  ];

  return (
    <>
      <nav className="mx-auto px-6 md:px-[6rem] hidden md:block">
        <div className="md:mx-0">
          <div className="flex items-center justify-between h-16">
            {/* Navigation Links */}
            <div className="hidden md:flex flex-1 justify-start">
              <ul className="flex space-x-6 font-medium">
                <li>
                  <Link href="/" className="text-black hover:text-indigo-500 py-2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-black hover:text-indigo-500 py-2">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/providers" className="text-black hover:text-indigo-500 py-2">
                    Providers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Favorite Section */}
            <div className="hidden md:flex items-center space-x-6">
              <div
                className="relative flex items-center p-3 bg-[#f8fcfd] rounded-full cursor-pointer"
                onClick={toggleSidebar} // Toggle sidebar on click
              >
                <FaHeart className="text-indigo-600 text-xl hover:scale-105 transition-transform" />
                <span className="absolute -top-2 -right-3 bg-indigo-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                  {favoriteCount || 0}
                </span>
              </div>

              {/* Become a Provider / User */}
              <Link href="/signup/provider">
                <p className="text-black text-sm hover:text-indigo-600 font-medium m-0">
                  Become A Provider
                </p>
              </Link>
              <Link href="/signup">
                <p className="text-black text-sm hover:text-indigo-600 font-medium m-0">
                  Become A User
                </p>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } w-[320px] md:w-[400px]`}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold text-gray-800">Favorite Services</h2>
          <button
            className="p-2 bg-white border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition"
            onClick={toggleSidebar}
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Favorite Services List */}
        <div className="p-4 space-y-6">
          {favoriteServices.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-between border-t border-b py-4"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={service.imageUrl}
                  alt={service.name}
                  width={50}
                  height={50}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{service.name}</h3>
                  <p className="text-sm text-gray-500">{service.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar} // Close sidebar when clicking outside
        ></div>
      )}
    </>
  );
};

export default Navbar;
