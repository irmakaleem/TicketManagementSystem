import React from "react";

export const Contact = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content Area */}
      <div className="flex-1 p-4">
        <div className="flex justify-center items-center ">
          <div className="w-full max-w-lg bg-white shadow-md p-5 rounded-lg">
            <h1 className="text-2xl text-blue-500 font-extrabold text-center mb-4">
              Get In Touch
            </h1>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md py-3 px-4 text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md py-3 px-4 border border-gray-300 text-gray-800 focus:border-blue-500 focus:outline-none text-sm"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full rounded-md px-4 text-gray-800 border border-gray-300 focus:border-blue-500 focus:outline-none text-sm pt-3"
              />
              <button
                type="submit"
                className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
