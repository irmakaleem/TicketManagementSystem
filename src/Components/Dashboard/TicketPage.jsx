import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const getStatusClass = (status) => {
  switch (status) {
    case "Open":
      return "bg-yellow-500 text-white";
    case "Close":
      return "bg-blue-500 text-white";
    case "Resolved":
      return "bg-green-400 text-white";
    case "Dropped":
      return "bg-red-500 text-white";
    case "Pending":
      return "bg-orange-500 text-white";
    default:
      return "bg-gray-200 text-black";
  }
};

const TicketPage = () => {
  const [ticket, setTicket] = useState({
    id: "123456",
    complainantName: "Irma Kaleem",
    status: "Pending", // Initial status
  });

  // State to manage the content of ReactQuill
  const [description, setDescription] = useState("");

  const handleQuillChange = (content, delta, source, editor) => {
    setDescription(content);
  };

  return (
    <>
      <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
        <div className="card flex flex-col gap-3">
          <h2 className="card-title">Tickets</h2>
          <div className="ticket-details flex gap-2">
            <h3>Ticket no:</h3>
            <p>#{ticket.id}</p>
            <h3>Complainant Name:</h3>
            <p>{ticket.complainantName}</p>
            <h3>Ticket status:</h3>
            <p className={`rounded px-2 py-1 ${getStatusClass(ticket.status)}`}>
              {ticket.status}
            </p>
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
  );
};

export default TicketPage;
