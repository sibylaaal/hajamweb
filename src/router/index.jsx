import { createBrowserRouter } from "react-router-dom";
import LayoutLanding from "../layouts/user/_layoutLanding";
import Waitinglist from "../layouts/user/_layoutwaitinglist";
import Login from "../layouts/auth/login";
import Register from "../layouts/auth/register";
import HomePage from "../layouts/user/_layouthome";
import BarberDetails from "../layouts/user/_detailsalon";
import Myfav from "../layouts/user/_myfavlayout";
import MyReservations from "../layouts/user/_myreservationlayout";
import AdminLayout from "../layouts/admin/_layout";
import Home from "../layouts/admin/genrale/home";
import Client from "../layouts/admin/genrale/clients";
import Completed from "../layouts/admin/genrale/reservations/completed";
import Upcoming from "../layouts/admin/genrale/reservations/upcoming";
import InProgress from "../layouts/admin/genrale/reservations/progress";
import Cancelled from "../layouts/admin/genrale/reservations/cancelled";
import Profile from "../layouts/admin/genrale/profile";
import Formbarber from "../layouts/user/formbarber";
import News from "../layouts/user/news";
import NewsDetails from "../layouts/user/newsdetails";
import Services from "../layouts/admin/genrale/service";
import ServicesDetails from "../layouts/admin/genrale/servicedetails";
import ServicesDetailsadd from "../layouts/admin/genrale/servicedetails/create";
import Servicesadd from "../layouts/admin/genrale/service/create";
import ServicesUpdate from "../layouts/admin/genrale/service/update";
import ServicesUpdatedetails from "../layouts/admin/genrale/servicedetails/update";
import Gallery from "../layouts/user/_gallerylayout";
import BarberSchedule from "../layouts/admin/genrale/reservations";





export  const Router=createBrowserRouter([
    {
        path:'/',
        element:<LayoutLanding/>
    },
    {
        path:'/waiting-list',
        element:<Waitinglist/>
    },
    {
        path:'/sign-up',
        element:<Login/>
    },
    {
        path:'/sign-in',
        element:<Register/>
    },
    {
        path:'/salons',
        element:<HomePage/>
    },
    {
        path:'/salon/:id',
        element:<BarberDetails/>
    },
    {
        path:'/Favorites',
        element:<Myfav/>
    },{
        path:'/reservations',
        element:<MyReservations/>
    },
    {
        path:'/admin',
        element:<AdminLayout/>,
        children:[
            {
                index:true,
                element:<Home/>,

            },
            {
                path:'clients',
                element:<Client/>
            },
            {
                path:'Schedule',
                element:<BarberSchedule/>

            },
            {
                path:'reservations/completed',
                element:<Completed/>
            },{
                path:'reservations/upcoming',
                element:<Upcoming/>
            },{
                path:'reservations/cancelled',
                element:<Cancelled/>
            },{
                path:'reservations/inprogress',
                element:<InProgress/>
            },{
                path:'profile',
                element:<Profile/>
            },
            {
                path:'services',
                element:<Services/>
            }
            ,{
                path:'service/add',
                element:<Servicesadd/>
            }
            ,
            {
                path:'service/:id',
                element:<ServicesDetails/>
            },{
                path:'service/:id/add',
                element:<ServicesDetailsadd/>
            },{
                path:'service/:id/:service/edit',
                element:<ServicesUpdate/>

            },{
path:'service/details/:id/:service/edit',
element:<ServicesUpdatedetails/>
            }
        ]
    },{
        path:'/register/barber',
        element:<Formbarber/>
    },
    {
        path:'news',
        element:<News/>
    },
    {
        path:'gallery',
        element:<Gallery/>
    }
    ,{
        path:'news/:id',
        element:<NewsDetails/>
    }
])