"use client"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#2563eb]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative mx-auto px-6 md:px-[3rem] py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info Section */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="group">
                {/* Logo */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-[#2563eb] to-blue-400 bg-clip-text text-transparent">
                    Home <span className="text-gray-900">Crafter</span>
                  </h1>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#2563eb] to-blue-400 rounded-full mt-2 group-hover:w-24 transition-all duration-300" />
                </div>

                <div className="mt-6">
                  <p className="text-gray-600 text-base leading-relaxed">
                    We are dedicated to providing the best house repair and renovation services. Quality service and
                    client satisfaction are our top priorities.
                  </p>
                </div>

                {/* Newsletter Signup */}
                <div className="mt-8">
                  <h3 className="text-gray-900 font-semibold mb-4">Stay Updated</h3>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#2563eb] focus:bg-white transition-all duration-300"
                    />
                    <button className="px-6 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-r-lg transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="footer-widget">
                <h2 className="text-xl mb-6 font-bold text-gray-900 relative">
                  Quick Links
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#2563eb] rounded-full" />
                </h2>
                <ul className="space-y-4">
                  {[
                    { name: "About Us", href: "about-us.html" },
                    { name: "Our Services", href: "services.html" },
                    { name: "Blogs", href: "blog-grid.html" },
                    { name: "Contact Us", href: "contact-us.html" },
                    { name: "Become a Professional", href: "provider-signup.html" },
                    { name: "Become a User", href: "user-signup.html" },
                  ].map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-[#2563eb] transition-all duration-300 flex items-center group"
                      >
                        <span className="w-2 h-2 bg-[#2563eb] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="footer-widget">
                <h2 className="text-xl mb-6 font-bold text-gray-900 relative">
                  Contact Us
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#2563eb] rounded-full" />
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: FaMapMarkerAlt, text: "Muradpur, Chittagong (Bangladesh)", color: "text-red-500" },
                    { icon: FaPhone, text: "+88 01858832211", color: "text-green-500" },
                    { icon: FaEnvelope, text: "mikatsyed@gmail.com", color: "text-[#2563eb]" },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div
                        className={`flex-shrink-0 w-10 h-10 ${contact.color} bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300 shadow-sm`}
                      >
                        <contact.icon className="text-sm" />
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                        {contact.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h3 className="text-gray-900 font-semibold mb-2">Business Hours</h3>
                  <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600 text-sm">Sat - Sun: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="footer-widget">
                <h2 className="text-xl mb-6 font-bold text-gray-900 relative">
                  Follow Us
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#2563eb] rounded-full" />
                </h2>

                {/* Social Media Icons */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    {
                      icon: FaFacebook,
                      href: "https://web.facebook.com/syedmilka.cricket/",
                      color: "hover:bg-blue-600",
                    },
                    { icon: FaTwitter, href: "#", color: "hover:bg-sky-500" },
                    { icon: FaInstagram, href: "#", color: "hover:bg-pink-600" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/mikat-syed/", color: "hover:bg-blue-700" },
                    { icon: FaYoutube, href: "#", color: "hover:bg-red-600" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    >
                      <social.icon className="text-lg" />
                    </a>
                  ))}
                </div>

                {/* Awards/Certifications */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h3 className="text-gray-900 font-semibold mb-3">Certifications</h3>
                  <div className="flex space-x-3">
                    <div className="w-12 h-12 bg-[#2563eb]/10 border border-[#2563eb]/20 rounded-lg flex items-center justify-center">
                      <span className="text-[#2563eb] font-bold text-xs">ISO</span>
                    </div>
                    <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold text-xs">ECO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom mt-20 pt-8 border-t border-gray-200">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between">
              <div className="text-center md:text-left text-gray-600">
                <p className="mb-0">
                  &copy; 2024 All Rights Reserved by{" "}
                  <span className="text-[#2563eb] font-semibold">@Syed Gaziul Haque</span>.
                </p>
              </div>

              {/* Payment Methods */}
              <div className="flex justify-center mt-4 md:mt-0">
                <div className="flex space-x-3">
                  {["Visa", "Mastercard", "SSL"].map((payment, index) => (
                    <div
                      key={index}
                      className="w-12 h-8 bg-gray-50 border border-gray-200 rounded flex items-center justify-center shadow-sm"
                    >
                      <span className="text-gray-600 text-xs font-semibold">{payment}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center md:text-right text-gray-600 mt-4 md:mt-0">
                <ul className="flex space-x-6">
                  <li>
                    <a href="privacy-policy.html" className="hover:text-[#2563eb] transition-colors duration-300">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="terms-condition.html" className="hover:text-[#2563eb] transition-colors duration-300">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
        >
          <FaArrowUp className="text-sm" />
        </button>
      </div>
    </footer>
  )
}

export default Footer
