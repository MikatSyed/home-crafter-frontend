import { useState, useRef } from 'react';
import { FiMenu, FiX, FiBell } from 'react-icons/fi';
import Image from 'next/image';
import { TfiWorld } from 'react-icons/tfi';
import Link from 'next/link';

const demoUser = {
  imageUrl: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg',
  name: 'John Doe',
  role: 'Administrator',
};

interface HeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, onToggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileButtonRef = useRef<HTMLButtonElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const toggleProfileMenu = () => {
    setIsProfileOpen((prev) => !prev);
  };

  const closeProfileMenu = () => {
    setIsProfileOpen(false);
  };

  return (
    <header className="z-10 shadow-md">
      <div className="container flex items-center justify-between mx-2 text-blue-600 py-4">
        <div className="flex items-center">
          <button className="mr-3 md:hidden" onClick={onToggleSidebar}>
            {isSidebarOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
          {/* <Image src={logo} alt="Logo" height={100} width={250} /> */}
        </div>
        <div className="flex items-center space-x-3">
          <Link href="/">
            <button className="p-2 rounded-full hover:text-[#4f46e5] text-gray-500 flex items-center text-sm">
              <TfiWorld className="w-4 h-4 mr-2" />
              <span className="text-[12px]">View Site</span>
            </button>
          </Link>
          <button className="p-2 rounded-full hover:text-white bg-gray-100 text-black hover:bg-[#4f46e5]">
            <FiBell className="w-5 h-5" />
          </button>
          <div className="relative" onBlur={closeProfileMenu}>
            <button
              onClick={toggleProfileMenu}
              ref={profileButtonRef}
              className="flex items-center space-x-2 focus:outline-none"
              tabIndex={0}
              onBlur={closeProfileMenu}
            >
              <Image
                src={demoUser.imageUrl}
                alt="User Image"
                className="rounded-full shadow-md transform hover:scale-105 transition-transform duration-200"
                height={40}
                width={40}
              />
              <div className="hidden md:block">
                <p className="text-sm font-medium">{demoUser.name}</p>
                <p className="text-xs text-gray-500">{demoUser.role}</p>
              </div>
            </button>
            {isProfileOpen && (
              <div
                ref={profileMenuRef}
                tabIndex={0}
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg animate-slide-down"
                onBlur={closeProfileMenu}
              >
                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
               
                <div className="border-t border-gray-200"></div>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
