import axios from "axios";
import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";

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
    phone: /^[0-9]{9}$/, // E.g., (+33)7 55 55 33 70
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
      newErrors.phone = "Invalid phone format, use: 9 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", { ...formData, complaintDetail });
      try {
        // /api/contactform this is an endpoint for an api
        const response = await axios.post(
          "https://localhost:44383/api/newcomplaint",
          formData
        );

        // Clear form fields and errors after successful submission
        if (response.status === 201) {
          alert("Form submitted successfully");
          // hume har new complaint ki id kahin pr save krwani hogy mtlb application may agr hum state use krengay srf to , state refresh hone pr initial value banjati hai mtlb agr state update bhi hui hogy to bhi wo hatjaegy new value or initial value ajaegy,smjhi? han to hume localstorgay istemal krna hoga kunke usme values refresh hone pr brwoser band hone pr bhi save rehtin

          // jesi ye form submit hoga to hamare pass yaad ho tumhe response.data may saari details arhi thin?
          setFormData({
            department: "",
            subDepartment: "",
            fullName: "",
            email: "",

            location: "",
            phone: "",
            designation: "",
            description: "",
          });
        } else {
          alert("Error submitting form");
        }
      } catch (error) {
        console.log(error);
      }
      setComplaintDetail("");
    }
  };

  const selectDepartments = {
    "IT Department": ["Slow Internet", "Server Down", "Resource"],
    "HR Department": [
      "Leave Request",
      "Employee Grievance",
      "Employee Benefits",
    ],
    "Finance Department": ["Payment Issues", "Expense Claims", "Budgeting"],
    "Security Department": [
      "Security Breach",
      "Access Control",
      "Security Cameras",
    ],
    "DG Department": ["Facilities Maintenance", "Equipment Issues", "Parking"],
  };

  const handleQuillChange = (content, delta, source, editor) => {
    setFormData((prevFields) => ({
      ...prevFields,
      description: content, // Or you can use content (HTML string) if preferred
    }));
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
                  onChange={(e) =>
                    setFormData((prevFields) => ({
                      ...prevFields,
                      department: e.target.value,
                    }))
                  }
                  required
                >
                  <option value="" disabled>
                    Select a Department
                  </option>
                  <option value="IT Department">IT Department</option>
                  <option value="DG Department">DG Department</option>
                  <option value="Finance Department">Finance Department</option>
                  <option value="HR Department">HR Department</option>
                  <option value="Security Department">
                    Security Department
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
                  onChange={(e) =>
                    setFormData((prevFields) => ({
                      ...prevFields,
                      subDepartment: e.target.value,
                    }))
                  }
                  required
                >
                  <option value="" disabled>
                    Select a Sub-Department
                  </option>
                  {selectDepartments[formData.department]?.length > 0 &&
                    selectDepartments[formData.department].map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
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
              onChange={(e) =>
                setFormData((prevFields) => ({
                  ...prevFields,
                  fullName: e.target.value,
                }))
              }
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
              onChange={(e) =>
                setFormData((prevFields) => ({
                  ...prevFields,
                  email: e.target.value,
                }))
              }
              autoComplete="off"
              required
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
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
                onChange={(e) =>
                  setFormData((prevFields) => ({
                    ...prevFields,
                    location: e.target.value,
                  }))
                }
                autoComplete="off"
                required
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                className="form-input"
                placeholder="(+33)7 55 55 33 70"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prevFields) => ({
                    ...prevFields,
                    phone: e.target.value,
                  }))
                }
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
                onChange={(e) =>
                  setFormData((prevFields) => ({
                    ...prevFields,
                    designation: e.target.value,
                  }))
                }
                autoComplete="off"
                required
              />
            </div>
          </div>

          <div className="w-full mb-4">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <ReactQuill
              theme="snow"
              value={formData.description}
              onChange={handleQuillChange}
            />
          </div>

          {/* Description Box
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
              onChange={(e) =>
                setFormData((prevFields) => ({
                  ...prevFields,
                  description: e.target.value,
                }))
              }
            />
          </div> */}
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
