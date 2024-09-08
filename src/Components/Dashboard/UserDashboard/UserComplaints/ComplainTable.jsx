import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { hostlink } from "../../../../Utils/HostLink";
import TableLayoutForComplaints from "../../Layout/TableLayoutForComplaints";

//props define
const ComplainTable = ({ selectedStatus, setSelectedStatus }) => {
  // const location = useLocation();

  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState({});
  const [filteredTickets, setFilteredTickets] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user"))?.id; // Replace this with dynamic userId

  const fetchTickets = async () => {
    try {
      // userid 2 thi issi userid se related jitni complaints thin wo arhi
      const response = await axios.get(
        `${hostlink}/api/newcomplaint/users/${userId}`
      );
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

  return (
    <div className="flex justify-center items-start flex-col bg-white rounded-lg m-4 p-4">
      <div className="flex gap-3">
        <select
          className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          id="complain"
          //here we are calling handlechange
          onChange={(e) => setSelectedStatus(e.target.value)}
          // here we are using our state through using state name becaues whenever user click on any option its value will save in state and we can see that selected value
          value={selectedStatus}
        >
          <option value="" disabled={true}>
            Select Complaint
          </option>

          <option value="Total Complaints">Total Complaints</option>
          <option value="Open Complaints">Open Complaints</option>
          <option value="Closed Complaints">Closed Complaints</option>
          <option value="Dropped Complaints">Dropped Complaints</option>
          <option value="Resolved Complaints">Resolved Complaints</option>
          <option value="Pending Complaints">Pending Complaints</option>
        </select>
        <Link
          to="/dashboard/new-complaint"
          className="cursor-pointer bg-blue-500 text-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#4a89ff] hover:text-blue h-9 px-3"
        >
          New Complaint
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {error?.error ? (
          <p className="p-5">
            No complaints found! You can add a new complaint by clicking the add
            complaint button
          </p>
        ) : (
          <TableLayoutForComplaints
            role="user"
            filteredTickets={filteredTickets}
            selectedStatus={selectedStatus}
          />
        )}
      </div>
    </div>
  );
};

export default ComplainTable;
