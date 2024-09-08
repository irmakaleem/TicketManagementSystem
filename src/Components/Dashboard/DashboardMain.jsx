import React, { useEffect } from "react";
import Header from "./Layout/Header";
import { useState } from "react";
import LeftSidebar from "./Layout/LeftSidebar";
// import RightSidebar from "./RightSidebar";
import ContactUs from "./UserDashboard/InquiryForms/ContactUs";
import { FeedBack } from "./UserDashboard/InquiryForms/FeedBack";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Complaint from "./UserDashboard/UserComplaints/Complaint";
import ComplainTable from "./UserDashboard/UserComplaints/ComplainTable";
import NewComplaint from "./UserDashboard/UserComplaints/NewComplaint";
import AccountDetails from "./UserDashboard/UserProfile/AccountDetails";
import TicketPage from "./UserDashboard/UserComplaints/TicketPage";
// import agya ussi file se
import { verifyTokenExpiry } from "../../Utils/verifyTokenExpiry";
import PageTransition from "../../Animations/PageTransition";
import AdminTable from "./AdminDashboard/AdminTable";
import AdminTicketpage from "./AdminDashboard/AdminTicketpage";
import SeverityLvl from "./AdminDashboard/SeverityLvl";

const DashboardMain = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = JSON.parse(localStorage.getItem("user"))?.role;
  useEffect(() => {
    if (!verifyTokenExpiry(token)) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    if (Location.pathname.includes("/dashboard")) {
      document.body.classList.add("bg-body-light");
    }
  }, []);
  //here i globally define a state we can use it in any component
  // variable             setter function        initial value
  const [selectedStatus, setSelectedStatus] = useState("Total Complaints");
  return (
    <PageTransition>
      <div className="grid grid-cols-12 bg-body-light ">
        <div className="col-span-3 flex justify-center items-start m-4">
          {" "}
          <LeftSidebar />
        </div>

        <div className="col-span-9">
          {" "}
          <Header />
          {/* iska naam kch or rakhna hoga */}
          {/* sub routes */}
          <Routes>
            {/* tumhe srf dashbaord pr dikhana to srf / lagado */}
            {/* <Route path="/" element={<RightSidebar />} /> */}

            {role === "admin" ? (
              <>
                <Route
                  path="/"
                  //i am passing setter method of selectedStatus state in props of complaint component (props defined in complaint component)
                  element={
                    <AdminTable
                      selectedStatus={selectedStatus}
                      setSelectedStatus={setSelectedStatus}
                    />
                  }
                />
                <Route path="/adminticket" element={<AdminTicketpage />} />
                <Route path="/severitylvl" element={<SeverityLvl />} />
              </>
            ) : (
              <>
                <Route
                  path="/"
                  //i am passing setter method of selectedStatus state in props of complaint component (props defined in complaint component)
                  element={<Complaint setSelectedStatus={setSelectedStatus} />}
                />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/feedback" element={<FeedBack />} />
                <Route
                  path="/complaint"
                  element={
                    <ComplainTable
                      //props call
                      selectedStatus={selectedStatus}
                      setSelectedStatus={setSelectedStatus}
                    />
                  }
                />
                <Route path="/new-complaint" element={<NewComplaint />} />
                {/* new route to use for editing the complain in the complain form by grabbing the complain id from the url isme component same rahega just url change hua id add hui taakay wo jis complain ko edit krna chahra uska data hamare pass ajaye*/}
                <Route path="/edit-complaint/:id" element={<NewComplaint />} />

                <Route path="/account" element={<AccountDetails />} />
                {/* /ticketpage/:id this means we can open the ticket page through id passed from the newcomplaint form and we can grab that id to fetch the complain data related to that id */}
              </>
            )}
            <Route
              path="/ticketpage/:id"
              element={<TicketPage role={role} />}
            />
          </Routes>
        </div>
      </div>
    </PageTransition>
  );
};

export default DashboardMain;
