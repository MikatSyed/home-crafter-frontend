"use client"

import { useState } from "react"
import { FaSearch, FaUserCheck, FaCalendarCheck, FaCheckCircle, FaAward, FaPlay, FaChevronRight } from "react-icons/fa"

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isVideoHovered, setIsVideoHovered] = useState(false)

  const steps = [
    {
      id: 1,
      icon: FaSearch,
      title: "Browse & Discover",
      description:
        "Explore our curated collection of premium home services. Find exactly what your home needs with our intelligent search system.",
      number: "01",
      color: "from-[#4f46e5] to-[#6366f1]",
      features: ["AI-Powered Search", "Smart Filters", "Instant Results"],
      highlight: "Over 10,000+ verified services",
      stats: "10K+ Services",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      icon: FaUserCheck,
      title: "Choose Your Expert",
      description:
        "Connect with thoroughly vetted professionals who have proven track records. Every provider undergoes our rigorous verification process.",
      number: "02",
      color: "from-[#6366f1] to-[#4f46e5]",
      features: ["Background Verified", "Insurance Covered", "5-Star Rated"],
      highlight: "99.8% customer satisfaction rate",
      stats: "99.8% Satisfaction",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      icon: FaCalendarCheck,
      title: "Schedule with Ease",
      description:
        "Book your service in under 60 seconds with our smart scheduling system. Choose flexible time slots that work with your lifestyle.",
      number: "03",
      color: "from-[#4f46e5] to-[#3730a3]",
      features: ["Real-time Availability", "Instant Booking", "Smart Reminders"],
      highlight: "Average booking time: 45 seconds",
      stats: "45s Avg Booking",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Header Section */}
      <div className="relative py-20 bg-gradient-to-br from-[#4f46e5] via-[#6366f1] to-[#3730a3]">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
            <FaAward className="w-4 h-4 text-white" />
            <span className="text-white font-semibold text-sm">Simple Process</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">How It Works</h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Get your home services done in just 3 simple steps
          </p>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
            {/* Wave Layer 1 - Slowest */}
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="-100 0; 100 0; -100 0"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
            {/* Wave Layer 2 - Medium Speed */}
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="50 0; -50 0; 50 0"
                dur="15s"
                repeatCount="indefinite"
              />
            </path>
            {/* Wave Layer 3 - Fastest */}
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="0 0; 75 0; 0 0"
                dur="10s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden lg:block space-y-32">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <div key={step.id} className={`flex items-center gap-16 ${!isEven ? "flex-row-reverse" : ""}`}>
                  {/* Content Side */}
                  <div className="flex-1">
                    <div className="max-w-xl">
                      {/* Step Number */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-6xl font-bold text-[#4f46e5]/10">{step.number}</div>
                      </div>

                      {/* Title */}
                      <h3 className="text-4xl font-bold text-gray-900 mb-6">{step.title}</h3>

                      {/* Description */}
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">{step.description}</p>

                      {/* Features */}
                      <div className="space-y-4 mb-8">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                              <FaCheckCircle className="w-4 h-4 text-emerald-600" />
                            </div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div
                        className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${step.color} rounded-full shadow-lg`}
                      >
                        <FaAward className="w-4 h-4 text-white" />
                        <span className="text-white font-semibold">{step.stats}</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className="flex-1">
                    <div className="relative">
                      {/* Main Image Container */}
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <div
                          className={`h-96 bg-gradient-to-br ${step.color} flex items-center justify-center relative`}
                        >
                          <div className="absolute inset-0 bg-black/10"></div>
                          <div className="relative z-10 text-center text-white">
                            <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <IconComponent className="w-16 h-16" />
                            </div>
                            <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                            <p className="text-white/80 text-lg">{step.stats}</p>
                          </div>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#4f46e5]">{step.number}</span>
                      </div>

                      {/* Decorative Dots */}
                      <div className="absolute -bottom-6 -left-6 grid grid-cols-3 gap-2">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-[#4f46e5]/20 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon

              return (
                <div key={step.id} className="text-center">
                  {/* Visual */}
                  <div className="relative mb-8">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl mx-auto max-w-sm">
                      <div className={`h-64 bg-gradient-to-br ${step.color} flex items-center justify-center relative`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10 text-center text-white">
                          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <IconComponent className="w-10 h-10" />
                          </div>
                          <h4 className="text-xl font-bold">{step.title}</h4>
                        </div>
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-[#4f46e5]">
                      <span className="text-lg font-bold text-[#4f46e5]">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center gap-2">
                          <FaCheckCircle className="w-4 h-4 text-emerald-500" />
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${step.color} rounded-full`}
                    >
                      <span className="text-white font-semibold text-sm">{step.stats}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: "url('/assets/workers-6477163_1280.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "600px",
            }}
            onMouseEnter={() => setIsVideoHovered(true)}
            onMouseLeave={() => setIsVideoHovered(false)}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4f46e5]/95 via-[#4f46e5]/90 to-[#3730a3]/85"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center min-h-[600px] p-8">
              <div className="text-center max-w-4xl">
                {/* Play Button */}
                <div className="mb-10">
                  <div
                    className={`inline-flex items-center justify-center w-28 h-28 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-500 cursor-pointer border-4 border-white/30 ${
                      isVideoHovered ? "scale-110 bg-white/30 border-white/50" : ""
                    }`}
                  >
                    <FaPlay className="w-12 h-12 text-white ml-2" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                  Ready to Get
                  <br />
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Started?
                  </span>
                </h3>

                {/* Description */}
                <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of satisfied customers who trust us with their home service needs
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <button className="group bg-white text-[#4f46e5] px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3">
                    Get Started Now
                    <FaChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  <button className="bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 border-2 border-white/40 hover:bg-white/30 hover:border-white/60">
                    Watch Demo
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">10K+</div>
                    <div className="text-white/80">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">99.8%</div>
                    <div className="text-white/80">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">45s</div>
                    <div className="text-white/80">Avg Booking Time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-10 right-10 w-6 h-6 bg-white/15 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-1/3 right-20 w-4 h-4 bg-white/25 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
