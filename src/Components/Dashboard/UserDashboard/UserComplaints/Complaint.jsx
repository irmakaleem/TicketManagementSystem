import React, { useState, useEffect } from "react"; // Correct import
import axios from "axios";
import ComplaintBox from "./ComplaintBox";
import { useNavigate } from "react-router-dom";
import { hostlink } from "../../../../Utils/HostLink";
//use setter method of state and here i defined setter method as a props
const Complaint = ({ setSelectedStatus }) => {
  const [complaints, setComplaints] = useState();
  const [categorizedComplaints, setCategorizedComplaints] = useState({});
  //

  const navigate = useNavigate();
  const fetchComplaintCounts = async () => {
    const userId = JSON.parse(localStorage.getItem("user"))?.id;
    try {
      // /UserDashboard/complaints ye api endpoint hota
      const response = await axios.get(
        `${hostlink}/api/newcomplaint/users/${userId}`
      );
      // ye data agya
      // ye saara data ek sath save hora complaints state may hume isko categorize krna open close total may to kher sab hi
      setComplaints(response.data);
    } catch (error) {
      console.error("Error fetching complaint counts", error);
    }
  };
  useEffect(() => {
    fetchComplaintCounts();
  }, []);

  useEffect(() => {
    if (complaints) {
      const open = complaints.filter(
        (com) => com.status.toLowerCase() === "open"
      );
      const closed = complaints.filter(
        (com) => com.status.toLowerCase() === "closed"
      );
      const pending = complaints.filter(
        (com) => com.status.toLowerCase() === "pending"
      );
      const dropped = complaints.filter(
        (com) => com.status.toLowerCase() === "dropped"
      );
      const resolved = complaints.filter(
        (com) => com.status.toLowerCase() === "resolved"
      );
      setCategorizedComplaints({
        total: complaints?.length,
        open: open?.length,
        closed: closed?.length,
        pending: pending?.length,
        dropped: dropped?.length,
        resolved: resolved?.length,
      });
    }
  }, [complaints]);

  const handleViewDetails = (status) => {
    //here im using the setter method which is coming from props(which i define above in my function) and by using it im setting the selectedStatus state which is defined globally in parent(DashboardMain)
    setSelectedStatus(status);
    //navigating to the desired component (complaintTable)
    navigate("/dashboard/complaint");
  };

  const complainBoxes = [
    {
      id: 1,
      number: categorizedComplaints.total,
      title: "Total Complaints",
      funcText: "TotalComplaints",
    },
    {
      id: 2,
      number: categorizedComplaints.open,
      title: "Open Complaints",
      funcText: "OpenComplaints",
    },
    {
      id: 3,
      number: categorizedComplaints.closed,
      title: "Closed Complaints",
      funcText: "ClosedComplaints",
    },
    {
      id: 4,
      number: categorizedComplaints.pending,
      title: "Pending Complaints",
      funcText: "PendingComplaints",
    },
    {
      id: 5,
      number: categorizedComplaints.dropped,
      title: "Dropped Complaints",
      funcText: "DroppedComplaints",
    },
    {
      id: 6,
      number: categorizedComplaints.resolved,
      title: "Resolved Complaints",
      funcText: "ResolvedComplaints",
    },
  ];

  return (
    <div className="flex justify-center items-start bg-white rounded-lg m-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {complainBoxes.map((box) => (
          <ComplaintBox
            number={box.number}
            title={box.title}
            onClick={() => handleViewDetails(box.funcText)}
          />
        ))}
      </div>
    </div>
  );
};

export default Complaint;
