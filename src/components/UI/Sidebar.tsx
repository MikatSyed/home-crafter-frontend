"use client";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import { MdOutlineDashboard, MdOutlineLocalOffer } from 'react-icons/md';
import { BsSuitcaseLg } from 'react-icons/bs';
import { AiOutlineProduct } from 'react-icons/ai';
import { IoNewspaperOutline } from 'react-icons/io5';
import { CiBookmark, CiMoneyCheck1 } from "react-icons/ci";

interface SidebarProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
  data: any;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, data }) => {
  const [activeLink, setActiveLink] = useState<string>('');
  const role = data?.data?.role.toLowerCase();

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    onToggle(isOpen); 
  };

  const getLinkClass = (link: string) => (
    `flex items-center px-4 py-3 mt-1 text-sm font-semibold rounded hover:bg-gray-200 ${activeLink === link ? 'bg-gray-100' : 'text-gray-700'}`
  );

  return (
    <aside
      className={`fixed top-0 left-0 z-20 mt-3 shadow-md transition-transform duration-300 ease-in-out ${
        isOpen ? 'transform translate-x-0 bg-white h-full' : '-translate-x-full'
      } md:relative md:translate-x-0`}
    >
      <div className="p-4">
        <button
          className="absolute top-4 right-4 md:hidden"
          onClick={() => onToggle(!isOpen)}
        >
          {isOpen ? (
            <FiX className="w-7 h-7 text-gray-600" />
          ) : (
            <FiMenu className="w-7 h-7 text-gray-600" />
          )}
        </button>
        <div className={`mt-6 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:block w-[250px]`}>
          <Link href={`/${role}/dashboard`}>
            <p
              onClick={() => handleLinkClick('dashboard')}
              className={getLinkClass('dashboard')}
            >
              <MdOutlineDashboard className="w-5 h-5 mr-2" />
              <span>Dashboard</span>
            </p>
          </Link>
          <Link href={`/${role}/services`}>
            <p
              onClick={() => handleLinkClick('provider-services')}
              className={getLinkClass('provider-services')}
            >
              <BsSuitcaseLg className="w-5 h-5 mr-2" />
              <span>My Services</span>
            </p>
          </Link>
          <Link href={`/${role}/bookings`}>
            <p
              onClick={() => handleLinkClick('provider-bookings')}
              className={getLinkClass('provider-bookings')}
            >
              <FaRegCalendarAlt className="w-5 h-5 mr-2" />
              <span>Bookings</span>
            </p>
          </Link>
          <Link href={`/${role}/payout`}>
            <p
              onClick={() => handleLinkClick('provider-payout')}
              className={getLinkClass('provider-payout')}
            >
              <CiMoneyCheck1 className="w-5 h-5 mr-2" />
              <span>Payout</span>
            </p>
          </Link>
          <Link href={`/${role}/offered-service`}>
            <p
              onClick={() => handleLinkClick('offered-service')}
              className={getLinkClass('offered-service')}
            >
              <CiBookmark className="w-5 h-5 mr-2" />
              <span>Offered Service</span>
            </p>
          </Link>
          <Link href={`/${role}/availability`}>
            <p
              onClick={() => handleLinkClick('availability')}
              className={getLinkClass('availability')}
            >
              <FaRegClock className="w-5 h-5 mr-2" />
              <span>Availability</span>
            </p>
          </Link>
          <Link href={`/${role}/offer`}>
            <p
              onClick={() => handleLinkClick('provider-offer')}
              className={getLinkClass('provider-offer')}
            >
              <MdOutlineLocalOffer className="w-5 h-5 mr-2" />
              <span>Offer</span>
            </p>
          </Link>
          {/* Show category link only for admin role */}
          {role === 'admin' && (
            <Link href={`/${role}/category`}>
              <p
                onClick={() => handleLinkClick('provider-category')}
                className={getLinkClass('provider-category')}
              >
                <AiOutlineProduct className="w-5 h-5 mr-2" />
                <span>Category</span>
              </p>
            </Link>
          )}
          <Link href={`/${role}/blog`}>
            <p
              onClick={() => handleLinkClick('provider-blog')}
              className={getLinkClass('provider-blog')}
            >
              <IoNewspaperOutline className="w-5 h-5 mr-2" />
              <span>Blog</span>
            </p>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
