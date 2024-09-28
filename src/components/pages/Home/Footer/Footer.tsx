import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../../../../../public/assets/home (5).png';

const Footer = () => {
  return (
    <footer className="mx-auto px-6 md:px-[6rem] py-14 bg-[#f8fcfd]">
      <div>
        <div className=" mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
         
            <div className="md:col-span-1 lg:col-span-1">
              <div className=''>
              <div className="flex items-center justify-center space-x-3 ml-[-30px]">
  <div className="p-2 bg-indigo-600 rounded-full text-white">
    <Image src="/assets/logo.png" alt="Logo" height={40} width={40} className="p-1"/>
  </div>
  <h1 className="text-2xl font-bold text-indigo-700">
    Home <span className="text-gray-900">Crafter</span>
  </h1>
</div>

                <div className="mt-4">
                  <p className="text-gray-600 text-sm">
                    We are dedicated to providing the best house repair and renovation services. Quality service and client satisfaction are our top priorities.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="footer-widget">
                <h2 className="footer-title text-lg mb-4 font-semibold text-indigo-900">Quick Links</h2>
                <ul className="space-y-2">
                  <li><a href="about-us.html" className="hover:text-indigo-500 transition">About Us</a></li>
                  <li><a href="blog-grid.html" className="hover:text-indigo-500 transition">Blogs</a></li>
                  <li><a href="contact-us.html" className="hover:text-indigo-500 transition">Contact Us</a></li>
                  <li><a href="provider-signup.html" className="hover:text-indigo-500 transition">Become a Professional</a></li>
                  <li><a href="user-signup.html" className="hover:text-indigo-500 transition">Become a User</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="footer-widget">
                <h2 className="footer-title text-lg mb-4 font-semibold text-indigo-900">Contact Us</h2>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span><i className="feather-map-pin mr-2"></i></span> 367 Hillcrest Lane, Irvine, California, United States</p>
                  <p><span><i className="feather-phone mr-2"></i></span> +1 (321) 546 8764</p>
                  <p><span><i className="feather-mail mr-2"></i></span> support@homecrafter.com</p>
                </div>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="footer-widget">
                <h2 className="footer-title text-lg mb-4 font-semibold text-indigo-900">Follow Us</h2>
                <div className="flex space-x-4 mb-6 text-indigo-700">
                  <a href="https://www.facebook.com" className="hover:text-indigo-500 transition"><FaFacebook className="text-2xl" /></a>
                  <a href="https://www.twitter.com" className="hover:text-indigo-500 transition"><FaTwitter className="text-2xl" /></a>
                  <a href="https://www.instagram.com" className="hover:text-indigo-500 transition"><FaInstagram className="text-2xl" /></a>
                  <a href="https://www.linkedin.com" className="hover:text-indigo-500 transition"><FaLinkedin className="text-2xl" /></a>
                  <a href="https://www.youtube.com" className="hover:text-indigo-500 transition"><FaYoutube className="text-2xl" /></a>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom mt-16 border-t border-gray-300 py-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="text-center md:text-left text-sm text-gray-600">
              <p className="mb-0">&copy;All Rights Reserved by @Mikat Syed.</p>
            </div>
            <div className="flex justify-center mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li><a href="#"><img src="assets/img/payment/visa.png" alt="Visa" className="h-8" /></a></li>
                <li><a href="#"><img src="assets/img/payment/mastercard.png" alt="Mastercard" className="h-8" /></a></li>
                <li><a href="#"><img src="assets/img/payment/stripe.png" alt="Stripe" className="h-8" /></a></li>
                <li><a href="#"><img src="assets/img/payment/discover.png" alt="Discover" className="h-8" /></a></li>
              </ul>
            </div>
            <div className="text-center md:text-right text-sm text-gray-600 mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li><a href="privacy-policy.html" className="hover:text-indigo-500 transition">Privacy Policy</a></li>
                <li><a href="terms-condition.html" className="hover:text-indigo-500 transition">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
