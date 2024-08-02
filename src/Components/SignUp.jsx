import React from "react";
import { Link } from "react-router-dom";
export const SignUp = () => {
  return (
    <div
      className=" p-6 flex items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: "url('./images/airport.jpg')" }}
    >
      <div className="container mx-auto">
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="text-gray-600 mb-6">
            <p className=" text-4xl font-bold text-black">Sign Up</p>
          </div>
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-3">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5">
                  <label htmlFor="full_name">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    defaultValue=""
                  />
                </div>
                <div className="md:col-span-5">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    defaultValue=""
                    placeholder="email@domain.com"
                  />
                </div>
                <div className="md:col-span-5">
                  <label htmlFor="address">Address / Street</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    defaultValue=""
                    placeholder=""
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    defaultValue=""
                    placeholder=""
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="country">Country / region</label>
                  <select
                    name="country"
                    id="country"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    defaultValue=""
                  >
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="IN">India</option>
                    <option value="PK">Pakistan</option>
                    {/* Add more country options as needed */}
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="state">State / province</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    defaultValue=""
                    placeholder=""
                  />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="zipcode">Zipcode</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    defaultValue=""
                    placeholder=""
                  />
                </div>
                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
