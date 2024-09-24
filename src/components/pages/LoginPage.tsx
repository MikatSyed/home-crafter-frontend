"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { signIn } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../UI/Spinner";
import Link from "next/link";
import { FaUserShield, FaUserTie } from "react-icons/fa6";

interface LoginProps {
  callbackUrl?: string;
}

const LoginPage = ({ callbackUrl }: any) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathName = "/login"; // Update this path based on your route

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await signIn("home-crafter", {
        ...data,
        callbackUrl,
        pathName,
      });
      setLoading(false);
    } catch (err: any) {
      toast.error(err?.data, {
        icon: <span style={{ color: "white" }}>❌</span>,
        style: {
          borderRadius: "10px",
          background: "red",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center md:w-[80%] mt-4 shadow-lg rounded-lg bg-white overflow-hidden">
          {/* Left Side - Welcome Message */}
          <div className="hidden md:flex flex-col justify-center items-center bg-indigo-600 text-white p-8 w-1/2">
            <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-lg mb-6">
              To continue, please login with your credentials.
            </p>
            <img
              src="/images/login-illustration.svg"
              alt="Login Illustration"
              className="w-64"
            />
          </div>

          {/* Right Side - Form */}
          <div className="flex justify-center self-center md:w-1/2 p-6 bg-white">
            <div className="mx-auto rounded-3xl w-full  p-8">
              <div className="flex flex-col items-center mb-7">
                <h3 className="font-semibold text-3xl text-gray-800 mb-2">
                  Welcome to{" "}
                  <span className="text-gray-700"> Home Crafter </span>
                </h3>
                <p className="text-gray-600">Login to your account</p>
              </div>
              <Form submitHandler={onSubmit}>
                <FormInput name="email" type="email" label="Email address" />
                <div className="relative mb-5">
                  <FormInput
                    name="password"
                    label="Password"
                    type={passwordVisible ? "text" : "password"}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {passwordVisible ? (
                      <FaEyeSlash
                        className="text-gray-600 cursor-pointer"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      />
                    ) : (
                      <FaEye
                        className="text-gray-600 cursor-pointer"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      />
                    )}
                  </div>
                </div>
                <div className="text-right mb-5">
                  <Link
                    href="/forgot-password"
                    className="text-gray-700 hover:text-gray-900 text-sm"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className={`w-full flex justify-center items-center bg-indigo-600 text-white p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500 ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? <Spinner /> : "Login"}
                  </button>
                </div>
              </Form>
              <div className="flex flex-col items-center mt-5">
                <p className="text-sm">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-gray-700 hover:text-gray-900 ml-1"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
              <div className="flex flex-col space-y-4 mt-6">
  <button className="flex items-center justify-center bg-indigo-600 text-white p-3 rounded-lg hover:bg-gray-800 transition duration-300">
    <FaUserTie className="mr-2" /> {/* Provider icon */}
    Login as Provider
  </button>
  <button className="flex items-center justify-center bg-indigo-600 text-white p-3 rounded-lg hover:bg-gray-800 transition duration-300">
    <FaUserShield className="mr-2" /> {/* Admin icon */}
    Login as Admin
  </button>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
