// import {
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaClock,
//   FaGlobe,
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaChevronDown,
//   FaHeadphones,
//   FaCalendarCheck,
// } from "react-icons/fa"

// export default function TopHeader() {
//   return (
//     <header className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-md">
//       {/* Top tier with social and language */}
//       <div className="container mx-auto px-4 py-1.5 border-b border-blue-500/30 hidden sm:block">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-4 text-xs">
//             <a href="#" className="hover:text-blue-100 transition-colors flex items-center gap-1">
//               <FaFacebookF className="w-3.5 h-3.5" />
//               <span className="hidden md:inline">Facebook</span>
//             </a>
//             <a href="#" className="hover:text-blue-100 transition-colors flex items-center gap-1">
//               <FaTwitter className="w-3.5 h-3.5" />
//               <span className="hidden md:inline">Twitter</span>
//             </a>
//             <a href="#" className="hover:text-blue-100 transition-colors flex items-center gap-1">
//               <FaInstagram className="w-3.5 h-3.5" />
//               <span className="hidden md:inline">Instagram</span>
//             </a>
//             <a href="#" className="hover:text-blue-100 transition-colors flex items-center gap-1">
//               <FaLinkedinIn className="w-3.5 h-3.5" />
//               <span className="hidden md:inline">LinkedIn</span>
//             </a>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-1 text-xs cursor-pointer hover:text-blue-100 transition-colors">
//               <FaGlobe className="w-3.5 h-3.5" />
//               <span>English</span>
//               <FaChevronDown className="w-3 h-3" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main header content */}
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           {/* Left side - Contact info */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row gap-3 md:gap-6 w-full md:w-auto">
//             <div className="flex items-center gap-2 text-sm">
//               <div className="bg-blue-800/30 p-1.5 rounded-full">
//                 <FaEnvelope className="w-4 h-4" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-xs text-blue-100">Email Us</span>
//                 <span className="font-medium">contact@company.com</span>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 text-sm">
//               <div className="bg-blue-800/30 p-1.5 rounded-full">
//                 <FaPhone className="w-4 h-4" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-xs text-blue-100">Call Us</span>
//                 <span className="font-medium">+1 (555) 123-4567</span>
//               </div>
//             </div>

//             <div className="hidden lg:flex items-center gap-2 text-sm">
//               <div className="bg-blue-800/30 p-1.5 rounded-full">
//                 <FaMapMarkerAlt className="w-4 h-4" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-xs text-blue-100">Location</span>
//                 <span className="font-medium">123 Business St, City</span>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 text-sm">
//               <div className="bg-blue-800/30 p-1.5 rounded-full">
//                 <FaClock className="w-4 h-4" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-xs text-blue-100">Working Hours</span>
//                 <span className="font-medium">Mon-Fri: 9AM-6PM EST</span>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Additional info */}
//           <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
//             <div className="flex items-center gap-2 text-sm">
//               <div className="bg-blue-800/30 p-1.5 rounded-full">
//                 <FaHeadphones className="w-4 h-4" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-xs text-blue-100">Customer Support</span>
//                 <span className="font-medium">24/7 Available</span>
//               </div>
//             </div>

//             <a
//               href="#"
//               className="bg-white text-blue-700 hover:bg-blue-50 transition-colors px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1.5 w-full sm:w-auto justify-center"
//             >
//               <FaCalendarCheck className="w-4 h-4" />
//               <span>Get a Quote</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }
