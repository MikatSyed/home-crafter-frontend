"use client";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi"; // Importing icons from react-icons
import logo from "../../../public/assets/home (3).png";
import Image from "next/image";
import Link from "next/link";
import { useLoggedUserQuery } from "@/redux/api/userApi";

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
    <nav className="mx-auto px-6 md:px-[6rem] shadow-md">
      <div className="max-w-7xl py-4  md:mx-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-8 mt-2">
              <Image src={logo} alt="Logo" height={250} width={250} />
            </div>
          </div>
          <div className="hidden md:block flex-1">
            <ul className="flex justify-center space-x-6 text-[#747481] font-medium">
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
          <div className="flex items-center">
            <button
              className="block md:hidden text-black hover:text-blue-500 focus:outline-none"
              onClick={toggleNavbar}
            >
              {/* Hamburger menu icon */}
              <FiMenu className={`${isOpen ? "hidden" : "block"} h-6 w-6`} />
              {/* Close menu icon */}
              <FiX className={`${isOpen ? "block" : "hidden"} h-6 w-6`} />
            </button>
          </div>
          <div className="flex items-center space-x-2 relative">
  <Link href="/profile">
  <Image
    src={user?.profileImg[0]}
    alt="User Image"
    className="rounded-full shadow-md transform hover:scale-105 transition-transform duration-200"
    height={40}
    width={40}
  />
  </Link>
  <div>
   
      <div className="text-left">
        <p className="text-sm font-medium m-0">{`${user?.fName} ${user?.lName}`}</p>
        
      </div>
   
  </div>
</div>

        </div>
      </div>
      {/* Mobile menu, toggle classes based on menu state */}
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
                    className="text-white hover:text-blue-500 focus:outline-none"
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
                      className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
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
  );
};

export default Navbar;
