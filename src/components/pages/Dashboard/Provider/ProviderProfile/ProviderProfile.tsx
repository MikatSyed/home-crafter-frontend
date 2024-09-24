"use client";

import { useLoggedUserQuery, useUpdateUserMutation } from "@/redux/api/userApi";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Camera from "../../../../../../public/assets/photo.png";
import { useUpdateProviderMutation } from "@/redux/api/providerApi";
import toast, { Toaster } from "react-hot-toast";
import { TiTickOutline } from "react-icons/ti";
import Loader from "@/components/UI/Loader";
import ProfileImageUpload from "@/components/UI/ProfileImageUpload";

interface ProductImage {
  id: number;
  url: string;
}
const ProviderProfilePage = () => {
  const { data, isLoading } = useLoggedUserQuery(undefined);
  const [images, setImages] = useState<ProductImage[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const [updatedImage, setUpdatedImage] = useState("");

  const user = data?.data;
  const [updateUser] = useUpdateProviderMutation();

  const latestProfileImg = user?.profileImg?.slice(-1)[0] || null;


  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white rounded-md mt-3">
        <div
          className="relative"
          style={{
            backgroundImage:
              'url("https://admin.fare.com.bd/assets/user-profile-cover-img-980af4bd.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "27vh",
          }}
        >
          <div className="relative rounded-md">
            <div className="">
              <div className="h-[220px] w-[220px]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="flex items-center justify-start relative flex-col gap-1 w-full h-full rounded-md">
                    <div className="relative top-20 right-5">
                     
                      <ProfileImageUpload
                        userId={user?.id}
                        currentImage={latestProfileImg}
                        onImageUpdated={(url) => setUpdatedImage(url)}
                        userRole={user?.role}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-lg ">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 pt-10">
            <div className="md:col-span-4 space-y-5">
              <div className="mt-[-55px] ml-[150px] mb-12">
                <p className="hidden md:block  text-2xl text-gray-900 font-semibold">{`${user?.fName} ${user?.lName}`}</p>
                <div className="block md:hidden flex items-center justify-between">
                  <p className="text-2xl text-gray-900 font-semibold">{`${user?.fName} ${user?.lName}`}</p>
                  <Link href={`/provider/profile/edit/${user?.id}`}>
                    <button className="text-gray-700">
                      <FaEdit size="1.5em" />
                    </button>
                  </Link>
                </div>
              </div>

              {user?.bio && (
                <div>
                  <p className="text-md text-gray-700 leading-relaxed">
                    {user.bio}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5">
                <div className="border-b border-gray-300 pb-5">
                  <h3 className="text-lg font-semibold text-gray-900">Role</h3>
                  <p className="text-md text-gray-700 leading-relaxed">
                    {user?.role}
                  </p>
                </div>
                <div className="border-b border-gray-300 pb-5">
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-md text-gray-700 leading-relaxed">
                    {user?.contactNo}
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-5">
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-md text-gray-700 leading-relaxed">
                    {user?.email}
                  </p>
                </div>
                <div className="border-b border-gray-300 pb-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Gender
                  </h3>
                  <p className="text-md text-gray-700 leading-relaxed">
                    {user?.gender}
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Date Of Birth
                  </h3>
                  <p className="text-md text-gray-700 leading-relaxed">
                    {new Date(user?.dob).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                {user?.role === "Provider" && (
                  <div className="border-b border-gray-300 pb-5">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Category
                    </h3>
                    <p className="text-md text-gray-700 leading-relaxed">
                      {user?.category?.categoryName}
                    </p>
                  </div>
                )}

                <div className="border-b border-gray-300 pb-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Address
                  </h3>
                  <p className="text-md text-gray-700 leading-relaxed">
                    {user?.address}
                  </p>
                </div>
                <div className="border-b border-gray-300 pb-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Date Of Join
                  </h3>
                  <p className="text-md text-gray-700 leading-relaxed">
                    {new Date(user?.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 lg:px-6 relative">
              <span className="absolute top-[-50px] right-10 hidden md:block">
                <Link href={`/provider/profile/edit/${user?.id}`}>
                  <button className="text-gray-700">
                    <FaEdit size="1.5em" />
                  </button>
                </Link>
              </span>

              <div className="bg-white ">
                <h3 className="text-lg font-bold mb-5">Account Settings</h3>
                <div>
                  <button className="mb-3 text-gray-700 hover:text-blue-600">
                    Change Password
                  </button>
                </div>
                <div>
                  <button className="text-gray-700 hover:text-blue-600">
                    Forgot Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfilePage;
