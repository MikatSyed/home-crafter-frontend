"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useSignupMutation } from "@/redux/api/authApi";
import { TiTickOutline } from "react-icons/ti";
import Spinner from "@/components/UI/Spinner";
import SingleImageUpload from "../UI/SingleImageUpload";

const SignupPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [profileImg, setProfileImg] = useState<{ id: number; url: string } | null>(null);
  const [imgPreview, setImgPreview] = useState<string | null>(null); 
  const [loading, setLoading] = useState<boolean>(false);

  const [signup] = useSignupMutation();

  const onSubmit = async (values: any) => {
    if (profileImg) {
      values.profileImg = profileImg.url;
    }

    try {
      setLoading(true);
      const res: any = await signup(values).unwrap();
      console.log(res);

      if (res && res.data) {
        toast("User created successfully", {
          icon: <span style={{ marginRight: -8, fontSize: 22 }}><TiTickOutline /></span>,
          style: {
            borderRadius: "10px",
            background: "#4f46e5",
            color: "#fff",
          },
          duration: 2000,
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
      
      <div className="flex justify-center items-center min-h-screen relative">
        <div className="w-full max-w-xl flex justify-center items-center">
          <div className="p-12 bg-white rounded-3xl w-full">
            <div className="mb-7">
              <h3 className="font-semibold text-3xl text-gray-800">Signup</h3>
            </div>
            <Form submitHandler={onSubmit}>
              <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
                <FormInput name="fName" label="First Name" type="text" />
                <FormInput name="lName" label="Last Name" type="text" />
              </div>

              <FormInput name="email" label="Email" type="email" />
              <FormInput name="contactNo" label="Phone Number" type="number" />
              <div className="relative mb-5">
                <FormInput
                  name="password"
                  label="Password"
                  type={passwordVisible ? "text" : "password"}
                />
                <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                  {passwordVisible ? (
                    <FaEyeSlash onClick={() => setPasswordVisible(!passwordVisible)} />
                  ) : (
                    <FaEye onClick={() => setPasswordVisible(!passwordVisible)} />
                  )}
                </div>
              </div>

              <SingleImageUpload
                label="Upload Profile"
                imgPreview={imgPreview} 
                setImgPreview={setImgPreview} 
                onImageChange={setProfileImg}
              />

              <div className="mt-5">
                <button
                  type="submit"
                  className={`w-full flex justify-center items-center bg-[#1475c6] text-white p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                   {loading ? <Spinner /> : 'Register'} 
                </button>
              </div>
            </Form>
            <div className="flex items-center justify-between mt-5">
              <div className="text-sm">
                Already have an account?
                <a href="/login" className="text-blue-700 hover:text-blue-600 ml-1">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
