"use client";
import React from "react";

const Blog = () => {
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
    // ...add more blog objects if needed
  ];

  return (
    <div className="mx-auto px-6 md:px-[7rem]  py-20">
      <div className="text-center mb-8">
        <div className="section-heading section-heading-seven" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Our Recent Blog</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
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
    </div>
  );
};

export default Blog;
