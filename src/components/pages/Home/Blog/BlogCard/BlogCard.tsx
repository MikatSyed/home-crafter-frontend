"use client"

import Link from "next/link"
import { FiCalendar, FiArrowRight, FiClock, FiBookmark, FiShare2 } from "react-icons/fi"

interface BlogCardProps {
  blog: {
    id: string
    title: string
    content: string
    blogImg: string[]
    createdAt: string
    category: {
      categoryName: string
    }
    provider: {
      fName: string
      lName: string
      profileImg: string[]
    }
  }
}

const HorizontalBlogCard = ({ blog }: BlogCardProps) => {
  const { id, title, content, blogImg, category, provider, createdAt } = blog

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(" ").length
    return Math.ceil(wordCount / wordsPerMinute)
  }

  return (
    <article className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 backdrop-blur-sm h-80 hover:-translate-y-1">
      {/* Gradient overlay for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

      <div className="flex flex-col md:flex-row h-full relative z-20">
        {/* Enhanced Image Section */}
        <div className="md:w-2/5 h-40 md:h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
          <img
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            alt={title}
            src={blogImg[0] || "/placeholder.svg?height=300&width=400"}
          />

          {/* Enhanced Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-[#2563eb] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm border border-white/20">
              {category?.categoryName}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200">
              <FiBookmark className="w-4 h-4 text-gray-700" />
            </button>
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200">
              <FiShare2 className="w-4 h-4 text-gray-700" />
            </button>
          </div>

          {/* Reading Progress Indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2563eb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>

        {/* Enhanced Content Section */}
        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between h-full relative">
          <div className="flex-1">
            {/* Enhanced Meta Info */}
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                <FiCalendar className="w-4 h-4 text-[#2563eb]" />
                <span className="font-medium">{formatDate(createdAt)}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                <FiClock className="w-4 h-4 text-green-500" />
                <span className="font-medium">{getReadingTime(content)} min read</span>
              </div>
            </div>

            {/* Enhanced Title */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#2563eb] transition-all duration-300 leading-tight">
              <Link href={`/blog-details/${id}`} className="hover:no-underline">
                {title}
              </Link>
            </h3>

            {/* Enhanced Content - Limited to 2 lines */}
            <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-2 flex-1">{content}</p>
          </div>

          {/* Enhanced Bottom Section */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={provider?.profileImg[0] || "/placeholder.svg?height=40&width=40"}
                  alt={`${provider?.fName} ${provider?.lName}`}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-[#2563eb]/30 transition-all duration-300"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <span className="text-sm text-gray-900 font-semibold block">
                  {provider?.fName} {provider?.lName}
                </span>
                <span className="text-xs text-gray-500">Author</span>
              </div>
            </div>

            <Link
              href={`/blog-details/${id}`}
              className="inline-flex items-center bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#2563eb]/25 transform hover:scale-105 group/btn"
            >
              Read Article
              <FiArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Premium glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-[#2563eb]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </article>
  )
}

export default HorizontalBlogCard
