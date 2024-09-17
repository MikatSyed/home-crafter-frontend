"use client";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiLogIn } from "react-icons/fi"; // Importing icons from react-icons
import logo from "../../../public/assets/LOGO (1).png";
import Image from "next/image";
import Link from "next/link";
import { useLoggedUserQuery } from "@/redux/api/userApi";
import { LuPhoneCall } from "react-icons/lu";

const Navbar = () => {
  const { data, isLoading } = useLoggedUserQuery(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>(
    {}
  );

  const user = data?.data;
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (linkIndex: number) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [linkIndex]: !prevState[linkIndex] || false,
    }));
  };

  const closeDropdown = () => {
    setDropdownOpen({});
  };

  const navItems: any = [
    // Array of items with sub-items (replace with your data)
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "Service",
      href: "/service",
    },
    {
      title: "Providers",
      href: "/providers",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      <div className="hidden md:block mx-auto px-6 md:px-[6rem] bg-[#f8fcfd]">
      <div className="max-w-7xl py-4 md:mx-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-8 mt-2">
              <Image src={logo} alt="Logo" height={250} width={250} />
            </div>
          </div>
          <div className="flex items-center space-x-14">
            <div className=" text-gray-600 flex items-center">
              <span>
                {" "}
                <LuPhoneCall className="mr-3 text-blue-600" size={24} />
              </span>
              <div>
                <h3 className="text-md font-semibold">Get Support</h3>

                <p className="text-sm">310-437-2766</p>
              </div>
            </div>

            {user ? (
             <div className="flex items-center space-x-3 relative">
             <Link href="/profile">
               <div className="w-12 h-12 overflow-hidden rounded-full shadow-md">
                 <Image
                   src={user?.profileImg[0]}
                   alt="User Image"
                   className="rounded-full transform hover:scale-105 transition-transform duration-200 object-cover"
                   height={48}
                   width={48}
                 />
               </div>
             </Link>
             <div>
               <div className="text-left">
                 <p className="text-sm font-medium m-0">{`${user?.fName} ${user?.lName}`}</p>
               </div>
             </div>
           </div>
           
            ) : (
              <Link href="/login">
                <button className="flex items-center px-3 py-2 bg-[#4c40ed] text-white rounded-md shadow-md hover:bg-white border border-[#4c40ed] hover:text-[#4c40ed] text-md font-semibold">
                  <FiLogIn className="mr-2" />
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>

    <nav className="mx-auto px-6 md:px-[6rem] shadow-md">
  <div className="md:mx-0">
    <div className="flex items-center justify-between h-16">
      {/* Left Navigation Items */}
      <div className="hidden md:flex flex-1 justify-start">
        <ul className="flex space-x-6 text-[#747481] font-medium">
          {navItems.map((item: any, index: number) => (
            <li key={index} className="relative">
              <Link
                href={item.href}
                className="text-black hover:text-blue-500 py-2 rounded-md text-sm flex items-center"
                onMouseEnter={() => toggleDropdown(index)}
                onMouseLeave={closeDropdown}
              >
                {item.title}
              </Link>
              {item.subItems && item.subItems.length > 0 && (
                <ul
                  className={`${
                    dropdownOpen[index]
                      ? "absolute shadow-md z-50 bg-white rounded-md py-1"
                      : "hidden"
                  }`}
                  onMouseEnter={() => toggleDropdown(index)}
                  onMouseLeave={closeDropdown}
                >
                  {item.subItems.map((subItem: any, subIndex: any) => (
                    <li key={subIndex} className="py-2 px-3 w-[200px]">
                      <Link
                        href={subItem.href}
                        className="text-sm text-black hover:text-blue-500"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Centered Logo */}
      <div className="md:hidden block flex justify-center flex-1 py-2">
        <Link href="/">
          <Image src={logo} alt="Logo" height={200} width={200} />
        </Link>
      </div>

      {/* Right Action Buttons */}
      <div className="hidden md:flex flex-1 justify-end space-x-5">
        <Link href="/provider/signup">
          <p className="text-md font-medium m-0 text-[#4c40ed] hover:text-gray-600">Become A Provider</p>
        </Link>
        <Link href="/signup">
          <p className="text-md font-medium m-0 text-[#4c40ed] hover:text-gray-600">Become A User</p>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          className="text-black hover:text-blue-500 focus:outline-none"
          onClick={toggleNavbar}
        >
          {/* Hamburger menu icon */}
          <FiMenu className={`${isOpen ? "hidden" : "block"} h-7 w-7 text-[#4c40ed]`} />
          {/* Close menu icon */}
          <FiX className={`${isOpen ? "block" : "hidden"} h-7 w-7 text-[#4c40ed]`} />
        </button>
      </div>
    </div>
  </div>

  {/* Mobile menu */}
  <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navItems.map((item: any, index: number) => (
        <div key={index}>
          <div className="flex justify-between items-center">
            <Link
              href={item.href}
              className="text-black hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.title}
            </Link>
            {item.subItems && item.subItems.length > 0 && (
              <button
                className="text-black hover:text-blue-500 focus:outline-none"
                onClick={() => toggleDropdown(index)}
              >
                <FiChevronDown
                  className={`h-5 w-5 ml-2 transform ${
                    dropdownOpen[index] ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            )}
          </div>
          {dropdownOpen[index] && (
            <div className="pl-4">
              {item?.subItems?.map((subItem: any, subIndex: any) => (
                <Link
                  key={subIndex}
                  href={subItem.href}
                  className="text-black hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</nav>

    </>
   
  );
};

export default Navbar;
