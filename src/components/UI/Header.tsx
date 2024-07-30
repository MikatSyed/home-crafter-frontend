// components/UI/Header.tsx
"use client"
import { FiMenu, FiX, FiBell, FiUser, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import logo from '../../../public/assets/home (5).png'
import Image from 'next/image';
interface HeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, onToggleSidebar }) => {
  return (
    <header className="z-10  shadow-md   ">
      <div className="container flex items-center justify-between  mx-2 text-blue-600 py-4">
        <div className="flex items-center">
          <button
            className="mr-3 md:hidden"
            onClick={onToggleSidebar}
          >
            {isSidebarOpen ? <FiX className="w-6 h-6 " /> : <FiMenu className="w-6 h-6" />}
          </button> 
          {/* <Image src={logo} alt="Logo" height={100} width={250} /> */}
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-200 text-black">
            <FiBell className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 text-black">
            <FiUser className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 text-black">
            <FiHelpCircle className="w-5 h-5" />
          </button>
          <button className="px-3 py-1 text-white bg-black rounded-md hover:bg-blue-700 ">
            <FiLogOut className="w-4 h-4 mr-2 inline-block" />
            <span className='text-sm'>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
