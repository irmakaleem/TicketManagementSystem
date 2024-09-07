import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const AdminTable = () => {
  const [SearchFilterDropdowns, setSearchFilterDropdowns] = useState({
    severityLevel: "",
    status: "",
    department: "",
  });
  const [complaints, setComplaints] = useState([]);

  return (
    <>
      <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
        <div className="card flex flex-col gap-5">
          <h2 className="card-title">Search Complaints by Criteria</h2>
          <div className="Dropdowns flex gap-3">
            <select
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="severitylvl"
              value={SearchFilterDropdowns.severityLevel}
              onChange={(e) =>
                setSearchFilterDropdowns((prevFields) => ({
                  ...prevFields,
                  severityLevel: e.target.value,
                }))
              }
            >
              <option value="" disabled>
                Select Severity Level
              </option>
              <option value="1">SEV 1: Critical</option>
              <option value="2">SEV 2: High</option>
              <option value="3">SEV 3: Medium</option>
              <option value="4">SEV 4: Low</option>
              <option value="5">SEV 5: Informational</option>
            </select>

            <select
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="status"
              value={SearchFilterDropdowns.status}
              onChange={(e) =>
                setSearchFilterDropdowns((prevFields) => ({
                  ...prevFields,
                  status: e.target.value,
                }))
              }
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
              <option value="resolved">Resolved</option>
              <option value="pending">Pending</option>
              <option value="dropped">Dropped</option>
            </select>

            <select
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="department"
              value={SearchFilterDropdowns.department}
              onChange={(e) =>
                setSearchFilterDropdowns((prevFields) => ({
                  ...prevFields,
                  department: e.target.value,
                }))
              }
            >
              <option value="" disabled>
                Select a Department
              </option>
              <option value="IT">IT Department</option>
              <option value="Finance">Finance Department</option>
              <option value="DG">DG Department</option>
              <option value="HR">HR Department</option>
              <option value="Billing">Billing Department</option>
              <option value="CNS">CNS Department</option>
              <option value="Tax">Tax Department</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-start flex-col bg-white rounded-lg m-4 p-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Complaint ID
              </th>
              <th scope="col" className="px-6 py-3">
                Subject
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Assigned to
              </th>
              <th scope="col" className="px-6 py-3">
                Start Date
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                End Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {complaints.length > 0 ? (
              complaints.map((complaint) => (
                <tr
                  key={complaint.id}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    {complaint.id}
                  </th>
                  <td className="px-6 py-4 capitalize">{complaint.subject}</td>
                  <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 capitalize">
                    {complaint.assignedTo}
                  </td>
                  <td className="px-6 py-4">{complaint.startDate}</td>
                  <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {complaint.endDate || "Not Ended Yet"}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`p-2 rounded-xl bg-status-${complaint.status.toLowerCase()}`}
                    >
                      {complaint.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex flex-col gap-3 justify-center">
                    <NavLink
                      to={`/dashboard/ticketpage/${complaint.id}`}
                      className="px-3 py-2 rounded-xl bg-blue-200 capitalize text-sm text-center text-black"
                    >
                      Add Response
                    </NavLink>
                    <NavLink
                      to={`/dashboard/edit-complaint/${complaint.id}`}
                      className="px-3 py-2 rounded-xl bg-blue-200 capitalize text-sm text-center text-black"
                    >
                      Drop Complain
                    </NavLink>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No complaints found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminTable;
