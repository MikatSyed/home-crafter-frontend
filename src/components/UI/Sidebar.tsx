"use client"
import { useState } from 'react';
import { FiMenu, FiX, FiHome, FiBarChart, FiSettings, FiUser, FiMessageSquare } from 'react-icons/fi';
import Link from 'next/link';
import { FaBuilding, FaUser } from 'react-icons/fa6';
import { FaCalendarAlt, FaMoneyBillAlt, FaProjectDiagram, FaRegCalendarAlt, FaRegClock, FaSuitcase, FaUserFriends } from 'react-icons/fa';
import { MdDashboard, MdOutlineDashboard } from 'react-icons/md';
import { CgLockUnlock } from 'react-icons/cg';
import { BsClockFill, BsSuitcaseLg } from 'react-icons/bs';

interface SidebarProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const [activeLink, setActiveLink] = useState<string>('');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    onToggle(isOpen); // Close sidebar on mobile when a link is clicked
  };

  const getLinkClass = (link: string) => (
    `flex items-center px-4 py-3 mt-1 text-sm font-semibold rounded hover:bg-gray-200 ${activeLink === link ? 'bg-gray-100  ' : 'text-gray-700'}`
  );

  return (
    <aside
      className={`fixed top-0 left-0 z-20   mt-3 shadow-md transition-transform duration-300 ease-in-out ${
        isOpen ? 'transform translate-x-0 bg-white h-full' : '-translate-x-full '
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
  <Link href="/dashboard">
    <p
      onClick={() => handleLinkClick('dashboard')}
      className={getLinkClass('dashboard')}
    >
      <MdOutlineDashboard className="w-5 h-5 mr-2" />
      <span>Dashboard</span>
    </p>
  </Link>
  <Link href="/provider-services">
    <p
      onClick={() => handleLinkClick('provider-services')}
      className={getLinkClass('provider-services')}
    >
      <BsSuitcaseLg   className="w-5 h-5 mr-2" />
      <span>My Services</span>
    </p>
  </Link>

  <Link href="/provider-bookings">
    <p
      onClick={() => handleLinkClick('provider-bookings')}
      className={getLinkClass('provider-bookings')}
    >
      <FaRegCalendarAlt  className="w-5 h-5 mr-2" />
      <span>Bookings</span>
    </p>
  </Link>
  <Link href="/availability">
    <p
      onClick={() => handleLinkClick('availability')}
      className={getLinkClass('availability')}
    >
      <FaRegClock  className="w-5 h-5 mr-2" />
      <span>Availability</span>
    </p>
  </Link>
  <Link href="/chats">
    <p
      onClick={() => handleLinkClick('chats')}
      className={getLinkClass('chats')}
    >
      <FiMessageSquare className="w-5 h-5 mr-2" />
      <span>Chats</span>
    </p>
  </Link>
  <Link href="/profile">
    <p
      onClick={() => handleLinkClick('profile')}
      className={getLinkClass('profile')}
    >
      <FiUser className="w-5 h-5 mr-2" />
      <span>My Profile</span>
    </p>
  </Link>
  <Link href="/settings">
    <p
      onClick={() => handleLinkClick('settings')}
      className={getLinkClass('settings')}
    >
      <FiSettings className="w-5 h-5 mr-2" />
      <span>Settings</span>
    </p>
  </Link>
  {/* Add more links as needed */}
</div>
      </div>
    </aside>
  );
};

export default Sidebar;
