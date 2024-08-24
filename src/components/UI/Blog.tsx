"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useBlogsQuery } from "@/redux/api/blogApi";
import BlogCard from "./BlogCard";
import { Swiper, SwiperSlide, Swiper as SwiperType } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from "swiper/modules";
const Blog = () => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useBlogsQuery(undefined);
  const blogs = data?.data;
  const blogsPerPage = 3;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Calculate the displayed blogs based on the current page and pathname
  const displayedBlogs = pathname === '/' 
    ? blogs
    : blogs?.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  // Calculate the total number of pages for pagination
  const totalPages = Math.ceil(blogs?.length / blogsPerPage);

  return (
    <div className="mx-auto px-6 md:px-[7rem] py-20">
      {pathname !== '/blogs' && (
        <div className="text-center mb-8">
          <div className="section-heading section-heading-seven" data-aos="fade-up">
            <h2 className="text-3xl font-semibold">Our Recent Blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
        </div>
      )}
       <Swiper
        // onSwiper={handleSwiper}
        modules={[Pagination]}
         pagination
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {displayedBlogs?.map((blog: any) => (
        <SwiperSlide key={blog?.id}>
   <BlogCard key={blog?.id} blog={blog} />
        </SwiperSlide>
     
    ))}
</div>
      </Swiper>
 
      {pathname === '/blogs' && (
        <div className="flex justify-center mt-8">
          <button
            className={`inline-flex items-center px-4 py-2 mx-1 rounded-lg transition-colors ${
              currentPage === 1 ? 'text-gray-500 cursor-not-allowed text-sm' : 'text-gray-700 hover:from-blue-500 hover:to-blue-700 text-sm font-bold hover:text-[#4f46e5]'
            }`}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FiArrowLeft className="mr-1" /> PREV
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-1 rounded-lg transition-colors ${
                currentPage === index + 1
                  ? 'bg-[#4f46e5] text-white'
                  : 'bg-[#f8fcfd] border border-gray-300 text-gray-800 hover:bg-[#4f46e5] text-sm hover:text-white'
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`inline-flex items-center px-4 py-2 mx-1 rounded-lg transition-colors ${
              currentPage === totalPages
                ? 'text-gray-500 cursor-not-allowed text-sm'
                : 'text-gray-700 text-sm font-bold hover:text-[#4f46e5]'
            }`}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            NEXT <FiArrowRight className="ml-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
