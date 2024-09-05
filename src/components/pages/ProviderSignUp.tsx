"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useProviderSignupMutation } from "@/redux/api/authApi";
import { TiTickOutline } from "react-icons/ti";
import Spinner from "@/components/UI/Spinner";
import SingleImageUpload from "../UI/SingleImageUpload";
import FormSelectField from "../Forms/FormSelectField";
import { genderOptions } from "@/constants/global";
import FormDatePicker from "../Forms/FormDatePicker";
import CategoryField from "../Forms/CategoryField";
import FormTextArea from "../Forms/FormTextArea";

const ProviderSignupPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [profileImg, setProfileImg] = useState<{
    id: number;
    url: string;
  } | null>(null);
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [providerSignup] = useProviderSignupMutation();




  const onSubmit = async (values: any) => {
    const dateOfBirth = new Date(values.dob);
    console.log(values)
    if (profileImg) {
      values.profileImg = profileImg.url;
    }
    values.dob = dateOfBirth.toISOString();

    try {
      setLoading(true);
      const res: any = await providerSignup(values).unwrap();
      console.log(res,'38')
      if (res && res?.data) {
        toast.success(res?.message, {
          
          style: {
            borderRadius: "10px",
            background: "#4f46e5",
            color: "#fff",
          },
          duration: 3000,
        });

        // Clear the selected profile image after successful signup
        setProfileImg(null);
        setImgPreview(null); // Clear the preview image as well
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (err: any) {
      console.error(err);

      toast.error("Failed to create user", {
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

      <div className="flex justify-center items-center ">
        <div className="w-full max-w-4xl  p-12 rounded-2xl ">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 ">
            Provider Signup
          </h3>
          <Form submitHandler={onSubmit}>
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
                className="text-sm px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
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
              <SingleImageUpload
                label="Upload Profile"
                imgPreview={imgPreview}
                setImgPreview={setImgPreview}
                onImageChange={setProfileImg}
              />
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className={`w-full flex justify-center items-center bg-[#1475c6] text-white p-3 rounded-lg font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-[#0d5b9a] ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? <Spinner /> : "Register"}
              </button>
            </div>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Login
              </a>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ProviderSignupPage;