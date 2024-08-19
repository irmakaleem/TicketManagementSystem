import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import DeleteComplaint from "./DeleteComplaint";
import Header from "../Dashboard/Header";
import LeftSidebar from "../Dashboard/LeftSidebar";
const MainDashboard = () => {
  const Location = useLocation();

  useEffect(() => {
    if (Location.pathname.includes("/admin")) {
      document.body.classList.add("bg-body-light");
    }
  }, []);
  return (
    <>
      <div className="grid grid-cols-12 bg-body-light ">
        <div className="col-span-3 flex justify-center items-start m-4">
          {" "}
          <LeftSidebar />
        </div>

        <div className="col-span-9">
          {" "}
          <Header />
          <Routes>
            <Route path="/" element={<DeleteComplaint />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
