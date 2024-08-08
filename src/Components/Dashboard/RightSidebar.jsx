import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const RightSidebar = () => {
  return (
    <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
      <div className="card">
        <h2 className="card-title">Form Layout</h2>
      </div>
      <div className="grid grid-cols-12 gap-x-4">
        {/* FORM */}

        {/* FORM WITH ICON */}
        <div className="col-span-full lg:col-span-6">
          <div className="card p-0">
            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
              <h3 className="text-lg card-title leading-none">
                Form with icon
              </h3>
            </div>
            <form className="p-6">
              <div className="mb-4">
                <label
                  htmlFor="email-3"
                  className="block mb-2 font-medium text-gray-500 "
                >
                  Email
                </label>
                <div className="flex">
                  <span className="form-input-group input-icon !text-gray-900 ">
                    <i className="ri-mail-line text-inherit" />
                  </span>
                  <input
                    type="email"
                    id="email-3"
                    className="form-input rounded-l-none"
                    placeholder="martinahernandezc@gmail.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password-3"
                  className="block mb-2 font-medium text-gray-500 dark:text-dark-text"
                >
                  Password
                </label>
                <div className="flex">
                  <span className="form-input-group input-icon !text-gray-900 dark:text-dark-text">
                    <i className="ri-lock-unlock-line" />
                  </span>
                  <input
                    type="password"
                    id="password-3"
                    className="form-input rounded-l-none"
                    placeholder="**********"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 select-none mb-6">
                <input
                  id="check-s-2"
                  type="checkbox"
                  defaultChecked
                  className="check check-primary-solid size-4 before:text-sm before:leading-none"
                />
                <label
                  htmlFor="check-s-2"
                  className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm"
                >
                  Check Out
                </label>
              </div>
              <button
                type="submit"
                className="btn b-solid btn-primary-solid px-5 cursor-pointer"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
        {/* FORM WITH ICON LIGHT COLOR */}
        <div className="col-span-full lg:col-span-6">
          <div className="card p-0">
            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
              <h3 className="text-lg card-title leading-none">
                Form with icon light color
              </h3>
            </div>
            <form className="p-6">
              <div className="mb-4">
                <label
                  htmlFor="email-4"
                  className="block mb-2 font-medium text-gray-500 dark:text-dark-text"
                >
                  Email
                </label>
                <div className="flex">
                  <span className="form-input-group input-icon !text-gray-900 dark:text-dark-text">
                    <i className="ri-mail-line text-inherit" />
                  </span>
                  <input
                    type="email"
                    id="email-4"
                    className="form-input rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two"
                    placeholder="martinahernandezc@gmail.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password-4"
                  className="block mb-2 font-medium text-gray-500 dark:text-dark-text"
                >
                  Password
                </label>
                <div className="flex">
                  <span className="form-input-group input-icon !text-gray-900 dark:text-dark-text">
                    <i className="ri-lock-unlock-line" />
                  </span>
                  <input
                    type="password"
                    id="password-4"
                    className="form-input rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two"
                    placeholder="**********"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 select-none mb-6">
                <input
                  id="check-s-2"
                  type="checkbox"
                  defaultChecked
                  className="check check-primary-solid size-4 before:text-sm before:leading-none"
                />
                <label
                  htmlFor="check-s-2"
                  className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm"
                >
                  Check Out
                </label>
              </div>
              <button
                type="submit"
                className="btn b-solid btn-primary-solid px-5 cursor-pointer"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
        {/* INFO FORM */}
        <div className="col-span-full">
          <div className="card p-0">
            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
              <h3 className="text-lg card-title leading-none">Info From</h3>
            </div>
            <form className="p-6">
              <div className="flex lg:flex-row flex-col gap-x-4">
                <div className="w-full mb-4">
                  <label htmlFor="full_name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    className="form-input"
                    placeholder="Martina Hernandezc"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="address-1" className="form-label">
                    Address
                  </label>
                  <input
                    type="address"
                    id="address-1"
                    className="form-input"
                    placeholder="6391 Elgin St. Celina, Delaware 10299"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="flex lg:flex-row flex-col gap-x-4">
                <div className="w-full mb-4">
                  <label htmlFor="email-5" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email-5"
                    className="form-input"
                    placeholder="martinahernandezc@gmail.com"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="password-5" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password-5"
                    className="form-input"
                    placeholder="**********"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 select-none mb-6">
                <input
                  id="check-s-1"
                  type="checkbox"
                  defaultChecked
                  className="check check-primary-solid size-4 before:text-sm before:leading-none"
                />
                <label
                  htmlFor="check-s-1"
                  className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm"
                >
                  Check Out
                </label>
              </div>
              <button
                type="submit"
                className="btn b-solid btn-primary-solid px-5 cursor-pointer"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
        {/* DATA FORM */}
        <DataForm />
      </div>
    </div>
  );
};

const DataForm = () => {
  // wihtout learning  react how can someone do react?lol
  const [value, setValue] = useState("");

  return (
    <div className="col-span-full">
      <div className="card p-0">
        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
          <h3 className="text-lg card-title leading-none">Data From</h3>
        </div>
        <form className="p-6">
          <div className="flex lg:flex-row flex-col gap-x-4">
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
                State
              </label>
              <input
                type="text"
                id="state"
                className="form-input"
                placeholder="8080 Railroad St."
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            {/* <textarea className="summernote" defaultValue={""} /> */}
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>
          <div className="flex items-center gap-2 select-none mb-6">
            <input
              id="check-s-1"
              type="checkbox"
              defaultChecked
              className="check check-primary-solid size-4 before:text-sm before:leading-none"
            />
            <label
              htmlFor="check-s-1"
              className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm"
            >
              Check Out
            </label>
          </div>
          <button
            type="submit"
            className="btn b-solid btn-primary-solid px-5 cursor-pointer"
          >
            Save &amp; Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default RightSidebar;
