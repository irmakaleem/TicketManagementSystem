import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex items-center justify-center h-min-screen overflow-hidden ">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Login Here</span>
          <div className="py-4">
            <label htmlFor="email" className="mb-2 text-left text-md block">
              Email
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div className="py-4">
            <label htmlFor="pass" className="mb-2 text-left text-md block">
              Password
            </label>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span>
            </div>
            <span className="font-bold text-md text-blue-500 ">
              Forgot password
            </span>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg mb-6  hover:text-white hover:border">
            Sign in
          </button>
          <div className="text-center text-gray-400">
            Don't have an account?
            <Link to="/signup" className="font-bold text-blue-500">
              {" "}
              Sign up
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className="relative">
          <img
            src="./images/wing.png"
            alt="img"
            className="w-[450px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
};
