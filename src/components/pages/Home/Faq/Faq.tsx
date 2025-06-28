"use client"

import { useState } from "react"
import Link from "next/link"
import { FaChevronDown, FaQuestionCircle, FaArrowRight } from "react-icons/fa"
import { useFaqsQuery } from "@/redux/api/faqApi"
import FaqSkeleton from "./FaqSkeleton"

const Faq = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null)
  const { data, isLoading } = useFaqsQuery(undefined)
  const faqs = data?.data || []

  const togglePanel = (panelId: string) => {
    setActivePanel((prev) => (prev === panelId ? null : panelId))
  }

  const displayedFaqs = faqs.slice(0, 6)

  const getItems = () => {
    if (isLoading) {
      return Array(6)
        .fill(null)
        .map((_, index) => <FaqSkeleton key={`skeleton-${index}`} />)
    }

    if (!displayedFaqs.length) return []

    return displayedFaqs.map((faq: any, index: number) => (
      <div
        key={faq.id}
        className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100/50 backdrop-blur-sm hover:-translate-y-1"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-[#4f46e5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Question Header */}
        <div
          className="relative flex justify-between items-center p-5 md:p-7 cursor-pointer bg-gradient-to-r from-gray-50 to-gray-100/50 group-hover:from-blue-50 group-hover:to-[#4f46e5]/10 transition-all duration-500"
          onClick={() => togglePanel(faq.id)}
        >
          <div className="flex items-start gap-4 flex-1">
            <div className="flex-shrink-0 w-9 h-9 bg-[#4f46e5] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-[#4f46e5]/25 transition-all duration-300">
              <FaQuestionCircle className="text-white text-sm" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold text-base md:text-lg text-gray-900 leading-tight group-hover:text-[#4f46e5] transition-all duration-300">
                {faq.question}
              </h3>
              <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to {activePanel === faq.id ? "collapse" : "expand"} answer
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 ml-4">
            <div
              className={`w-9 h-9 bg-white rounded-full shadow-sm flex items-center justify-center transform transition-all duration-500 group-hover:shadow-md group-hover:bg-[#4f46e5] ${
                activePanel === faq.id ? "rotate-180 bg-[#4f46e5]" : ""
              }`}
            >
              <FaChevronDown
                className={`text-sm transition-colors duration-300 ${
                  activePanel === faq.id ? "text-white" : "text-gray-600 group-hover:text-white"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Answer Content with smooth animation */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activePanel === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative px-5 md:px-7 pb-6 bg-white">
            {/* Decorative line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-5" />

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div className="flex-1 pt-1">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-normal">{faq.answer}</p>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4f46e5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        </div>
      </div>
    ))
  }

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#4f46e5]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4f46e5]/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-5xl mx-auto">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-[#4f46e5] bg-clip-text text-transparent leading-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium max-w-3xl mx-auto mb-8">
            Find answers to common questions about our services and get the help you need to grow your career and
            knowledge.
          </p>
          {/* Decorative line */}
          <div className="flex items-center justify-center">
            <div className="w-20 h-1 bg-[#4f46e5] rounded-full" />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="flex justify-center items-center mb-16">
          <div className="w-full max-w-4xl space-y-6">{getItems()}</div>
        </div>

        {/* Premium CTA Button */}
        <div className="text-center">
          <Link href="/faqs">
            <button className="group relative inline-flex items-center px-8 py-4 bg-[#4f46e5] hover:bg-[#1d4ed8] text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#4f46e5]/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
              {/* Button background animation */}
              <div className="absolute inset-0 bg-[#1d4ed8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                <FaQuestionCircle className="text-sm" />
                View All FAQs
                <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </Link>
          <p className="text-gray-500 text-sm mt-4">Still have questions? We're here to help!</p>
        </div>
      </div>
    </section>
  )
}

export default Faq
