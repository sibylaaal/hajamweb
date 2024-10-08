import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuthRedirect from '../../utils/useMiddleware';

export default function Formbarber() {
  
  const [errors, setErrors] = useState({});
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [workers, setWorkers] = useState('');
  const [logo, setLogo] = useState(null);
  const [description, setDescription] = useState('');
  const [username, setUsername] = useState('');
  const [isBarber, setIsBarber] = useState('');


  const User = useAuthRedirect();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
   


  

    // Additional validations
    if (!startDate) {
      newErrors.startDate = "Start date is required";
    }

    if (!endDate) {
      newErrors.endDate = "End date is required";
    }

    if (!workers) {
      newErrors.workers = "Number of workers is required";
    }


    if (!description) {
      newErrors.description = "Description is required";
    }

    if (!username) {
      newErrors.username = "Username is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validate()) {
      toast.success("Registration successful!");
    } else {
      toast.error("Please correct the errors in the form");
    }
  };

  return (
    
      User&&(   <>
        <ToastContainer />
        <div className="min-h-screen text-gray-900 flex justify-center items-center">
          <div className="max-w-screen-xl bg-white rounded-lg flex flex-col lg:flex-row">
            <div className="p-6 flex flex-col">
              <div className="flex flex-col items-center">
                <div className="w-full flex-1 mt-8">
                  <h1 className="mt-3 text-[2.5rem] text-center font-bold pb-5 leading-[3rem] tracking-tight text-black">
                    Become a Certified Barber
                  </h1>
                  <div className="my-8 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      You’re going to get more clients, fast reservations
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 mx-auto max-w-3xl">
                    {/* Form Fields */}
               
                    <div className="">
                      <div className="my-2">
                        <input
                          className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                            errors.username ? 'border-red-500' : 'border-gray-200'
                          } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username && (
                          <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                        )}
                      </div>
                 
                  
                 
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  
                      <div className="my-2">
                        <input
                          className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                            errors.startDate ? 'border-red-500' : 'border-gray-200'
                          } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                          type="date"
                          placeholder="Start Date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                        />
                        {errors.startDate && (
                          <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>
                        )}
                      </div>
                      <div className="my-2">
                        <input
                          className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                            errors.endDate ? 'border-red-500' : 'border-gray-200'
                          } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                          type="date"
                          placeholder="End Date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                        {errors.endDate && (
                          <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>
                        )}
                      </div>
                   
                    </div>   <div className="my-2">
                        <input
                          className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                            errors.workers ? 'border-red-500' : 'border-gray-200'
                          } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                          type="number"
                          placeholder="Number of Workers"
                          value={workers}
                          onChange={(e) => setWorkers(e.target.value)}
                        />
                        {errors.workers && (
                          <p className="text-red-500 text-xs mt-1">{errors.workers}</p>
                        )}
                      </div>
                    <div className=" gap-4 ">
                   
                      <div className="my-2">
                        <textarea
                          className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                            errors.description ? 'border-red-500' : 'border-gray-200'
                          } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                          placeholder="Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                        {errors.description && (
                          <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                        )}
                      </div>
                    </div>
                    <div className="my-2">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="file"
                        onChange={(e) => setLogo(e.target.files[0])}
                      />
                    </div>
                    <div className="my-4">
                      <button
                        className="w-full py-3 bg-[#1FAE72] rounded-lg text-white font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-[#1FAE72] focus:ring-opacity-50"
                        onClick={handleRegister}
                      >
                        Register
                      </button>
                    </div>
                  </div>
              
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </>)
    
 
  );
}
