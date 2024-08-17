import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ComplaintBox from './ComplaintBox'; 

const Complaint = () => {
  const [complaints, setComplaints] = useState({
    totalComplaints: 0,
    openComplaints: 0,
    closedComplaints: 0,
    pendingComplaints: 0,
    droppedComplaints: 0,
    resolvedComplaints: 0
  });

  useEffect(() => {
    const fetchComplaintCounts = async () => {
      const userId = localStorage.getItem('userId');
      console.log("Fetching complaint counts for user ID:", userId);
      try {
        const response = await axios.get(`http://localhost:5044/api/UserDashboard/complaints/${userId}`);
        console.log("Response received:", response.data);
        setComplaints(response.data);
      } catch (error) {
        console.error("Error fetching complaint counts", error);
      }
    };

    fetchComplaintCounts();
  }, []);

  return (
    <div className="flex justify-center items-start bg-white rounded-lg m-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ComplaintBox number={complaints.totalComplaints} title="Total Complaints" />
        <ComplaintBox number={complaints.openComplaints} title="Open Complaints" />
        <ComplaintBox number={complaints.closedComplaints} title="Closed Complaints" />
        <ComplaintBox number={complaints.pendingComplaints} title="Pending Complaints" />
        <ComplaintBox number={complaints.droppedComplaints} title="Dropped Complaints" />
        <ComplaintBox number={complaints.resolvedComplaints} title="Resolved Complaints" />
      </div>
    </div>
  );
};

export default Complaint;
