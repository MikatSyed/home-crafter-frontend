"use client"

import Image from "next/image"
import suitcase from "../../../../../public/assets/suitcase.svg"
import HeroSearchInput from "./HeroSearchInput"

const HeroSection = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 pb-12 md:pb-16 md:px-[3rem] hero-bg pt-12 md:pt-20 main relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
      <div className="absolute top-20 right-10 w-64 h-64 md:w-80 md:h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-8xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center w-full mt-12 md:mt-16 lg:mt-20">
          {/* Left Content */}
          <div className="lg:w-6/12 w-full px-2 sm:px-0">
            <div className="section-search space-y-6 md:space-y-8" data-aos="fade-up">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-lg animate-fade-in">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <p className="text-sm md:text-md text-gray-200 font-medium">Search From 150 Awesome Verified Ads!</p>
              </div>

              {/* Main Headings with improved spacing */}
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight md:leading-tight tracking-tight animate-slide-up">
                  Best Solution for Every
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#4f46e5]">
                  House Problems
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed max-w-xl animate-fade-in delay-300">
                Connect with verified professionals for all your home service needs. Quality guaranteed, satisfaction
                assured.
              </p>

              {/* Search Input with animation */}
              <div className="pt-2 md:pt-4 animate-slide-up delay-400">
                <HeroSearchInput />
              </div>

              {/* Enhanced Trust Card */}
              <div className="bg-white/8 backdrop-blur-xl border border-white/10 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-2xl mt-6 md:mt-8 hover:bg-white/12 transition-all duration-500 animate-fade-in delay-500">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-4 md:mb-6">
                  <h6 className="text-lg md:text-xl lg:text-2xl font-bold text-white">Trusted by 2M+ Professionals</h6>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse"
                        style={{ animationDelay: `${star * 100}ms` }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-white font-semibold text-sm md:text-base">4.9/5</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                  <div className="flex -space-x-2 md:-space-x-3">
                    {["avatar-06", "avatar-07", "avatar-08", "avatar-09", "avatar-10"].map((avatar, index) => (
                      <div
                        key={index}
                        className="relative group animate-bounce"
                        style={{ animationDelay: `${index * 200}ms`, animationDuration: "2s" }}
                      >
                        <img
                          src={`assets/${avatar}.jpg`}
                          alt="User"
                          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 md:border-3 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 md:border-3 border-white bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse">
                      <span className="text-white text-xs md:text-sm font-bold">2M+</span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-gray-300 text-sm md:text-base lg:text-lg">Join our growing community!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-6/12 w-full mt-8 md:mt-12 lg:mt-0 px-2 sm:px-0">
            <div className="relative flex justify-center lg:justify-end">
              {/* Animated Image Container */}
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-3 scale-105 animate-pulse"></div>

                {/* Main Image with Animations */}
                <div className="relative animate-float">
                  <img
                    src="assets/provider-7.png"
                    alt="Professional Service Provider"
                    className="relative w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] z-10 drop-shadow-2xl hover:scale-105 transition-all duration-700 ease-in-out group-hover:rotate-1"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 md:top-8 md:right-8  ">
                  <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-xl">
                    <div className="flex items-center space-x-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-1.5 md:p-2 rounded-lg">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-600 font-medium">Verified</p>
                        <p className="text-sm md:text-base font-bold text-gray-900">Pro</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Stats Card */}
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 lg:left-auto lg:right-4 animate-slide-up delay-700">
                <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div>
                      <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 animate-count-up">
                        +21k
                      </h5>
                      <p className="text-gray-600 font-medium text-xs md:text-sm lg:text-base">Services Completed</p>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-2 md:p-3 lg:p-4 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Image
                        src={suitcase || "/placeholder.svg"}
                        alt="Services"
                        className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white filter brightness-0 invert"
                      />
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex items-center justify-between pt-2 md:pt-3 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Live Updates</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 text-green-500 animate-bounce"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Growing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </div>
  )
}

export default HeroSection
