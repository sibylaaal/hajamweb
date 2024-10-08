import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  SquaresPlusIcon,
  UserGroupIcon,
  CalendarIcon,
  HeartIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../utils/reudcers/Authslice";

const navListMenuItems = [
  { title: "salons", description: "Find the best salons in your area.", icon: SquaresPlusIcon },
  { title: "reservations", description: "View and manage your upcoming appointments.", icon: CalendarIcon },
  { title: "favorites", description: "See your favorite salons and services.", icon: HeartIcon },
  { title: "news", description: "Stay updated with the latest industry news and trends.", icon: NewspaperIcon },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { t } = useTranslation();
  
  const renderItems = navListMenuItems.map(({ icon, title, description }, key) => (
    <Link to={`/${title}`} key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg bg-black-50 p-2">
          {React.createElement(icon, { strokeWidth: 2, className: "h-6 w-6 text-gray-900" })}
        </div>
        <div>
          <Typography variant="h6" color="black" className="flex items-center text-sm font-bold">
            {t(title)}
          </Typography>
          <Typography variant="paragraph" className="text-xs font-medium text-black-500">
            {t(description)}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {t("resources")}
              <ChevronDownIcon strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""}`} />
              <ChevronDownIcon strokeWidth={2.5} className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""}`} />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const { t } = useTranslation();
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography as="a" href="#" variant="small" color="black" className="font-medium">
        <Link to={'/'}> <ListItem className="flex items-center gap-2 py-2 pr-4">{t("home")}</ListItem></Link>
      </Typography>
      <NavListMenu />
      <Typography as="a" href="#" variant="small" color="black" className="font-medium">
        <Link to={'/news'}> <ListItem className="flex items-center gap-2 py-2 pr-4">{t("news")}</ListItem></Link>
      </Typography>
      <Typography as="a" href="#" variant="small" color="black" className="font-medium">
        <Link to={'/gallery'}> <ListItem className="flex items-center gap-2 py-2 pr-4">{t("gallery")}</ListItem></Link>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
  const user = useSelector((state) => state.auth.user);

const dispatch=useDispatch()
  return (
    <Navbar shadow={0} className="mx-auto max-w-screen-xl px-4 pt-5">
      <div className="flex items-center justify-between text-black-900">
        <Typography as="a" href="#" variant="h6" className="mr-4 cursor-pointer py-1.5 lg:ml-2">
          <img className="h-[40px] w-auto rounded-xl" src="/logo.png" alt="logo" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        {
          user?
          (
            <div className="relative inline-block text-left">
            {/* Button to show user full name on mobile and rounded initials on desktop */}
            <button
              onClick={toggleDropdown}
              className="rounded-lg px-4 py-2 text-gray-900 cursor-pointer"
            >
              {/* Show full name on mobile (small screens) */}
        
              {/* Show rounded initials on desktop (large screens) */}
              <div className="hidden sm:inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                <span className="font-medium text-gray-600">
                  {user.user.name.substring(0, 2)}
                </span>
              </div>
            </button>
          
            {/* Dropdown menu */}
            {isOpen && (
              <div className="absolute right-10 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <div className="px-4 py-3 text-sm text-gray-900">
                  <div>{user.user.name}</div>
                  <div className="font-medium truncate">{user.user.email}</div>
                </div>
                <ul className="py-2 text-sm text-gray-700">
                  {
                    user.user.role=='barber'?(
                       <li>
                    <Link  to={'/admin'} className="block px-4 py-2 hover:bg-gray-100">
                      Dashboard
                    </Link>
                  </li>
                    ):(
                      <li>
                      <Link  to={'/register/barber'} className="block px-4 py-2 hover:bg-gray-100">
                        Become A barber
                      </Link>
                    </li>
                    )
                  }
                 
                  
                </ul>
                <div className="py-1">
                  <a onClick={()=>dispatch(logout())} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
          
          ):
          (
            <div className="hidden lg:flex gap-2">
            <Link to="/sign-up">
              <p className="py-2 px-4 bg-gray-100 rounded-xl text-gray-700 font-semibold">
                {t("login")}
              </p>
            </Link>
            <Link to="/sign-in">
              <p className="py-2 px-4 bg-[#1FAE72] text-white rounded-xl text-gray-700 font-semibold">
                {t("register")}
              </p>
            </Link>
            <div className="flex flex-row items-center">
              <button onClick={() => handleTrans("en")} className="p-2 flex items-center border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">
                <span className="ml-1">
                  <img src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png" className="w-5 h-5" alt="English" />
                </span>
              </button>
              <button onClick={() => handleTrans("ar")} className="p-2 flex items-center border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">
                <span className="ml-1">
                  <img src="https://t3.ftcdn.net/jpg/04/96/46/46/360_F_496464694_3Yb9l9DA6nlcfctIwSREKkKkA4pulcsf.jpg" className="w-5 h-5" alt="Arabic" />
                </span>
              </button>
            </div>
          </div>
          )
        }
       
        <IconButton variant="text" color="black" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
          {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        {
          user?(
<div className="flex">

<div className=" inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                <span className="font-medium text-gray-600">
                  {user.user.name.substring(0, 2)}
                </span>

              </div>
              <a onClick={()=>dispatch(logout())} className="block px-4 py-3 rounded-xl ml-2 cursor-pointer text-sm text-gray-700  bg-gray-100">
                    Sign out
                  </a>

</div>
          ):
          (
            <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Link to="/sign-up">
              <Button variant="outlined" size="sm" color="#1FAE72" fullWidth>
                {t("login")}
              </Button>
            </Link>
            <Link to="/sign-in">
              <button className="bg-[#1FAE72] text-white p-2 rounded-xl">
                {t("register")}
              </button>
            </Link>
            <div className="flex flex-row items-center">
              <button onClick={() => handleTrans("en")} className="p-2 flex items-center border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">
                <span className="ml-1">
                  <img src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png" className="w-5 h-5" alt="English" />
                </span>
              </button>
              <button onClick={() => handleTrans("ar")} className="p-2 flex items-center border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">
                <span className="ml-1">
                  <img src="https://t3.ftcdn.net/jpg/04/96/46/46/360_F_496464694_3Yb9l9DA6nlcfctIwSREKkKkA4pulcsf.jpg" className="w-5 h-5" alt="Arabic" />
                </span>
              </button>
            </div>
          </div>
          )
        }
      
      </Collapse>
    </Navbar>
  );
}

export default NavbarWithMegaMenu;
