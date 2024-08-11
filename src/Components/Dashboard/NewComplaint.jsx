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
  const [value, setValue] = useState("");
  //jese isme humne string lia wa abhi initial khali hai

  return (
    <div className="col-span-full">
      <div className="card p-0">
        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
          <h3 className="text-lg card-title leading-none">
            Fill This Form to Add New Complaint
          </h3>
        </div>
        <form className="p-6">
          <div className="flex lg:flex-row flex-col gap-x-4">
            {/* First 2 Dropdowns in one row */}
            <div className="flex lg:flex-row flex-col gap-x-4 w-full">
              <div className="w-full mb-4">
                <label htmlFor="full_name_1" className="form-label">
                  Choose Department
                </label>
                <select id="full_name_1" className="form-input" required>
                  <option value="" disabled selected>
                    Select a Department
                  </option>
                  <option value="">IT Department</option>
                  <option value="">DG Department</option>
                  <option value="">Finance Department</option>
                  <option value="">HR Department</option>
                  <option value="">Tax Department</option>
                  <option value="">Business Department</option>
                </select>
              </div>
              <div className="w-full mb-4">
                <label htmlFor="full_name_2" className="form-label">
                  Choose Subdeparment
                </label>
                <select id="full_name_2" className="form-input" required>
                  <option value="" disabled selected>
                    Select a Sub Deparment
                  </option>
                  <option value="">IT Department</option>
                  <option value="">DG Department</option>
                  <option value="">Finance Department</option>
                  <option value="">HR Department</option>
                  <option value="">Tax Department</option>
                  <option value="">Business Department</option>
                </select>
              </div>
            </div>
          </div>
          {/* Other fields come next in separate lines */}
          <div className="w-full mb-4">
            <label htmlFor="full_name_data" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="full_name_data"
              className="form-input"
              placeholder="Savannah Nguyen"
              autoComplete="off"
              required
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="email-6" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email-6"
              className="form-input"
              placeholder="martinahernandezc@gmail.com"
              autoComplete="off"
              required
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="password-6" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password-6"
              className="form-input"
              placeholder="**********"
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
                type="address"
                id="location"
                className="form-input"
                placeholder="6391 Elgin St. Celina, Delaware 10299"
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
                autoComplete="off"
                required
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="state" className="form-label">
                Designation
              </label>
              <input
                type="text"
                id="Designation"
                className="form-input"
                placeholder="Assistant Manager"
                autoComplete="off"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>

          {/* Description Box */}
          <div className="w-full mb-4">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              className="form-input"
              placeholder="Enter a Complain in Detail (Optional)"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="btn b-solid bg-blue-500 px-5 cursor-pointer"
          >
            Save &amp; Continue
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewComplaint;
