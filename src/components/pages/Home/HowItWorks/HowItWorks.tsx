"use client"

import { useState } from "react"
import {
  FaSearch,
  FaUserCheck,
  FaCalendarCheck,
  FaHandshake,
  FaStar,
  FaShieldAlt,
  FaCheckCircle,
  FaGem,
  FaClock,
  FaAward,
} from "react-icons/fa"

const HowItWorks = () => {
    const [isHovered, setIsHovered] = useState(false)

  const steps = [
    {
      id: 1,
      icon: FaSearch,
      title: "Browse & Discover",
      description:
        "Explore our curated collection of premium home services. Find exactly what your home needs with our intelligent search system.",
      number: "01",
      color: "from-[#1f54dd] via-[#1a4bc7] to-[#1642b1]",
      accent: "[#1f54dd]",
      features: ["AI-Powered Search", "Smart Filters", "Instant Results"],
      highlight: "Over 10,000+ verified services",
    },
    {
      id: 2,
      icon: FaUserCheck,
      title: "Choose Your Expert",
      description:
        "Connect with thoroughly vetted professionals who have proven track records. Every provider undergoes our rigorous verification process.",
      number: "02",
      color: "from-[#2d5de6] via-[#1f54dd] to-[#1a4bc7]",
      accent: "[#2d5de6]",
      features: ["Background Verified", "Insurance Covered", "5-Star Rated"],
      highlight: "99.8% customer satisfaction rate",
    },
    {
      id: 3,
      icon: FaCalendarCheck,
      title: "Schedule with Ease",
      description:
        "Book your service in under 60 seconds with our smart scheduling system. Choose flexible time slots that work with your lifestyle.",
      number: "03",
      color: "from-[#3b66ef] via-[#2d5de6] to-[#1f54dd]",
      accent: "[#3b66ef]",
      features: ["Real-time Availability", "Instant Booking", "Smart Reminders"],
      highlight: "Average booking time: 45 seconds",
    },
   
  
  ]

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#1f54dd]/10 to-[#1f54dd]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#1f54dd]/15 to-[#1f54dd]/8 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-[#1f54dd]/12 to-[#1f54dd]/6 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-32 right-20 opacity-10">
          <FaGem className="w-8 h-8 text-[#1f54dd] animate-pulse" />
        </div>
        <div className="absolute bottom-40 left-16 opacity-10">
          <FaAward className="w-6 h-6 text-[#1f54dd] animate-pulse delay-1000" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-12" data-aos="fade-up">
        
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
              How It Works
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#1f54dd] via-[#1f54dd] to-[#1f54dd] rounded-full"></div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
            Experience our streamlined 6-step journey that transforms your home service needs into exceptional results.
          </p>
        </div>

        {/* Premium Blog-Style Cards */}
        <div className="space-y-10">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={step.id}
                className={`flex flex-col lg:flex-row items-center gap-8 ${!isEven ? "lg:flex-row-reverse" : ""}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-2xl">
                  <article className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-700 group">
                    {/* Header */}
                    <header className="mb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500 flex items-center justify-center`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className={`px-3 py-1 bg-gradient-to-r ${step.color} rounded-full`}>
                          <span className="text-white font-bold text-xs">Step {step.number}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#1f54dd] transition-colors duration-300">
                        {step.title}
                      </h3>

                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 bg-[#1f54dd]/5 rounded-full border border-[#1f54dd]/20`}
                      >
                        <FaClock className={`w-3 h-3 text-[#1f54dd]`} />
                        <span className={`text-[#1f54dd] font-medium text-xs`}>{step.highlight}</span>
                      </div>
                    </header>

                    {/* Content */}
                    <div className="mb-6">
                      <p className="text-base text-gray-600 leading-relaxed font-light">{step.description}</p>
                    </div>

                    {/* Features */}
                    <footer>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {step.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2 p-3 bg-gray-50/50 rounded-lg border border-gray-100 hover:bg-white transition-colors duration-300"
                          >
                            <FaCheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span className="text-gray-700 font-medium text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </footer>
                  </article>
                </div>

                {/* Visual Element */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Large Number */}
                    <div
                      className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${step.color} rounded-2xl shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}
                    >
                      <span className="text-xl lg:text-2xl font-bold text-white">{step.number}</span>
                    </div>

                    {/* Decorative Elements */}
                    <div
                      className={`absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg animate-pulse`}
                    >
                      <FaGem className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* Connection Line for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-full mt-6 w-px h-10 bg-gradient-to-b from-gray-300 to-transparent"></div>
                )}
              </div>
            )
          })}
        </div>

        {/* Premium CTA Section */}
       <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
      <div
        className="relative rounded-2xl shadow-2xl overflow-hidden h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/workers-6477163_1280.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content - Centered both vertically and horizontally */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Experience Premium Service?
          </h3>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust us with their home service needs.
          </p>
          <button
            className={`bg-white text-[#1f54dd] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-lg ${
              isHovered ? "shadow-xl scale-105" : ""
            }`}
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
      </div>
    </section>
  )
}

export default HowItWorks
