"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useProvidersQuery } from "@/redux/api/providerApi";
import Image from "next/image";
import Rating from "@/components/UI/Rating";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

const TopProviders = () => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data using the useProvidersQuery hook
  const { data, isLoading } = useProvidersQuery(undefined);

  // Log the API data for debugging
  console.log(data?.data, "API Data");

  const providersPerPage = 8;

  // Use the providers data from the API or fall back to an empty array if undefined
  const providers = data?.data || [];

  // Calculate the displayed providers based on the current page and pathname
  const displayedProviders =
    pathname === "/"
      ? providers.slice(-4)
      : providers.slice(
          (currentPage - 1) * providersPerPage,
          currentPage * providersPerPage
        );
  console.log(displayedProviders, "29");
  // Calculate the total number of pages for pagination
  const totalPages = Math.ceil(providers.length / providersPerPage);
  console.log(totalPages, "32");
  return (
    <section className="mx-auto px-6 md:px-[6rem] bg-white py-14">
      <div className="container mx-auto px-6">
        {pathname !== "/providers" && (
          <div className="flex flex-wrap items-center mb-8">
            <div className="w-full mb-6 md:mb-0" data-aos="fade-up">
              <div>
                <h2 className="text-4xl font-bold ">Top Providers</h2>
                <p className="text-gray-400 mt-4">
                  Discover the best providers offering top-rated services for
                  all your needs.
                </p>
              </div>
            </div>
            {providers?.length > 4 && (
              <div className="w-full md:w-1/2 text-right" data-aos="fade-up">
                <Link
                  href="/providers"
                  className="inline-flex items-center bg-indigo-600 text-white px-5 py-3 rounded-full"
                >
                  View All
                  <i className="ml-2 feather-arrow-right-circle"></i>
                </Link>
              </div>
            )}
          </div>
        )}

        {isLoading ? (
          <p>Loading providers...</p>
        ) : displayedProviders.length === 0 ? (
          <div className="text-center mt-8">
            <p className="text-lg text-gray-500">
              No providers available at the moment.
            </p>
          </div>
        ) : (
          <>
            <div
              className="flex flex-wrap -mx-4"
              {...(pathname === "/" ? { "data-aos": "fade-up" } : {})}
            >
              {displayedProviders?.map((provider: any, index: number) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
                >
                  <div className="bg-white border rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="p-4">
                      <Image
                        src={provider?.profileImg[0]}
                        height={195}
                        width={220}
                        alt="Provider"
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </div>

                    <div className="px-4 pb-4 flex flex-col justify-between flex-1">
                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-semibold text-gray-800 flex items-center ">
                            <a
                              href={`/provider-details/${provider?.id}`}
                              className="hover:underline text-indigo-600"
                            >
                              {provider?.fName} {provider?.lName}
                            </a>
                            <FaCheckCircle className="text-green-500 ml-2" />
                          </h4>
                          <span className="text-gray-600 text-md">
                            {provider?.category?.categoryName}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-4">
                        <div className="flex items-center">
                          <FaStar className="text-yellow-500 h-[1.2em] w-[1.2em]" />
                          <span className="text-gray-500 ml-2">
                            ({provider?.totalReviews})
                          </span>
                        </div>
                        <Link href={`/provider-details/${provider.id}`}>
                          <button className="ml-4 text-white hover:text-indigo-600 py-2 px-4 rounded-full border border-indigo-600 bg-indigo-600 hover:bg-white  transition-colors duration-300">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show pagination only if there are providers */}
            {pathname === "/providers" && providers.length > 0 && (
              <div className="flex justify-center mt-8">
                <button
                  className={`inline-flex items-center px-4 py-2 mx-1 rounded-lg transition-colors ${
                    currentPage === 1
                      ? "text-gray-500 cursor-not-allowed text-sm"
                      : "text-gray-700 hover:from-blue-500 hover:to-blue-700 text-sm font-bold hover:text-[#4f46e5]"
                  }`}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <FiArrowLeft className="mr-1" /> PREV
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 mx-1 rounded-lg transition-colors ${
                      currentPage === index + 1
                        ? "bg-[#4f46e5] text-white"
                        : "bg-[#f8fcfd] border border-gray-300 text-gray-800 hover:bg-[#4f46e5] text-sm hover:text-white"
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  className={`inline-flex items-center px-4 py-2 mx-1 rounded-lg transition-colors ${
                    currentPage === totalPages
                      ? "text-gray-500 cursor-not-allowed text-sm"
                      : "text-gray-700 text-sm font-bold hover:text-[#4f46e5]"
                  }`}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  NEXT <FiArrowRight className="ml-1" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default TopProviders;
