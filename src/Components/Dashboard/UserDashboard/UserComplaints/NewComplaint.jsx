import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";

import "react-quill/dist/quill.snow.css";
import { json, useNavigate, useParams } from "react-router-dom";
import { hostlink } from "../../../../Utils/HostLink";

const NewComplaint = () => {
  // grabbing the id from the url if the user wants to edit the complain
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  const fetchUserTicket = async () => {
    //api may jo id pass krware wo hamare pass hamari url se arhi
    //  const { id } = useParams(); ye wali id pass hori
    const url = `${hostlink}/api/NewComplaint/${id}`;
    const response = await axios.get(url);
    const userTicket = response.data;
    setTicket(userTicket);
  };
  useEffect(() => {
    fetchUserTicket();
  }, []);

  // checking if the data of the complain is coming or not
  return (
    <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
      <div className="card">
        <h2 className="card-title">New Complaints</h2>
      </div>
      <div className="grid grid-cols-12 gap-x-4">
        {/* FORM */}
        {/* DATA FORM */}
        {/* ticket wali state ko pass krwana hoga as props smjhi? parent se child component may lekr jana dataform chil hai , NewComplaint ye parent hai parent may state hai ticket useme hamara data arha complain ka */}
        <DataForm ticket={ticket} />
      </div>
    </div>
  );
};

const DataForm = ({ ticket }) => {
  const navigate = useNavigate();
  const savedLocalStorageLoggedInUserData = JSON.parse(
    localStorage.getItem("user")
  );
  const [formData, setFormData] = useState({
    department: "",
    subDepartment: 1002,
    fullName: savedLocalStorageLoggedInUserData.fullName,
    email: savedLocalStorageLoggedInUserData.email,
    designation: "",
    description: "",
    // ye stringified form may aega user ka object hume parse krwana hota
    userId: savedLocalStorageLoggedInUserData?.id,
    subject: "",
    status: "open",
    severitylevel: "low",
    assignedto: "admin",
  });
  // ticket jo props se arha hume check krna ke ticket null hai ya object mtlb data hai ticket wali state may
  // confusing lagega bas ye check krware ticket jo props se aya hamare pass wo null hai ya nhi agr null hai to initial jo hum object banakr pass krware the at the time of submitting new complaint wohi ajaega lekn agr ticket filled arha mtlb null nhi arha to phr hume pta lagjaega ke user edit krne aya to hum initial object ki jaga filled ticket wala jo object arha wo pass krwadengay
  // lekn ye aese initial pass nhi hora mtlb jo ticket wala data arha wo direct formData may set nhi hora
  useEffect(() => {
    if (ticket) {
      setFormData(ticket);
    }
  }, [ticket]);

  const [complaintDetail, setComplaintDetail] = useState("");
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  // Regex patterns
  const regexPatterns = {
    fullName: /^[a-zA-Z\s]+$/, // Only letters and spaces
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email pattern
    phone: /^[0-9]{10,11}$/, // E.g., (+33)7 55 55 33 70
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

  // Handle new form submission
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (validateForm()) {
      formData.department = parseInt(formData.department);
      try {
        // /api/contactform this is an endpoint for an api
        const response = await axios.post(
          `${hostlink}/api/newcomplaint`,
          formData
        );

        // Clear form fields and errors after successful submission
        if (response.status === 201) {
          alert("Form submitted successfully");
          // hume har new complaint ki id kahin pr save krwani hogy mtlb application may agr hum state use krengay srf to , state refresh hone pr initial value banjati hai mtlb agr state update bhi hui hogy to bhi wo hatjaegy new value or initial value ajaegy,smjhi? han to hume localstorgay istemal krna hoga kunke usme values refresh hone pr brwoser band hone pr bhi save rehtin

          // here response.data is coming from the form we submitted, response.data is an object in which all our data (id,email,name,department etc) from newcomplain form is inside response.data
          //After submitting the form successfully user will redirect to the ticketpage,we use navigate to redirect to another page(/dashboard/ticketpage)
          //${response.data.id} here we are grabbing the new complaint id from response.data object
          //we are grabbing because we want to target certain complaint which user just filled, to open his/her complain on ticket page.
          //eg/dashboard/ticketpage/1 1=id
          setLoading(false);
          navigate(`/dashboard/ticketpage/${response.data.id}`);
        } else {
          alert("Error submitting form");
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
      setComplaintDetail("");
    }
  };

  // Handle already added form submission
  const handleEdit = async (e) => {
    setLoading(false);
    e.preventDefault();
    if (validateForm()) {
      formData.department = parseInt(formData.department);
      try {
        // /api/contactform this is an endpoint for an api
        // jab insert krwate to post ,or update krwate to put
        // endpoint may id bhi jaati and method different hojata
        const response = await axios.put(
          `${hostlink}/api/newcomplaint/${formData?.id}`,
          formData
        );

        // Clear form fields and errors after successful submission
        // response ka status bhi different hota update may 204 milta agr sahi se update hota
        if (response.status === 204) {
          alert("Complain updated successfully");
          // hume har new complaint ki id kahin pr save krwani hogy mtlb application may agr hum state use krengay srf to , state refresh hone pr initial value banjati hai mtlb agr state update bhi hui hogy to bhi wo hatjaegy new value or initial value ajaegy,smjhi? han to hume localstorgay istemal krna hoga kunke usme values refresh hone pr brwoser band hone pr bhi save rehtin

          // here response.data is coming from the form we submitted, response.data is an object in which all our data (id,email,name,department etc) from newcomplain form is inside response.data
          //After submitting the form successfully user will redirect to the ticketpage,we use navigate to redirect to another page(/dashboard/ticketpage)
          //${response.data.id} here we are grabbing the new complaint id from response.data object
          //we are grabbing because we want to target certain complaint which user just filled, to open his/her complain on ticket page.
          //eg/dashboard/ticketpage/1 1=id
          // baki sab kch same
          setLoading(false);
          navigate(`/dashboard/ticketpage/${formData.id}`);
        } else {
          alert("Error submitting form");
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
      setComplaintDetail("");
    }
  };

  const handleQuillChange = (content) => {
    setFormData((prevFields) => ({
      ...prevFields,
      description: content, // Or you can use content (HTML string) if preferred
    }));
  };
  console.log(formData); // Add this before API calls

  return (
    <div className="col-span-full">
      <div className="card p-0">
        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
          <h3 className="text-lg card-title leading-none">
            Fill This Form to Add New Complaint
          </h3>
        </div>
        <form className="p-6" onSubmit={ticket ? handleEdit : handleSubmit}>
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
                  <option value="1">IT Department</option>
                  <option value="2">Finance Department</option>
                  <option value="3">DG Department</option>
                  <option value="4">HR Department</option>
                  <option value="5">Billing Department</option>
                  <option value="6">CNS Department</option>
                  <option value="7">Tax Department</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col gap-x-4 mb-2">
            <div className="w-full mb-4">
              <label htmlFor="location" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="location"
                className="form-input"
                placeholder="Enter Your Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData((prevFields) => ({
                    ...prevFields,
                    subject: e.target.value,
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

          <button
            type="submit"
            className="btn b-solid bg-blue-500 px-5 cursor-pointer text-white"
            disabled={loading ? true : false}
          >
            {/* agr edit krne aya to edit text show hojaega */}
            {ticket
              ? loading
                ? "Loading..."
                : "Edit & Continue"
              : loading
              ? "Loading..."
              : "Save & Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewComplaint;
