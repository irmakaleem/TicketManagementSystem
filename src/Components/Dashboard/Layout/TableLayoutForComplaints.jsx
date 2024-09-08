import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getStatusClass } from "../../../Utils/getStatusClass";
import axios from "axios";
import { hostlink } from "../../../Utils/HostLink";

const userTableHeaders = [
  "Complain id",
  "Subject",
  "Assigned to",
  "Start Date",
  "End Date",
  "Status",
  "Actions",
];
const adminTableHeaders = [
  "",
  "Complain id",
  "Subject",
  "Severity Level",
  "Department",
  // "Username",
  "Email",
  "Status",
  "Actions",
];

const TableLayoutForComplaints = ({
  filteredTickets,
  selectedStatus,
  role,
  selectedComplaints,
  setSelectedComplaints,
}) => {
  const [departs, setDeparts] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({});

  const fetchDeparts = async () => {
    try {
      // userid 2 thi issi userid se related jitni complaints thin wo arhi
      const response = await axios.get(`${hostlink}/api/department`);
      // hogya sahi ye wala api endpoint ab data arha hai
      // tickets ki state may save krware
      setDeparts(response.data);
    } catch (error) {
      console.error("Error fetching tickets", error);
      setError({ error: error?.response?.data.message });
    }
  };

  const fetchUsers = async () => {
    try {
      // userid 2 thi issi userid se related jitni complaints thin wo arhi
      const response = await axios.get(`${hostlink}/api/signupform`);
      // hogya sahi ye wala api endpoint ab data arha hai
      // tickets ki state may save krware
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching tickets", error);
      setError({ error: error?.response?.data.message });
    }
  };

  useEffect(() => {
    if (role === "admin") {
      fetchDeparts();
      fetchUsers();
    }
  }, []);

  const headers = role === "user " ? userTableHeaders : adminTableHeaders;

  const handleSelectComplaints = async (check, id) => {
    if (check === "all") {
      const filteredTicketsIds = filteredTickets.map((ticket) => ticket.id);
      // Check if both arrays have the same elements
      if (
        JSON.stringify(selectedComplaints) ===
        JSON.stringify(filteredTicketsIds)
      ) {
        setSelectedComplaints([]); // Deselect all if they match
      } else {
        setSelectedComplaints(filteredTicketsIds); // Select all filtered tickets
      }
    } else {
      if (selectedComplaints.includes(id)) {
        setSelectedComplaints([]); // Deselect all if they match
      } else {
        setSelectedComplaints([id]);
      }
    }
  };

  const isloadingDone =
    role === "admin"
      ? filteredTickets.length > 0 && departs.length > 0 && users.length > 0
      : filteredTickets.length > 0;
  return isloadingDone ? (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              scope="col"
              className={`${header === "" ? "" : "px-6 py-3"}`}
            >
              {header === "" ? (
                <input
                  type="checkbox"
                  onChange={() => handleSelectComplaints("all", 0)}
                />
              ) : (
                header
              )}
            </th>
          ))}
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
          let email = "";
          let departName = "";
          if (role === "admin") {
            // const username = users?.filter((user) => user.id === ticket.userId)[0]
            //   ?.fullName;
            email = users?.filter((user) => user.id === ticket.userId)[0]
              ?.email;
            departName = departs?.filter(
              (depart) => depart.departmentId === ticket.department
            )[0]?.departmentName;
          }

          return (
            <tr
              key={ticket.id}
              className="border-b border-gray-200 dark:border-gray-700"
            >
              {role === "admin" && (
                <th
                  scope="row"
                  className="w-10 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  <input
                    type="checkbox"
                    name="compaint-select"
                    onChange={() => handleSelectComplaints("", ticket.id)}
                    checked={selectedComplaints.includes(ticket.id)}
                  />
                </th>
              )}
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                {ticket.id}
              </th>
              <td className="px-6 py-4 capitalize">{ticket.subject}</td>
              {role === "user" ? (
                <>
                  <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 capitalize">
                    {ticket.assignedto}
                  </td>
                  <td className="px-6 py-4">{formattedStartDate}</td>
                  <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {/* agr status open arha to not ened yet msg ajaye warna phr end date ajaegy */}
                    {statusCondition
                      ? `Complain not Ended yet`
                      : formattedEndDate}
                  </td>
                </>
              ) : (
                <>
                  <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 capitalize">
                    {ticket.severityLevel}
                  </td>
                  <td className="px-6 py-4">{departName} </td>
                  {/* <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {username}
                  </td> */}
                  <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {email}
                  </td>
                </>
              )}
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
                {role === "user" && (
                  <NavLink
                    to={`/dashboard/edit-complaint/${ticket.id}`}
                    className="px-3 py-2 rounded-xl bg-blue-200 capitalize text-sm text-center text-black"
                  >
                    Edit Complain
                  </NavLink>
                )}
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

export default TableLayoutForComplaints;
