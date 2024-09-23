"use client";
import Link from "next/link";

import { useState } from "react";

const Navbar = () => {
 
 
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});

  const toggleDropdown = (linkIndex: number) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [linkIndex]: !prevState[linkIndex] || false,
    }));
  };

  const closeDropdown = () => setDropdownOpen({});

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Service", href: "/services" },
    { title: "Providers", href: "/providers" },
    { title: "Blog", href: "/blogs" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="mx-auto px-6 md:px-[6rem] shadow-md">
      <div className="md:mx-0">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex flex-1 justify-start">
            <ul className="flex space-x-6 text-[#747481] font-medium">
              {navItems.map((item: any, index) => (
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
                      {item.subItems.map((subItem: any, subIndex: number) => (
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
          
          {/* Provider and User Links */}
          <div className="flex items-center space-x-5">
            <Link href="/provider/signup">
              <p className="text-md font-medium m-0 text-[#4c40ed] hover:text-blue-500">
                Become A Provider
              </p>
            </Link>
            <Link href="/signup">
              <p className="text-md font-medium m-0 text-[#4c40ed] hover:text-blue-500">
                Become A User
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
