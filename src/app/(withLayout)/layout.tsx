// components/Layout.tsx
"use client"
import Header from '@/components/UI/Header';
import Sidebar from '@/components/UI/Sidebar';
import { useLoggedUserQuery } from '@/redux/api/userApi';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {push} = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { data, isLoading } = useLoggedUserQuery(undefined);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  if(data?.data?.role === 'User'){
    push('/')
  }

  return (
    <div className=" overflow-x-hidden">
      <div className="flex flex-col flex-1 w-full">
        <Header isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} data={data} isLoading={isLoading}/>
        <main className="flex  md:h-[88vh] overflow-y-hidden ">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} data={data} />
          <div className="container mx-auto p-4  overflow-y-auto ">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
