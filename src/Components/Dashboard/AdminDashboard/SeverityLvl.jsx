import React from "react";

import { useState } from "react";

const SeverityLvl = () => {
  const [severityLevel, setSeverityLevel] = useState({
    complaintId: "",
    severityLevel: "",
  });
  const [complaintId, setComplaintId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="flex justify-center items-start bg-gray-100 m-4">
      <div className="w-full bg-white shadow-md rounded-lg p-6 sm:p-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Severity Level
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="complaintId"
              className="block text-gray-700 font-semibold mb-2"
            >
              Complaint ID
            </label>
            <input
              type="text"
              id="complaintId"
              value={complaintId}
              onChange={(e) =>
                setSeverityLevel((prevFields) => ({
                  ...prevFields,
                  complaintId: e.target.value,
                }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter Complaint ID"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="severityLevel"
              className="block text-gray-700 font-semibold mb-2"
            >
              Severity Level
            </label>
            <select
              id="severityLevel"
              value={severityLevel}
              onChange={(e) =>
                setSeverityLevel((prevFields) => ({
                  ...prevFields,
                  severityLevel: e.target.value,
                }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              required
            >
              <option value="">Select Severity Level</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Set Severity Level
          </button>
        </form>
      </div>
    </div>
  );
};

export default SeverityLvl;
