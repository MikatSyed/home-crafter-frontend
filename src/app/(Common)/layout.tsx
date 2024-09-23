"use client";

import Footer from "@/components/pages/Home/Footer/Footer";
import Nav from "@/components/pages/Home/Navbar/Nav";
import Navbar from "@/components/pages/Home/Navbar/Navbar";



export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Nav />
      {children}
      <Footer/>
    </>
  );
}
