import React, { useState } from "react";

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
const ProfileHeader = ({ userInfo, onProfilePicClick, isEditable }) => (
  <div className="flex items-center space-x-4 mb-8">
    <div className="relative">
      <img
        src={userInfo.profilePic || "https://via.placeholder.com/150"}
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
      <h3 className="text-lg font-medium">{`${userInfo.firstName} ${userInfo.lastName}`}</h3>
      <p className="text-sm text-gray-500">{userInfo.bio}</p>
      <p className="text-sm text-gray-400">{`${userInfo.city}, ${userInfo.country}`}</p>
    </div>
    <button className="text-blue-500 hover:underline">
      {isEditable ? "Save" : "Edit"}
    </button>
  </div>
);

// Form Section Component
const FormSection = ({ title, fields, userInfo, handleChange, isEditable }) => (
  <div className="bg-gray-50 p-4 rounded-md mb-8">
    <div className="flex justify-between items-center mb-4">
      <h4 className="text-md font-medium mb-4">{title}</h4>
    </div>

    <div className="grid grid-cols-2 gap-4">
      {fields.map((field) => (
        <InputField
          key={field}
          name={field}
          value={userInfo[field]}
          onChange={handleChange}
          isEditable={isEditable}
        />
      ))}
    </div>
  </div>
);

const AccountDetails = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bio: "",
    country: "",
    city: "",
    postalCode: "",
    taxId: "",
    profilePic: "",
  });

  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Example regex validation
    const validationPatterns = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^\d{10}$/, // Example for a 10-digit phone number
      postalCode: /^\d{5}(-\d{4})?$/, // US ZIP code format
      taxId: /^[A-Z0-9]{9}$/, // Example for a 9-character alphanumeric tax ID
    };

    if (validationPatterns[name] && !validationPatterns[name].test(value)) {
      return; // Skip update if validation fails
    }

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Handle the save action here
    setIsEditable(false);
    console.log("User info saved:", userInfo);
  };

  const handleProfilePicClick = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setUserInfo({
          ...userInfo,
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
          userInfo={userInfo}
          onProfilePicClick={handleProfilePicClick}
          isEditable={isEditable}
        />

        <FormSection
          title="Personal Information"
          fields={["firstName", "lastName", "email", "phone", "bio"]}
          userInfo={userInfo}
          handleChange={handleChange}
          isEditable={isEditable}
        />

        <FormSection
          title="Address"
          fields={["country", "city", "postalCode", "taxId"]}
          userInfo={userInfo}
          handleChange={handleChange}
          isEditable={isEditable}
        />

        <div className="flex justify-end">
          <button
            onClick={() => (isEditable ? handleSave() : setIsEditable(true))}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {isEditable ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
