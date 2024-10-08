import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Servicesadd() {
  const [service, setservice] = useState('');
  const [errors, setErrors] = useState({ service: '' });

  const validate = () => {
    const newErrors = {};
    if (!service) {
      newErrors.service = "service is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      toast.success("Form submitted successfully!");
    } else {
      toast.error("Please correct the errors in the form");
    }
  };

  return (
    <>
      <ToastContainer />

      <Link to={'/admin/services'}>
        <button
          type="button"
          className="bg-white text-center w-40 rounded-2xl h-14 relative font-sans text-black text-xxl font-semibold group"
        >
          <div
            className="bg-[#1FAE72] rounded-xl h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
          >
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="white"
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              ></path>
              <path
                fill="white"
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              ></path>
            </svg>
          </div>
          <p className="translate-x-2">Go Back</p>
        </button>
      </Link>

      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <input
                className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                  errors.service ? 'border-red-500' : 'border-gray-200'
                } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                type="text"
                placeholder="service"
                value={service}
                onChange={(e) => setservice(e.target.value)}
              />
              {errors.service && (
                <p className="text-red-500 text-xs mt-1">{errors.service}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="mt-5 px-5 tracking-wide ml-auto font-semibold bg-[#1FAE72] text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              <span className="text-white">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
