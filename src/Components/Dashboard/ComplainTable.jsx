import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ComplainTable = () => {
  const [selectedStatus, setSelectedStatus] = useState('TotalComplaints');
  const [tickets, setTickets] = useState([]);
  const userId = localStorage.getItem('userId'); // Replace this with dynamic userId

  useEffect(() => {
    const statusIds = {
      TotalComplaints: 0,  // This will fetch all tickets
      OpenComplaints: 6,
      ClosedComplaints: 2,
      DroppedComplaints: 4,
      ResolvedComplaints: 5,
      PendingComplaints: 3
    };

    const fetchTickets = async () => {
      try {
        const statusId = statusIds[selectedStatus];
        const response = await axios.get(`http://localhost:5044/api/UserDashboard/tickets/${userId}/${statusId}`);
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching tickets", error);
      }
    };

    fetchTickets();
  }, [selectedStatus]);

  const handleChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className="flex justify-center items-start flex-col bg-white rounded-lg m-4 p-4">
      <div className="flex gap-3">
        <select
          className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          id="complain"
          onChange={handleChange}
          value={selectedStatus}
        >
          <option value="TotalComplaints">Total Complaints</option>
          <option value="OpenComplaints">Open Complaints</option>
          <option value="ClosedComplaints">Closed Complaints</option>
          <option value="DroppedComplaints">Dropped Complaints</option>
          <option value="ResolvedComplaints">Resolved Complaints</option>
          <option value="PendingComplaints">Pending Complaints</option>
        </select>
        <Link
          to="/dashboard/new-complaint"
          className="cursor-pointer bg-blue-500 text-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#4a89ff] hover:text-blue h-9 rounded-md px-3"
        >
          New Complaint
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                t_id
              </th>
              <th scope="col" className="px-6 py-3">
                t_title
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                s_id
              </th>
              <th scope="col" className="px-6 py-3">
                DateTime
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Lvlid
              </th>
              <th scope="col" className="px-6 py-3">
                UId
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.tId} className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  {ticket.tId}
                </th>
                <td className="px-6 py-4">{ticket.tTitle}</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{ticket.sId}</td>
                <td className="px-6 py-4">{ticket.dateTime}</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{ticket.lvlid}</td>
                <td className="px-6 py-4">{ticket.uId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplainTable;
