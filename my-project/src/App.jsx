import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SplashScreen } from "./Components/SplashScreen";
import { Login } from "./Components/Login";
import { SignUp } from "./Components/SignUp";
import { Contact } from "./Components/Contact"; // Use named import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
