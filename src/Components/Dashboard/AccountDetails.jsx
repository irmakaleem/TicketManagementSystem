import React, { useState, useEffect } from "react";
import axios from "axios";

// Helper function to format field names
const formatFieldName = (field) =>
  field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1");

// Input Field Component
const InputField = ({ name, value, onChange, disabled }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">
      {formatFieldName(name)}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
        disabled ? 'bg-blue-400  cursor-not-allowed' : 'bg-gray text-black border-gray-300'
      }`}
    />
  </div>
);

// Form Section Component
const FormSection = ({ title, fields, userInfo, handleChange, disabled, onEdit }) => (
  <div className="bg-gray-50 p-4 rounded-md mb-8">
    <div className="flex justify-between items-center mb-4">
      <h4 className="text-md font-medium mb-4">{title}</h4>
      {onEdit && (
        <button
          onClick={onEdit}
          className="text-blue-500 hover:underline"
        >
          Edit
        </button>
      )}
    </div>

    <div className="grid grid-cols-2 gap-4">
      {fields.map((field) => (
        <InputField
          key={field}
          name={field}
          value={userInfo[field] || ''}
          onChange={handleChange}
          disabled={disabled}
        />
      ))}
    </div>
  </div>
);

const AccountDetails = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    address: "",
    city: "",
    province: "",
    email: "",
    cnic: "",
    mobileno: "",
  });

  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.error('User ID not found in localStorage');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5044/api/UserDashboard/users/${userId}`);
        setUserInfo(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("User info saved:", userInfo);
    setIsEditingPersonal(false);
    setIsEditingAddress(false);
  };

  const handleEditPersonal = () => {
    setIsEditingPersonal(true);
  };

  const handleEditAddress = () => {
    setIsEditingAddress(true);
  };

  return (
    <div className="flex justify-center items-start bg-white rounded-lg m-4 p-6 shadow-lg max-w-5xl">
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          My Profile
        </h2>

        <FormSection
          title="Personal Information"
          fields={["username", "email", "mobileno", "cnic"]}
          userInfo={userInfo}
          handleChange={handleChange}
          disabled={!isEditingPersonal}
          onEdit={isEditingPersonal ? undefined : handleEditPersonal}
        />

        <FormSection
          title="Address"
          fields={["address", "city", "province"]}
          userInfo={userInfo}
          handleChange={handleChange}
          disabled={!isEditingAddress}
          onEdit={isEditingAddress ? undefined : handleEditAddress}
        />

        <div className="flex justify-end">
          {(isEditingPersonal || isEditingAddress) && (
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
