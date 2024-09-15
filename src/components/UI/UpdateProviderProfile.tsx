"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUpdateUserMutation, useUserByIdQuery } from "@/redux/api/userApi";
import Spinner from "@/components/UI/Spinner";
import FormSelectField from "../Forms/FormSelectField";
import { genderOptions } from "@/constants/global";
import FormDatePicker from "../Forms/FormDatePicker";
import CategoryField from "../Forms/CategoryField";
import FormTextArea from "../Forms/FormTextArea";


const UpdateProviderProfile = ({id}:any) => {
  console.log(id);
 
  const { data } = useUserByIdQuery(id);
  console.log(data)
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [updateUser] = useUpdateUserMutation();
  const [loading, setLoading] = useState<boolean>(false);

  const user = data?.data;

  const defaultValues = {
    fName: user?.fName || "",
    lName: user?.lName || "",
    email: user?.email || "",
    contactNo: user?.contactNo || "",
    gender: user?.gender || "",
    dob: user?.dob ? new Date(user?.dob) : null, 
    categoryId: user?.category?.id || "",
    bio: user?.bio || "",
    address: user?.address || "",
  };

  const onSubmit = async (values: any) => {
    try {
      setLoading(true);
      const res: any = await updateUser({ id, body: values }).unwrap();
      if (res && res?.data) {
        toast.success(res?.message, {
          style: {
            borderRadius: "10px",
            background: "#4f46e5",
            color: "#fff",
          },
          duration: 3000,
        });
      }
    } catch (err: any) {
      toast.error("Failed to update user", {
        style: {
          borderRadius: "10px",
          background: "#e74c3c",
          color: "#fff",
        },
        duration: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-center items-center">
        <div className="w-full max-w-4xl p-12 rounded-2xl">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">
            Update Provider Profile
          </h3>
          <Form submitHandler={onSubmit} defaultValues={defaultValues}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <FormInput name="fName" label="First Name" type="text" />
              <FormInput name="lName" label="Last Name" type="text" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <FormInput name="email" label="Email" type="email" />
              <FormInput name="contactNo" label="Phone Number" type="number" />
            </div>

            <div className="relative mb-6">
              <FormInput
                name="password"
                label="Password"
                type={passwordVisible ? "text" : "password"}
                className="pr-12"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {passwordVisible ? (
                  <FaEyeSlash
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="text-gray-600 cursor-pointer"
                  />
                ) : (
                  <FaEye
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="text-gray-600 cursor-pointer"
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <FormSelectField
                name="gender"
                label="Gender"
                options={genderOptions}
              />
              <FormDatePicker name="dob" label="Date Of Birth" />
            </div>

            <div className="mb-6">
              <CategoryField name="categoryId" label="Category" />
            </div>

            <div className="mb-6">
              <FormTextArea
                name="bio"
                placeholder="Add Bio..."
                label="Bio"
                rows={5}
              />
            </div>

            <div className="mb-6">
              <FormInput name="address" label="Address" type="text" />
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className={`w-full flex justify-center items-center bg-[#1475c6] text-white p-3 rounded-lg font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-[#0d5b9a] ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? <Spinner /> : "Update"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UpdateProviderProfile;
