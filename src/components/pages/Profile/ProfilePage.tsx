"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiEdit, FiLock, FiArrowLeftCircle, FiHome } from "react-icons/fi";
import { useLoggedUserQuery, useUpdateUserMutation } from "@/redux/api/userApi";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import Spinner from "@/components/UI/Spinner";
import { ShowToast } from "@/components/UI/ShowToast";
import toast, { Toaster } from "react-hot-toast";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [updateUser] = useUpdateUserMutation();

  const { data, isLoading, error } = useLoggedUserQuery(undefined);
  const user = data?.data;

  const onSubmit = async (values: any) => {
    // Check if the form values are unchanged from the default values
    if (
      values.fName === defaultValues.fName &&
      values.lName === defaultValues.lName &&
      values.email === defaultValues.email &&
      values.contactNo === defaultValues.contactNo
    ) {
      setEditMode(false);
      return;
    }

    const toastId = toast.loading("Updating...");
    try {
      setLoading(true);
      const res: any = await updateUser({ id: user?.id, body: values }).unwrap();
      if (res && res?.data) {
        ShowToast({
          message: res?.message,
        });
      }
      setEditMode(false);
    } catch (err: any) {
      setEditMode(false);
      toast.error(err?.data);
    } finally {
      setLoading(false);
      toast.dismiss(toastId);
    }
  };

  if (isLoading) {
    return <p>Loading profile...</p>;
  }

  if (error || !user) {
    return <p>Failed to load profile data.</p>;
  }

  const defaultValues = {
    fName: user?.fName || "",
    lName: user?.lName || "",
    email: user?.email || "",
    contactNo: user?.contactNo || "",
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
            <div className="flex space-x-4">
              <button className="text-gray-500 hover:text-blue-500">
                <FiHome className="h-6 w-6" />
              </button>
              <button className="text-gray-500 hover:text-blue-500">
                <FiArrowLeftCircle className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 overflow-hidden rounded-full border-4 border-indigo-500">
              <Image
                src={user.profileImg[user.profileImg.length - 1]}
                alt="User Profile"
                width={110}
                height={110}
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <div>
            {editMode ? (
              <>
                <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                  <FormInput name="fName" label="First Name" type="text" />
                  <FormInput name="lName" label="Last Name" type="text" />
                  <FormInput name="email" label="Email" type="email" />
                  <FormInput name="contactNo" label="Phone Number" type="number" />
                  <div className="mb-6">
                    <button
                      type="submit"
                      className={`w-full flex justify-center items-center bg-indigo-600  text-white p-3 rounded-lg font-semibold cursor-pointer hover:bg-white  border border-indigo-600 hover:text-indigo-600 ${
                        loading
                          ? "w-full opacity-50 cursor-not-allowed inline-flex justify-center items-center"
                          : ""
                      }`}
                      disabled={loading}
                    >
                      {loading ? <Spinner /> : "Save Changes"}
                    </button>
                  </div>
                </Form>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800">{`${user.fName} ${user.lName}`}</h3>
                <p className="text-gray-500">{user.email}</p>
                <p className="text-gray-500">{user.contactNo}</p>
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-around">
            <button
              className="flex items-center text-indigo-600 hover:text-indigo-500"
              onClick={() => setEditMode(!editMode)}
            >
              <FiEdit className="mr-2" />
              Edit Profile
            </button>

            <button className="flex items-center text-indigo-600 hover:text-indigo-500">
              <FiLock className="mr-2" />
              Change Password
            </button>

            <button className="flex items-center text-red-500 hover:text-red-700">
              <FiLock className="mr-2" />
              Forget Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
