"use client"

import Link from "next/link"
import { FiCalendar, FiArrowRight, FiClock } from "react-icons/fi"

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
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-64">
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className="md:w-1/3 h-32 md:h-full relative overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt={title}
            src={blogImg[0] || "/placeholder.svg?height=200&width=300"}
          />
          <div className="absolute top-3 left-3">
            <span className="bg-[#1f54dd] text-white px-2 py-1 rounded-md text-xs font-medium">
              {category?.categoryName}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-4 md:p-6 flex flex-col justify-between h-full">
          <div className="flex-1">
            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
              <div className="flex items-center gap-1">
                <FiCalendar className="w-4 h-4" />
                <span>{formatDate(createdAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiClock className="w-4 h-4" />
                <span>{getReadingTime(content)} min read</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#1f54dd] transition-colors">
              <Link href={`/blog-details/${id}`}>{title}</Link>
            </h3>

            {/* Content */}
            <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2 flex-1">{content}</p>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
              <img
                src={provider?.profileImg[0] || "/placeholder.svg?height=32&width=32"}
                alt={`${provider?.fName} ${provider?.lName}`}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-gray-700 font-medium">
                {provider?.fName} {provider?.lName}
              </span>
            </div>

            <Link
              href={`/blog-details/${id}`}
              className="inline-flex items-center text-[#1f54dd] hover:text-[#1f54dd]/80 font-medium text-sm transition-colors group/btn"
            >
              Read More
              <FiArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HorizontalBlogCard
