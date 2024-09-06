import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { SplashScreen } from "./Components/Global/SplashScreen";
import { Login } from "./Authentication/Login";
import { SignUp } from "./Authentication/SignUp";
import DashboardMain from "./Components/Dashboard/DashboardMain";
import Test from "./Components/Global/Test";

function App() {
  return (
    // main routes
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />

        <Route path="/login" element={<Login />} />
        {/* Route for user signup */}
        <Route path="/signup" element={<SignUp />} />
        {/* Route for admin signup */}
        <Route path="/admin-signup" element={<SignUp />} />
        <Route path="/test" element={<Test />} />

        {/* /dashboard/* ka mtlb /dashboard may jitne bhi sub routes hon wo bhi render hon agr /* ye nhi lagata aage to sub routes kaam nhi krte */}
        <Route path="/dashboard/*" element={<DashboardMain />} />
      </Routes>
    </Router>
  );
}

export default App;
