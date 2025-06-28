"use client";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

const HeroSearchInput = () => {
  return (
    <>
      <div className="bg-white p-2 rounded-lg shadow-xl flex items-center flex-wrap sm:my-4 my-8 sm:px-2 px-4 ">
        <input
          type="text"
          placeholder="What service do you need?"
          className="flex-grow px-3 py-2 sm:p-2 outline-none text-gray-700 sm:mb-2 mb-0"
        />
        <Link href="/services">
          <button className="bg-[#4f46e5] text-white px-6 py-2 sm:px-4 sm:py-2 rounded-md hover:bg-indigo-700 transition duration-300 w-full sm:w-auto">
            <FaSearch className="inline mr-2" />
            Search
          </button>
        </Link>
      </div>
    </>
  );
};

export default HeroSearchInput;
