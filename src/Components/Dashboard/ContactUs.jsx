import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]+$/; // Only letters and spaces

    if (!nameRegex.test(name)) {
      errors.name = "Name can only contain letters and spaces";
    }
    if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!subject) {
      errors.subject = "Subject is required";
    }
    if (!message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({ name, email, subject, message });
    }
  };

  return (
    <div className="flex justify-center items-start  bg-gray-100  m-4">
      <div className=" w-full bg-white shadow-md rounded-lg p-6 sm:p-12">
        <h2 className="text-2xl font-semibold text-gray-800  mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-dark-text"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full bg-transparent border border-gray-300 dark:border-dark-border rounded-md shadow-sm p-2 dark:text-dark-text focus:ring-primary-500 focus:border-primary-500"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-dark-text"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full bg-transparent border border-gray-300 dark:border-dark-border rounded-md shadow-sm p-2 dark:text-dark-text focus:ring-primary-500 focus:border-primary-500"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-dark-text"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 block w-full bg-transparent border border-gray-300 dark:border-dark-border rounded-md shadow-sm p-2 dark:text-dark-text focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.subject && (
              <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-dark-text"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full bg-transparent border border-gray-300 rounded-md shadow-sm p-2  focus:ring-primary-500 focus:border-primary-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
