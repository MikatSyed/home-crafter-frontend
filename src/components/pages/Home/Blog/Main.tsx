"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { useBlogsQuery } from "@/redux/api/blogApi"
import BlogCard from "./BlogCard/BlogCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Pagination } from "swiper/modules"
import SkeletonBlog from "./SkeletonBlog"

const Main = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)
  const categoryId: any = searchParams.get("categoryId")
  const month = searchParams.get("month")
  const year = searchParams.get("year")

  const blogsPerPage = 4
  const { data, isLoading } = useBlogsQuery({
    categoryId,
    month: month ? Number.parseInt(month, 10) : undefined,
    year: year ? Number.parseInt(year, 10) : undefined,
  })

  useEffect(() => {
    setCurrentPage(1)
  }, [categoryId, month, year])

  const blogs = data?.data

  const displayedBlogs =
    pathname === "/" ? blogs : blogs?.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage)

  const totalPages = Math.ceil(blogs?.length / blogsPerPage)

  if (isLoading) {
    return <SkeletonBlog />
  }

  return (
    <>
      <div className="mx-auto px-6 md:px-[4rem] bg-[#f3f3ff] main">
        {/* Header Section - Only show on homepage */}
        {pathname !== "/blogs" && (
          <div className="text-center pt-10 md:pt-20 pb-8 md:pb-12">
            <div data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold bg-[#4f46e5] bg-clip-text text-transparent leading-tight mb-6">
                Our Recent Blog
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed font-medium max-w-3xl mx-auto">
                Discover useful guides and expert advice to help you maintain and enhance your living spaces
              </p>
            </div>
          </div>
        )}

        {/* Blog Content Section */}
        <div className={`${pathname === "/blogs" ? "py-10 md:py-20" : "pb-10 md:pb-20"}`}>
          {pathname === "/" ? (
            /* Homepage Slider */
            <div className="relative">
              <Swiper
                modules={[Pagination]}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                className="!pb-12" // Add bottom padding for pagination dots
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                  },
                }}
              >
                {displayedBlogs?.map((blog: any) => (
                  <SwiperSlide key={blog?.id} className="h-auto">
                    <div className="h-full">
                      <BlogCard blog={blog} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
            </div>
          ) : (
            /* Blog Page Grid */
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                {displayedBlogs?.map((blog: any) => (
                  <BlogCard key={blog?.id} blog={blog} />
                ))}
              </div>

              {/* Pagination - Only show on blog page */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 md:mt-16">
                  <div className="flex items-center space-x-2">
                    {/* Previous Button */}
                    <button
                      className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                        currentPage === 1
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:text-[#4f46e5] hover:bg-white/50"
                      }`}
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <FiArrowLeft className="mr-2 w-4 h-4" />
                      <span className="text-sm font-medium">PREV</span>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: totalPages }, (_, index) => (
                        <button
                          key={index}
                          className={`w-10 h-10 rounded-lg transition-all duration-200 text-sm font-medium ${
                            currentPage === index + 1
                              ? "bg-[#4f46e5] text-white shadow-lg"
                              : "bg-white border border-gray-200 text-gray-700 hover:bg-[#4f46e5] hover:text-white hover:border-[#4f46e5]"
                          }`}
                          onClick={() => setCurrentPage(index + 1)}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>

                    {/* Next Button */}
                    <button
                      className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                        currentPage === totalPages
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:text-[#4f46e5] hover:bg-white/50"
                      }`}
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <span className="text-sm font-medium">NEXT</span>
                      <FiArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Main
