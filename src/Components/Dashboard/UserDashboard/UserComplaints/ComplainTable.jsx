import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getStatusClass } from "../../../../Utils/getStatusClass";
import { hostlink } from "../../../../Utils/HostLink";

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
          <Table
            filteredTickets={filteredTickets}
            selectedStatus={selectedStatus}
          />
        )}
      </div>
    </div>
  );
};

const Table = ({ filteredTickets, selectedStatus }) => {
  return filteredTickets.length > 0 ? (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
            Complain id
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
        {filteredTickets.map((ticket) => {
          // this is used for formatting the date and time coming from the database (databse datetime is not in readable format)
          // for start date
          const startdate = new Date(ticket.createdAt);
          const formattedStartDate = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }).format(startdate);

          // for end date
          const enddate = new Date(ticket.enddate);
          const formattedEndDate = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }).format(enddate);
          // ye condition isliye lagayi ke complain ki start or end date or time exact same agr hai to mtlb end date admin ne assign nhi kri mtlb default chlegyi end date database may ab is case may end date wale column may hum status add krskte
          // ya chaho to direct status se check krlo agr pending hai to end date aye hi na
          // drop to mtlb finished na khtm
          // const dateCondition = formattedStartDate === formattedEndDate;
          const statusCondition = ticket.status.toLowerCase() === "open";

          return (
            <tr
              key={ticket.id}
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                {ticket.id}
              </th>
              <td className="px-6 py-4 capitalize">{ticket.subject}</td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 capitalize">
                {ticket.assignedto}
              </td>
              <td className="px-6 py-4">{formattedStartDate}</td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {/* agr status open arha to not ened yet msg ajaye warna phr end date ajaegy */}
                {statusCondition ? `Complain not Ended yet` : formattedEndDate}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`p-2 rounded-xl ${getStatusClass(
                    ticket.status.toLowerCase()
                  )}`}
                >
                  {ticket.status}
                </span>
              </td>
              <td className="px-6 py-4 flex flex-col gap-3 justify-center">
                <NavLink
                  to={`/dashboard/ticketpage/${ticket.id}`}
                  className="px-3 py-2 rounded-xl bg-blue-200 capitalize text-sm text-center text-black"
                >
                  See more details
                </NavLink>
                <NavLink
                  to={`/dashboard/edit-complaint/${ticket.id}`}
                  className="px-3 py-2 rounded-xl bg-blue-200 capitalize text-sm text-center text-black"
                >
                  Edit Complain
                </NavLink>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <p className="w-full flex justify-center items-center p-4">
      {selectedStatus === "Total Complaints"
        ? "Loading..."
        : "No Complains Found For The Selected Status, Please Try Another Status!"}
    </p>
  );
};

export default ComplainTable;
