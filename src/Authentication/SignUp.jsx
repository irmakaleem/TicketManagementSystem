import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { verifyTokenExpiry } from "../Utils/verifyTokenExpiry";
import { hostlink } from "../Utils/HostLink";
import {
  validateCnic,
  validateEmail,
  validatePhone,
  validateStrongPassword,
  validateUsername,
} from "../Utils/Validations";

export const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.pathname === "/signup" ? "user" : "admin";

  const [signupFields, setSignupFields] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    province: "",
    city: "",
    cnic: "",
    mobileno: "",
    role,
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const token = localStorage.getItem("token");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordC, setShowPasswordC] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordCVisibility = () => {
    setShowPasswordC(!showPasswordC);
  };

  useEffect(() => {
    if (verifyTokenExpiry(token)) {
      navigate("/dashboard");
    }
  }, [token]);

  const validateFields = () => {
    const reqFields = [
      "fullName",
      "email",
      "mobileno",
      "city",
      "cnic",
      "province",
      "password",
      "confirmPassword",
    ];
    let allFieldsValid = true;
    let formErrors = {};

    reqFields.forEach((field) => {
      const newKey = field;
      const value = signupFields[newKey]?.trim() || "";

      if (!value) {
        formErrors[newKey] = "This field is required";
        allFieldsValid = false;
      } else {
        // Field-specific validations
        if (newKey === "email" && !validateEmail(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "mobileno" && !validatePhone(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "fullName" && !validateUsername(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "province" && !validateUsername(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "city" && !validateUsername(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "password" && !validateStrongPassword(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "cnic" && !validateCnic(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else {
          formErrors[newKey] = "";
        }
      }
    });

    if (signupFields?.password !== signupFields?.confirmPassword) {
      formErrors["password"] = "same";
      formErrors["confirmPassword"] = "same";
      allFieldsValid = false;
    }

    setFormErrors(formErrors);
    return allFieldsValid;
  };

  // ab khush hokr ghar jao or sochna ke aaj ke din i was very productive i learned new things!! thanks to you
  // you just completed creating a backend api with functional frontend! same cheez for all remaining forms nothing different jsut fields ke naam.. okay will do today
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const allFieldsValid = validateFields();
      if (!allFieldsValid) {
        setFormErrors((prev) => ({
          ...prev,
          error: "Please fill in all the required fields correctly",
        }));
        setLoading(false);
        window.scrollTo(0, 200);
        return;
      }
      const response = await axios.post(
        `${hostlink}/api/signupform`,
        signupFields
      );

      if (response.status === 201 || response.status === 200) {
        const token = response.data.token;
        const user = response.data.signupForm;
        const someUserData = {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
          // ye dono to hume nhi chayein
          // "password": "$2a$11$YYtAZAl13vGGcmNOsHS14OYfgHW2UpFWZkg9yGGFfaJlqBr0kd8iW",
          // "confirmPassword": "$2a$11$YYtAZAl13vGGcmNOsHS14OYfgHW2UpFWZkg9yGGFfaJlqBr0kd8iW",
          // ye sab bhi chaye kro in sab ka, nhi na bas name chahiye tha na or id,
          // "city": "Islamabad",
          // "province": "PAKISTAN",
          // "cnic": "42201-2406013-6",
          // "mobileNo": "03152345678",
          // ?
        };
        // pehle hum user object as it save krware the stringify krwakr ab hum is new object ko krwaengay
        localStorage.setItem("user", JSON.stringify(someUserData)); // Store the user data in local storage
        localStorage.setItem("token", token); // Store the token in local storage
        alert("Registered Successfully!");
        setLoading(false);

        navigate("/dashboard");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error registering user", error);
      setFormErrors({ error: error?.response?.data?.message });
      window.scrollTo(0, 200);
    }
  };

  return (
    <div
      className="min-h-screen p-6 flex items-center justify-center bg-cover bg-center bg-gray-50"
      style={{ backgroundImage: "url('./images/xt.png')" }}
    >
      {/* max-md means only below 768 or 992 shyd max medium screen tk uske baad md: wala start hojata */}
      <div className="bg-white rounded-md shadow-xl p-4 px-4 md:p-10 mb-6 max-md:max-w-[90%] md:max-w-[60%] mx-auto">
        <div className="text-gray-600 mb-6">
          <p className="text-4xl font-bold text-black">Sign Up</p>
        </div>
        <form onSubmit={handleSubmit}>
          {formErrors.error && (
            <p className="border-2 border-red-600 text-red-600 rounded-md my-4 p-4 flex justify-between items-center">
              {formErrors.error}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                />
              </svg>
            </p>
          )}
          <div className="grid gap-4 gap-y-2 text-sm max-md:grid-cols-1 md:grid-cols-2 ">
            <div className="">
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                style={{
                  borderColor: formErrors.fullName ? "red" : undefined,
                }}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={signupFields.fullName}
                onChange={(e) =>
                  setSignupFields((prevFields) => ({
                    ...prevFields,
                    fullName: e.target.value,
                  }))
                }
              />
              {formErrors.fullName && formErrors.fullName === "invalid" && (
                <p className="text-red-500 text-xs py-2">
                  Invalid username. It should be 3-16 characters long and can
                  include letters, numbers, underscores, and spaces.
                </p>
              )}
            </div>
            <div className="">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                style={{
                  borderColor: formErrors.email ? "red" : undefined,
                }}
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
              {formErrors.email && formErrors.email === "invalid" && (
                <p className="text-red-500 text-xs py-2">
                  Invalid Email (john@example.com)
                </p>
              )}
            </div>

            <div className="">
              <label htmlFor="cnic">CNIC</label>
              <input
                type="text"
                name="cnic"
                id="cnic"
                style={{
                  borderColor: formErrors.cnic ? "red" : undefined,
                }}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={signupFields.cnic}
                onChange={(e) => {
                  let value = e.target.value.replace(/[^0-9]/g, ""); // Remove all non-numeric characters

                  if (value.length > 5 && value.length <= 12) {
                    value = `${value.slice(0, 5)}-${value.slice(5)}`;
                  } else if (value.length > 12) {
                    value = `${value.slice(0, 5)}-${value.slice(
                      5,
                      12
                    )}-${value.slice(12, 13)}`;
                  }

                  setSignupFields((prevFields) => ({
                    ...prevFields,
                    cnic: value,
                  }));
                }}
                placeholder="42201-2786013-7"
              />

              {formErrors.cnic && formErrors.cnic === "invalid" && (
                <p className=" text-red-500 text-xs py-2 flex justify-between">
                  Invalid CNIC format. Please enter a valid CNIC in the format
                  12345-1234567-1.
                </p>
              )}
            </div>
            <div className="">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="number"
                name="mobileno"
                id="mobileno"
                style={{
                  borderColor: formErrors.mobileno ? "red" : undefined,
                }}
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
              {formErrors.mobileno && formErrors.mobileno === "invalid" && (
                <p className=" text-red-500 text-xs py-2 flex justify-between">
                  Invalid Phone Number, Enter 10/11 Digits
                </p>
              )}
            </div>

            <div className="">
              <label htmlFor="state">State / Province</label>
              <input
                type="text"
                name="state"
                id="state"
                style={{
                  borderColor: formErrors.province ? "red" : undefined,
                }}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={signupFields.province}
                onChange={(e) =>
                  setSignupFields((prevFields) => ({
                    ...prevFields,
                    province: e.target.value,
                  }))
                }
              />
              {formErrors.province && formErrors.province === "invalid" && (
                <p className="text-red-500 text-xs py-2">
                  Invalid Province. It should be 3-16 characters long and can
                  include letters, numbers, underscores, and spaces.
                </p>
              )}
            </div>

            <div className="">
              <label htmlFor="city">City</label>
              <select
                name="city"
                id="city"
                style={{
                  borderColor: formErrors.city ? "red" : undefined,
                }}
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
              {formErrors.city && formErrors.city === "invalid" && (
                <p className="text-red-500 text-xs py-2">
                  Invalid City. It should be 3-16 characters long and can
                  include letters, numbers, underscores, and spaces.
                </p>
              )}
            </div>

            <div className="">
              <div className="relative">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  style={{
                    borderColor: formErrors.password ? "red" : undefined,
                  }}
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={signupFields.password}
                  onChange={(e) =>
                    setSignupFields((prevFields) => ({
                      ...prevFields,
                      password: e.target.value,
                    }))
                  }
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-0 pr-3 flex items-center text-gray-700"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {formErrors.password && formErrors.password === "invalid" && (
                <p className="text-red-500 text-xs py-2">
                  Password must be at least 8 characters long and include at
                  least one uppercase letter, one lowercase letter, one number,
                  and one special character.
                </p>
              )}
              {formErrors.password && formErrors.password === "same" && (
                <p className="text-red-500 text-xs py-2">
                  Passwords don't match!
                </p>
              )}
            </div>
            <div className="">
              <div className="relative">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  name="confirmpassword"
                  id="confirmpassword"
                  type={showPasswordC ? "text" : "password"}
                  style={{
                    borderColor: formErrors.confirmPassword ? "red" : undefined,
                  }}
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={signupFields.confirmPassword}
                  onChange={(e) =>
                    setSignupFields((prevFields) => ({
                      ...prevFields,
                      confirmPassword: e.target.value,
                    }))
                  }
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-0 pr-3 flex items-center text-gray-700"
                  onClick={togglePasswordCVisibility}
                >
                  {showPasswordC ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {formErrors.confirmPassword &&
                formErrors.confirmPassword === "same" && (
                  <p className="text-red-500 text-xs py-2">
                    Passwords don't match!
                  </p>
                )}
            </div>

            <div className="md:col-span-2 text-right">
              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  disabled={loading ? true : false}
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
