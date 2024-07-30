"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
const Blog = () => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
      AOS.init({
          duration: 1000,
      });
  }, []);
  const blogs = [
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-02.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-16.jpg",
      authorName: "Sophie",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-02.jpg",
      date: "10, Dec 2023",
      category: "Cleaning",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-16.jpg",
      authorName: "James",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-03.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-10.jpg",
      authorName: "George",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-03.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-10.jpg",
      authorName: "George",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-03.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-10.jpg",
      authorName: "George",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-03.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-10.jpg",
      authorName: "George",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-03.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-10.jpg",
      authorName: "George",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-03.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-10.jpg",
      authorName: "George",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-03.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-10.jpg",
      authorName: "George",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-03.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-10.jpg",
      authorName: "George",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-03.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-10.jpg",
      authorName: "George",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-03.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-10.jpg",
      authorName: "George",
    },
    // ...add more blog objects if needed
  ];
  // Calculate the displayed blogs based on the current page and pathname
  const displayedblogs = pathname === '/' 
  ? blogs.slice(-3) 
  : blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

// Calculate the total number of pages for pagination
const totalPages = Math.ceil(blogs.length / blogsPerPage);
  return (
    <div className="mx-auto px-6 md:px-[7rem]  py-20">
       {pathname !== '/blogs' && (
                   <div className="text-center mb-8">
                   <div className="section-heading section-heading-seven" data-aos="fade-up">
                     <h2 className="text-3xl font-semibold">Our Recent Blog</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                   </div>
                 </div>
                )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedblogs.map((blog, index) => (
          <div
            key={index}
            className="service-content service-content-seven p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:-translate-y-2"
            data-aos="fade-up"
          >
            <a href="blog-details.html">
              <img className="w-full h-48 object-cover rounded-t-lg" alt="Service Image" src={blog.imgSrc} />
            </a>
            <div className="p-4">
              <div className="service-bottom-seven flex items-center justify-between mb-2">
                <div className="service-bottom-icons flex items-center text-gray-500 text-sm">
                  <i className="feather-calendar mr-1"></i>
                  <span>{blog.date}</span>
                </div>
                <h6 className="text-gray-500">{blog.category}</h6>
              </div>
              <h3 className="title text-lg font-semibold mb-2">
                <a href="blog-details.html" className="text-gray-800 hover:text-gray-600">
                  {blog.title}
                </a>
              </h3>
           
              <div className="usefull-bottom flex items-center justify-between mt-5">
                <div className="useful-img flex items-center">
                  <img
                    src={blog.authorImg}
                    alt="User"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>{blog.authorName}</span>
                </div>
                <a href="javascript:void(0);" className="text-blue-500 hover:text-blue-400">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {pathname === '/blogs' && (
                <div className="flex justify-center mt-8">
            
                <button
                  className={`inline-flex items-center px-4 py-2 mx-1 rounded-lg transition-colors ${
                    currentPage === 1 ? ' text-gray-500 cursor-not-allowed text-sm' : 'text-gray-700 hover:from-blue-500 hover:to-blue-700 text-sm font-bold hover:text-[#4f46e5]'
                  }`}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
               <FiArrowLeft className="mr-1" />   PREV
                </button>
            
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 mx-1 rounded-lg transition-colors ${
                      currentPage === index + 1
                        ? 'bg-[#4f46e5] text-white '
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
      ? ' text-gray-500 cursor-not-allowed text-sm'
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
