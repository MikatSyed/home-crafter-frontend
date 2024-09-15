import { useState, useRef } from 'react';
import { FiMenu, FiX, FiBell } from 'react-icons/fi';
import Image from 'next/image';
import { TfiWorld } from 'react-icons/tfi';
import Link from 'next/link';
import { useLoggedUserQuery } from '@/redux/api/userApi';
import { signOut } from 'next-auth/react';
import { useClickAway } from 'react-use';

interface HeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, onToggleSidebar }) => {
  const { data, isLoading } = useLoggedUserQuery(undefined);
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

  return (
    <header className="z-10 shadow-md">
      <div className="container flex items-center justify-between mx-2 text-blue-600 py-4">
        <div className="flex items-center">
          <button className="mr-3 md:hidden" onClick={onToggleSidebar}>
            {isSidebarOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
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
          <div className="relative">
            <button
              onClick={toggleProfileMenu}
              ref={profileButtonRef}
              className="flex items-center space-x-2 focus:outline-none"
              tabIndex={0}
            >
              <div className="w-11 h-11 relative rounded-full overflow-hidden">
                <Image
                  src={user?.profileImg[user?.profileImg.length - 1]}
                  alt="User Image"
                  layout="fill"  
                  objectFit="cover"  
                  className="rounded-full"  
                />
              </div>
              <div className="hidden md:block">
                {isLoading ? (
                  <p className="text-sm font-medium">Loading...</p>
                ) : (
                  <div className="text-left">
                    <p className="text-sm font-medium m-0">{`${user?.fName} ${user?.lName}`}</p>
                    <p className="text-xs text-gray-500 m-0">{user?.role}</p>
                  </div>
                )}
              </div>
            </button>
            {isProfileOpen && (
              <div
                ref={profileMenuRef}
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg animate-slide-down"
              >
                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                <div className="border-t border-gray-200"></div>
                <p onClick={handleSignOut} className="block px-4 py-2 text-sm cursor-pointer text-red-600 hover:bg-gray-100">Logout</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
