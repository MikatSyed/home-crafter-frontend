"use client"

import React, { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from "react-icons/fa"
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
  const [autoplay, setAutoplay] = useState(true)

  const testimonials =
    data?.data?.map((review: Review) => ({
      id: review.id,
      name: `${review.user.fName} ${review.user.lName}`,
      role: review.user.role === "User" ? "Valued Customer" : review.user.role,
      image: review.user.profileImg?.[0] || "/placeholder.svg?height=100&width=100",
      rating: review.rating,
      text: review.comment,
      createdAt: review.createdAt,
    })) || []

  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const goToPrevious = () => {
    setAutoplay(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setAutoplay(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setAutoplay(false)
    setCurrentIndex(index)
  }

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

  if (isLoading) return null
  if (error) return null
  if (!testimonials.length) return null

  return (
    <section className="bg-[#4f46e5] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Discover how we've helped our clients achieve their home service goals
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-lg bg-white p-6 shadow-lg md:p-8">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((t:any) => (
                <div key={t.id} className="min-w-full px-4">
                  <div className="flex flex-col items-center text-center">
                    <FaQuoteLeft className="mb-6 h-10 w-10 text-[#4f46e5] opacity-30" />
                    <div className="mb-6 flex">{renderStars(t.rating)}</div>
                    <p className="mb-6 text-xl text-gray-700 md:text-2xl leading-relaxed">
                      "{t.text}"
                    </p>
                    <div className="mb-4 h-16 w-16 overflow-hidden rounded-full ring-4 ring-[#4f46e5]/20">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-full w-full object-cover"
                        onError={(e) => ((e.target as HTMLImageElement).src = "/placeholder.svg?height=100&width=100")}
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-[#4f46e5] font-medium">{t.role}</p>
                    <p className="text-gray-500 text-xs mt-1">
                      Reviewed on {formatDate(t.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {testimonials.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:scale-110 md:left-4"
                aria-label="Previous testimonial">
                <FaChevronLeft className="h-6 w-6 text-[#4f46e5]" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:scale-110 md:right-4"
                aria-label="Next testimonial">
                <FaChevronRight className="h-6 w-6 text-[#4f46e5]" />
              </button>
            </>
          )}

          {testimonials.length > 1 && (
            <div className="mt-6 flex justify-center space-x-2">
              {testimonials.map((_:any, i:number) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "bg-white scale-125" : "bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          )}

          {testimonials.length > 1 && (
            <div className="text-center mt-4">
              <span className="text-white/70 text-sm">
                {currentIndex + 1} of {testimonials.length} testimonials
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
