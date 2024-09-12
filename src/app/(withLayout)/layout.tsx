// components/Layout.tsx
"use client"
import Header from '@/components/UI/Header';
import Sidebar from '@/components/UI/Sidebar';
import { useState } from 'react';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" overflow-x-hidden">
      <div className="flex flex-col flex-1 w-full">
        <Header isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
        <main className="flex  md:h-[88vh] overflow-y-hidden ">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
          <div className="container mx-auto p-4  overflow-y-auto ">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
