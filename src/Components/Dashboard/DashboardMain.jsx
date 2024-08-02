import React from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
// import DashboardContact from "./DashboardContact";
import ContactUs from "./ContactUs";
// import FeedBack from "../FeedBack";
import { Route, Routes } from "react-router-dom";

const DashboardMain = () => {
  return (
    <div className="grid grid-cols-12 bg-body-light dark:bg-dark-body">
      <div className="col-span-3 flex justify-center items-start m-4">
        {" "}
        <LeftSidebar />
      </div>
      {/* <PopupDashboard />  */}
      <div className="col-span-9">
        {" "}
        <Header />
        {/* iska naam kch or rakhna hoga */}
        {/* sub routes */}
        <Routes>
          {/* tumhe srf dashbaord pr dikhana to srf / lagado */}
          <Route path="/" element={<RightSidebar />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="/feedback" element={<FeedBack />} /> */}
          {/* <Route path="/contact" element={<DashboardContact />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default DashboardMain;
