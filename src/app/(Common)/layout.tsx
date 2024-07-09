"use client";

import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar";

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
