import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const navigate = useNavigate();
  const [signupFields, setSignupFields] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    province: "",
    city: "",
    cnic: "",
    mobileno: "",
    role: "user",
  });

  //
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:44383/api/signupform",
        signupFields
      );

      if (response.status === 201 || response.status === 200) {
        const token = response.data.token;
        const user = response.data.user;
        localStorage.setItem("user", user); // Store the user ID in local storage
        localStorage.setItem("token", token); // Store the user role in local storage
        alert("Registered Successfully!");
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        if (error.response.data.message === "Used") {
          alert("Email already in use!");
        } else if (
          error.response.data.message === "Email and password are required."
        ) {
          alert("Email and password are required!");
        } else {
          alert("Error during registration: " + error.response.data.message);
        }
      } else {
        alert("Unexpected error during registration");
      }
      console.error("Error registering user", error);
    }
  };

  return (
    <div
      className="min-h-screen p-6 flex items-center justify-center bg-cover bg-center bg-gray-50"
      style={{ backgroundImage: "url('./images/xt.png')" }}
    >
      <div className="bg-white rounded-md shadow-xl p-4 px-4 md:p-10 mb-6">
        <div className="text-gray-600 mb-6">
          <p className="text-4xl font-bold text-black">Sign Up</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
            <div className="md:col-span-1">
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={signupFields.fullName}
                onChange={(e) =>
                  setSignupFields((prevFields) => ({
                    ...prevFields,
                    fullName: e.target.value,
                  }))
                }
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={signupFields.email}
                onChange={(e) =>
                  setSignupFields((prevFields) => ({
                    ...prevFields,
                    email: e.target.value,
                  }))
                }
                placeholder="email@domain.com"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={signupFields.password}
                onChange={(e) =>
                  setSignupFields((prevFields) => ({
                    ...prevFields,
                    password: e.target.value,
                  }))
                }
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={signupFields.confirmPassword}
                onChange={(e) =>
                  setSignupFields((prevFields) => ({
                    ...prevFields,
                    confirmPassword: e.target.value,
                  }))
                }
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="city">City</label>
              <select
                name="city"
                id="city"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={signupFields.city}
                onChange={(e) =>
                  setSignupFields((prevFields) => ({
                    ...prevFields,
                    city: e.target.value,
                  }))
                }
              >
                <option value="">Select a city</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Quetta">Quetta</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <label htmlFor="state">State / Province</label>
              <input
                type="text"
                name="state"
                id="state"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={signupFields.province}
                onChange={(e) =>
                  setSignupFields((prevFields) => ({
                    ...prevFields,
                    province: e.target.value,
                  }))
                }
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="cnic">CNIC</label>
              <input
                type="number"
                name="cnic"
                id="cnic"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={signupFields.cnic}
                onChange={(e) =>
                  setSignupFields((prevFields) => ({
                    ...prevFields,
                    cnic: e.target.value,
                  }))
                }
                placeholder="42201-2786013-7"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="monile">Mobile Number</label>
              <input
                type="number"
                name="mobileno"
                id="mobileno"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={signupFields.mobileno}
                onChange={(e) =>
                  setSignupFields((prevFields) => ({
                    ...prevFields,
                    mobileno: e.target.value,
                  }))
                }
                placeholder="03123456789"
              />
            </div>
            <div className="md:col-span-2 text-right">
              <div className="inline-flex items-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
