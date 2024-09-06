import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { verifyTokenExpiry } from "../Utils/verifyTokenExpiry";
import { hostlink } from "../Utils/HostLink";
import { validateEmail } from "../Utils/Validations";
import PageTransition from "../Animations/PageTransition";

export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [loginFormFields, setLoginFormFields] = useState({
    email: "",
    password: "",
  });
  //[ ] useEffect dependencies if this is empty then it will run only once, useEffect use for sideEffects, for one time use of useEffect (only at the time of page reload) then we use an empty dependency array [],
  //
  const token = localStorage.getItem("token");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (verifyTokenExpiry(token)) {
      navigate("/dashboard");
    }
  }, [token]);

  const validateFields = () => {
    const reqFields = ["email", "password"];
    let allFieldsValid = true;
    let formErrors = {};

    reqFields.forEach((field) => {
      const newKey = field;
      const value = loginFormFields[newKey]?.trim() || "";

      if (!value) {
        formErrors[newKey] = "This field is required";
        allFieldsValid = false;
      } else {
        // Field-specific validations
        if (newKey === "email" && !validateEmail(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else {
          formErrors[newKey] = "";
        }
      }
    });

    setFormErrors(formErrors);
    return allFieldsValid;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

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
    try {
      const response = await axios.post(
        `${hostlink}/api/LoginForm`,
        loginFormFields
      );
      if (response.status === 200 || response.status === 201) {
        const token = response.data.token;
        // yahan pr user ka data lekr hum localstorage may save krware lekn hume saara nhi krwana mtlb password wagera nhi krwana to hum lengay to pura data hi lekn save ya set krwane ke liye alag object banaengay
        const user = response.data.user;
        // new object
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
        setLoading(false);
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error logging in", error);
      setFormErrors({ error: error?.response?.data?.message });
      window.scrollTo(0, 200);
    }
  };

  return (
    <PageTransition>
      <div className="flex items-center justify-center h-screen overflow-hidden">
        <div className="relative flex flex-col m-6  bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          {/* left side */}
          <form
            className="flex flex-col justify-center p-8 md:p-14"
            onSubmit={handleSubmit}
          >
            <span className="mb-3 text-4xl font-bold">Login Here</span>
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
            <div className="py-4">
              <label htmlFor="email" className="mb-2 text-left text-md block">
                Email
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                value={loginFormFields.email}
                style={{
                  borderColor: formErrors.email ? "red" : undefined,
                }}
                onChange={(e) =>
                  setLoginFormFields((prevFields) => ({
                    ...prevFields,
                    email: e.target.value,
                  }))
                }
                id="email"
              />
            </div>
            <div className="py-4 relative">
              <label htmlFor="pass" className="mb-2 text-left text-md block">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                style={{
                  borderColor: formErrors.password ? "red" : undefined,
                }}
                value={loginFormFields.password}
                onChange={(e) =>
                  setLoginFormFields((prevFields) => ({
                    ...prevFields,
                    password: e.target.value,
                  }))
                }
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
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
            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Remember for 30 days</span>
              </div>
              <span className="font-bold text-md text-blue-500">
                Forgot password
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg mb-6 hover:text-white hover:border"
            >
              {loading ? "Loading..." : "Sign in"}
            </button>
            <div className="text-center text-gray-400">
              Don't have an account?
              <Link to="/signup" className="font-bold text-blue-500">
                {" "}
                Sign up
              </Link>
            </div>
          </form>
          {/* right side */}
          <div className="relative">
            <img
              src="./images/wing.png"
              alt="img"
              className="w-[450px] h-full hidden rounded-r-2xl md:block object-cover"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
