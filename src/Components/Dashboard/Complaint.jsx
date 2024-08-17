import React from "react";
import { Link } from "react-router-dom";
const Complaint = () => {
  const ComplaintBox = ({ number, title }) => {
    return (
      <div className="group before:hover:scale-95 before:hover:h-60 before:hover:w-64 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-blue-500 via-blue-500 to-blue-500 before:absolute before:top-0 w-64 h-60 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden m-4">
        <div className="w-20 h-20 bg-blue-600 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500 text-white flex justify-center items-center text-2xl font-semibold">
          {number}
        </div>
        <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
          <span className="text-2xl font-inherit font-semibold text-sky-950">
            {title}
          </span>
        </div>
        <Link
          to="/dashboard/complaint"
          className="bg-blue-600 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-600"
          href="#"
        >
          View Details
        </Link>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-start bg-white rounded-lg m-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ComplaintBox number={0} title="Total Complaints" />
        <ComplaintBox number={0} title="Open Complaints" />
        <ComplaintBox number={3} title="Closed Complaints" />
        <ComplaintBox number={1} title="Pending Complaints" />
        <ComplaintBox number={0} title="Dropped Complaints" />
        <ComplaintBox number={2} title="Resolved Complaints" />
      </div>
    </div>
  );
};

export default Complaint;
