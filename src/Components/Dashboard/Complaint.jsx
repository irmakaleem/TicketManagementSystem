import React, { useState, useEffect } from "react"; // Correct import
import axios from "axios";
import ComplaintBox from "./ComplaintBox";
import { useNavigate } from "react-router-dom";
//use setter method of state and here i defined setter method as a props
const Complaint = ({ setSelectedStatus }) => {
  const [complaints, setComplaints] = useState({
    totalComplaints: 0,
    openComplaints: 0,
    closedComplaints: 0,
    pendingComplaints: 0,
    droppedComplaints: 0,
    resolvedComplaints: 0,
  });
  //
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchComplaintCounts = async () => {
      const userId = localStorage.getItem("userId");
      console.log("Fetching complaint counts for user ID:", userId);
      try {
        // /UserDashboard/complaints ye api endpoint hota
        const response = await axios.get(
          `http://localhost:5044/api/UserDashboard/complaints/${userId}`
        );
        console.log("Response received:", response.data);
        setComplaints(response.data);
      } catch (error) {
        console.error("Error fetching complaint counts", error);
      }
    };

    fetchComplaintCounts();
  }, []);

  const handleViewDetails = (status) => {
    //here im using the setter method which is coming from props(which i define above in my function) and by using it im setting the selectedStatus state which is defined globally in parent(DashboardMain)
    setSelectedStatus(status);
    //navigating to the desired component (complaintTable)
    navigate("/dashboard/complaint");
  };

  const complainBoxes = [
    {
      id: 1,
      number: complaints.totalComplaints,
      title: "Total Complaints",
      funcText: "TotalComplaints",
    },
    {
      id: 2,
      number: complaints.openComplaints,
      title: "Open Complaints",
      funcText: "OpenComplaints",
    },
    {
      id: 3,
      number: complaints.closedComplaints,
      title: "Closed Complaints",
      funcText: "ClosedComplaints",
    },
    {
      id: 4,
      number: complaints.pendingComplaints,
      title: "Pending Complaints",
      funcText: "PendingComplaints",
    },
    {
      id: 5,
      number: complaints.droppedComplaints,
      title: "Dropped Complaints",
      funcText: "DroppedComplaints",
    },
    {
      id: 6,
      number: complaints.resolvedComplaints,
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
