import Link from "next/link";
import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const SignUp = () => {
    return (
        <section className="h-screen flex items-center justify-center bg-[#BCBCBC]  bg-registerBG bg-cover bg-center">
            <div className="overlay w-full h-full bg-black bg-opacity-50 flex items-center justify-center px-2">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-center lg:justify-center">
                        {/* Left Column - Image */}
                        {/* <div className="mb-12 md:w-9/12 lg:w-6/12 xl:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample image"
                        />
                    </div> */}

                        {/* Right Column - Form */}
                        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md shadow-[#243c5a]">
                            {/* Social Media Login */}
                            <div className="text-center">
                                <p className="text-lg font-semibold mb-4">Sign in with</p>
                                <div className="flex justify-center space-x-3 mb-4">
                                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                                        <FaFacebook className="h-4 w-4" />
                                    </button>
                                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white">
                                        <FaGoogle className="h-4 w-4" />
                                    </button>
                                    {/* <button className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-400 text-white">
                                    <FaTwitter className="h-4 w-4" />
                                </button> */}
                                </div>
                            </div>

                            {/* OR Divider */}
                            <div className="flex items-center my-4">
                                <hr className="flex-grow border-gray-300" />
                                <span className="px-3 text-gray-500 font-semibold">Or</span>
                                <hr className="flex-grow border-gray-300" />
                            </div>

                            {/* Login Form */}
                            <form>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex justify-between items-center text-sm mb-4">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Remember me
                                    </label>
                                    <Link href="/forgot-password" className="text-blue-600 hover:underline">
                                        Forgot password?
                                    </Link>
                                </div>

                                {/* Login Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                                >
                                    Sign Up
                                </button>
                            </form>

                            {/* Register Link */}
                            <p className="text-center text-sm mt-4">
                                If you have an account?{" "}
                                <Link href="/sign-in" className="text-red-500 font-semibold hover:underline">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
