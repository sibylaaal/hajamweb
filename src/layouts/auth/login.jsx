import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../utils/useAuth';
import { useDispatch } from 'react-redux';
import { login } from '../../utils/reudcers/Authslice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { authenticate, data, error, loading } = useAuth('login');
  const navigate = useNavigate(); 

   const dispatch=useDispatch()

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (validate() && !loading) {
      await authenticate({ email, password });
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
          password: data.errors.password ? data.errors.password[0] : ''
        });
      } else {
        toast.success("Login successful!");
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
                <div className="my-8 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign in with Cartesian E-mail
                  </div>
                </div>
                <div className="mx-auto max-w-xs">
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
                  <div className="my-4">
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                        errors.password ? 'border-red-500' : 'border-gray-200'
                      } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                    )}
                  </div>
                  <button
                    className="mt-5 tracking-wide font-semibold bg-[#1FAE72] text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    onClick={handleLogin}
                    disabled={loading}
                  >

{
  loading? (

    <div role="status">
  <svg
    aria-hidden="true"
    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
  <span className="sr-only">Loading...</span>
</div>

  )
  :
  (<> 
                     <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3 text-white">Sign In</span>
                    </>)
}

                    
                  
                  </button>
                  <p className="mt-6 text-gray-600 text-center">
                    I don't have an account
                    <Link to={'/sign-in'} className="font-bold ml-2 text-[#1FAE72]">
                      Sign-in
                    </Link>
                  </p>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by Cartesian Kinetics
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Terms of Service
                    </a>
                    and its
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center hidden lg:flex justify-center items-center">
            <img src='/salon.jpg' alt="Banner" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
