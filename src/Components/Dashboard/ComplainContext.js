import React, { createContext, useState } from "react";

export const ComplaintContext = createContext();

export const ComplaintProvider = ({ children }) => {
  const [selectedStatus, setSelectedStatus] = useState('TotalComplaints');

  return (
    <ComplaintContext.Provider value={{ selectedStatus, setSelectedStatus }}>
      {children}
    </ComplaintContext.Provider>
  );
};
