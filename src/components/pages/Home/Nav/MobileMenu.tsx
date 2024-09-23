"use client"
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = (linkIndex: number) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [linkIndex]: !prevState[linkIndex] || false,
    }));
  };

  const navItems = [
    { title: "Home", href: "/home" },
    { title: "Service", href: "/service" },
    { title: "Providers", href: "/providers" },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between h-16">
        <button className="text-black hover:text-blue-500 focus:outline-none" onClick={toggleNavbar}>
          <FiMenu className={`${isOpen ? "hidden" : "block"} h-7 w-7 text-[#4c40ed]`} />
          <FiX className={`${isOpen ? "block" : "hidden"} h-7 w-7 text-[#4c40ed]`} />
        </button>
      </div>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item:any, index:number) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <Link href={item.href} className="text-black hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
                  {item.title}
                </Link>
                {item.subItems && item.subItems.length > 0 && (
                  <button className="text-black hover:text-blue-500 focus:outline-none" onClick={() => toggleDropdown(index)}>
                    <FiChevronDown className={`h-5 w-5 ml-2 transform ${dropdownOpen[index] ? "rotate-180" : "rotate-0"}`} />
                  </button>
                )}
              </div>
              {dropdownOpen[index] && (
                <div className="pl-4">
                  {item?.subItems?.map((subItem:any, subIndex:number) => (
                    <Link key={subIndex} href={subItem.href} className="text-black hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
