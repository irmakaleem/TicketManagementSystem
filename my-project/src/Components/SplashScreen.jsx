import React from "react";
import { Link } from "react-router-dom";
import "./SplashScreen.css";
export const SplashScreen = () => {
  return (
    <div>
      <div className="heading">
        <div className="buttons">
          <Link to="/login" className="login-btn">
            {" "}
            Login
          </Link>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
      <div className="container1">
        <div className="image" />
      </div>
    </div>
  );
};
