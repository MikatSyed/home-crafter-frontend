import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../../../public/assets/home (5).png';

const Footer = () => {
  return (
    <footer className="mx-auto px-6 md:px-[7rem] py-14 bg-[#f8fcfd] text-gray-900">
      <div className="footer-top">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="footer-widget">
                <div className="mt-[-80px]">
                  <a href="index.html">
                    <Image src={logo} alt="logo" height={200} width={200} />
                  </a>
                </div>
                <div className="footer-content mt-[-20px]">
                  <p>Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor commodo consequat.</p>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title text-lg mb-4 text-black">Quick Links</h2>
                <ul>
                  <li><a href="about-us.html" className="hover:text-gray-400">About Us</a></li>
                  <li><a href="blog-grid.html" className="hover:text-gray-400">Blogs</a></li>
                  <li><a href="contact-us.html" className="hover:text-gray-400">Contact Us</a></li>
                  <li><a href="provider-signup.html" className="hover:text-gray-400">Become a Professional</a></li>
                  <li><a href="user-signup.html" className="hover:text-gray-400">Become a User</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="footer-widget footer-contact">
                <h2 className="footer-title text-lg mb-4 text-black">Contact Us</h2>
                <div className="footer-contact-info">
                  <div className="footer-address mb-2">
                    <p><span><i className="feather-map-pin mr-2"></i></span> 367 Hillcrest Lane, Irvine, California, United States</p>
                  </div>
                  <p><span><i className="feather-phone mr-2"></i></span> 321 546 8764</p>
                  <p className="mb-0"><span><i className="feather-mail mr-2"></i></span> truelysell@example.com</p>
                </div>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="footer-widget">
                <h2 className="footer-title text-lg mb-4 text-black">Follow Us</h2>
                <div className="social-icon mb-4">
                  <ul className="flex space-x-4">
                    <li><a href="https://www.facebook.com" className="text-xl text-gray-900 hover:text-gray-400"><FaFacebook /></a></li>
                    <li><a href="https://www.twitter.com" className="text-xl text-gray-900 hover:text-gray-400"><FaTwitter /></a></li>
                    <li><a href="https://www.instagram.com" className="text-xl text-gray-900 hover:text-gray-400"><FaInstagram /></a></li>
                    <li><a href="https://www.linkedin.com" className="text-xl text-gray-900 hover:text-gray-400"><FaLinkedin /></a></li>
                    <li><a href="https://www.youtube.com" className="text-xl text-gray-900 hover:text-gray-400"><FaYoutube /></a></li>
                  </ul>
                </div>
                <h2 className="footer-subtitle text-lg mb-2 text-black">Newsletter Signup</h2>
                <div className="subscribe-form flex">
                  <input type="email" className="form-control p-2 flex-grow rounded-l-md bg-gray-200 text-gray-900" placeholder="Enter Email Address" />
                  <button type="submit" className="btn footer-btn p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
                    <i className="feather-send"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom mt-12">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-700 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="text-center md:text-left">
                <p className="mb-0">&copy; 2024. All Rights Reserved. @Mikat Syed</p>
              </div>
              <div className="payment-image text-center">
                <ul className="flex justify-center space-x-4">
                  <li><a href="javascript:void(0);"><img src="assets/img/payment/visa.png" alt="Visa" className="h-8" /></a></li>
                  <li><a href="javascript:void(0);"><img src="assets/img/payment/mastercard.png" alt="Mastercard" className="h-8" /></a></li>
                  <li><a href="javascript:void(0);"><img src="assets/img/payment/stripe.png" alt="Stripe" className="h-8" /></a></li>
                  <li><a href="javascript:void(0);"><img src="assets/img/payment/discover.png" alt="Discover" className="h-8" /></a></li>
                </ul>
              </div>
              <div className="text-center md:text-right">
                <ul className="flex justify-center md:justify-end space-x-4">
                  <li><a href="privacy-policy.html" className="hover:text-gray-400">Privacy Policy</a></li>
                  <li><a href="terms-condition.html" className="hover:text-gray-400">Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
