// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHeart } from "react-icons/fa"; 
import { useAppSelector } from "@/redux/hook";
import Cart from "../Cart/Cart";
import { FaRegHeart } from "react-icons/fa6";


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false); 
  const favouriteServices = useAppSelector((state: any) => state.favourites.favouriteServices); 

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); 
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Service" },
    { href: "/providers", label: "Providers" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="mx-auto px-6 md:px-[6rem] hidden md:block">
        <div className="md:mx-0">
          <div className="flex items-center justify-between h-16">
            {/* Navigation Links */}
            <div className="hidden md:flex flex-1 justify-start">
              <ul className="flex space-x-6 font-medium">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-black hover:text-indigo-500 py-2">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Favorite Section */}
            <div className="hidden md:flex items-center space-x-6">
              <div
                className="relative flex items-center p-3 bg-[#f8fcfd] rounded-full cursor-pointer"
                onClick={toggleSidebar} // Toggle sidebar on click
              >
               {favouriteServices.length === 0 ?  <FaRegHeart className="text-indigo-600 text-xl hover:scale-105 transition-transform" />:  <FaHeart className="text-indigo-600 text-xl hover:scale-105 transition-transform" />}
                <span className="absolute -top-2 -right-3 bg-indigo-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                  {favouriteServices.length}
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

      {/* Cart Sidebar */}
      {sidebarOpen && (
        <>
          <Cart services={favouriteServices} onClose={toggleSidebar} />
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar} // Close sidebar when clicking outside
          ></div>
        </>
      )}
    </>
  );
};

export default Navbar;
