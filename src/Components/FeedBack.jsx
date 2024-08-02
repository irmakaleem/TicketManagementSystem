import React from "react";

// FeedbackCard Component
export const FeedbackCard = ({ question, options }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto select-none rounded-lg border border-gray-200 p-6 shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
      <p className="text-xl font-bold text-gray-900 dark:text-white">
        {question}
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        How satisfied are you with the new feature?
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 m-4 h-6 w-6 text-gray-500 dark:text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="mt-3 grid grid-cols-5 gap-2">
        {options.map((option) => (
          <div
            key={option}
            className="flex h-12 w-full cursor-pointer items-center justify-center rounded-md bg-blue-100 text-blue-800 font-bold hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
          >
            {option}
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <p>Not satisfied</p>
        <p>Very satisfied</p>
      </div>
    </div>
  );
};
