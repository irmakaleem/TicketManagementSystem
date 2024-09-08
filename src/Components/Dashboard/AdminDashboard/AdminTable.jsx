import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { hostlink } from "../../../Utils/HostLink";
import { NavLink } from "react-router-dom";
import TableLayoutForComplaints from "../Layout/TableLayoutForComplaints";
const AdminTable = ({ selectedStatus, setSelectedStatus }) => {
  const [searchFilterDropdowns, setSearchFilterDropdowns] = useState({
    severityLevel: "",
    status: "",
    department: "",
    bulkAction: "",
  });
  const [complaints, setComplaints] = useState([]);

  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState({});
  const [filteredTickets, setFilteredTickets] = useState([]);

  const [selectedComplaints, setSelectedComplaints] = useState([]);

  const fetchTickets = async () => {
    try {
      // userid 2 thi issi userid se related jitni complaints thin wo arhi
      const response = await axios.get(`${hostlink}/api/newcomplaint`);
      // hogya sahi ye wala api endpoint ab data arha hai
      // tickets ki state may save krware
      setTickets(response.data);
    } catch (error) {
      console.error("Error fetching tickets", error);
      setError({ error: error?.response?.data.message });
    }
  };

  useEffect(() => {
    // useEffect may fetch krware uper banaya wa function yahan call krware bas on reload fetch hojaye data
    fetchTickets();
  }, []);

  useEffect(() => {
    if (tickets?.length > 0) {
      // yahan pr bhi krskte
      const filtered = tickets.filter((ticket) => {
        if (selectedStatus.toLowerCase().includes("total")) {
          return true;
        } else {
          return selectedStatus.toLowerCase().includes(ticket.status);
        }
      });

      setFilteredTickets(filtered);
    }
  }, [tickets, selectedStatus]);

  const handleUpdateSL = async () => {
    try {
      if (selectedComplaints.length > 0) {
        selectedComplaints.map(async (scId) => {
          const formData = filteredTickets.filter(
            (ticket) => ticket.id === scId
          )[0];
          console.log(formData);
          //fetching complaints from newcomplaint table
          const url = `${hostlink}/api/NewComplaint/${id}`;
          const response = await axios.put(url);
        });
      } else {
        setError({ message: "please select any complaint" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderBulkAction = () => {
    switch (searchFilterDropdowns.bulkAction) {
      case "usl": // Update Severity Level
        return (
          <select
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="severitylvl"
            value={searchFilterDropdowns.severityLevel}
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
        );
      case "us": // Update Status
        return (
          <select
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="status"
            value={searchFilterDropdowns.status}
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
        );
      case "sd": // Update Department
        return (
          <select
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="department"
            value={searchFilterDropdowns.department}
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
        );
      default:
        return null; // Return null if no bulkAction is selected
    }
  };

  return (
    <>
      <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
        <div className="card flex flex-col gap-5">
          <h2 className="card-title">Search Complaints by Criteria</h2>
          <div className="Dropdowns flex gap-3">
            <select
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="severitylvl"
              value={searchFilterDropdowns.severityLevel}
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
              value={searchFilterDropdowns.status}
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
              value={searchFilterDropdowns.department}
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
        <select
          className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          id="bulkAction"
          value={searchFilterDropdowns.bulkAction}
          onChange={(e) =>
            setSearchFilterDropdowns((prevFields) => ({
              ...prevFields,
              bulkAction: e.target.value,
            }))
          }
        >
          <option value="" disabled>
            Bulk Actions
          </option>
          <option value="dc">Delete Complaints</option>
          <option value="usl">Update Severity Level</option>
          <option value="us">Update Status</option>
          <option value="sd">Update Sub-Department</option>
        </select>
        {searchFilterDropdowns.bulkAction !== "" &&
          console.log(renderBulkAction())}
        {error?.error ? (
          <p className="p-5">
            No complaints found! You can add a new complaint by clicking the add
            complaint button
          </p>
        ) : (
          <TableLayoutForComplaints
            role="admin"
            filteredTickets={filteredTickets}
            selectedStatus={selectedStatus}
            selectedComplaints={selectedComplaints}
            setSelectedComplaints={setSelectedComplaints}
          />
        )}
      </div>
    </>
  );
};

export default AdminTable;
