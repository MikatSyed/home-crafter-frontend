"use client"

import type React from "react"
import { useState } from "react"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import { FaStar, FaQuoteLeft } from "react-icons/fa"
import { useReviewsQuery } from "@/redux/api/reviewApi"

interface Review {
  id: string
  userId: string
  serviceId: string
  rating: number
  comment: string
  createdAt: string
  user: {
    id: string
    fName: string
    lName: string
    email: string
    role: string
    contactNo: string
    profileImg: string[]
    createdAt: string
    updatedAt: string
  }
}

const Testimonial: React.FC = () => {
  const { data, isLoading, error } = useReviewsQuery(undefined)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Transform API data to testimonial format
  const testimonials =
    data?.data?.map((review: Review) => ({
      id: review.id,
      name: `${review.user.fName} ${review.user.lName}`,
      role: review.user.role === "User" ? "Valued Customer" : review.user.role,
      company: "Home Crafter Client",
      image: review.user.profileImg?.[0] || "/placeholder.svg?height=80&width=80",
      rating: review.rating,
      text: review.comment,
      companyLogo: "/placeholder.svg?height=40&width=120",
      location: "Verified Customer",
      email: review.user.email,
      contactNo: review.user.contactNo,
      createdAt: review.createdAt,
    })) || []

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Loading state
  if (isLoading) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#1f54dd] to-[#1a4bc4] bg-clip-text text-transparent leading-tight mb-6">
              Client Testimonials
            </span>
            <h2 className="text-gray-700 text-lg leading-relaxed font-medium">What Our Clients Say</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Loading testimonials...</p>
          </div>
          <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3 text-center lg:text-left">
                  <div className="w-24 h-24 mx-auto lg:mx-0 mb-4 rounded-full bg-gray-200"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                </div>
                <div className="lg:w-2/3">
                  <div className="h-12 w-12 bg-gray-200 rounded mb-6"></div>
                  <div className="flex mb-6 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-gray-200 rounded"></div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Error state
  if (error) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#1f54dd] to-[#1a4bc4] bg-clip-text text-transparent leading-tight mb-6">What Our Clients Say</h2>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">Unable to load testimonials at this time.</p>
          </div>
        </div>
      </section>
    )
  }

  // No testimonials available
  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="py-20 px-4  relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#1f54dd] to-[#1a4bc4] bg-clip-text text-transparent leading-tight mb-6">What Our Clients Say</h2>
            <p className="text-xl text-blue-100">No testimonials available yet.</p>
          </div>
        </div>
      </section>
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-white/20 text-white border border-white/30 rounded-full mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#1f54dd] to-[#1a4bc4] bg-clip-text text-transparent leading-tight mb-6">What Our Clients Say</h2>
          <p className="text-gray-700 text-lg leading-relaxed font-medium mx-auto">
            Discover how we've helped our clients achieve their goals
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="w-24 h-24 mx-auto lg:mx-0 mb-4 rounded-full overflow-hidden ring-4 ring-blue-100">
                  <img
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=80&width=80"
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentTestimonial.name}</h3>
                <p className="text-blue-600 font-semibold mb-1">{currentTestimonial.role}</p>
                <p className="text-gray-600 mb-3">{currentTestimonial.company}</p>
                <p className="text-sm text-gray-500 mb-2">{currentTestimonial.location}</p>
                <p className="text-xs text-gray-400 mb-4">Reviewed on {formatDate(currentTestimonial.createdAt)}</p>
                <img
                  src={currentTestimonial.companyLogo || "/placeholder.svg"}
                  alt="Company logo"
                  className="h-8 mx-auto lg:mx-0 opacity-60"
                />
              </div>

              <div className="lg:w-2/3">
                <FaQuoteLeft className="w-12 h-12 text-blue-600 mb-6" />
                <div className="flex mb-6">{renderStars(currentTestimonial.rating)}</div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{currentTestimonial.text}</p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Rating: </span>
                  {currentTestimonial.rating}/5 stars
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons - only show if more than 1 testimonial */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border border-white/20 shadow-lg rounded-lg p-3 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <IoChevronBack className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border border-white/20 shadow-lg rounded-lg p-3 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <IoChevronForward className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Dots indicator - only show if more than 1 testimonial */}
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white scale-125" : "bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Testimonial counter */}
        {testimonials.length > 1 && (
          <div className="text-center mt-4">
            <span className="text-white/70 text-sm">
              {currentIndex + 1} of {testimonials.length} testimonials
            </span>
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonial
