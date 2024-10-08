import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { CountryDropdown, RegionDropdown  } from 'react-country-region-selector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../utils/useAuth';
import { useDispatch } from 'react-redux';
import { login } from '../../utils/reudcers/Authslice';

export default function Register() {
  const [country, setCountry] = useState('');
  const [city, setcity] = useState('');
  const [email, setEmail] = useState('');
  const [name, setname] = useState('');

  const [number, setnumber]=useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('male');
  const [errors, setErrors] = useState({});
  const { authenticate, data, error, loading } = useAuth('register');
  const navigate = useNavigate(); 
const dispatch=useDispatch()
  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectcity = (val) => {
    setcity(val);
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!number) {
      newErrors.number = "number number is required";
    } else if (number.length !== 10) {
      newErrors.number = "number number must be 10 digits";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }
    if (!name) {
      newErrors.name = "name is required";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!country) {
      newErrors.country = "Country is required";
    }

    if (!city) {
      newErrors.city = "city is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (validate() && !loading) {
      await authenticate({name, email, number, password, country,city, gender });
    }
  };

  useEffect(() => {
    if (data) {
      if (data.error) {
        toast.error(data.error);
      } else if (data.errors) {
        toast.error('Invalid form');
        setErrors({
          email: data.errors.email ? data.errors.email[0] : '',
          number: data.errors.number ? data.errors.number[0] : '',
          password: data.errors.password ? data.errors.password[0] : '',
          confirmPassword: data.errors.confirmPassword ? data.errors.confirmPassword[0] : '',
          country: data.errors.country ? data.errors.country[0] : '',
          city: data.errors.city ? data.errors.city[0] : '',
          name: data.errors.name ? data.errors.name[0] : ''

        });
      } else {
        toast.success("Registration successful!");
        dispatch(login(data))
        if(data.user.role=='barber'){
          navigate('/admin')
        }else{
          navigate('/')
        }


      }
    } else if (error) {
      toast.error("An unexpected error occurred");
    }
  }, [data, error]);

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen text-gray-900 flex justify-center items-center">
        <div className="max-w-screen-xl bg-white sm:rounded-lg flex flex-col lg:flex-row">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <h1 className="mt-3 text-[2.5rem] text-center font-bold pb-5 leading-[3rem] tracking-tight text-black">
                  Sign-up
                </h1>
                <div className="mx-auto max-w-xs">
                  {/* Email Input */}
                  <div className="my-2">
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div className="my-2">
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                      } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                      type="name"
                      placeholder="name"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
               

                  <div className="my-2">
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                        errors.number ? 'border-red-500' : 'border-gray-200'
                      } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                      type="text"
                      placeholder="number"
                      value={number}
                      onChange={(e) => setnumber(e.target.value)}
                    />
                    {errors.number && (
                      <p className="text-red-500 text-xs mt-1">{errors.number}</p>
                    )}
                  </div>

                  {/* Password Input */}
                  <div className="my-2">
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                        errors.password ? 'border-red-500' : 'border-gray-200'
                      } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                    )}
                  </div>

                  {/* Confirm Password Input */}
                  <div className="my-2">
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
                      } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                    )}
                  </div>

                  {/* Country & city Inputs */}
                  <div className="my-2">
                    <CountryDropdown
                      value={country}
                      onChange={(val) => selectCountry(val)}
                      className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                        errors.country ? 'border-red-500' : 'border-gray-200'
                      } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                    />
                    {errors.country && (
                      <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                    )}
                  </div>

                  <div className="my-2">
                    <RegionDropdown
                      country={country}
                      value={city}
                      onChange={(val) => selectcity(val)}
                      className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                        errors.city ? 'border-red-500' : 'border-gray-200'
                      } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                    )}
                  </div>

                  {/* Gender Input */}
                  <div className="my-2">
                    <select
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  {/* Register Button */}
                  <button
                    className="mt-5 tracking-wide font-semibold bg-[#1FAE72] text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    onClick={handleRegister}
                    disabled={loading}
                  >
                    {loading ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2052 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2052 0 50.5908C0 22.9765 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9765 100 50.5908ZM9.08145 50.5908C9.08145 74.3687 26.2221 91.5094 50 91.5094C73.7779 91.5094 90.9186 74.3687 90.9186 50.5908C90.9186 26.8128 73.7779 9.67218 50 9.67218C26.2221 9.67218 9.08145 26.8128 9.08145 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7236 75.2124 7.41289C69.5422 4.10223 63.2754 1.94025 56.7335 1.05195C51.7661 0.367443 46.7345 0.446843 41.8086 1.27882C39.4005 1.69443 37.9005 4.19778 38.5376 6.62326C39.1747 9.04874 41.657 10.5181 44.065 10.1556C47.9247 9.53631 51.8679 9.5268 55.759 10.129C60.8783 10.9394 65.7861 12.8604 70.2157 15.7993C74.6453 18.7382 78.5168 22.6185 81.6026 27.239C84.1517 30.9048 86.1714 35.0102 87.5847 39.4317C88.3456 41.8126 91.5422 42.6999 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      'Register'
                    )}
                  </button>

                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Already have an account? <Link to="/sign-up">Sign-in</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-200 text-center hidden lg:flex">
            <img
              className="w-full object-cover rounded-r-lg"
              src="salon.jpg"
              alt="Registration"
            />
          </div>
        </div>
      </div>
    </>
  );
}

