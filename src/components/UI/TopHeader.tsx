"use client";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi"; // Importing icons from react-icons
import logo from "../../../public/assets/home (3).png";
import Image from "next/image";
import Link from "next/link";
import { useLoggedUserQuery } from "@/redux/api/userApi";
import { LuPhoneCall } from "react-icons/lu";

const TopHeader = () => {
  const { data, isLoading } = useLoggedUserQuery(undefined);
  const user = data?.data;

  return (
    <div className="mx-auto px-6 md:px-[6rem]">
      <div className="max-w-7xl py-4 md:mx-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-8 mt-2">
              <Image src={logo} alt="Logo" height={250} width={250} />
            </div>
          </div>
          <div className="flex items-center space-x-14">
            <div className=" text-gray-600 flex items-center">
              <span>
                {" "}
                <LuPhoneCall className="mr-3 text-blue-600" size={24} />
              </span>
              <div>
                <h3 className="text-md font-semibold">Get Support</h3>

                <p className="text-sm">310-437-2766</p>
              </div>
            </div>

            {user ? (
              <div className="flex items-center space-x-3 relative">
                <Link href="/profile">
                  <Image
                    src={user?.profileImg[0]}
                    alt="User Image"
                    className="rounded-full shadow-md transform hover:scale-105 transition-transform duration-200"
                    height={40}
                    width={40}
                  />
                </Link>
                <div>
                  <div className="text-left">
                    <p className="text-sm font-medium m-0">{`${user?.fName} ${user?.lName}`}</p>
                  </div>
                </div>
              </div>
            ) : (
              <Link href="/login">
                <button className="flex items-center px-3 py-2 bg-[#4c40ed] text-white rounded-md shadow-md hover:bg-white border border-[#4c40ed] hover:text-[#4c40ed] text-md font-semibold">
                  <FiLogIn className="mr-2" />
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
