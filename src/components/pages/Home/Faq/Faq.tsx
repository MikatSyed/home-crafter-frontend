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
        className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 backdrop-blur-sm mb-6 hover:-translate-y-1"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-[#2563eb]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Question Header */}
        <div
          className="relative flex justify-between items-center p-6 md:p-8 cursor-pointer bg-gradient-to-r from-gray-50 to-gray-100/50 group-hover:from-blue-50 group-hover:to-[#2563eb]/10 transition-all duration-500"
          onClick={() => togglePanel(faq.id)}
        >
          <div className="flex items-start gap-4 flex-1">
            <div className="flex-shrink-0 w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-[#2563eb]/25 transition-all duration-300">
              <FaQuestionCircle className="text-white text-sm" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg md:text-xl text-gray-900 leading-tight group-hover:text-[#2563eb] transition-all duration-300">
                {faq.question}
              </h3>
              <p className="text-sm text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to {activePanel === faq.id ? "collapse" : "expand"} answer
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 ml-4">
            <div
              className={`w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center transform transition-all duration-500 group-hover:shadow-lg group-hover:bg-[#2563eb] ${activePanel === faq.id ? "rotate-180 bg-[#2563eb]" : ""}`}
            >
              <FaChevronDown
                className={`text-sm transition-colors duration-300 ${activePanel === faq.id ? "text-white" : "text-gray-600 group-hover:text-white"}`}
              />
            </div>
          </div>
        </div>

        {/* Answer Content with smooth animation */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${activePanel === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="relative p-6 md:p-8 pt-0 bg-white">
            {/* Decorative line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">{faq.answer}</p>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2563eb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        </div>
      </div>
    ))
  }

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-16 bg-gradient-to-br from-gray-50 via-white to-[#2563eb]/5 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#2563eb]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2563eb]/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 mb-6 shadow-lg">
            <FaQuestionCircle className="text-[#2563eb]" />
            <span className="text-sm font-semibold text-gray-700">FAQ Section</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#1f54dd] to-[#1a4bc4] bg-clip-text text-transparent leading-tight mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            Find answers to common questions about our services and get the help you need to grow your career and
            knowledge.
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8">
            <div className="w-24 h-1 bg-[#2563eb] rounded-full" />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl space-y-2">{getItems()}</div>
        </div>

        {/* Premium CTA Button */}
        <div className="text-center mt-12">
          <Link href="/faqs">
            <button className="group relative inline-flex items-center px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#2563eb]/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
              {/* Button background animation */}
              <div className="absolute inset-0 bg-[#1d4ed8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="relative flex items-center gap-3">
                <FaQuestionCircle className="text-xl" />
                View All FAQs
                <FaArrowRight className="text-lg transform group-hover:translate-x-1 transition-transform duration-300" />
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
