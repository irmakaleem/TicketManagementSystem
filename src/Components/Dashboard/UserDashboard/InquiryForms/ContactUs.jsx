import axios from "axios";
import React, { useState } from "react";
import { hostlink } from "../../../../Utils/HostLink";

const ContactUs = () => {
  //here i make a single state for all input fields
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // State variable for form validation errors
  const [errors, setErrors] = useState({});

  // Validation function to check if the input fields are valid
  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for validating email addresses
    const nameRegex = /^[a-zA-Z\s]+$/; // Regex for validating names (only letters and spaces)
    //here i call with the state variable formFields.name
    if (!nameRegex.test(formFields.name)) {
      errors.name = "Name can only contain letters and spaces";
    }
    if (!emailRegex.test(formFields.email)) {
      errors.email = "Invalid email address";
    }
    if (!formFields.subject) {
      errors.subject = "Subject is required";
    }
    if (!formFields.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    const validationErrors = validate(); // Perform validation
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
    } else {
      // Simulate form submission (replace this with an actual API call)
      //we use try catch for api, exception handling
      try {
        // /api/contactform this is an endpoint for an api
        const response = await axios.post(
          `${hostlink}/api/contactform`,
          formFields
        );
        //here the response will print successful not successful
        // Clear form fields and errors after successful submission
        if (response.status === 201) {
          alert("Form submitted successfully");
          setFormFields({ name: "", email: "", subject: "", message: "" });
        } else {
          alert("Error submitting form");
        }
      } catch (error) {
        console.error(error);
      }

      // Clear form fields and errors after submission
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrors({});
    }
  };
  // setTimeout is a function in which we call a callback function (arrow function)
  // setTimeout(()=>{})
  // () these brackets dont require a return keyword
  // {} these brackets require a return keyword
  // callback function in setter method of state requires a parameter
  // convention for naming the parameter is using prev word
  // setFormFields((prevFields)=>({ name: e.target.value,...prevFields }))
  // prevFields = {
  // name: "asdas",
  // email: "hgjkhjk",
  // subject: "",
  // message: "",
  // }
  //

  return (
    <div className="flex justify-center items-start bg-gray-100 m-4">
      <div className="w-full bg-white shadow-md rounded-lg p-6 sm:p-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formFields.name}
                //
                onChange={(e) =>
                  setFormFields((prevFields) => ({
                    ...prevFields,
                    name: e.target.value,
                  }))
                }
                className="mt-1 block w-full bg-transparent border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary-500 focus:border-primary-500"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formFields.email}
                // firstly we call ...prevfield, these spread operators are used for destructure the object so we use ...
                onChange={(e) =>
                  setFormFields((prevFields) => ({
                    ...prevFields,
                    email: e.target.value,
                  }))
                }
                className="mt-1 block w-full bg-transparent border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary-500 focus:border-primary-500"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formFields.subject}
              onChange={(e) =>
                setFormFields((prevFields) => ({
                  ...prevFields,
                  subject: e.target.value,
                }))
              }
              className="mt-1 block w-full bg-transparent border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.subject && (
              <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formFields.message}
              onChange={(e) =>
                setFormFields((prevFields) => ({
                  ...prevFields,
                  message: e.target.value,
                }))
              }
              className="mt-1 block w-full bg-transparent border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary-500 focus:border-primary-500"
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
