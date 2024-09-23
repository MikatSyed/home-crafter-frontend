"use client";
import { FiLogIn } from "react-icons/fi";
import { FaSignOutAlt, FaUser, FaCalendarCheck, FaHeart, FaTachometerAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useLoggedUserQuery } from "@/redux/api/userApi";
import { LuPhoneCall } from "react-icons/lu";
import { signOut } from "next-auth/react";
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const TopHeader = () => {
    const pathname = usePathname();
  const { data } = useLoggedUserQuery(undefined);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileButtonRef = useRef<HTMLButtonElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const toggleProfileMenu = () => setIsProfileOpen((prev) => !prev);
  const handleSignOut = async () => {
    await signOut();
    setIsProfileOpen(false);
  };
  useClickAway(profileMenuRef, () => setIsProfileOpen(false));

  const user = data?.data;
  const userRole = user?.role;

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

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Service", href: "/services" },
    { title: "Providers", href: "/providers" },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className={`hidden md:block mx-auto px-6 md:px-[6rem]  ${pathname === '/'? 'bg-[#f8fcfd]':'bg-white shadow-xl'}`}>
        <div className="max-w-7xl py-4 md:mx-0">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex-shrink-0 mr-8 mt-2">
              <Link href="/">
                <Image src="/assets/LOGO (1).png" alt="Logo" height={250} width={250} />
              </Link>
            </div>

        
          {pathname !== '/' &&   <div className="flex-grow text-center">
              <ul className="flex justify-center space-x-6 text-gray-600 font-medium">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-black hover:text-blue-500 py-2 rounded-md text-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>}

            
            <div className="flex items-center space-x-14">
            {pathname === '/'&&   <div className="flex items-center ">
                <LuPhoneCall className="mr-3 text-blue-600" size={24} />
                <div>
                  <h3 className="text-md font-semibold">Get Support</h3>
                  <p className="text-sm">310-437-2766</p>
                </div>
              </div>}

              {user ? (
                <div className="flex items-center space-x-3 relative">
                  <button onClick={toggleProfileMenu} ref={profileButtonRef} className="focus:outline-none cursor-pointer">
                    <div className="w-12 h-12 overflow-hidden rounded-full shadow-md">
                      <Image
                        src={user?.profileImg[0]}
                        alt="User Image"
                        className="rounded-full"
                        height={48}
                        width={48}
                      />
                    </div>
                  </button>
                  {isProfileOpen && (
                    <div
                      ref={profileMenuRef}
                      className="absolute top-12 left-2 w-48 bg-white border border-gray-300 rounded-lg shadow-xl z-50 p-4"
                    >
                      {profileDropdownItems.map((item, idx) => (
                        <div key={idx} className="border-b border-gray-200 last:border-0">
                          {item.href ? (
                            <Link href={item.href}>
                              <p
                                className="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-[#f8fcfd]"
                                onClick={() => setIsProfileOpen(false)}
                              >
                                <span className="mr-2">{item?.icon}</span>
                                {item.title}
                              </p>
                            </Link>
                          ) : (
                            <p
                              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-[#f8fcfd]"
                              onClick={item.action}
                            >
                              <span className="mr-2">{item?.icon}</span>
                              {item.title}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-sm font-medium m-0">{`${user?.fName} ${user?.lName}`}</p>
                </div>
              ) : (
                <Link href="/login">
                  <button className="flex items-center px-5 py-2 bg-indigo-600 text-white rounded-full shadow-md text-md">
                    <FiLogIn className="mr-2" />
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
      <MobileMenu user={user} />
      </div>
    </>
  );
};

export default TopHeader;
