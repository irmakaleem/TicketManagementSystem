import React from "react";
import { Route, Routes } from "react-router-dom";

import DeleteComplaint from "./DeleteComplaint";
import Header from "../Dashboard/Header";
import LeftSidebar from "../Dashboard/LeftSidebar";
const MainDashboard = () => {
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
