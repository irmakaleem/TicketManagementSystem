import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import { getStatusClass } from "../../../../Utils/getStatusClass";
import { hostlink } from "../../../../Utils/HostLink";

const TicketPage = () => {
  const [ticket, setTicket] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);
  //
  const { id } = useParams();
  // State to manage the content of ReactQuill
  const [description, setDescription] = useState("");
  const userdetails = JSON.parse(localStorage.getItem("user"));

  const handleQuillChange = (content) => {
    setDescription(content);
  };

  const fetchUserTicket = async () => {
    //fetching complaints from newcomplaint table
    const url = `${hostlink}/api/NewComplaint/${id}`;
    const response = await axios.get(url);
    const userTicket = response.data;
    setTicket(userTicket);
  };
  // awwal to data fetch krwane ki zaroorat nhi kunke localstorage may saved hua wa

  useEffect(() => {
    fetchUserTicket();
  }, []);

  useEffect(() => {
    if (ticket) {
      const date = new Date(ticket.createdAt);
      const formatted = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(date);
      setFormattedDate(formatted);

      // to add the details in the textbox
      setDescription(ticket.description);
    }
  }, [ticket]);

  return ticket ? (
    <>
      <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
        <div className="card flex flex-col gap-3">
          <h2 className="card-title">Tickets</h2>
          <div className="ticket-details flex items-center gap-2">
            <h3>Ticket no:</h3>
            <p>#{ticket.id}</p>
            <h3>Complainant Name:</h3>
            {/* ye localstorage se get krwakr show krwadete */}
            <p className="capitalize">{userdetails.fullName}</p>
            <h3>Ticket status:</h3>
            <p
              className={`rounded capitalize flex items-center px-2 py-1 ${getStatusClass(
                ticket.status.toLowerCase()
              )}`}
            >
              {ticket.status}
            </p>
            {formattedDate && (
              <div id="date-of-creation" className="flex  flex-col items-end">
                <h3>Date of creation:</h3>
                <p>{formattedDate}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start bg-white rounded-lg m-4 p-4">
        <div className="w-full mb-4">
          <label htmlFor="description" className="form-label">
            Response
          </label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={handleQuillChange} // Update the state when the editor content changes
          />
        </div>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default TicketPage;
