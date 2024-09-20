"use client";

import { useLoggedUserQuery, useUpdateUserMutation } from "@/redux/api/userApi";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Loader from "./Loader";
import Link from "next/link";
import Image from "next/image";
import Camera from "../../../public/assets/photo.png";
import { useUpdateProviderMutation } from "@/redux/api/providerApi";
import toast, { Toaster } from "react-hot-toast";
import { TiTickOutline } from "react-icons/ti";

interface ProductImage {
  id: number;
  url: string;
}
const ProfilePage = () => {
  const { data, isLoading } = useLoggedUserQuery(undefined);
  const [images, setImages] = useState<ProductImage[]>([]);
  console.log(images[0]?.url);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const [updatedImage, setUpdatedImage] = useState("");
  const [loading, setLoading] = useState(false);

  const user = data?.data;
  const [updateUser] = useUpdateProviderMutation();

  const profileImg = user?.profileImg;
  const lastProfileImg =
    profileImg && profileImg?.length > 0
      ? profileImg[profileImg?.length - 1]
      : null;

  let counter = 0;

  const uniqueId = (): number => {
    counter += 1;
    return counter;
  };
  const createproductImagesChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let files: File[] = Array.from(e.target.files || []);
    const newImages: ProductImage[] = [];
    const newImagePreviews: string[] = [];

    files.forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          const imagePreviewUrl = reader.result as string;
          newImagePreviews.push(imagePreviewUrl);
          newImages.push({
            id: uniqueId(),
            url: imagePreviewUrl,
          });

          if (newImages?.length === files?.length) {
            setImages(newImages);
            setImagesPreview(newImagePreviews);
            setUpdatedImage(newImagePreviews[0]);

            // Call updateUser only after image states are fully updated
            updateUserImage(newImages[0]?.url);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const updateUserImage = async (imageUrl: string) => {
    if (!imageUrl) return;

    // Show the loading toast and store the toastId
    const toastId = toast.loading("Uploading image...");

    try {
      const res = await updateUser({
        id: user?.id,
        body: { profileImg: imageUrl },
      });
      console.log("Image update response:", res);

      // Show a success message
      toast.success("Photo Updated Successfully", {
        icon: (
          <span style={{ marginRight: -8, fontSize: 22 }}>
            <TiTickOutline />
          </span>
        ),
        style: {
          borderRadius: "10px",
          background: "#4f46e5",
          color: "#fff",
        },
        duration: 2000,
      });
    } catch (error) {
      console.error("Error updating image:", error);

      // Show an error message
      toast.error("Failed to upload image. Please try again.", {
        id: toastId, // Use toastId to update the existing loading toast
      });
    } finally {
      // Dismiss the loading toast
      toast.dismiss(toastId);
    }
  };

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
                    <div className="relative">
                      <div className="change-container rounded-full cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full"></div>
                      <div className="w-[140px] h-[140px] rounded-full overflow-hidden relative mt-24 ml-[-35px]">
                        {/* <img
                          className="w-full h-full object-cover rounded-full"
                          src={user?.profileImg[0] || 'https://via.placeholder.com/150'}
                          alt="profile-img"
                        /> */}
                        {user && (
                          <div className="user-info">
                            <div
                              style={{
                                position: "relative",
                                width: "130px",
                                height: "130px",
                              }}
                            >
                              <div
                                style={{
                                  width: "130px",
                                  height: "130px",
                                  backgroundImage: `url(${
                                    updatedImage || lastProfileImg
                                  })`, // Set the background image
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  borderRadius: "50%",
                                }}
                              ></div>
                              {/* Input file */}
                              <input
                                accept="image/*"
                                multiple
                                type="file"
                                name="avatar"
                                onChange={createproductImagesChange}
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  opacity: 0,
                                  cursor: "pointer",
                                }}
                              />
                              <div
                                style={{
                                  marginTop: "-7rem",
                                  marginLeft: "6rem",
                                }}
                              >
                                <Image
                                  src={Camera}
                                  alt="camera"
                                  height={30}
                                  width={30}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
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
              {/* Name */}
              <div className="mt-[-55px] ml-[150px] mb-12">
                <p className="hidden md:block  text-2xl text-gray-900 font-semibold">{`${user?.fName} ${user?.lName}`}</p>
                <div className="block md:hidden flex items-center justify-between">
                  <p className="text-2xl text-gray-900 font-semibold">{`${user?.fName} ${user?.lName}`}</p>
                  <Link href={`/profile/edit/${user?.id}`}>
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
           {user?.role === 'Provider' &&      <div className="border-b border-gray-300 pb-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Category
                  </h3>
                  <p className="text-md text-gray-700 leading-relaxed">
                    {user?.category?.categoryName}
                  </p>
                </div>}

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
                <Link href={`/profile/edit/${user?.id}`}>
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

export default ProfilePage;
