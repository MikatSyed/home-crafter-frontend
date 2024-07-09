import BreadcrumbBar from '@/components/UI/BreadcrumbBar';
import React from 'react';

const BlogDetails = () => {
    return (
        <div>
          <BreadcrumbBar/>
          <div className="mx-auto px-6 md:px-[7rem] py-4">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="lg:w-2/3 w-full mb-8 lg:mb-0">
          <div className="mb-6">
            <ul className="flex space-x-2 mb-2">
              <li><span className="bg-blue-100 text-blue-500 px-2 py-1 rounded">Construction</span></li>
            </ul>
            <h3 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit amet, eiusmod tempor ut labore et dolore magna aliqua.</h3>
            <div className="flex items-center space-x-4 text-gray-500 mb-4">
              <span><i className="feather-calendar mr-1"></i>28 Sep 2023</span>
              <div className="flex items-center space-x-2">
                <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg" alt="Post Author" className="w-8 h-8 rounded-full" />
                <span>Admin</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <img className="w-full h-auto rounded-lg mb-4" src="https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-04.jpg" alt="Post Image" />
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              <p className="text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Tags</h4>
            <ul className="flex flex-wrap space-x-2">
              <li><a href="#" className=" bg-[#f8fcfd] text-gray-700 px-2 py-1 rounded">Construction</a></li>
              <li><a href="#" className="bg-[#f8fcfd] text-gray-700 px-2 py-1 rounded">Car Wash</a></li>
              <li><a href="#" className="bg-[#f8fcfd] text-gray-700 px-2 py-1 rounded">Appliance</a></li>
              <li><a href="#" className="bg-[#f8fcfd] text-gray-700 px-2 py-1 rounded">Interior</a></li>
              <li><a href="#" className="bg-[#f8fcfd] text-gray-700 px-2 py-1 rounded">Carpentry</a></li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Comments</h4>
            <ul className="space-y-4">
              <li>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg" className="w-12 h-12 rounded-full" alt="img" />
                    <div className="ml-4">
                      <h6 className="font-semibold">Dennis</h6>
                      <p className="text-sm text-gray-500">a week ago</p>
                    </div>
                    <a href="#" className="ml-auto text-blue-500"><i className="fas fa-reply mr-2"></i>Reply</a>
                  </div>
                  <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  {/* <form className="space-y-4">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                      <input type="text" className="w-full px-4 py-2 border rounded" placeholder="Name*" />
                      <input type="email" className="w-full px-4 py-2 border rounded" placeholder="Email*" />
                    </div>
                    <input type="text" className="w-full px-4 py-2 border rounded" placeholder="Website" />
                    <textarea rows="4" className="w-full px-4 py-2 border rounded" placeholder="Message*"></textarea>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">Send Message</button>
                  </form> */}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg" className="w-12 h-12 rounded-full" alt="img" />
                    <div className="ml-4">
                      <h6 className="font-semibold">Dennis</h6>
                      <p className="text-sm text-gray-500">a week ago</p>
                    </div>
                    <a href="#" className="ml-auto text-blue-500"><i className="fas fa-reply mr-2"></i>Reply</a>
                  </div>
                  <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  {/* <form className="space-y-4">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                      <input type="text" className="w-full px-4 py-2 border rounded" placeholder="Name*" />
                      <input type="email" className="w-full px-4 py-2 border rounded" placeholder="Email*" />
                    </div>
                    <input type="text" className="w-full px-4 py-2 border rounded" placeholder="Website" />
                    <textarea rows="4" className="w-full px-4 py-2 border rounded" placeholder="Message*"></textarea>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">Send Message</button>
                  </form> */}
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Write a Comment</h4>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input type="text" className="w-full px-4 py-2 border rounded" placeholder="Name*" />
                <input type="email" className="w-full px-4 py-2 border rounded" placeholder="Email*" />
              </div>
              <textarea rows="6" className="w-full px-4 py-2 border rounded" placeholder="Message*"></textarea>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">Post Comment</button>
            </form>
          </div>
        </div>

        <div className="lg:w-1/3 w-full lg:pl-8">
          <div className="mb-6">
            <form className="flex mb-4">
              <input type="text" placeholder="Search..." className="flex-grow px-4 py-2 border rounded-l" />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"><i className="fa fa-search"></i></button>
            </form>
          </div>

          <div className=" bg-[#f8fcfd] p-4 rounded-lg shadow-sm mb-6">
            <h4 className="text-lg font-semibold mb-4">About Me</h4>
            <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/profile.jpg" alt="User" className="w-full h-auto rounded mb-4" />
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">About Author</a>
          </div>

          <div className=" bg-[#f8fcfd] p-4 rounded-lg shadow-sm mb-6">
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:underline">Car Wash</a></li>
              <li><a href="#" className="text-gray-500 hover:underline">Plumbing</a></li>
              <li><a href="#" className="text-gray-500 hover:underline">Carpenter</a></li>
              <li><a href="#" className="text-gray-500 hover:underline">Computer Service</a></li>
            </ul>
          </div>

          <div className=" p-4 rounded-lg shadow-sm mb-6  bg-[#f8fcfd]">
            <h4 className="text-lg font-semibold mb-4">Latest News</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <img className="w-24 h-24 rounded-lg mr-4" src="https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-01.jpg" alt="Blog Image" />
                <div>
                  <p className="text-sm text-gray-500 mb-2">06 Nov 2023</p>
                  <h4 className="text-md font-semibold"><a href="#" className="=hover:underline">Lorem ipsum dolor amet, consectetur adipiscing elit. Amet.</a></h4>
                </div>
              </li>
              <li className="flex items-start">
                <img className="w-24 h-24 rounded-lg mr-4" src="https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-01.jpg" alt="Blog Image" />
                <div>
                  <p className="text-sm text-gray-500 mb-2">06 Nov 2023</p>
                  <h4 className="text-md font-semibold"><a href="#" className="=hover:underline">Lorem ipsum dolor amet, consectetur adipiscing elit. Amet.</a></h4>
                </div>
              </li>
              <li className="flex items-start">
                <img className="w-24 h-24 rounded-lg mr-4" src="https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-01.jpg" alt="Blog Image" />
                <div>
                  <p className="text-sm text-gray-500 mb-2">06 Nov 2023</p>
                  <h4 className="text-md font-semibold"><a href="#" className="=hover:underline">Lorem ipsum dolor amet, consectetur adipiscing elit. Amet.</a></h4>
                </div>
              </li>
              {/* Add more posts similarly */}
            </ul>
          </div>

          <div className=" bg-[#f8fcfd] p-4 rounded-lg shadow-sm mb-6">
            <h4 className="text-lg font-semibold mb-4">Tags</h4>
            <ul className="flex flex-wrap space-x-2">
              <li><a href="#" className="bg-white text-gray-700 px-2 py-1 rounded">Consulting</a></li>
              <li><a href="#" className="bg-white text-gray-700 px-2 py-1 rounded">Design</a></li>
              {/* Add more tags similarly */}
            </ul>
          </div>

          <div className=" bg-[#f8fcfd] p-4 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-4">Archives</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:underline">January 2023</a></li>
              {/* Add more archives similarly */}
            </ul>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default BlogDetails;