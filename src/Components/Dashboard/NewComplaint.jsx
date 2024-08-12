import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NewComplaint = () => {
  return (
    <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
      <div className="card">
        <h2 className="card-title">New Complaints</h2>
      </div>
      <div className="grid grid-cols-12 gap-x-4">
        {/* FORM */}
        {/* DATA FORM */}
        <DataForm />
      </div>
    </div>
  );
};

const DataForm = () => {
  const [formData, setFormData] = useState({
    department: "",
    subDepartment: "",
    fullName: "",
    email: "",
    password: "",
    location: "",
    phone: "",
    designation: "",
    description: "",
  });

  const [complaintDetail, setComplaintDetail] = useState("");
  const [errors, setErrors] = useState({});

  // Regex patterns
  const regexPatterns = {
    fullName: /^[a-zA-Z\s]+$/, // Only letters and spaces
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email pattern
    phone: /^\(\+\d{2,3}\)\d{1,3}\s\d{2,3}\s\d{2,3}\s\d{2,3}$/, // E.g., (+33)7 55 55 33 70
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Validate inputs using regex
  const validateForm = () => {
    const newErrors = {};
    if (!regexPatterns.fullName.test(formData.fullName)) {
      newErrors.fullName = "Full Name can only contain letters and spaces";
    }
    if (!regexPatterns.email.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!regexPatterns.phone.test(formData.phone)) {
      newErrors.phone = "Invalid phone format, use: (+33)7 55 55 33 70";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", { ...formData, complaintDetail });
      // Reset form
      setFormData({
        department: "",
        subDepartment: "",
        fullName: "",
        email: "",
        password: "",
        location: "",
        phone: "",
        designation: "",
        description: "",
      });
      setComplaintDetail("");
    }
  };

  return (
    <div className="col-span-full">
      <div className="card p-0">
        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
          <h3 className="text-lg card-title leading-none">
            Fill This Form to Add New Complaint
          </h3>
        </div>
        <form className="p-6" onSubmit={handleSubmit}>
          <div className="flex lg:flex-row flex-col gap-x-4">
            {/* First 2 Dropdowns in one row */}
            <div className="flex lg:flex-row flex-col gap-x-4 w-full">
              <div className="w-full mb-4">
                <label htmlFor="department" className="form-label">
                  Choose Department
                </label>
                <select
                  id="department"
                  className="form-input"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select a Department
                  </option>
                  <option value="IT Department">IT Department</option>
                  <option value="DG Department">DG Department</option>
                  <option value="Finance Department">Finance Department</option>
                  <option value="HR Department">HR Department</option>
                  <option value="Tax Department">Tax Department</option>
                  <option value="Business Department">
                    Business Department
                  </option>
                </select>
              </div>
              <div className="w-full mb-4">
                <label htmlFor="subDepartment" className="form-label">
                  Choose Sub-Department
                </label>
                <select
                  id="subDepartment"
                  className="form-input"
                  value={formData.subDepartment}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select a Sub-Department
                  </option>
                  <option value="IT Department">IT Department</option>
                  <option value="DG Department">DG Department</option>
                  <option value="Finance Department">Finance Department</option>
                  <option value="HR Department">HR Department</option>
                  <option value="Tax Department">Tax Department</option>
                  <option value="Business Department">
                    Business Department
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Other fields come next in separate lines */}
          <div className="w-full mb-4">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="form-input"
              placeholder="Savannah Nguyen"
              value={formData.fullName}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>
          <div className="w-full mb-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="martinahernandezc@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="w-full mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="**********"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
          </div>

          <div className="flex lg:flex-row flex-col gap-x-4 mb-2">
            <div className="w-full mb-4">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="form-input"
                placeholder="6391 Elgin St. Celina, Delaware 10299"
                value={formData.location}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="form-input"
                placeholder="(+33)7 55 55 33 70"
                value={formData.phone}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div className="w-full mb-4">
              <label htmlFor="designation" className="form-label">
                Designation
              </label>
              <input
                type="text"
                id="designation"
                className="form-input"
                placeholder="Assistant Manager"
                value={formData.designation}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <ReactQuill
              theme="snow"
              value={complaintDetail}
              onChange={setComplaintDetail}
            />
          </div>

          {/* Description Box */}
          <div className="w-full mb-4">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              className="form-input"
              placeholder="Enter a Complaint in Detail (Optional)"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="btn b-solid bg-blue-500 px-5 cursor-pointer text-white"
          >
            Save &amp; Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewComplaint;
