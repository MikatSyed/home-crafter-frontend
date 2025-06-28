import { FiCheck, FiStar, FiArrowRight } from "react-icons/fi"
import { HiSparkles } from "react-icons/hi"
import Link from "next/link"

const PricingPlan = () => {
  return (
    <div className="min-h-screen bg-[#f3f3ff]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
         
          <h2 className="text-3xl md:text-5xl font-bold bg-[#4f46e5] bg-clip-text text-transparent leading-tight mb-6">
            Choose Your Plan
            
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            Unlock premium services tailored to your needs. Experience excellence with our flexible pricing options
            designed for every lifestyle.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
          {/* Basic Plan */}
          <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 border border-gray-100 hover:border-[#4f46e5]/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#4f46e5]/10 to-blue-100 rounded-2xl mb-6">
                <div className="w-8 h-8 bg-[#4f46e5] rounded-lg"></div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Basic</h3>
              <p className="text-gray-500">Perfect for getting started</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "3 Essential Services Included",
                "Affordable & Cost-Effective",
                "Weekend & evening availability",
                "Ideal for individuals & small families",
                "6 month validity with rollovers",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#4f46e5]/10 rounded-full flex items-center justify-center mt-0.5">
                    <FiCheck className="w-4 h-4 text-[#4f46e5]" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/combo-pack/basic" className="block">
              <button className="w-full bg-white text-[#4f46e5] border-2 border-[#4f46e5] font-semibold px-8 py-4 rounded-2xl hover:bg-[#4f46e5] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 flex items-center justify-center gap-2">
                Choose Basic Plan
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Standard Plan - Featured */}
          <div className="group relative bg-[#4f46e5] rounded-3xl shadow-2xl p-8 lg:p-10 transform lg:scale-105 lg:-translate-y-4">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <HiSparkles className="w-4 h-4" />
                MOST POPULAR
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Standard</h3>
              <p className="text-blue-100">Most popular choice</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "5 Comprehensive Services Included",
                "Best balance of value & coverage",
                "Perfect for medium-sized homes",
                "5 days a week with priority scheduling",
                "1 year service validity",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                    <FiCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-50 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/combo-pack/standard" className="block">
              <button className="w-full bg-white text-[#4f46e5] font-semibold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 flex items-center justify-center gap-2">
                Choose Standard Plan
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 border border-gray-100 hover:border-[#4f46e5]/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg"></div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-500">Ultimate luxury experience</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "7 All-Inclusive Services Included",
                "Ultimate plan with maximum benefits",
                "Perfect for large families & estates",
                "24/7 availability with emergency support",
                "2 years service validity",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#4f46e5]/10 rounded-full flex items-center justify-center mt-0.5">
                    <FiCheck className="w-4 h-4 text-[#4f46e5]" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/combo-pack/premium" className="block">
              <button className="w-full bg-[#4f46e5] text-white font-semibold px-8 py-4 rounded-2xl hover:from-blue-600 hover:to-[#4f46e5] transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 flex items-center justify-center gap-2">
                Choose Premium Plan
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

     
      </div>
    </div>
  )
}

export default PricingPlan
