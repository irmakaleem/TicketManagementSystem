import React from "react";

const ComplainTable = () => {
  return (
    <div className="flex justify-center items-start flex-col bg-white rounded-lg m-4 p-4">
      <div className="flex gap-3">
        <select
          className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          id="cpmplain"
        >
          <option value="male">Total Complaints</option>
          <option value="female">Open Complaints</option>
          <option value="female">Closed Complaints</option>
          <option value="female">Dropped Complaints</option>
          <option value="female">Resovled Complaints</option>
          <option value="other">Pending Complaints</option>
        </select>
        <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#4a89ff] hover:text-blue h-9 rounded-md px-3">
          <svg
            className="lucide lucide-rocket text-white dark:text-blue-400"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2}
            stroke="#06B6D4"
            fill="none"
            viewBox="0 0 24 24"
            height={22}
            width={22}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          New Complaint
        </button>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Sno
              </th>
              <th scope="col" className="px-6 py-3">
                Requester
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Assigned to
              </th>
              <th scope="col" className="px-6 py-3">
                Due Date
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Created Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              ></th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
              <td className="px-6 py-4"></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              ></th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
              <td className="px-6 py-4"></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              ></th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
              <td className="px-6 py-4"></td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              ></th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
              <td className="px-6 py-4"></td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              ></th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
              <td className="px-6 py-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplainTable;
