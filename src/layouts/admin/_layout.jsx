import { Link, Outlet } from "react-router-dom";
import useAuthRedirect from "../../utils/useMiddleware";
import { useDispatch } from "react-redux";
import { logout } from "../../utils/reudcers/Authslice";

export default function AdminLayout() {
   const User = useAuthRedirect();

   const dispatch=useDispatch()
  return (
    
      User&&(<div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-r border-gray-200 flex flex-col">
        <div className="px-4 py-6">
          <img className="h-[40px] w-auto rounded-xl" src="/logo.png" alt="logo" />
        </div>
        <ul className="flex-1 px-2 py-4 space-y-1">
          <li>
          <li>
            <Link to={'/admin'}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
            >
              General
            </Link>
          </li>
          <li>
            <Link to={'/admin/Schedule'}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
            >
              Schedule
            </Link>
          </li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700">
                <span className="text-sm font-medium">Reservations</span>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <ul className="mt-2 space-y-1 px-4">
                <li>
                <Link to={'reservations/inprogress'}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                  >
                    in-progress
                  </Link>
                </li>
                <li>
                <Link to={'reservations/completed'}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                  >
                    Completed
                  </Link>
                </li>
                <li>
                <Link to={'reservations/cancelled'}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                  >
                    Cancelled
                  </Link>
                </li>
                <li>
                <Link to={'reservations/upcoming'}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                  >
                    Upcoming
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to={'clients'}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700"
            >
              Clients
            </Link>
          </li>
          <li>
            <Link to={'services'}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700"
            >
              Services 
            </Link>
          </li>
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700">
                <span className="text-sm font-medium">Account</span>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <ul className="mt-2 space-y-1 px-4">
                <li>
                <Link  to={'profile'}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                <Link  to={'/'}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                  >
                    home
                  </Link>
                </li>
                <li>
                  <form action="#">
                    <button
                    onClick={()=>dispatch(logout())}
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                    >
                      Logout
                    </button>
                  </form>
                </li>
          
              </ul>
            </details>
          </li>
        </ul>

        {/* User profile */}
        <div className="border-t border-gray-200">
          <a
            href="#"
            className="flex items-center gap-2 p-4 hover:bg-gray-50"
          >
            <img
              alt="User profile"
              src="https://www.pngkey.com/png/detail/121-1219231_user-default-profile.png"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-bold">
                <strong className="block font-bold ">Eric Frusciante</strong>
                <span>eric@frusciante.com</span>
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 p-4">
        <Outlet /> {/* This will render the nested route components */}
      </main>
    </div>)
    
   
  );
}
