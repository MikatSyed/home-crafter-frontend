"use client";
import { useRef, useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiLogIn } from "react-icons/fi";
import { FaUser, FaCalendarCheck, FaHeart, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import logo from "../../../../../public/assets/LOGO (1).png";
import Image from "next/image";
import Link from "next/link";
import { useLoggedUserQuery } from "@/redux/api/userApi";
import { LuPhoneCall } from "react-icons/lu";
import { signOut } from "next-auth/react";
import { useClickAway } from "react-use";

const Navbar = () => {
  const { data, isLoading } = useLoggedUserQuery(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const profileButtonRef = useRef<HTMLButtonElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const toggleProfileMenu = () => {
    setIsProfileOpen((prev) => !prev);
  };

  const handleSignOut = async () => {
    await signOut();
    setIsProfileOpen(false); // Close profile menu after sign out
  };

  useClickAway(profileMenuRef, () => {
    setIsProfileOpen(false);
  });

  const user = data?.data;
  console.log(user,'35')
  const userRole = user?.role; // Assuming the role is coming from the `user` object
  console.log(userRole,'36')
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
    { title: "Home", href: "/home" },
    { title: "Service", href: "/service" },
    { title: "Providers", href: "/providers" },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];




const profileDropdownItems =
  userRole === "User"
    ? [
        { title: "Profile", href: "/profile/user", icon: <FaUser /> },
        { title: "Booking", href: "/profile/booking", icon: <FaCalendarCheck /> },
        { title: "Favourites", href: "/profile/favourites", icon: <FaHeart /> },
        { title: "Logout", action: handleSignOut, icon: <FaSignOutAlt /> },
      ]
    : [
        {
          title: "Dashboard",
          href: userRole === "Admin" ? "/admin/dashboard" : "/provider/dashboard",
          icon: <FaTachometerAlt />,
        },
        {
          title: "Profile",
          href: userRole === "Admin" ? "/admin/profile" : "/provider/profile",
          icon: <FaUser />,
        },
        { title: "Logout", action: handleSignOut, icon: <FaSignOutAlt /> },
      ];

  return (
    <>
      <div className="hidden md:block mx-auto px-6 md:px-[6rem] bg-[#f8fcfd]">
        <div className="max-w-7xl py-4 md:mx-0">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-8 mt-2">
                <Link href="/">
                  <Image src={logo} alt="Logo" height={250} width={250} />
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-14">
              <div className="text-gray-600 flex items-center">
                <LuPhoneCall className="mr-3 text-blue-600" size={24} />
                <div>
                  <h3 className="text-md font-semibold">Get Support</h3>
                  <p className="text-sm">310-437-2766</p>
                </div>
              </div>

              {user ? (
                <div className="flex items-center space-x-3 relative">
                  <button
                    onClick={toggleProfileMenu}
                    ref={profileButtonRef}
                    className="focus:outline-none cursor-pointer"
                  >
                    <div className="w-12 h-12 overflow-hidden rounded-full shadow-md">
                      <Image
                        src={user?.profileImg[0]}
                        alt="User Image"
                        className="rounded-full transform hover:scale-105 transition-transform duration-200 object-cover"
                        height={48}
                        width={48}
                      />
                    </div>
                  </button>

                  {isProfileOpen && (
    <div
        ref={profileMenuRef}
        className="absolute  top-12 right-24 w-48 bg-white border border-gray-300 rounded-lg shadow-xl z-50 p-4 transition-all duration-200 ease-in-out"
    >
       {profileDropdownItems.map((item, idx) => (
    <div key={idx} className="border-b border-gray-200 last:border-0">
        {item.href ? (
            <Link href={item.href}>
                <p
                    className="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-[#f8fcfd] cursor-pointer transition duration-150 ease-in-out"
                    onClick={() => setIsProfileOpen(false)}
                >
                    <span className="mr-2">{item?.icon}</span>{item.title}
                </p>
            </Link>
        ) : (
            <p
                className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-[#f8fcfd] cursor-pointer transition duration-150 ease-in-out"
                onClick={item.action}
            >
                <span className="mr-2">{item?.icon}</span>{item.title}
            </p>
        )}
    </div>
))}

    </div>
)}

                  <div>
                    <p className="text-sm font-medium m-0">{`${user?.fName} ${user?.lName}`}</p>
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
                            <Link href={subItem.href} className="text-sm text-black hover:text-blue-500">
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

         
            <div className="md:hidden block flex justify-center flex-1 py-2">
              <Link href="/">
                <Image src={logo} alt="Logo" height={200} width={200} />
              </Link>
            </div>

            
            <div className="hidden md:flex flex-1 justify-end space-x-5">
              <Link href="/provider/signup">
                <p className="text-md font-medium m-0 text-[#4c40ed] hover:text-gray-600">
                  Become A Provider
                </p>
              </Link>
              <Link href="/signup">
                <p className="text-md font-medium m-0 text-[#4c40ed] hover:text-gray-600">
                  Become A User
                </p>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button className="text-black hover:text-blue-500 focus:outline-none" onClick={toggleNavbar}>
                <FiMenu className={`${isOpen ? "hidden" : "block"} h-7 w-7 text-[#4c40ed]`} />
                <FiX className={`${isOpen ? "block" : "hidden"} h-7 w-7 text-[#4c40ed]`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
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
