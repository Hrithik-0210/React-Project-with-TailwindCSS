import { useContext, useState } from "react";
import logo from "../assets/img/logo.png";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Title = () => {
  return (
    <div className="flex  w-auto  justify-center  items-center my-2">
      <img
        src={logo}
        alt="logoImg"
        className="h-14 w-14 border-none rounded-full mx-3"
      />
      <h1 className="text-center text-2xl font-bold text-white" key="heading">
        Food Villa
      </h1>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="flex w-auto items-center">
      <ul className="">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-3 m-3  ${
              isActive
                ? "text-black font-semibold  border-b border-b-black"
                : "text-white text-base font-semibold  hover:text-gray-700"
            } transition ease-in-out delay-75 hover:scale-110   duration-150`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `p-3 m-3  ${
              isActive
                ? "text-black font-semibold  border-b border-b-black"
                : "text-white text-base font-semibold hover:text-gray-700"
            } transition ease-in-out delay-75 hover:scale-110     duration-150`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `p-3 m-3  ${
              isActive
                ? "text-black font-semibold  border-b border-b-black"
                : "text-white text-base font-semibold hover:text-gray-700"
            } transition ease-in-out delay-75 hover:scale-110   duration-150`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `p-3 m-3 ${
              isActive
                ? "text-black font-semibold  border-b border-b-black"
                : "text-white text-base font-semibold hover:text-gray-700"
            }  transition ease-in-out delay-75 hover:scale-110   duration-150`
          }
        >
          Cart
        </NavLink>
        <NavLink
          to="/instamart"
          className={({ isActive }) =>
            `p-3 m-3 ${
              isActive
                ? "text-black font-semibold  border-b border-b-black"
                : "text-white text-base font-semibold hover:text-gray-700"
            } transition ease-in-out delay-75 hover:scale-110   duration-150 `
          }
        >
          Instamart
        </NavLink>
      </ul>
    </div>
  );
};

const LoginLogout = () => {
  const [isLoggedin, setisLoggedIn] = useState(true);
  const online = useOnline();
  const { user } = useContext(UserContext);
  return (
    <>
      <h2>{user.name}</h2>
      <div className="login-logout-container flex items-center mr-5  border border-white text-white text-sm font-medium h-10 w-fit  px-3 rounded-lg transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-300 ...">
        {isLoggedin ? (
          <button className="logout-btn" onClick={() => setisLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="login-btn" onClick={() => setisLoggedIn(true)}>
              Login
            </button>
          </Link>
        )}
      </div>
      {/* <h1>{online ? "online🟢" : "offline🔴"}</h1>; */}
    </>
  );
};
const Header = () => {
  return (
    <div className="flex  justify-between bg-orange-500 items-center m shadow-md sticky top-0 w-full z-50">
      <Title />
      <HeaderComponent />
      <LoginLogout />
    </div>
  );
};
export default Header;
