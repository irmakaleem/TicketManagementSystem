import React, { useEffect, useState } from "react";
import {
  validateCnic,
  validateEmail,
  validatePhone,
  validateStrongPassword,
  validateUsername,
} from "../../../../Utils/Validations";
import { hostlink } from "../../../../Utils/HostLink";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Helper function to format field names
const formatFieldName = (field) =>
  field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1");

// Input Field Component
const InputField = ({ name, value, onChange, isEditable }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">
      {formatFieldName(name)}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      readOnly={!isEditable}
      className={`mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm ${
        isEditable
          ? "focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          : "bg-gray-100"
      } sm:text-sm`}
    />
  </div>
);

// Profile Header Component
const ProfileHeader = ({ signupFields, onProfilePicClick, isEditable }) => (
  <div className="flex items-center space-x-4 mb-8">
    <div className="relative">
      <img
        src={signupFields.profilePic || "https://via.placeholder.com/150"}
        alt="Profile"
        className="w-16 h-16 rounded-full object-cover cursor-pointer"
        onClick={onProfilePicClick}
      />
      <input
        type="file"
        accept="image/*"
        className="absolute inset-0 opacity-0 cursor-pointer"
        onChange={onProfilePicClick}
      />
    </div>
    <div>
      <h3 className="text-lg font-medium">{`${signupFields.fullName} `}</h3>
      <p className="text-sm text-gray-400">{`${signupFields.city}, ${signupFields.province}`}</p>
    </div>
    <button className="text-blue-500 hover:underline">
      {isEditable ? "Save" : "Edit"}
    </button>
  </div>
);

// Form Section Component
const FormSection = ({
  title,
  fields,
  signupFields,
  handleChange,
  isEditable,
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-md mb-8">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-md font-medium mb-4">{title}</h4>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {fields.map((field) => {
          return (
            <InputField
              key={field}
              name={field}
              value={signupFields[field]}
              onChange={handleChange}
              isEditable={isEditable}
            />
          );
        })}
      </div>
    </div>
  );
};

const AccountDetails = () => {
  const [signupFields, setSignupFields] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    province: "",
    city: "",
    cnic: "",
    mobileNo: "",
    role: "",
  });
  const userdetails = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordC, setShowPasswordC] = useState(false);

  const [isEditable, setIsEditable] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordCVisibility = () => {
    setShowPasswordC(!showPasswordC);
  };

  const fetchUserDetails = async () => {
    //fetching complaints from newcomplaint table
    const url = `${hostlink}/api/signupform/${userdetails.id}`;
    const response = await axios.get(url);
    const userDAta = response.data;

    setSignupFields(userDAta);
  };
  // awwal to data fetch krwane ki zaroorat nhi kunke localstorage may saved hua wa
  useEffect(() => {
    fetchUserDetails();
  }, [userdetails.id]);

  const validateFields = () => {
    const reqFields = [
      "fullName",
      "email",
      "mobileNo",
      "city",
      "cnic",
      "province",
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
        } else if (newKey === "mobileNo" && !validatePhone(value)) {
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
        } else if (newKey === "newPassword" && !validateStrongPassword(value)) {
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

    if (
      signupFields?.newPassword !== "" &&
      signupFields?.newPassword !== signupFields?.confirmNewPassword
    ) {
      formErrors["newPassword"] = "same";
      formErrors["confirmNewPassword"] = "same";
      allFieldsValid = false;
    }

    setFormErrors(formErrors);
    return allFieldsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignupFields({
      ...signupFields,
      [name]: value,
    });
  };

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

      // isliye new object banara pass krwane se pehle api may
      const newSignupData = {
        id: signupFields.id,
        fullName: signupFields.fullName,
        email: signupFields.email,
        password:
          signupFields.newPassword === ""
            ? signupFields.password
            : signupFields.newPassword,
        confirmPassword:
          signupFields.confirmNewPassword === ""
            ? signupFields.confirmPassword
            : signupFields.confirmNewPassword,
        province: signupFields.province,
        city: signupFields.city,
        cnic: signupFields.cnic,
        mobileNo: signupFields.mobileNo,
        role: signupFields.role,
      };
      console.log(newSignupData);
      const response = await axios.put(
        `${hostlink}/api/signupform/${userdetails.id}`,
        newSignupData
      );

      if (response.status === 204) {
        console.log(response);
        const user = response.data.user;
        const someUserData = {
          id: signupFields.id,
          fullName: signupFields.fullName,
          email: signupFields.email,
          role: userdetails.role,
          createdAt: userdetails.createdAt,
        };
        // pehle hum user object as it save krware the stringify krwakr ab hum is new object ko krwaengay
        localStorage.setItem("user", JSON.stringify(someUserData)); // Store the user data in local storage
        alert("Updated Account details Successfully!");
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

  const handleProfilePicClick = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setSignupFields({
          ...signupFields,
          profilePic: upload.target.result,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="flex justify-center items-start bg-white rounded-lg m-4 p-6 shadow-lg max-w-5xl">
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-6">My Profile</h2>

        <ProfileHeader
          signupFields={signupFields}
          onProfilePicClick={handleProfilePicClick}
          isEditable={isEditable}
        />
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

        <FormSection
          title="Personal Information"
          fields={["fullName", "email", "mobileNo", "cnic"]}
          signupFields={signupFields}
          handleChange={handleChange}
          isEditable={isEditable}
        />

        {/* ye dono new fields hain inka data pick krna role thori dogy edit krne ko bhen*/}
        <FormSection
          title=""
          fields={["province", "newPassword", "confirmNewPassword"]}
          signupFields={signupFields}
          handleChange={handleChange}
          isEditable={isEditable}
        />

        <div className="flex justify-end">
          <button
            onClick={(e) =>
              isEditable ? handleSubmit(e) : setIsEditable(true)
            }
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {isEditable ? (loading ? "Loading..." : "Save") : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
