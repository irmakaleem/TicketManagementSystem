import React from "react";
import ReactQuill from "react-quill";
import { getStatusClass } from "../../../Utils/getStatusClass";

const AdminTicketpage = () => {
  // State to manage the content of ReactQuill
  const [description, setDescription] = useState("");
  const handleQuillChange = (content) => {
    setDescription(content);
  };

  return (
    <>
      <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
        <div className="card flex flex-col gap-3">
          <h2 className="card-title">Tickets</h2>
          <div className="ticket-details flex items-center gap-2">
            <h3>Ticket no:</h3>
            <p>#</p>
            <h3>Complainant Name:</h3>
            {/* ye localstorage se get krwakr show krwadete */}
            <p className="capitalize"></p>
            <h3>Ticket status:</h3>
            <p
              className={`rounded capitalize flex items-center px-2 py-1 ${getStatusClass(
                ticket.status.toLowerCase()
              )}`}
            ></p>
            {formattedDate && (
              <div id="date-of-creation" className="flex flex-col items-end">
                <h3>Date of creation:</h3>
                <p></p>
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
  );
};

export default AdminTicketpage;
