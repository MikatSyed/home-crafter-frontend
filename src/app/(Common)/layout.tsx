"use client";

import Footer from "@/components/pages/Home/Footer/Footer";
import Navbar from "@/components/pages/Home/Navbar/Navbar";



export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}
