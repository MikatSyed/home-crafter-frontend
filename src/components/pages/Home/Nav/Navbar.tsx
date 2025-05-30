"use client"
import { FiLogIn } from "react-icons/fi"
import {
  FaSignOutAlt,
  FaUser,
  FaCalendarCheck,
  FaHeart,
  FaTachometerAlt,
  FaShieldAlt,
  FaStar,
  FaHome,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaGlobe,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronDown,
  FaHeadphones,
} from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { usePathname } from "next/navigation"


const Navbar = () => {
  const pathname = usePathname()
  // Mock data for demonstration
  const data = { data: null } // Replace with actual useLoggedUserQuery
  const favouriteServices: any[] = [] // Replace with actual useAppSelector

  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const profileButtonRef = useRef<HTMLButtonElement>(null)
  const profileMenuRef = useRef<HTMLDivElement>(null)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100) // Hide header after scrolling 100px
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const toggleProfileMenu = () => setIsProfileOpen((prev) => !prev)
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev)

  const handleSignOut = async () => {
    // await signOut()
    setIsProfileOpen(false)
  }

  const user:any = data?.data
  const userRole = user?.role
  const isHomePage = pathname === "/"

  const profileDropdownItems =
    userRole === "User"
      ? [
          { title: "Profile", href: "/profile/", icon: <FaUser /> },
          { title: "My Bookings", href: "/booking", icon: <FaCalendarCheck /> },
          { title: "Saved Services", href: "/favourites", icon: <FaHeart /> },
          { title: "Logout", action: handleSignOut, icon: <FaSignOutAlt /> },
        ]
      : [
          {
            title: "Dashboard",
            href: userRole === "Admin" ? "/admin/dashboard" : "/provider/dashboard",
            icon: <FaTachometerAlt />,
          },
          {
            title: "Profile",
            href: userRole === "Admin" ? "/admin/profile" : "/provider/profile",
            icon: <FaUser />,
          },
          { title: "Logout", action: handleSignOut, icon: <FaSignOutAlt /> },
        ]

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Providers", href: "/providers" },
    { title: "Blog", href: "/blogs" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ]

  // Dynamic styling based on page and scroll state
  const getNavbarStyles = () => {
    if (isHomePage) {
      return isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
    }
    return "bg-white shadow-sm border-b border-gray-100"
  }

  const getTextColor = (isActive = false) => {
    if (isHomePage && !isScrolled) {
      return isActive ? "text-white" : "text-white hover:text-white"
    }
    return isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
  }

  const getLogoStyles = () => {
    if (isHomePage && !isScrolled) {
      return {
        container: "bg-white/20 backdrop-blur-sm",
        icon: "text-white",
        title: "text-white",
        subtitle: "text-[#1f54dd]",
        description: "text-gray-200",
      }
    }
    return {
      container: "bg-gradient-to-br from-blue-600 to-blue-700",
      icon: "text-white",
      title: "text-gray-900",
      subtitle: "text-blue-600",
      description: "text-gray-500",
    }
  }

  const logoStyles = getLogoStyles()

  return (
    <>
   
     {isHomePage &&  <div
        className={`hidden lg:block bg-[#1f54dd] text-white py-2.5 transition-all duration-500 ${
          isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
        style={{
          position: isHomePage ? "fixed" : "relative",
          top: isHomePage ? "" : "",
          left: 0,
          right: 0,
          zIndex: 59,
        }}
      >
        <div className="max-w-8xl mx-auto md:px-[3rem] px-6">
      <div className="flex items-center justify-between text-sm py-2">
        {/* Trust badges */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaShieldAlt className="h-4 w-4" />
            <span>Licensed &amp; Insured</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaStar className="h-4 w-4 text-yellow-300" />
            <span>5-Star Rated Service</span>
          </div>
        </div>

        {/* Contact info + social icons */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="h-4 w-4" />
            <span>info@yourdomain.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock className="h-4 w-4" />
            <span>Mon–Sat: 9 AM – 6 PM</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com/yourpage" aria-label="Facebook" className="hover:text-gray-600">
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a href="https://twitter.com/yourprofile" aria-label="Twitter" className="hover:text-gray-600">
              <FaTwitter className="h-4 w-4" />
            </a>
            <a href="https://instagram.com/yourprofile" aria-label="Instagram" className="hover:text-gray-600">
              <FaInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="flex items-center space-x-2 text-right">
          <FaMapMarkerAlt className="h-4 w-4" />
          <span>123 Main St, Springfield, IL 62704</span>
        </div>
      </div>
    </div>
        
      </div>}

      {/* Main Navigation Bar */}
      <nav
        className={`${
          isHomePage ? "fixed left-0 right-0" : "sticky top-0"
        } z-50 transition-all duration-500 ${getNavbarStyles()}`}
        style={{
          top: isHomePage ? (isScrolled ? "0" : "60px") : "0",
        }}
      >
        <div className="max-w-8xl px-6 md:px-[3rem]">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="group">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 ${logoStyles.container} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform`}
                  >
                    <FaHome className={`h-6 w-6 ${logoStyles.icon}`} />
                  </div>
                  <div className="hidden sm:block">
                    <h1 className={`text-2xl font-bold ${logoStyles.title}`}>
                      HOME <span className={logoStyles.subtitle}>CRAFTER</span>
                    </h1>
                    <p className={`text-xs font-medium -mt-0.5 ${logoStyles.description}`}>Home Services</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex flex-1 justify-center items-center">
              <nav className="mx-auto">
                <ul className="flex space-x-4">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`px-3 py-2 text-base font-medium transition-colors relative group ${getTextColor(
                          pathname === item.href,
                        )}`}
                      >
                        {item.title}
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 ${
                            isHomePage && !isScrolled ? "bg-white " : "bg-blue-600"
                          } transform transition-transform duration-200 ${
                            pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Favorites - Only show if there are items */}
              {favouriteServices.length > 0 && (
                <button
                  onClick={toggleSidebar}
                  className={`relative p-2 rounded-lg transition-colors ${
                    isHomePage && !isScrolled ? "hover:bg-white/10" : "hover:bg-gray-50"
                  }`}
                >
                  <FaHeart className={`text-xl ${isHomePage && !isScrolled ? "text-white" : "text-blue-600"}`} />
                  <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {favouriteServices.length}
                  </span>
                </button>
              )}

              {/* User Profile or Login */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={toggleProfileMenu}
                    ref={profileButtonRef}
                    className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                      isHomePage && !isScrolled ? "hover:bg-white/10" : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-10 h-10 overflow-hidden rounded-full ring-2 ring-gray-200">
                      <Image
                        src={user?.profileImg?.[0] || "/placeholder.svg?height=40&width=40"}
                        alt="Profile"
                        height={40}
                        width={40}
                        className="object-cover"
                      />
                    </div>
                    <span
                      className={`hidden lg:block text-sm font-medium ${
                        isHomePage && !isScrolled ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {user?.fName}
                    </span>
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileOpen && (
                    <div
                      ref={profileMenuRef}
                      className="absolute top-14 right-0 w-56 bg-white border border-gray-200 rounded-lg shadow-sm z-50 py-2"
                    >
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{`${user?.fName} ${user?.lName}`}</p>
                        <p className="text-xs text-gray-500 capitalize">{userRole?.toLowerCase()}</p>
                      </div>
                      {profileDropdownItems.map((item, idx) => (
                        <div key={idx}>
                          {item.href ? (
                            <Link href={item.href}>
                              <div
                                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                                onClick={() => setIsProfileOpen(false)}
                              >
                                <span className="mr-3 text-gray-400">{item?.icon}</span>
                                {item.title}
                              </div>
                            </Link>
                          ) : (
                            <div
                              className="flex items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                              onClick={item.action}
                            >
                              <span className="mr-3">{item?.icon}</span>
                              {item.title}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/login">
                  <button
                    className={`flex items-center px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isHomePage && !isScrolled
                        ? "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    <FiLogIn className="mr-2 h-4 w-4" />
                    <span>Login</span>
                  </button>
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isHomePage && !isScrolled ? "hover:bg-white/10" : "hover:bg-gray-50"
                }`}
              >
                {mobileMenuOpen ? (
                  <FaTimes className={`h-5 w-5 ${isHomePage && !isScrolled ? "text-white" : "text-gray-700"}`} />
                ) : (
                  <FaBars className={`h-5 w-5 ${isHomePage && !isScrolled ? "text-white" : "text-gray-700"}`} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden border-t shadow-sm transition-all duration-300 ${
              isHomePage && !isScrolled ? "border-white/20 bg-black/20 backdrop-blur-md" : "border-gray-100 bg-white"
            }`}
          >
            <div className="px-6 py-4 space-y-3">
              {/* Mobile Navigation */}
              <nav className="space-y-1">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      pathname === item.href
                        ? isHomePage && !isScrolled
                          ? "text-blue-200 bg-white/10"
                          : "text-blue-600 bg-blue-50"
                        : isHomePage && !isScrolled
                          ? "text-white hover:text-blue-200 hover:bg-white/10"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>

              {/* Mobile Favorites - Only show if there are items */}
              {favouriteServices.length > 0 && (
                <div className={`pt-3 border-t ${isHomePage && !isScrolled ? "border-white/20" : "border-gray-100"}`}>
                  <button
                    onClick={() => {
                      toggleSidebar()
                      setMobileMenuOpen(false)
                    }}
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                      isHomePage && !isScrolled
                        ? "bg-white/10 text-blue-200 hover:bg-white/20"
                        : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                    }`}
                  >
                    <FaHeart />
                    <span>Saved Services ({favouriteServices.length})</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
