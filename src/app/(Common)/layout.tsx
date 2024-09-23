"use client";

import Footer from "@/components/pages/Home/Footer/Footer";
import Nav from "@/components/pages/Home/Nav/TopHeader ";
import Navbar from "@/components/pages/Home/Nav/Navbar";



export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Nav />
      {children}
      <Footer/>
    </>
  );
}
